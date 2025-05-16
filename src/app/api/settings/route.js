import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Setting from '@/models/Setting';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Default settings
const defaultSettings = {
  companyName: 'Jsbglobalinfotech',
  siteName: 'JSB Global Infotech',
  siteDescription: 'IT Solutions and Services',
  logo: '/assets/imgs/Logo.jpeg',
  logoAlt: 'Jsbglobalinfotech Logo',
  logoWidth: 180,
  logoHeight: 45,
  favicon: '/favicon.ico',
  phoneNumber: '+91 92661 36004',
  email: 'info@Jsbglobalinfotech.com',
  supportEmail: 'info@Jsbglobalinfotech.com',
  contactEmail: 'info@jsbglobalinfotech.com',
  contactPhone: '+91 92661 36004',
  address: 'PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR',
  address1: {
    address: 'PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR 302020',
    number: '+91 92661 36004',
    country: 'India'
  },
  address2: {
    address: 'AI KHABISI, HOR AI ANZ DEIRA, DUBAI UAE',
    number: '00971582156093',
    country: 'UAE'
  },
  socialLinks: [
    { icon: "iconoir-dribbble", url: "#" },
    { icon: "iconoir-twitter", url: "#" },
    { icon: "iconoir-instagram", url: "#" },
    { icon: "iconoir-linkedin", url: "#" }
  ],
  metaTitle: 'Jsbglobalinfotech - Innovative IT Solutions for Digital Transformation',
  metaDescription: 'Jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.',
  metaKeywords: 'IT solutions, digital transformation, AI automation, web development, mobile app development, cloud services, software development, IT consulting, tech infrastructure',
  googleAnalyticsId: ''
};

// GET handler - fetch settings
export async function GET(request) {
  try {
    await dbConnect();
    
    // Try to get settings from database
    let settings = await Setting.findOne();
    
    // If no settings exist, create default settings
    if (!settings) {
      settings = await Setting.create(defaultSettings);
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(defaultSettings);
  }
}

// PUT handler - update settings
export async function PUT(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    await dbConnect();
    
    // Find existing settings
    let settings = await Setting.findOne();
    
    if (settings) {
      // Update existing settings
      settings = await Setting.findByIdAndUpdate(
        settings._id,
        { $set: body },
        { new: true }
      );
    } else {
      // Create new settings
      settings = await Setting.create(body);
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}