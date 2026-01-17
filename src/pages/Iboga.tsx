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
  Check,
  Users,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Quote } from '../components/ui/Quote';

const physicalBenefitsQuick = [
  { icon: RefreshCcw, label: 'Creates neuroplasticity' },
  { icon: Zap, label: 'Neuroregenerative' },
  { icon: Shield, label: 'Physical cleanse & detox' },
  { icon: Leaf, label: 'Cellular memory healing' },
];

const mentalBenefitsQuick = [
  { icon: Eye, label: 'Deeper understanding of self' },
  { icon: Brain, label: 'Mental clarity' },
  { icon: Sparkles, label: 'Quiets mental chatter' },
  { icon: RefreshCcw, label: 'Helps break vicious cycles' },
];

const comprehensiveBenefits = {
  mental: [
    'Cultivates a deeper understanding of self',
    'Mental clarity',
    'Helps you have better perspective on your life',
    'Improves anxiety',
    'Improves depression',
    'Helps heal PTSD',
    'Helps interrupt self-defeating behaviour patterns',
    'Helps break vicious cycles + addictions',
    'Helps you to navigate turning points and crossroads',
    'Helps you to move through blockages',
    'Psychological detox',
    'Quiets mental chatter and overthinking',
    'Helps you understand your purpose',
    'Helps clear self-limiting / false beliefs',
    'Softens perfectionism',
    'Forgiveness of self and others',
  ],
  spiritual: [
    'Soul integration',
    'Third eye activation',
    'Facilitates spiritual journeying',
    'Helps you gain spiritual insight into your life',
    'Deeply grounding',
    'Deepens connection with life and nature',
    'Clears negative energy',
    'Provides ancestral / lineage healing',
    'Clears blockages',
    'Helps heal relationship with your soul',
  ],
  physical: [
    'Creates neuroplasticity',
    'Neuroregenerative',
    'Causes a deep pattern interruption of dopaminergic neurological networks',
    'Provides a physical cleanse / detox (anti-viral, anti-bacterial, anti-fungal)',
    'Helps clear trauma and stagnant energy embedded in cellular memory',
    'Nootropic: optimises brain functioning',
    'Enhances endurance and stamina',
    'Aids with improved sleep / wake cycle',
    'Enhances sexual / reproductive function including libido',
    'Cultivates a deeper connection to your body',
    'Enhances comfort in own skin',
    'Helps heal body shame issues',
    'Improves a range of physical ailments',
  ],
};

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
      {/* 📍 IMAGE: iboga-hero - Iboga plant/roots with mystical lighting */}
      <Hero
        subtitle="Sacred Plant Medicine"
        title="Discover the Healing Power of Iboga"
        description="An ancient medicine from the Bwiti tradition, offering transformative healing for mind, body, and spirit."
        primaryCta={{ label: 'Begin Your Journey', to: '/contact' }}
        size="large"
        backgroundImage="/images/iboga-hero.jpg"
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

          {/* Iboga plant image */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="/images/iboga-plant.jpg"
              alt="The Iboga plant (Tabernanthe iboga) with its distinctive leaves and roots"
              className="max-w-2xl mx-auto w-full rounded-sacred object-cover aspect-video"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-bark font-primary text-lg leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Known as the Chief of plant medicines, also as 'Doctor Iboga,' Iboga
              uniquely delivers spiritual, mental, and physical healing, growth and
              optimization - at once. In essence, Iboga is known to connect you with
              the truth. It is the only known plant medicine to have both male and
              female spirit.
            </p>
            <p>
              Iboga is a medicine that offers a powerful mind-body detox, as well as
              soul integration, physical healing, and spiritual discovery. Many people
              credit it to saving their life, or transforming their life for the better.
            </p>
            <p>
              When provided in a good manner, by well-trained practitioners, this
              medicine helps heal many of our society's common problems, such as
              anxiety, depression, addictions, and various physical ailments. It is
              the plant medicine most renowned for helping people make and maintain
              positive long-term changes in their life.
            </p>
            <p>
              Many people also experience a spiritual calling to this medicine, and
              seek it not for healing, but for growth, discovery, and peak performance
              in life.
            </p>
            <p>
              Iboga is simply the bark of a root from a small shrub-like tree which
              grows in West Coast Equatorial Africa. The people of the region have
              been using Iboga for thousands upon thousands of years for all types of
              healing as well as spiritual discovery. It's a sacrament used for the
              wellness of the whole community, not reserved to people with problems.
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
              {physicalBenefitsQuick.map((benefit) => (
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
              {mentalBenefitsQuick.map((benefit) => (
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

      {/* Comprehensive Benefits */}
      <Section variant="earth">
        <SectionHeading
          title="What Are Some of the Benefits of Iboga?"
          subtitle="Holistic Healing"
          description="Iboga works simultaneously across mental, spiritual, and physical dimensions, providing comprehensive healing that addresses the whole person."
          light
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Mental Benefits */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-6 md:p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-cream">Mental</h3>
            </div>
            <ul className="space-y-3">
              {comprehensiveBenefits.mental.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-sacred-gold/60 mt-1 flex-shrink-0" />
                  <span className="text-cream/80 font-secondary text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spiritual Benefits */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-6 md:p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-cream">Spiritual</h3>
            </div>
            <ul className="space-y-3">
              {comprehensiveBenefits.spiritual.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-sacred-gold/60 mt-1 flex-shrink-0" />
                  <span className="text-cream/80 font-secondary text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Physical Benefits */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-6 md:p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-cream">Physical</h3>
            </div>
            <ul className="space-y-3">
              {comprehensiveBenefits.physical.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-sacred-gold/60 mt-1 flex-shrink-0" />
                  <span className="text-cream/80 font-secondary text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
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

      {/* Who's It For */}
      <Section variant="default">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              Is Iboga Right For You?
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              Who's It For?
            </h2>
            <p className="text-lead text-bark max-w-2xl mx-auto">
              These are signs Iboga may be of great help for you:
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {[
              "You are ready to 'work on your life' / live a better life or your best life",
              'You are open to change',
              'You want to know the Truth',
              'You want a deep recalibration - mind, body, and soul',
              'You are seeking healing and wellness - mind, body, and soul',
              'You have an intuitive calling to connect with Iboga and / or the Bwiti tradition',
              'You are looking for optimization, growth and discovery',
            ].map((sign, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-cream-warm p-4 rounded-sacred border border-sacred-gold/10"
              >
                <Check className="w-5 h-5 text-sacred-gold mt-0.5 flex-shrink-0" />
                <span className="text-bark font-primary">{sign}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-forest-deep/5 rounded-sacred p-8 border border-sacred-gold/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
              <div className="space-y-4 text-bark font-primary leading-relaxed">
                <p>
                  To work with Iboga, you must be a good candidate health-wise.
                  There are certain physical and psychological conditions, as
                  well as drugs and medications that make it unsafe to work with
                  Iboga.
                </p>
                <p>
                  We will determine if you are a good candidate to safely work
                  with Iboga after you complete your health assessment and
                  intake consultation.
                </p>
              </div>
            </div>
          </motion.div>
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

            {/* Bwiti ceremony image */}
            <img
              src="/images/iboga-bwiti-ceremony.jpg"
              alt="Traditional Bwiti ceremony with sacred fire and tribal elements"
              className="mb-6 w-full rounded-sacred object-cover aspect-[4/3]"
            />

            <div className="space-y-6 text-cream/80 font-primary text-body leading-relaxed">
              <p>
                Iboga does not work alone. It has been carried by a tradition for
                millennia, which goes hand in hand with the medicine itself. For
                thousands upon thousands of years, the Bwiti tradition, rooted in West
                Coast Equatorial Africa, has been informed by Iboga, has stewarded
                Iboga, and carries the teachings, music, and customs that make the
                healing of Iboga so powerful and effective.
              </p>
              <p>
                Bwiti means 'the study of life,' or 'the art of knowing.' This tradition
                helps you cultivate a deep understanding of self, nature and life itself.
              </p>
              <p>
                We travel to Gabon to learn this work directly from the Missoko Bwiti
                tradition and conduct our ceremonies exactly how we have been taught.
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

      {/* How Is It Done? */}
      <Section variant="cream">
        <SectionHeading
          title="How Is It Done?"
          subtitle="The Ceremonial Process"
          description="Iboga is ideally done in a ceremonial context with providers who have received shamanic training and qualification by Bwiti teachers. This helps provide the best long-term results, safest experience, while at the same time honouring the medicine and tradition."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <p className="text-bark font-primary text-lg leading-relaxed">
                Iboga is a very long-lasting medicine. Both in its short-term processing time, and long-term influence on your life.
              </p>
            </div>

            <div className="bg-cream-warm rounded-sacred p-8 border border-sacred-gold/10">
              <h3 className="font-accent text-xl text-forest-deep mb-6 text-center">
                Our Iboga healing sessions are one week long, and include two ceremonies:
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cream rounded-sacred p-6 border border-sacred-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest-deep/10 flex items-center justify-center">
                      <span className="font-accent text-sacred-gold">1</span>
                    </div>
                    <h4 className="font-accent text-lg text-forest-deep">Detox Ceremony</h4>
                  </div>
                  <p className="text-bark/80 font-secondary leading-relaxed">
                    Introduction to the medicine, clearing and cleansing mind, body and spirit.
                  </p>
                </div>

                <div className="bg-cream rounded-sacred p-6 border border-sacred-gold/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest-deep/10 flex items-center justify-center">
                      <span className="font-accent text-sacred-gold">2</span>
                    </div>
                    <h4 className="font-accent text-lg text-forest-deep">Psycho Spiritual Ceremony</h4>
                  </div>
                  <p className="text-bark/80 font-secondary leading-relaxed">
                    Here we go deeper into psycho spiritual healing and discovery with the medicine.
                  </p>
                </div>
              </div>

              <p className="text-bark font-primary text-center mt-6 leading-relaxed">
                These two ceremonies work together to provide an optimal healing process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-sacred-gold" />
                </div>
                <div>
                  <h4 className="font-accent text-lg text-forest-deep mb-2">Small Group Setting</h4>
                  <p className="text-bark/80 font-secondary leading-relaxed">
                    We work with a small group of up to 4 participants and provide counselling and support before, during and after the session.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="w-6 h-6 text-sacred-gold" />
                </div>
                <div>
                  <h4 className="font-accent text-lg text-forest-deep mb-2">Long Integration Period</h4>
                  <p className="text-bark/80 font-secondary leading-relaxed">
                    Iboga has a long integration period of up to 6 months.
                  </p>
                </div>
              </div>
            </div>

            <Quote
              text="Deciding to work with this medicine is one of the best gifts you can give yourself, and one of the best investments you can make in your life."
            />
          </motion.div>
        </div>
      </Section>

      {/* Important Note */}
      <Section variant="default">
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
