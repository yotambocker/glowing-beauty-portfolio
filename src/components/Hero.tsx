
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              יופי <span className="text-rose-500 font-normal">כלותי</span>
              <br />
              <span className="text-3xl md:text-5xl text-gray-600">ואמנות</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              יוצרת מראה נצחי וזוהר שחוגג את היופי הטבעי שלך ביום המיוחד ביותר שלך
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="ml-2 h-5 w-5" />
              הזמיני ייעוץ
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              וואטסאפ
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-light text-rose-500 mb-2">100+</div>
              <p className="text-gray-600">כלות יפהפיות</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-light text-rose-500 mb-2">5★</div>
              <p className="text-gray-600">דירוג ממוצע</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-light text-rose-500 mb-2">3+</div>
              <p className="text-gray-600">שנות ניסיון</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
