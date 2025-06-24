
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Let's Create Something <span className="text-rose-500">Beautiful</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to book your makeup appointment? I'd love to hear about your special event
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@makeupby[name].com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Instagram</p>
                      <p className="text-gray-600">@makeupby[name]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-rose-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-rose-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <Input 
                    type="date"
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your event
                  </label>
                  <Textarea 
                    placeholder="I'd love to hear about your special day, the style you're looking for, and any specific requests..."
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-8 border-t border-rose-100">
            <p className="text-gray-600">
              © 2024 [Makeup Artist Name]. All rights reserved. | 
              <span className="text-rose-500"> Creating beautiful moments, one face at a time.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
