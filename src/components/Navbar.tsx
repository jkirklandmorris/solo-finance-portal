import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">FreelancePro</div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a>
            <Button variant="default">Get Started</Button>
          </div>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;