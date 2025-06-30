import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const visualEmail = import.meta.env.VITE_VISUAL_EMAIL;
const email = import.meta.env.VITE_EMAIL;
const instagram = import.meta.env.VITE_INSTAGRAM;
const phone = import.meta.env.VITE_PHONE;
const formattedPhone = phone ? `05${phone.substring(4, 5)}-${phone.substring(5, 8)}-${phone.substring(8)}` : '';

const Contact = () => {
  const [eventDate, setEventDate] = useState<Date>();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              בואי ניצור משהו <span className="text-rose-500">יפהפה</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              מוכנה להזמין את תור האיפור שלך? אשמח לשמוע על האירוע המיוחד שלך
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">יצירת קשר</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">טלפון</p>
                      <p className="text-gray-600">{formattedPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">וואטסאפ</p>
                      <p className="text-gray-600">{formattedPhone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">אימייל</p>
                      <a href={`mailto:${email}`} className="text-gray-600 hover:underline">{visualEmail}</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-rose-100 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">אינסטגרם</p>
                      <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline" dir="ltr"> @nechama.bocker </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <Clock className="h-6 w-6 text-rose-600" />
                  <h4 className="text-lg font-semibold text-gray-900">שעות פעילות</h4>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>ראשון - חמישי</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שישי</span>
                    <span>08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>שבת</span>
                    <span>10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">שליחת הודעה</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם פרטי
                    </label>
                    <Input
                      type="text"
                      placeholder="השם הפרטי שלך"
                      className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם משפחה
                    </label>
                    <Input
                      type="text"
                      placeholder="שם המשפחה שלך"
                      className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    אימייל
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    טלפון
                  </label>
                  <Input
                  dir="rtl"
                    type="tel"
                    placeholder="המספר שלך"
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    תאריך האירוע
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400 hover:bg-white",
                          !eventDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="ml-2 h-4 w-4" />
                        {eventDate ? format(eventDate, "dd/MM/yyyy") : <span>בחרי תאריך</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={eventDate}
                        onSelect={setEventDate}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ספרי לי על האירוע שלך
                  </label>
                  <Textarea
                    placeholder="אשמח לשמוע על היום המיוחד שלך, הסגנון שאת מחפשת ובקשות ספציפיות..."
                    className="bg-white border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  שליחת הודעה
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-rose-100">
            <p className="text-gray-600">
              © 2024 [שם המאפרת]. כל הזכויות שמורות. |
              <span className="text-rose-500"> יוצרת רגעים יפים, פנים אחד בכל פעם.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
