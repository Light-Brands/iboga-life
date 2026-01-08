import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Heart,
  Brain,
  Flame,
  Sparkles,
  Shield,
  RefreshCcw,
  Eye,
  Zap,
  TreeDeciduous,
  ArrowRight,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Quote } from '../components/ui/Quote';

const physicalBenefits = [
  { icon: RefreshCcw, label: 'Cellular detoxification' },
  { icon: Zap, label: 'Neurotransmitter reset' },
  { icon: Shield, label: 'Anti-inflammatory properties' },
  { icon: Leaf, label: 'Body cleansing & balancing' },
];

const mentalBenefits = [
  { icon: Eye, label: 'See through self-deception' },
  { icon: Brain, label: 'Clear mental fog' },
  { icon: Sparkles, label: 'Return to natural clarity' },
  { icon: RefreshCcw, label: 'Release attachments to past' },
];

const healingCategories = [
  {
    id: 'physical',
    title: 'Physical Healing & Restoration',
    icon: Heart,
    description:
      'Complete body regeneration through cellular detoxification and healing',
    details: [
      'Detoxifying the entire body at the cellular level',
      'Resetting neurotransmitters & increasing neuroplasticity',
      'Cleansing & balancing the body for optimal performance',
      'Repairing through antiparasitic, antifungal, antibacterial, antiviral properties',
      'Reducing inflammation & relieving attachment to pain',
    ],
    expanded:
      "Iboga root contains potent bitter compounds that work rapidly to detoxify the body at the cellular level. This powerful plant medicine addresses a wide range of physical conditions including heavy metal buildup, viral infections like HPV and herpes, skin conditions such as acne, Lyme disease, chronic fatigue syndrome, insomnia, and various digestive problems. Beyond detoxification, Iboga's anti-viral, anti-bacterial, anti-fungal, and anti-parasitic properties work synergistically to repair and restore the body's natural healing mechanisms.",
  },
  {
    id: 'mental',
    title: 'Mental Healing & Neuroplasticity',
    icon: Brain,
    description:
      'Deep psychological transformation through seeing the truth and neural rewiring',
    details: [
      'Detoxing unnecessary conscious & subconscious thoughts',
      'Showing us all the ways we lie to ourselves so we can be 100% honest',
      'Returning the mind to its natural state of peace & clarity',
      'Eliminating external programming & making room for truth',
      'Guiding us in releasing attachments to the past',
    ],
    expanded:
      'The visionary nature of Iboga often facilitates profound inner journeys that enable participants to clear past traumas and discover the root causes of what prevents them from living with joy and purpose. This sacred medicine effectively supports healing from depression, anxiety, PTSD, bipolar disorder, ADD, ADHD, addiction, and obsessive-compulsive behaviors. Through its unique ability to facilitate honest self-examination, Iboga helps individuals see through the lies they tell themselves, eliminate external programming, and return the mind to its natural state of peace and clarity.',
  },
  {
    id: 'addiction',
    title: 'Revolutionary Addiction Recovery',
    icon: Flame,
    description:
      'Breaking free from substance dependency at its very root',
    details: [
      'Addresses addiction to opiates, alcohol, nicotine, stimulants',
      'Reduces withdrawal symptoms significantly',
      'Reveals the root causes behind substance use',
      'Resets the brain\'s reward pathways',
      'Creates lasting change through deep understanding',
    ],
    expanded:
      "Iboga is globally recognized for its remarkable anti-addictive properties and plays a crucial role in the detoxification and rehabilitation from various substances including amphetamines, opiates, alcohol, nicotine, and many pharmaceuticals. Unlike conventional treatments, Iboga not only strips harmful substances from the body and reduces withdrawal discomfort, but also invites participants to examine the original reasons behind their substance use. This unique combination of physical detoxification and psychological insight addresses addiction at its core, offering individuals a genuine opportunity for lasting recovery and transformation.",
  },
  {
    id: 'spiritual',
    title: 'Spiritual Awakening',
    icon: Sparkles,
    description:
      'Reconnecting with your authentic self and life purpose',
    details: [
      'Remember who you truly are beneath conditioning',
      'Reconnect with your life purpose',
      'Experience direct spiritual insight',
      'Release fear and limiting beliefs',
      'Awaken to your full potential',
    ],
    expanded:
      "The Bwiti tradition teaches that everything we need is already within us—we just forget. Iboga helps us remember. Through the ceremony, many experience profound insights about their true nature, their purpose, and their connection to something greater than themselves. This isn't about adopting new beliefs—it's about direct experience and seeing for yourself what lies beyond the stories life has placed on you.",
  },
];

