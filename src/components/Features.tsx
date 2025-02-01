import { Calculator, FileText, PieChart, Receipt } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "Professional Invoicing",
    description: "Create and send beautiful, customizable invoices in seconds.",
  },
  {
    icon: <Receipt className="w-12 h-12 text-primary" />,
    title: "Expense Tracking",
    description: "Easily track and categorize all your business expenses.",
  },
  {
    icon: <Calculator className="w-12 h-12 text-primary" />,
    title: "Tax Calculator",
    description: "Automatically calculate your tax obligations and prepare returns.",
  },
  {
    icon: <PieChart className="w-12 h-12 text-primary" />,
    title: "Financial Reports",
    description: "Generate detailed reports to understand your business performance.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to Run Your Business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;