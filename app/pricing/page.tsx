export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "₩0",
      description: "Free features included in the portfolio site",
      features: ["Simple intro section", "Project list", "Contact block"],
    },
    {
      name: "Pro",
      price: "₩49,000/month",
      description: "For freelancers or small teams needing additional services",
      features: ["All Basic features", "Responsive pricing section", "Custom contact form"],
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "Full service package for large projects",
      features: ["All Pro features", "Brand design consulting", "Priority support"],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold text-body mb-12">Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-border p-8 rounded-lg flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl text-accent mb-4">{plan.price}</p>
              <p className="text-sub mb-4">{plan.description}</p>
              <ul className="flex-1 flex flex-col gap-2 mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sub text-sm">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-cobalt text-body hover:bg-cobalt/80 transition-colors duration-200">
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