export const Iboga: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Hero
        subtitle="Sacred Plant Medicine"
        title="Discover the Healing Power of Iboga"
        description="An ancient medicine from the Bwiti tradition, offering transformative healing for mind, body, and spirit."
        primaryCta={{ label: 'Begin Your Journey', to: '/contact' }}
        size="large"
      />

      {/* Introduction */}
      <Section variant="cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              What Is Iboga?
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-8">
              The Tree of Knowledge
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-bark font-primary text-lg leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              In our modern world where depression, anxiety, addiction, and chronic
              illness have become increasingly common, Iboga emerges as a powerful
              medicine offering essential keys to restoring and maintaining health
              within ourselves and our communities.
            </p>
            <p>
              Known as the "Tree of Knowledge" in the Bwiti tradition of West Africa,
              Iboga has been used for thousands of years for healing and spiritual
              initiation. This sacred plant works on multiple levels—physical, mental,
              and spiritual—providing comprehensive healing that addresses the root
              causes of suffering.
            </p>
          </motion.div>

          <Quote
            text="The medicine doesn't fix you. It shows you the truth. And in that truth, you find the freedom to heal yourself."
            author="Jay Nzingo"
          />
        </div>
      </Section>

      {/* How Iboga Works */}
      <Section variant="earth">
        <SectionHeading
          title="How Iboga Works"
          subtitle="Comprehensive Healing"
          description="Unlike other medicines that might give temporary relief or altered states, Iboga works differently. It shows you the truth—about yourself, about your patterns, about the lies you've been telling yourself."
          light
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Physical */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-cream">Physical Level</h3>
            </div>
            <div className="space-y-3">
              {physicalBenefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <benefit.icon className="w-5 h-5 text-sacred-gold/60" />
                  <span className="text-cream/80 font-secondary">{benefit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mental */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-cream">Mental Level</h3>
            </div>
            <div className="space-y-3">
              {mentalBenefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <benefit.icon className="w-5 h-5 text-sacred-gold/60" />
                  <span className="text-cream/80 font-secondary">{benefit.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-cream/70 font-primary text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          This is not a quick fix. It's not recreational. It's deep, profound work—and
          it requires readiness, preparation, and proper guidance.
        </motion.p>
      </Section>

      {/* Healing Categories */}
      <Section variant="cream">
        <SectionHeading
          title="What Iboga Can Help With"
          subtitle="Healing Dimensions"
          description="The healing properties of Iboga are both profound and far-reaching. Physically, it acts as a powerful detoxifier. Mentally and spiritually, it facilitates deep introspection and trauma release."
        />

        <div className="space-y-8">
          {healingCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-cream-warm rounded-sacred overflow-hidden border border-sacred-gold/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
                    <category.icon
                      className="w-7 h-7 text-sacred-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-accent text-xl md:text-2xl text-forest-deep mb-3">
                      {category.title}
                    </h3>
                    <p className="text-bark font-primary text-lg mb-6">
                      {category.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {category.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                          <span className="text-bark/80 font-secondary text-sm">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-bark/70 font-primary leading-relaxed border-t border-sacred-gold/10 pt-6">
                      {category.expanded}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Bwiti Tradition */}
      <Section variant="earth">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              Ancient Wisdom
            </p>
            <h2 className="font-accent text-h2 text-cream mb-6">
              The Bwiti Tradition
            </h2>
            <div className="space-y-6 text-cream/80 font-primary text-body leading-relaxed">
              <p>
                The Bwiti tradition originates from Gabon, West Africa, where Iboga has
                been used for thousands of years for healing, spiritual initiation, and
                connection to ancestral wisdom.
              </p>
              <p>
                Unlike modern approaches that might treat symptoms in isolation, the
                Bwiti tradition views healing as a return to wholeness—reconnecting with
                who we truly are beneath the layers of trauma, conditioning, and
                suffering.
              </p>
              <p>
                Jay was initiated into the Missoko Bwiti tradition under 10th-generation
                Shaman Moughenda Mikala, carrying forward this sacred lineage with
                reverence and responsibility.
              </p>
            </div>

            <Quote
              text="Everything you need is already within you. The tradition guides people to remember who they truly are beneath fear, trauma, addiction, and the stories that life places on them."
              variant="inline"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="sacred" className="text-center">
              <TreeDeciduous className="w-16 h-16 text-sacred-gold mx-auto mb-6" />
              <h3 className="font-accent text-2xl text-cream mb-4">
                Missoko Bwiti Tradition
              </h3>
              <p className="text-cream/70 font-primary leading-relaxed mb-8">
                An ancient spiritual tradition from Gabon that uses the Iboga plant for
                healing, self-discovery, and connection to the greater mysteries of
                existence.
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-cream/80">
                  <Flame className="w-5 h-5 text-sacred-gold" />
                  <span className="font-secondary">Sacred fire ceremonies</span>
                </div>
                <div className="flex items-center gap-3 text-cream/80">
                  <Leaf className="w-5 h-5 text-sacred-gold" />
                  <span className="font-secondary">Plant medicine wisdom</span>
                </div>
                <div className="flex items-center gap-3 text-cream/80">
                  <Heart className="w-5 h-5 text-sacred-gold" />
                  <span className="font-secondary">Ancestral connection</span>
                </div>
                <div className="flex items-center gap-3 text-cream/80">
                  <Eye className="w-5 h-5 text-sacred-gold" />
                  <span className="font-secondary">Direct spiritual experience</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Important Note */}
      <Section variant="cream">
        <div className="max-w-3xl mx-auto">
          <Card variant="default" className="border-l-4 border-l-caution">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-caution flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-accent text-xl text-forest-deep mb-3">
                  Important Considerations
                </h3>
                <div className="space-y-4 text-bark font-primary leading-relaxed">
                  <p>
                    Iboga is powerful medicine that requires proper screening,
                    preparation, and professional guidance. It is not appropriate for
                    everyone, and there are important health considerations that must be
                    addressed before ceremony.
                  </p>
                  <p>
                    This includes cardiac screening, review of current medications, and
                    honest discussion of your health history. Safety is paramount, and
                    we take these responsibilities seriously.
                  </p>
                  <p className="text-sacred-gold">
                    All ceremonies include comprehensive preparation, experienced
                    guidance, and integration support.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Leaf className="w-12 h-12 text-sacred-gold mx-auto mb-6" />
            <h2 className="font-accent text-h2 text-cream mb-6">
              Ready to Begin Your Healing?
            </h2>
            <p className="text-cream/70 font-primary text-lg mb-10 leading-relaxed">
              If you feel called to explore this path, the first step is an honest
              conversation about where you are and what you're seeking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 text-sacred-gold hover:text-sacred-amber font-secondary uppercase tracking-wider transition-colors"
              >
                Learn About The Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
