import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Service from '@/models/Service';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');
    const all = searchParams.get('all');
    
    await dbConnect();
    
    // If ID is provided, fetch a specific service
    if (id) {
      const service = await Service.findById(id);
      if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
      }
      return NextResponse.json(service);
    }
    
    // If slug is provided, fetch a specific service by slug
    if (slug) {
      const service = await Service.findOne({ slug });
      if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
      }
      return NextResponse.json(service);
    }
    
    // Fetch all services (for admin) or only active ones (for public)
    let query = {};
    if (!all) {
      query.isActive = true;
    }
    
    const services = await Service.find(query).sort({ order: 1 });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.shortDescription || !body.description || !body.slug) {
      return NextResponse.json({ error: 'Title, short description, description, and slug are required' }, { status: 400 });
    }
    
    await dbConnect();
    
    // Check if service with slug already exists
    const existingService = await Service.findOne({ slug: body.slug });
    if (existingService) {
      return NextResponse.json({ error: 'Service with this slug already exists' }, { status: 400 });
    }
    
    // Create service
    const newService = new Service({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    await newService.save();
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    if (!body._id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }
    
    await dbConnect();
    
    // Check if service exists
    const service = await Service.findById(body._id);
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    
    // Check if slug is being changed and if it's already in use
    if (body.slug !== service.slug) {
      const existingService = await Service.findOne({ slug: body.slug });
      if (existingService && existingService._id.toString() !== body._id) {
        return NextResponse.json({ error: 'Slug is already in use' }, { status: 400 });
      }
    }
    
    // Update service
    const updatedService = await Service.findByIdAndUpdate(
      body._id,
      { 
        ...body,
        updatedAt: new Date() 
      },
      { new: true }
    );
    
    return NextResponse.json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
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
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }
    
    await dbConnect();
    
    const deletedService = await Service.findByIdAndDelete(id);
    
    if (!deletedService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}