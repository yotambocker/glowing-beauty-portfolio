
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Meet Your <span className="text-rose-500">Artist</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With a passion for enhancing natural beauty, I specialize in creating flawless, long-lasting makeup looks that photograph beautifully and feel comfortable all day long.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My approach is all about listening to your vision while bringing my expertise to create a look that's uniquely you. I believe your wedding day makeup should enhance your natural features and make you feel like the most beautiful version of yourself.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Certified Professional Makeup Artist</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Specializing in Bridal & Event Makeup</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">High-End, Long-Lasting Products</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487412912278-480b12c49137?q=80&w=800" 
                  alt="Professional makeup artist at work"
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
