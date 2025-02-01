import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    price: "£9.99",
    period: "per month",
    description: "Perfect for freelancers just starting out",
    features: [
      "Up to 5 clients",
      "Basic invoice templates",
      "Expense tracking",
      "Basic tax calculator",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "£24.99",
    period: "per month",
    description: "For growing freelance businesses",
    features: [
      "Unlimited clients",
      "Custom invoice templates",
      "Advanced expense tracking",
      "Tax calculator & filing",
      "Priority support",
      "Financial reports",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "£49.99",
    period: "per month",
    description: "For established businesses",
    features: [
      "Everything in Pro",
      "Multiple team members",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose the Perfect Plan for Your Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                tier.popular ? "ring-2 ring-primary relative" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-600">/{tier.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;