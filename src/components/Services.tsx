
import { Sparkles, Heart, Camera, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "איפור כלות",
      description: "מראה כלותי מלא כולל מפגש ניסיון, יישום ליום החתונה וערכת תיקונים.",
      price: "מתחיל מ-₪1,200"
    },
    {
      icon: Sparkles,
      title: "אירועים מיוחדים",
      description: "מושלם לגאלות, מסיבות, צילומים ואירועים מיוחדים אחרים.",
      price: "מתחיל מ-₪500"
    },
    {
      icon: Camera,
      title: "איפור לצילומים",
      description: "איפור מקצועי שמיועד במיוחד לצילומי תמונות ווידאו.",
      price: "מתחיל מ-₪700"
    },
    {
      icon: Clock,
      title: "שיעורי איפור",
      description: "למדי טכניקות מקצועיות וקבלי טיפים אישיים לשגרת היום-יום שלך.",
      price: "מתחיל מ-₪400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              <span className="text-rose-500">השירותים</span> שלי
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אמנות איפור אישית המותאמת לסגנון הייחודי שלך ולרגעים המיוחדים שלך
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4 space-x-reverse">
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
            <p className="text-gray-600 mb-6">כל השירותים כוללים ייעוץ והתאמת צבעים אישית</p>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">חבילות חתונה זמינות</h3>
              <p className="text-gray-600 leading-relaxed">
                תמחור מיוחד לחברות כלות ולהזמנות מרובות שירותים.
                צרי איתי קשר לחבילות מותאמות אישית לצרכי יום החתונה שלך.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
