import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import FormSubmission from '@/models/FormSubmission';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await dbConnect();
    
    // Check if we need to filter by form type
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get('type');
    const isRead = searchParams.get('isRead');
    
    const query = {};
    if (formType) {
      query.formType = formType;
    }
    
    if (isRead !== null && isRead !== undefined) {
      query.isRead = isRead === 'true';
    }
    
    // Get form submissions
    const submissions = await FormSubmission.find(query).sort({ createdAt: -1 });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch form submissions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Create new form submission
    const submission = await FormSubmission.create(data);
    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error creating form submission:', error);
    return NextResponse.json({ error: 'Failed to create form submission' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await dbConnect();
    const data = await request.json();
    const { _id } = data;
    
    if (!_id) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 });
    }
    
    // Update form submission
    const submission = await FormSubmission.findByIdAndUpdate(_id, data, { new: true });
    
    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    
    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error updating form submission:', error);
    return NextResponse.json({ error: 'Failed to update form submission' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 });
    }
    
    await dbConnect();
    
    // Delete form submission
    const submission = await FormSubmission.findByIdAndDelete(id);
    
    if (!submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting form submission:', error);
    return NextResponse.json({ error: 'Failed to delete form submission' }, { status: 500 });
  }
}