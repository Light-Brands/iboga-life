import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Heart,
  Brain,
  Flame,
  Shield,
  Sparkles,
  ArrowRight,
  Users,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { Quote } from '../components/ui/Quote';

const healingAreas = [
  {
    icon: Heart,
    title: 'Addiction Recovery',
    description:
      'Break free from opiates, alcohol, nicotine, and other substances. Iboga addresses addiction at its root—not just the symptom, but the why behind it.',
  },
  {
    icon: Brain,
    title: 'Trauma Healing',
    description:
      'Release the weight of PTSD, childhood trauma, and generational patterns. The medicine creates space to finally let go of what you\'ve been carrying.',
  },
  {
    icon: Sparkles,
    title: 'Mental Wellness',
    description:
      'Find relief from depression, anxiety, and emotional stagnation. Iboga helps clear the fog and return your mind to its natural state of clarity.',
  },
  {
    icon: Leaf,
    title: 'Physical Restoration',
    description:
      'Experience deep cellular detoxification. The medicine works to cleanse and restore the body\'s natural healing mechanisms.',
  },
  {
    icon: Flame,
    title: 'Spiritual Awakening',
    description:
      'Reconnect with your authentic self and life purpose. Remember who you truly are beyond fear, pain, and the stories life has placed on you.',
  },
  {
    icon: Shield,
    title: 'Breaking Patterns',
    description:
      'Eliminate external programming and self-sabotaging cycles. See through the lies you tell yourself and step into authentic living.',
  },
];

