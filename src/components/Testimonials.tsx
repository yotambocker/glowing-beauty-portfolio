
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "שרה כהן",
      role: "כלה לאחרונה",
      content: "היא גרמה לי להרגיש מדהימה ביום החתונה שלי! האיפור החזיק כל היום ונראה מושלם בכל תמונה. לא יכולתי לבקש שירות טוב יותר.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c93e2e95?q=80&w=150"
    },
    {
      name: "רחל לוי",
      role: "לקוחת אירועים",
      content: "מקצועית, מוכשרת וכל כך קל לעבוד איתה. היא הבינה בדיוק מה רציתי ונתנה מעבר לציפיות שלי. ממליצה בחום!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
    },
    {
      name: "מירי רוזנברג",
      role: "כלה וחברות הכלה",
      content: "היא עשתה איפור לכל חברות הכלה שלי ואנחנו כולנו נראינו מדהים! היא רגועה, מאורגנת ומיומנת במיוחד. הפכה את הבוקר שלנו לנטול דאגות ויפה.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              <span className="text-rose-500">אהבת</span> לקוחות
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ראי מה הלקוחות היפות שלי אומרות על החוויה שלהן
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4 justify-end">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
