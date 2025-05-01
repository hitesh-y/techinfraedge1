export const siteData = {
  logo: "/assets/imgs/Logo.jpeg",
  logoAlt: "Jsbglobalinfotech Logo",
  logoWidth: 180,
  logoHeight: 45,
  phoneNumber: "+91 92661 36004",
  email: "info@Jsbglobalinfotech.com",
  supportEmail: "info@Jsbglobalinfotech.com",
  companyName: "Jsbglobalinfotech",
  address: "PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR",
  socialLinks: [
    { icon: "iconoir-dribbble", url: "#" },
    { icon: "iconoir-twitter", url: "#" },
    { icon: "iconoir-instagram", url: "#" },
    { icon: "iconoir-linkedin", url: "#" },
  ],
  navLinks: [
    { name: "Home", url: "/" },
    {
      name: "Services",
      url: "/services",
      megaMenu: true,
      subMenu: [
        { name: "AI Automation", url: "/services/ai-automation" },
        { name: "Development", url: "/services/development" },
        { name: "Web Design", url: "/services/web-design" },
        { name: "IT Support", url: "/services/it-support" },
        { name: "E-Commerce", url: "/services/e-commerce" },
        { name: "Cloud Services", url: "/services/cloud-services" },
        { name: "CRM Solutions", url: "/services/crm-solutions" },
        { name: "Brainstorming Ideas", url: "/services/brainstorming" },
        { name: "Product Design", url: "/services/product-design" },
        { name: "SEO Optimization", url: "/services/seo-optimization" },
      ]
    },
    {
      name: "About",
      url: "/about",
      megaMenu: false
    },
    {
      name: "Products",
      url: "/products",
      megaMenu: true,
      subMenu: [
        { name: "Enterprise Management", url: "/products/enterprise-management" },
        { name: "SaaS Solutions", url: "/products/saas" },
        // { name: "Custom Software", url: "/products/custom-software" },
      ]
    },
    // { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
  ],
  footerLinks: {
    services: [
      { name: "AI Automation", url: "/services/ai-automation" },
      { name: "IT Support", url: "/services/it-support" },
      { name: "Web Design", url: "/services/web-design" },
      { name: "Development", url: "/services/development" },
      { name: "Cloud Things", url: "/services/cloud-things" },
      { name: "E-Commerce", url: "/services/e-commerce" },
      { name: "CRM Solutions", url: "/services/crm-solutions" },
    ],
    company: [
      { name: "Blog", url: "/blog" },
      { name: "About Us", url: "/about" },
      { name: "Partners", url: "/partners" },
      { name: "Careers", url: "/career" },
      // { name: "Events", url: "/event" },
      // { name: "Team", url: "/team" },
    ],
    // product: [
    //   { name: "Case Studies", url: "/case-studie" },
    //   // { name: "Our Pricing", url: "/pricing" },
    //   { name: "Features", url: "/feature" },
    //   { name: "Overview", url: "/overview" },
    //   { name: "New Releases", url: "/new-release" },
    //   { name: "Solutions", url: "/solution" },
    // ], 
  },
  clientLogos: [
    { name: "Youtube", logo: "/assets/imgs/youtube.svg" },
    { name: "Webflow", logo: "/assets/imgs/webflow.svg" },
    { name: "Upwork", logo: "/assets/imgs/upwork.svg" },
    { name: "Shopify", logo: "/assets/imgs/shopify.svg" },
  ],
  address1:{address: `PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar, JAIPUR 302020`, number:'+91 92661 36004',country:'India'},
  address2:{ address:`AI KHABISI, HOR AI ANZ DEIRA, DUBAI UAE`,number:'00971582156093' ,country:'UAE'},
};
