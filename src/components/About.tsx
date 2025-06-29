
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                הכירי את <span className="text-rose-500">האמנית</span> שלך
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                עם תשוקה להדגשת יופי טבעי, אני מתמחה ביצירת מראה מושלם ועמיד שנראה יפהפה בתמונות ונוח כל היום.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                הגישה שלי מבוססת על הקשבה לחזון שלך תוך הבאת המומחיות שלי כדי ליצור מראה ייחודי לך. אני מאמינה שהאיפור ליום החתונה צריך להדגיש את התכונות הטבעיות שלך ולגרום לך להרגיש כמו הגרסה הכי יפה של עצמך.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full ml-4"></div>
                  <span className="text-gray-700">מאפרת מוסמכת מקצועית</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full ml-4"></div>
                  <span className="text-gray-700">התמחות באיפור כלות ואירועים</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full ml-4"></div>
                  <span className="text-gray-700">מוצרים איכותיים ועמידים</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="/about1.jpg" 
                  alt="מאפרת מקצועית בעבודה"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
