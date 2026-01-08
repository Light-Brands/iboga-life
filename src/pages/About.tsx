import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flame,
  MapPin,
  Heart,
  Shield,
  TreeDeciduous,
  Leaf,
  Star,
  ArrowRight,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { Quote } from '../components/ui/Quote';
import { Card } from '../components/ui/Card';
import { TestimonialCard } from '../components/ui/TestimonialCard';

const coreValues = [
  {
    icon: Shield,
    title: 'Strength Through Presence',
    description:
      "Jay's powerful physical presence creates a container of safety, allowing participants to fully surrender to their healing journey. His strength gives others permission to be vulnerable.",
  },
  {
    icon: TreeDeciduous,
    title: "Nature's Wisdom",
    description:
      'Living in harmony with nature has taught Jay the rhythms of transformation. He brings this primal wisdom to every ceremony, creating space for authentic healing.',
  },
  {
    icon: Heart,
    title: 'Warrior Compassion',
    description:
      'Combining the fierce protection of a warrior with deep compassion, Jay guides each person through their darkest moments into the light of understanding and healing.',
  },
  {
    icon: Star,
    title: 'Sacred Responsibility',
    description:
      'Jay approaches his work with the utmost reverence and responsibility, understanding that he is a guardian of sacred medicine and a guide for souls in transformation.',
  },
];

const timeline = [
  {
    title: 'The Calling',
    content:
      "After 20+ years trapped in cycles of addiction and self-destruction, Jay reached a point of deep realization: it was time to break free. The pain had become unbearable, and something inside him knew there had to be another way.",
  },
  {
    title: 'The Transformation',
    content:
      'In 2022, Jay attended his first Iboga ceremony in Cancun, Mexico. The experience was nothing short of miraculous. The medicine didn\'t just heal his wounds—it revealed his purpose as a guardian of ancient wisdom.',
  },
  {
    title: 'The Training',
    content:
      'Just two months after his first ceremony, Jay traveled to Gabon, Africa—the birthplace of the Bwiti tradition. There, under the direct guidance of 10th-generation Shaman Moughenda Mikala, he immersed himself in the ancient spiritual, energetic, and healing practices.',
  },
  {
    title: 'The Mission',
    content:
      'Upon returning to Canada, Jay founded his own Iboga retreat practice, dedicated to helping others find freedom from their own struggles—whether addiction, trauma, anxiety, depression, or emotional stagnation.',
  },
];

const testimonials = [
  {
    quote:
      "Jay's presence is like having a guardian angel and a fierce protector all in one. His strength gave me the courage to face my deepest fears.",
    author: 'Ceremony Participant',
  },
  {
    quote:
      'The combination of Jay\'s physical power and spiritual wisdom created the perfect environment for my transformation. I felt completely safe.',
    author: 'Retreat Guest',
  },
  {
    quote:
      'Jay is like a force of nature - strong, grounded, and deeply connected. His guidance through my Iboga journey was life-changing.',
    author: 'Seeker',
  },
];

