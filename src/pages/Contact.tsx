import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_4rnllup',
        'template_389eamt',
        formRef.current,
        '6ipLVRmZHXOWCLzIR'
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
        height="50vh"
        overlay={true}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Get in touch with our expert consultants for personalized guidance on your study abroad journey
          </p>
        </div>
      </ParallaxSection>

      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Address</h3>
                </div>
                <p className="text-gray-700">Krish Building, 2nd Floor</p>
                <p className="text-gray-700">Milanchowk, Butwal, Nepal</p>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Phone</h3>
                </div>
                <p className="text-gray-700">+977 985-7033669</p>
                <p className="text-gray-700">071591669</p>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <p className="text-gray-700">megaimperial007@gmail.com</p>
                

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Office Hours</h3>
                </div>
                <p className="text-gray-700">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday: Closed</p>
              </div>
            </div>

            {/* Updated Contact Form */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="from_name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Location</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="aspect-[16/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8565896018795!2d83.46216947508009!3d27.690826976191968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996871971955741%3A0x442cd8e26b360648!2sMega%20imperial%20consultancy%20services!5e0!3m2!1sen!2snp!4v1738478336353!5m2!1sen!2snp"
                  width="100%"
                  height="450"
                  className="border-0"
                 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What services do you provide?",
                  answer: "We provide comprehensive study abroad services including counseling, university selection, application processing, visa guidance, and pre-departure orientation."
                },
                {
                  question: "How can I schedule a consultation?",
                  answer: "You can schedule a consultation by filling out our contact form, calling our office, or sending us an email. We'll get back to you within 24 hours."
                },
                {
                  question: "Do you charge for initial consultation?",
                  answer: "No, we provide free initial consultations to understand your requirements and guide you better."
                },
                {
                  question: "How long does the application process take?",
                  answer: "The application process typically takes 2-3 months, depending on the country and university you're applying to."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;