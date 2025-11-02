import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

 const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  // Replace with your WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "923466762561"; // Example for Pakistan
  const { name, email, subject, message } = formData;

  // Create a formatted WhatsApp message
  const text = `Hello! I’m ${name}.
Email: ${email}
Subject: ${subject}

Message:
${message}`;

  // Encode the message for URL
  const encodedText = encodeURIComponent(text);

  // WhatsApp link
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  // Redirect user to WhatsApp
  window.open(whatsappUrl, "_blank");

  // Reset form and status
  setStatus('success');
  setFormData({ name: '', email: '', subject: '', message: '' });
  setTimeout(() => setStatus('idle'), 3000);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'Qayyum418033@gmail.com',
      link: 'mailto:contact@musicportfolio.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 346 6762 561',
      link: 'tel:+92 346 6762561',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Brands Village, Sialkot, Pakistan',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next musical project or discuss lessons
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-amber-500/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-amber-500/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-amber-500 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Studio Timings</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-amber-500">10:00 PM - 2:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-amber-500">08:00 PM - 4:00 AM</span>
                </div>
                
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Inquiry about piano lessons"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell me about your musical goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-center">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
