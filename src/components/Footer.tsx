import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-cream">
      {/* Main Footer Content */}
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <Leaf
                className="w-10 h-10 text-sacred-gold transition-transform duration-500 group-hover:rotate-12"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-accent text-xl text-cream tracking-wider">
                  Iboga Life Change
                </h3>
                <span className="text-sm text-sacred-gold/80 tracking-widest uppercase">
                  Sacred Medicine
                </span>
              </div>
            </Link>
            <p className="text-cream/70 font-primary text-body leading-relaxed max-w-md mb-6">
              Transforming lives through the sacred healing power of Iboga and the
              ancient wisdom of the Bwiti tradition. Guided by Jay Nzingo, traditionally
              trained under 10th-generation Shaman Moughenda Mikala in Gabon, Africa.
            </p>
            <blockquote className="text-sacred-gold italic font-primary text-lg">
              "We don't have to stay stuck in our suffering. There is light on the
              other side—and Iboga helps us find it."
            </blockquote>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-accent text-sacred-gold text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-cream/70 hover:text-sacred-gold transition-colors font-secondary"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-cream/70 hover:text-sacred-gold transition-colors font-secondary"
              >
                About Jay
              </Link>
              <Link
                to="/iboga"
                className="block text-cream/70 hover:text-sacred-gold transition-colors font-secondary"
              >
                Iboga & Healing
              </Link>
              <Link
                to="/journey"
                className="block text-cream/70 hover:text-sacred-gold transition-colors font-secondary"
              >
                The Journey
              </Link>
              <Link
                to="/contact"
                className="block text-cream/70 hover:text-sacred-gold transition-colors font-secondary"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-accent text-sacred-gold text-sm uppercase tracking-widest mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:ibogalifechange@gmail.com"
                className="flex items-center gap-3 text-cream/70 hover:text-sacred-gold transition-colors group"
              >
                <Mail className="w-5 h-5 text-sacred-gold/60 group-hover:text-sacred-gold transition-colors" />
                <span className="font-secondary text-sm">ibogalifechange@gmail.com</span>
              </a>
              <a
                href="tel:+15199842400"
                className="flex items-center gap-3 text-cream/70 hover:text-sacred-gold transition-colors group"
              >
                <Phone className="w-5 h-5 text-sacred-gold/60 group-hover:text-sacred-gold transition-colors" />
                <span className="font-secondary text-sm">+1 (519) 984-2400</span>
              </a>
              <div className="flex items-start gap-3 text-cream/70">
                <MapPin className="w-5 h-5 text-sacred-gold/60 mt-0.5" />
                <div className="font-secondary text-sm">
                  <p>Canada</p>
                  <p className="text-cream/50 text-xs mt-1">
                    Exact location provided after consultation
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://calendly.com/ibogalifechange/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider mx-6 md:mx-12 my-0" />

      {/* Bottom Bar */}
      <div className="container-content py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50 font-secondary">
          <p>&copy; {currentYear} Iboga Life Change. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-sacred-gold/60" />
            <span>Missoko Bwiti Iboga Ceremonies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
