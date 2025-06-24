
const Portfolio = () => {
  const portfolioImages = [
    {
      src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800",
      alt: "מראה איפור כלותי טבעי",
      category: "כלות"
    },
    {
      src: "https://images.unsplash.com/photo-1487412912278-480b12c49137?q=80&w=800",
      alt: "איפור ערב אלגנטי",
      category: "אירועים"
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800",
      alt: "מראה כלותי רומנטי עדין",
      category: "כלות"
    },
    {
      src: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?q=80&w=800",
      alt: "איפור לצילום פרופיל מקצועי",
      category: "צילומים"
    },
    {
      src: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=800",
      alt: "איפור גלמורי לאירועים",
      category: "אירועים"
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
      alt: "יופי כלותי קלאסי",
      category: "כלות"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              <span className="text-rose-500">הפורטפוליו</span> שלי
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              אוסף מהעבודות האחרונות שלי המציג יופי טבעי ואלגנטיות נצחית
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 text-white">
                    <span className="bg-rose-500 px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              רוצה לראות עוד? עקבי אחריי באינסטגרם 
              <span className="text-rose-500 font-semibold"> @makeupby[שם]</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
