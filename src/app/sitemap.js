export default async function sitemap() {
  const baseUrl = 'https://jsbglobalinfotech.com';
  
  // Main pages
  const mainRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/products',
    '/blog',
    '/career',
    '/partners',
    '/faq',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Service pages
  const serviceRoutes = [
    '/services/development',
    '/services/ai-automation',
    '/services/web-design',
    '/services/it-support',
    '/services/e-commerce',
    '/services/cloud-services',
    '/services/crm-solutions',
    '/services/digital-transformation',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Product pages
  const productRoutes = [
    '/products/enterprise-management',
    '/products/saas',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Industry pages
  const industryRoutes = [
    '/industries',
    '/industries/healthcare',
    '/industries/banking-finance',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  
  return [...mainRoutes, ...serviceRoutes, ...productRoutes, ...industryRoutes];
}