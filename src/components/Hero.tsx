import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero.jpg';

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cafeHero}
          alt="Sukino Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sukino-forest/70 to-sukino-green/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-sukino-mint">Sukino</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-slide-up opacity-90">
          Cafe & Kitchen
        </p>
        <p className="text-lg md:text-xl mb-8 animate-slide-up max-w-2xl mx-auto opacity-80">
          Experience the perfect blend of artisanal coffee, fresh cuisine, and warm hospitality in our modern, green-inspired space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button 
            variant="sukino" 
            size="lg" 
            onClick={scrollToReservation}
            className="bg-white text-sukino-forest hover:bg-sukino-mint"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Reserve Your Table
          </Button>
          <Button 
            variant="sukino-outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-sukino-forest"
          >
            <Clock className="mr-2 h-5 w-5" />
            View Menu
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90 animate-fade-in">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Open Daily 7AM - 10PM
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Downtown Location
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-sukino-mint rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-sukino-sage rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;