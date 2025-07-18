import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero-bright.jpg';

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-sukino-forest px-4 max-w-4xl mx-auto"
           style={{
             textShadow: '0 2px 10px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5)'
           }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-sukino-forest">
          Welcome to <span className="text-sukino-green font-cursive">Sukino</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-slide-up text-sukino-green font-cursive">
          Cafe & Kitchen
        </p>
        <p className="text-lg md:text-xl mb-8 animate-slide-up max-w-2xl mx-auto text-sukino-sage">
          Experience the perfect blend of artisanal coffee, fresh cuisine, and warm hospitality in our modern, green-inspired space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button 
            variant="sukino" 
            size="lg" 
            onClick={scrollToReservation}
            className="bg-sukino-green text-white hover:bg-sukino-green-dark"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Reserve Your Table
          </Button>
          <Button 
            variant="sukino-outline" 
            size="lg"
            onClick={scrollToMenu}
            className="border-sukino-green text-sukino-green hover:bg-sukino-green hover:text-white"
          >
            <Clock className="mr-2 h-5 w-5" />
            View Menu
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-sukino-sage animate-fade-in">
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