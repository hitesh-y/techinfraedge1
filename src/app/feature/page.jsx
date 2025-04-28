export default function FeaturePage() {
  // Sample features - in a real implementation, these would come from a CMS or API
  const features = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "We build tailored software solutions that address your specific business needs and challenges.",
      icon: "💻",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      description: "Our websites look and function beautifully on all devices, from desktops to smartphones.",
      icon: "🖥️",
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      description: "Leverage the power of cloud computing for scalable, reliable, and cost-effective IT solutions.",
      icon: "☁️",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description: "Build and optimize online stores that drive sales and provide excellent shopping experiences.",
      icon: "🛒",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Create engaging and functional mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      id: 6,
      title: "IT Support & Maintenance",
      description: "Get reliable technical support and maintenance services to keep your systems running smoothly.",
      icon: "🔧",
    },
    {
      id: 7,
      title: "Data Analytics",
      description: "Transform your data into actionable insights that drive business growth and innovation.",
      icon: "📊",
    },
    {
      id: 8,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions and best practices.",
      icon: "🔒",
    },
    {
      id: 9,
      title: "API Development & Integration",
      description: "Connect your systems and applications for seamless data flow and improved efficiency.",
      icon: "🔄",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the powerful features and capabilities that set our services apart.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}