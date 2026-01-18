import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ClipboardCheck,
  Calendar,
  Leaf,
  AlertTriangle,
  Heart,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const consultationSteps = [
  {
    icon: MessageCircle,
    title: 'Initial Conversation',
    description: 'A free, no-pressure call to discuss your situation and questions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Health Screening',
    description: 'Comprehensive assessment to ensure Iboga is safe for you.',
  },
  {
    icon: Calendar,
    title: 'Ceremony Planning',
    description: 'Schedule your ceremony and receive preparation guidelines.',
  },
  {
    icon: Leaf,
    title: 'Begin Your Journey',
    description: 'Your transformation begins with proper support at every step.',
  },
];

const faqs = [
  {
    question: 'Is the initial consultation free?',
    answer:
      'Yes, the first conversation is free with no obligation. It\'s simply an opportunity to discuss your situation, ask questions, and determine if this path is right for you.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'From first contact to ceremony typically takes 2-4 weeks, depending on your readiness and availability. This includes consultation, health screening, and preparation.',
  },
  {
    question: 'Where are ceremonies held?',
    answer:
      'Ceremonies are held in a safe, private location in Canada. The exact location is provided after your consultation is complete.',
  },
  {
    question: 'What if I\'m not sure I\'m ready?',
    answer:
      'That\'s okay. Many people have questions and uncertainty before reaching out. A conversation can help bring clarity without any pressure to commit.',
  },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    howFound: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '', howFound: '' });
  };

  return (
    <>
      {/* Hero */}
      {/* 📍 IMAGE: contact-hero - Welcoming natural scene, open path or doorway */}
      <Hero
        subtitle="Connect"
        title="Begin Your Journey"
        description="That first step takes real courage. Reach out, and let's have an honest conversation about where you are."
        size="medium"
        backgroundImage="/images/Contact-hero-cropped.jpeg"
        mobileImagePosition="bottom"
        desktopImagePosition="top"
      />

      {/* Personal Message */}
      <Section variant="cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-sacred-gold mx-auto mb-6" />
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              Congratulations on Making the First Step
            </h2>

            {/* Connection image */}
            <img
              src="/images/meetings.png"
              alt="Hands reaching out in connection and support"
              className="mb-8 max-w-xl mx-auto w-full rounded-sacred object-cover aspect-video"
            />

            <div className="space-y-6 text-bark font-primary text-lg leading-relaxed">
              <p>
                Reaching out isn't easy. It means something inside you knows there's
                another way, and that takes courage.
              </p>
              <p>
                I'm here to listen, answer your questions honestly, and help you
                understand if this path is right for you. No pressure, no sales pitch.
                Just genuine conversation about where you are and what might help.
              </p>
              <p className="text-sacred-gold italic">
                "Thanks for reaching out. That first step takes real courage."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section variant="default">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-accent text-h3 text-forest-deep mb-6">
              Send a Message
            </h2>

            {submitStatus === 'success' ? (
              <Card variant="sacred" className="text-center py-12">
                <Leaf className="w-16 h-16 text-sacred-gold mx-auto mb-6" />
                <h3 className="font-accent text-2xl text-cream mb-4">
                  Message Received
                </h3>
                <p className="text-cream/80 font-primary">
                  Thank you for reaching out. Jay will respond within 24-48 hours.
                </p>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-forest-deep font-secondary text-sm uppercase tracking-wider mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bark/20 bg-cream-warm text-earth-dark font-primary focus:outline-none focus:border-sacred-gold focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-forest-deep font-secondary text-sm uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bark/20 bg-cream-warm text-earth-dark font-primary focus:outline-none focus:border-sacred-gold focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-forest-deep font-secondary text-sm uppercase tracking-wider mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bark/20 bg-cream-warm text-earth-dark font-primary focus:outline-none focus:border-sacred-gold focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* How Found */}
                <div>
                  <label
                    htmlFor="howFound"
                    className="block text-forest-deep font-secondary text-sm uppercase tracking-wider mb-2"
                  >
                    How did you find us?
                  </label>
                  <select
                    id="howFound"
                    name="howFound"
                    value={formData.howFound}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bark/20 bg-cream-warm text-earth-dark font-primary focus:outline-none focus:border-sacred-gold focus:ring-2 focus:ring-sacred-gold/20 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="social">Social Media</option>
                    <option value="podcast">Podcast</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-forest-deep font-secondary text-sm uppercase tracking-wider mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-bark/20 bg-cream-warm text-earth-dark font-primary focus:outline-none focus:border-sacred-gold focus:ring-2 focus:ring-sacred-gold/20 transition-all resize-none"
                    placeholder="Tell me a bit about what brings you here and what you're seeking..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-earth-dark/30 border-t-earth-dark rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Direct Contact */}
            <div className="mb-10">
              <h2 className="font-accent text-h3 text-forest-deep mb-6">
                Contact Directly
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:ibogalifechange@gmail.com"
                  className="flex items-center gap-4 p-4 bg-cream-warm rounded-lg hover:bg-sacred-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center group-hover:bg-sacred-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-sacred-gold" />
                  </div>
                  <div>
                    <p className="text-forest-deep font-secondary font-semibold">
                      Email
                    </p>
                    <p className="text-bark">ibogalifechange@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+15199842400"
                  className="flex items-center gap-4 p-4 bg-cream-warm rounded-lg hover:bg-sacred-gold/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center group-hover:bg-sacred-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-sacred-gold" />
                  </div>
                  <div>
                    <p className="text-forest-deep font-secondary font-semibold">
                      Phone
                    </p>
                    <p className="text-bark">+1 (519) 984-2400</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-cream-warm rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-sacred-gold" />
                  </div>
                  <div>
                    <p className="text-forest-deep font-secondary font-semibold">
                      Location
                    </p>
                    <p className="text-bark">Canada</p>
                    <p className="text-bark/60 text-sm">
                      Exact location provided after consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Process */}
            <div>
              <h2 className="font-accent text-h3 text-forest-deep mb-6">
                What Happens Next
              </h2>
              <div className="space-y-4">
                {consultationSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-sacred-gold" />
                      </div>
                      {index < consultationSteps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-sacred-gold/20 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <h3 className="font-accent text-forest-deep mb-1">
                        {step.title}
                      </h3>
                      <p className="text-bark/80 font-secondary text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="cream">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-accent text-h2 text-forest-deep mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-cream-warm rounded-lg p-6 border border-sacred-gold/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-accent text-lg text-forest-deep mb-2">
                  {faq.question}
                </h3>
                <p className="text-bark font-primary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Emergency Notice */}
      <Section variant="default" noPadding className="py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-alert">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-alert flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-accent text-lg text-forest-deep mb-2">
                  This Is Not For Emergencies
                </h3>
                <p className="text-bark font-primary leading-relaxed mb-4">
                  If you're in immediate danger or having a medical emergency, please
                  contact emergency services (911) right now.
                </p>
                <div className="text-bark/80 font-secondary text-sm space-y-1">
                  <p>
                    <strong>National Suicide Prevention Lifeline:</strong> 988
                  </p>
                  <p>
                    <strong>Crisis Text Line:</strong> Text HOME to 741741
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};
