import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Manage Your Freelance Business with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your invoicing, expenses, and tax returns. Stay organized and focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Freelancer working"
              className="rounded-lg shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;