import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      name: "Botox & Injectables",
      price: "$450",
      image: "https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Smooth wrinkles and fine lines with expert injectable treatments"
    },
    {
      name: "Dermal Fillers",
      price: "$650",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Restore volume and contour with premium dermal fillers"
    },
    {
      name: "Laser Hair Removal",
      price: "$299",
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Permanent hair reduction with advanced laser technology"
    },
    {
      name: "Chemical Peels",
      price: "$200",
      image: "https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Rejuvenate your skin with professional chemical peels"
    },
    {
      name: "Microneedling",
      price: "$350",
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stimulate collagen production for smoother, firmer skin"
    },
    {
      name: "Facial Treatments",
      price: "$180",
      image: "https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Customized facials for radiant, healthy skin"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">💆</span>
            <div>
              <h1 className="text-2xl font-bold">Radiance MedSpa</h1>
              <p className="text-xs text-white/80">Medical Aesthetics Excellence</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-pink-100 transition">Services</a>
            <a href="#about" className="hover:text-pink-100 transition">About</a>
            <a href="#contact" className="hover:text-pink-100 transition">Contact</a>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition">
              Book Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20"></div>
        <img
          src="https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Medical Aesthetics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <h2 className="text-6xl font-bold mb-6">Enhance Your Natural Beauty</h2>
            <p className="text-xl mb-8">Expert medical aesthetics treatments tailored to your unique needs</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition shadow-lg">
                Schedule Consultation
              </button>
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Premium medical aesthetic treatments delivered by certified professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold hover:bg-pink-600 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Radiance MedSpa?</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in medical aesthetics, our team of certified professionals 
                is dedicated to helping you achieve your beauty goals safely and effectively.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Licensed Medical Professionals</h3>
                    <p className="text-gray-600">All treatments performed by certified practitioners</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">State-of-the-Art Technology</h3>
                    <p className="text-gray-600">Latest equipment for optimal results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Treatment Plans</h3>
                    <p className="text-gray-600">Custom solutions tailored to your needs</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3764572/pexels-photo-3764572.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Medical Spa Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-12">Schedule your consultation today and discover the Radiance difference</p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">info@radiancemedspa.com</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-600">123 Beauty Ave, Suite 200</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition shadow-lg">
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Radiance MedSpa</h3>
              <p className="text-sm">Your trusted partner in medical aesthetics and beauty enhancement.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Monday - Friday: 9am - 7pm</li>
                <li>Saturday: 10am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>&copy; 2025 Radiance MedSpa. All rights reserved. | Powered by <a href="https://pitchmarketing.agency" className="text-pink-400 hover:text-pink-300">Pitch Marketing Agency</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
