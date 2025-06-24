
import { Sparkles, Heart, Camera, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Bridal Makeup",
      description: "Complete bridal look including trial session, wedding day application, and touch-up kit.",
      price: "Starting at $350"
    },
    {
      icon: Sparkles,
      title: "Special Events",
      description: "Perfect for galas, parties, photoshoots, and other special occasions.",
      price: "Starting at $150"
    },
    {
      icon: Camera,
      title: "Photography Makeup",
      description: "Professional makeup designed specifically for photo and video shoots.",
      price: "Starting at $200"
    },
    {
      icon: Clock,
      title: "Makeup Lessons",
      description: "Learn professional techniques and get personalized tips for your daily routine.",
      price: "Starting at $120"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              My <span className="text-rose-500">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Personalized makeup artistry tailored to your unique style and special moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="text-rose-600 font-semibold text-lg">{service.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">All services include consultation and personalized color matching</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wedding Packages Available</h3>
              <p className="text-gray-600 leading-relaxed">
                Special pricing for bridal parties and multi-service bookings. 
                Contact me for custom packages tailored to your wedding day needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
