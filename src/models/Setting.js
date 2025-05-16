import mongoose from 'mongoose';

const SocialLinkSchema = new mongoose.Schema({
  icon: {
    type: String,
    default: 'iconoir-linkedin'
  },
  url: {
    type: String,
    default: '#'
  }
}, { _id: false });

const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    default: ''
  },
  number: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  }
}, { _id: false });

const SettingSchema = new mongoose.Schema({
  // Basic site info
  companyName: {
    type: String,
    default: 'Jsbglobalinfotech'
  },
  siteName: {
    type: String,
    default: 'JSB Global Infotech'
  },
  siteDescription: {
    type: String,
    default: 'IT Solutions and Services'
  },
  
  // Logo settings
  logo: {
    type: String,
    default: '/assets/imgs/Logo.jpeg'
  },
  logoAlt: {
    type: String,
    default: 'Jsbglobalinfotech Logo'
  },
  logoWidth: {
    type: Number,
    default: 180
  },
  logoHeight: {
    type: Number,
    default: 45
  },
  favicon: {
    type: String,
    default: '/favicon.ico'
  },
  
  // Contact information
  phoneNumber: {
    type: String,
    default: '+91 92661 36004'
  },
  email: {
    type: String,
    default: 'info@Jsbglobalinfotech.com'
  },
  supportEmail: {
    type: String,
    default: 'info@Jsbglobalinfotech.com'
  },
  contactEmail: {
    type: String,
    default: 'info@jsbglobalinfotech.com'
  },
  contactPhone: {
    type: String,
    default: '+91 92661 36004'
  },
  
  // Addresses
  address: {
    type: String,
    default: 'PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR'
  },
  address1: {
    type: AddressSchema,
    default: () => ({
      address: 'PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR 302020',
      number: '+91 92661 36004',
      country: 'India'
    })
  },
  address2: {
    type: AddressSchema,
    default: () => ({
      address: 'AI KHABISI, HOR AI ANZ DEIRA, DUBAI UAE',
      number: '00971582156093',
      country: 'UAE'
    })
  },
  
  // Social media
  socialLinks: {
    type: [SocialLinkSchema],
    default: [
      { icon: "iconoir-dribbble", url: "#" },
      { icon: "iconoir-twitter", url: "#" },
      { icon: "iconoir-instagram", url: "#" },
      { icon: "iconoir-linkedin", url: "#" }
    ]
  },
  
  // SEO settings
  metaTitle: {
    type: String,
    default: 'Jsbglobalinfotech - Innovative IT Solutions for Digital Transformation'
  },
  metaDescription: {
    type: String,
    default: 'Jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.'
  },
  metaKeywords: {
    type: String,
    default: 'IT solutions, digital transformation, AI automation, web development, mobile app development, cloud services, software development, IT consulting, tech infrastructure'
  },
  googleAnalyticsId: {
    type: String,
    default: ''
  },
  
  // Timestamps
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Setting || mongoose.model('Setting', SettingSchema);