export const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      {/* 📍 IMAGE: about-hero - Jay in nature or ceremonial setting, powerful presence */}
      <Hero
        subtitle="About Jay Nzingo"
        title="Warrior Spirit, Compassionate Guide"
        description="Traditionally trained Iboga Bwiti provider, initiated under 10th-generation Shaman Moughenda Mikala in Gabon, Africa."
        size="large"
        backgroundImage="/images/about-hero.jpg"
      />

      {/* Introduction */}
      <Section variant="cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              Meet Jason "Nzingo Gho Majanja"
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              From Darkness to Light
            </h2>

            {/* Jay formal portrait */}
            <div className="flex justify-center mb-8">
              <img
                src="/images/about-jay-formal.jpg"
                alt="Jay Nzingo - formal portrait showing strength and compassion"
                className="w-40 h-40 rounded-full object-cover border-4 border-sacred-gold/30 shadow-lg"
              />
            </div>

            <p className="text-lead text-bark max-w-2xl mx-auto">
              Jay's path to Iboga began during one of the most challenging times of
              his life. After struggling with addiction for over twenty years—caught in
              a cycle of destructive and self-sabotaging behaviors—he reached a point
              of deep realization.
            </p>
          </motion.div>

          <Quote
            text="I was done with the struggling. I was done with the suffering. I was done with the pain."
            author="Jay Nzingo"
          />

          <motion.div
            className="mt-12 space-y-6 text-bark font-primary text-body leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              These words marked the beginning of Jay's transformation. What started as
              a desperate search for healing became a profound spiritual awakening that
              would reshape not only his life, but the lives of countless others seeking
              freedom from their own darkness.
            </p>
            <p>
              This sacred plant medicine didn't just heal his wounds—it revealed his
              purpose as a guardian of ancient wisdom. From the depths of struggle to
              the heights of spiritual awakening, Jay's transformation through Iboga
              ignited an unbreakable calling to serve this sacred medicine.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section variant="earth">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              The Warrior's Journey
            </p>
            <h2 className="font-accent text-h2 text-cream mb-4">
              A Path of Transformation
            </h2>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sacred-gold to-sacred-gold/20" />
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-sacred-gold shadow-gold-glow" />

                <div className="bg-forest-light/30 rounded-sacred p-6 md:p-8 border border-sacred-gold/10">
                  <h3 className="font-accent text-xl text-sacred-gold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/80 font-primary leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Training Section */}
      <Section variant="cream">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              Traditional Initiation
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              Training in Gabon, Africa
            </h2>

            {/* Gabon temple image */}
            <img
              src="/images/about-gabon-temple.jpg"
              alt="Sacred Bwiti temple in Gabon surrounded by lush forest"
              className="mb-6 w-full rounded-sacred object-cover aspect-[4/3]"
            />

            <div className="space-y-6 text-bark font-primary text-body leading-relaxed">
              <p>
                Just two months after his life-changing first ceremony, Jay's calling led
                him to Gabon, Africa—the birthplace of the Bwiti tradition. There, under
                the direct guidance of Shaman Moughenda Mikala, he immersed himself in the
                traditional study of Iboga.
              </p>
              <p>
                Learning the ancient spiritual, energetic, and healing practices that have
                been passed down for generations, Jay became initiated into the Missoko
                Bwiti tradition—carrying forward a 10th-generation lineage of sacred
                knowledge.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-sacred-gold" />
                <span className="text-forest-deep font-secondary">
                  Immersed in ancient Bwiti rituals and sacred fire ceremonies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sacred-gold" />
                <span className="text-forest-deep font-secondary">
                  Trained directly in Gabon, the homeland of Iboga
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-sacred-gold" />
                <span className="text-forest-deep font-secondary">
                  Carrying forward a 10th-generation lineage
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="sacred">
              <div className="text-center">
                {/* Moughenda portrait */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/images/about-moughenda-portrait.jpg"
                    alt="Shaman Moughenda Mikala - 10th generation Bwiti shaman"
                    className="w-32 h-32 rounded-full object-cover border-4 border-sacred-gold/30"
                  />
                </div>
                <h3 className="font-accent text-xl text-cream mb-4">
                  Shaman Moughenda Mikala
                </h3>
                <p className="text-cream/70 font-primary leading-relaxed mb-6">
                  A 10th-generation Bwiti shaman from Gabon, Moughenda Mikala is one of
                  the world's most respected keepers of the Iboga tradition. Under his
                  guidance, Jay learned not just the ceremonies, but the profound
                  responsibility of serving this sacred medicine.
                </p>
                <div className="pt-6 border-t border-sacred-gold/20">
                  <p className="text-sacred-gold italic font-primary">
                    "To serve Iboga is to serve truth itself."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="default">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
            Philosophy & Approach
          </p>
          <h2 className="font-accent text-h2 text-forest-deep mb-6">
            How Jay Holds Space
          </h2>
          <p className="text-lead text-bark max-w-2xl mx-auto">
            Every ceremony is approached with deep reverence and unwavering commitment
            to those who come seeking transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-cream p-8 rounded-sacred shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-sacred-gold/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-sacred-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-accent text-lg text-forest-deep mb-2">
                    {value.title}
                  </h3>
                  <p className="text-bark font-primary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section variant="earth">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              The Mission
            </p>
            <h2 className="font-accent text-h2 text-cream mb-8">
              A Bridge Between Worlds
            </h2>
          </motion.div>

          <Quote
            text="My mission is to be a bridge between the ancient wisdom of plant medicine and the modern world's need for healing. With strength, love, and dedication, I guide souls through their journey of transformation, helping them reclaim their power and purpose."
            author="Jay Nzingo"
            variant="large"
          />

          <motion.div
            className="mt-12 space-y-6 text-cream/80 font-primary text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Now based in Canada, Jay serves those seeking freedom from addiction,
              trauma, anxiety, depression, and emotional stagnation. Through the wisdom
              of Iboga, he helps people reconnect with their true selves and remember
              who they are beyond pain and limitation.
            </p>
            <p>
              This is not about escaping life. It's about helping people return to
              life—whole, present, sovereign, and awake.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="cream">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
            Voices of Transformation
          </p>
          <h2 className="font-accent text-h2 text-forest-deep">
            What People Say About Jay
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-accent text-h2 text-cream mb-6">
              Ready to Work with Jay?
            </h2>
            <p className="text-cream/70 font-primary text-lg mb-10 leading-relaxed">
              If you feel called to experience the transformative power of Iboga with a
              guide who embodies strength, wisdom, and compassion, reach out today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link
                to="/iboga"
                className="inline-flex items-center gap-2 text-sacred-gold hover:text-sacred-amber font-secondary uppercase tracking-wider transition-colors"
              >
                Learn About Iboga
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