const testimonials = [
  {
    quote:
      "Jay's presence is like having a guardian angel and a fierce protector all in one. His strength gave me the courage to face my deepest fears.",
    author: 'Ceremony Participant',
    context: 'After overcoming 15 years of addiction',
  },
  {
    quote:
      'The combination of Jay\'s physical power and spiritual wisdom created the perfect environment for my transformation. I felt completely safe.',
    author: 'Retreat Guest',
    context: 'Healing from trauma',
  },
  {
    quote:
      'Jay is like a force of nature - strong, grounded, and deeply connected. His guidance through my Iboga journey was life-changing.',
    author: 'Seeker',
    context: 'Spiritual awakening journey',
  },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      {/* 📍 IMAGE: home-hero - Sacred fire ceremony at dusk with warm golden light */}
      <Hero
        subtitle="Welcome to Iboga Life Change"
        title="Transform Your Life with the Power of Iboga"
        description="Discover world-class traditional healing, expert guidance, and sacred ceremonies to help you achieve your spiritual goals, heal deep wounds, and awaken your true self."
        primaryCta={{ label: 'Begin Your Journey', to: '/contact' }}
        secondaryCta={{ label: 'Learn About Iboga', to: '/iboga' }}
        showScrollIndicator
        size="full"
        backgroundImage="/images/home-hero.jpg"
      />

      {/* Introduction Section */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              Sacred Medicine, Ancient Wisdom
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              Go Beyond Your Limits and Awaken Your True Self
            </h2>
            <div className="space-y-6 text-bark font-primary text-body leading-relaxed">
              <p>
                Step into an Iboga retreat inspired by the ancient Bwiti tradition — a
                journey designed to awaken your spirit, clear your mind, and strengthen
                your connection to truth.
              </p>
              <p>
                Guided by experienced providers in a safe and sacred environment, you'll
                release what no longer serves you and rediscover inner balance, clarity,
                and power. Every ceremony moves you closer to becoming your most
                authentic and awakened self.
              </p>
            </div>

            {/* Sacred ceremony space image */}
            <img
              src="/images/home-ceremony-space.jpg"
              alt="Sacred ceremony space with natural elements and soft lighting"
              className="mt-8 mb-6 w-full rounded-sacred object-cover aspect-[4/3]"
            />

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Meet Jay Nzingo
              </Link>
              <Link to="/journey" className="btn-secondary">
                The Journey
              </Link>
            </div>
          </motion.div>

          {/* Stats/Impact */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-forest-deep to-earth-dark rounded-sacred p-10 text-cream">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-sacred-gold" />
                </div>
                <div>
                  <p className="text-4xl font-display text-sacred-gold">500+</p>
                  <p className="text-cream/70 font-secondary uppercase tracking-wider text-sm">
                    Transformed Lives
                  </p>
                </div>
              </div>
              <Quote
                text="We don't have to stay stuck in our suffering. There is light on the other side—and Iboga helps us find it."
                author="Jay Nzingo"
                variant="inline"
              />
              <div className="mt-8 pt-8 border-t border-sacred-gold/20">
                <p className="text-cream/60 font-secondary text-sm mb-4">
                  Traditional Training
                </p>
                <p className="text-cream font-primary">
                  Initiated and trained under{' '}
                  <span className="text-sacred-gold">
                    10th-generation Shaman Moughenda Mikala
                  </span>{' '}
                  in Gabon, Africa
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-sacred-gold/10 rounded-sacred" />
          </motion.div>
        </div>
      </Section>

      {/* What Iboga Heals Section */}
      <Section variant="default">
        <SectionHeading
          subtitle="How Iboga Can Help"
          title="Comprehensive Healing for Mind, Body & Spirit"
          description="Iboga works on multiple levels, addressing the root causes of suffering—not just the symptoms. This sacred plant medicine has helped countless people find freedom."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {healingAreas.map((area, index) => (
            <FeatureCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/iboga"
            className="inline-flex items-center gap-2 text-sacred-gold hover:text-sacred-amber font-secondary uppercase tracking-wider transition-colors"
          >
            Learn More About Iboga Healing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>

      {/* Jay's Story Brief */}
      <Section variant="earth">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              The Warrior's Path
            </p>
            <h2 className="font-accent text-h2 text-cream mb-8">
              Meet Jay Nzingo
            </h2>
          </motion.div>

          {/* Jay portrait */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="/images/home-jay-portrait.jpg"
              alt="Jay Nzingo - Iboga provider and spiritual guide"
              className="w-40 h-40 rounded-full object-cover border-4 border-sacred-gold/30 shadow-gold-glow"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-cream/80 font-primary text-lg leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              From the depths of 20+ years of addiction to the heights of spiritual
              awakening—Jay's transformation through Iboga ignited an unbreakable calling
              to serve this sacred medicine.
            </p>
            <p>
              Initiated under 10th-generation Shaman Moughenda Mikala in Gabon, Africa,
              Jay brings the fierce protection of a warrior and the gentle guidance of a
              healer to every ceremony.
            </p>
          </motion.div>

          <Quote
            text="I was done with the struggling. I was done with the suffering. I was done with the pain. And that's when everything changed."
            author="Jay Nzingo"
            variant="large"
          />

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/about" className="btn-primary">
              Read Jay's Full Story
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="cream">
        <SectionHeading
          subtitle="Voices of Transformation"
          title="What People Say About Jay"
          description="Real stories from those who have walked through the fire and emerged transformed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              context={testimonial.context}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacred-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Leaf
              className="w-12 h-12 text-sacred-gold mx-auto mb-6"
              strokeWidth={1.5}
            />
            <h2 className="font-accent text-h2 text-cream mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-cream/70 font-primary text-lg mb-10 leading-relaxed">
              The door is open. When you're ready to take the first step toward freedom,
              healing, and authentic living—Jay is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/ibogalifechange/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule a Consultation
              </a>
              <Link
                to="/journey"
                className="btn bg-transparent text-cream border-2 border-cream/30 hover:border-sacred-gold hover:text-sacred-gold"
              >
                Learn About The Process
              </Link>
            </div>
            <p className="mt-8 text-cream/50 font-secondary text-sm">
              That first step takes real courage. We honor that.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
