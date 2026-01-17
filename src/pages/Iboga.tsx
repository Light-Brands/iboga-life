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
  Music,
  Users,
  Target,
  Compass,
  BookOpen,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Quote } from '../components/ui/Quote';
import { Accordion, AccordionItem } from '../components/ui/Accordion';

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
              Iboga is one of the most powerful master plant medicines on Earth.
              Originating in Gabon, Central Africa, Iboga has been used for thousands
              of years within the Bwiti tradition for healing, initiation, and awakening.
              Known as the "Tree of Knowledge," Iboga helps people reconnect with their
              true selves, break destructive patterns, and step into the life they were
              meant to live.
            </p>
            <p>
              Iboga is not a psychedelic in the recreational sense. Instead, it is a
              teacher — a plant that works with the mind, body, and soul to reveal
              truth and create deep, lasting transformation. It shows you what you need
              to see, not necessarily what you want to see — but always with the
              intention of healing and truth.
            </p>
          </motion.div>

          {/* A Master Teacher - Condensed into Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <Accordion>
              <AccordionItem title="What Iboga Helps With" icon={Sparkles} defaultOpen>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>See your life with clarity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Heal unresolved trauma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Release emotional burdens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Rewire destructive habits and addictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Remember who you truly are beneath pain and struggle</span>
                  </li>
                </ul>
              </AccordionItem>

              <AccordionItem title="How Iboga Works" icon={Brain}>
                <p className="mb-4">
                  Iboga interacts with the brain's neurochemistry in a unique way:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>It can reset and rebalance the nervous system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RefreshCcw className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>It supports interruption of opioid and other addictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>It enhances neuroplasticity, allowing the brain to create new, healthier pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>It clears the mind, grounding a person back into their body and their truth</span>
                  </li>
                </ul>
                <p>
                  At the spiritual level, Iboga opens a connection to one's soul and inner
                  wisdom. It helps people confront their past, understand their patterns,
                  and step forward without the weight they've been carrying.
                </p>
              </AccordionItem>

              <AccordionItem title="Ceremony & Guidance" icon={Flame}>
                <p className="mb-4">
                  Iboga should never be taken casually or without proper guidance. In the
                  Bwiti tradition, the medicine is held with deep reverence and always
                  served with:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sacred-gold" />
                    <span>Preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-sacred-gold" />
                    <span>Ceremony & Fire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-sacred-gold" />
                    <span>Music</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-sacred-gold" />
                    <span>Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sacred-gold" />
                    <span>Experienced Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCcw className="w-4 h-4 text-sacred-gold" />
                    <span>Integration Support</span>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Healing Through Truth" icon={Eye}>
                <p className="mb-4">
                  Iboga doesn't give false comfort. It brings truth forward so real healing
                  can happen. This can manifest as:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Emotional release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Powerful insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Revisiting past memories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Seeing patterns clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Receiving guidance from one's own spirit</span>
                  </li>
                </ul>
                <p>
                  When the medicine completes its work, people often feel lighter, more
                  grounded, and more connected to themselves than they have in years.
                </p>
              </AccordionItem>

              <AccordionItem title="A Path Forward" icon={ArrowRight}>
                <p className="mb-4">
                  Those who complete an Iboga journey frequently describe:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-sacred-gold" />
                    <span>Mental clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-sacred-gold" />
                    <span>Renewed purpose</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-sacred-gold" />
                    <span>Emotional peace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCcw className="w-4 h-4 text-sacred-gold" />
                    <span>Reset from addiction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sacred-gold" />
                    <span>Deep spiritual connection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold" />
                    <span>A fresh start in life</span>
                  </div>
                </div>
                <p className="mt-4">
                  Iboga gives you the opportunity to stop running from your pain and finally
                  face it, heal it, and move forward with strength.
                </p>
              </AccordionItem>
            </Accordion>
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              className="mb-8 w-full max-w-2xl mx-auto rounded-sacred object-cover aspect-[4/3]"
            />

            <div className="space-y-6 text-cream/80 font-primary text-body leading-relaxed text-left">
              <p>
                The Bwiti Tradition is an ancient spiritual path originating from the
                forests of Gabon, Central Africa, carried for generations by the Fang,
                Mitsogo, and Apinji peoples. It is not a religion in the Western sense,
                but a way of life — a lived wisdom rooted in truth, self-knowledge, and
                direct experience.
              </p>
              <p>
                At the heart of Bwiti is the understanding that everything we need is
                already within us. The tradition guides people to remember who they truly
                are beneath fear, trauma, addiction, and the stories that life places on
                them. Rather than giving beliefs to follow, Bwiti opens the door for
                people to see for themselves.
              </p>
            </div>
          </motion.div>

          {/* Bwiti Details in Accordions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion>
              <AccordionItem title="Iboga: The Teacher Plant" icon={TreeDeciduous} variant="sacred" defaultOpen>
                <p className="mb-4">
                  The sacred plant medicine Iboga is central within the Bwiti path. It is
                  known as the "Tree of Knowledge," a master teacher that helps individuals
                  reconnect with their soul, confront their truth, and release the burdens
                  they've been carrying — sometimes for decades or even generations.
                </p>
                <p>
                  Within the Bwiti, Iboga is not used casually or recreationally. It is
                  taken with deep reverence, ceremony, and preparation. Traditionally
                  trained providers support guests spiritually, emotionally, and physically
                  through the process, ensuring safety, clarity, and guidance.
                </p>
              </AccordionItem>

              <AccordionItem title="A Tradition Built on Truth" icon={Eye} variant="sacred">
                <p className="mb-4">
                  Bwiti doesn't preach dogma. Instead, it teaches truth through direct experience:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Knowing yourself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Seeing your life clearly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Compass className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Understanding your purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RefreshCcw className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Letting go of what no longer serves you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Reconnecting with your soul and your ancestors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span>Living with honesty, integrity, and personal responsibility</span>
                  </li>
                </ul>
                <p>
                  Music, dance, fire, storytelling, and community all play important roles.
                  These elements help open the senses, anchor the mind, and connect
                  participants with the spiritual world.
                </p>
              </AccordionItem>

              <AccordionItem title="A Path of Healing & Awakening" icon={Heart} variant="sacred">
                <p className="mb-4">
                  Many people come to Bwiti seeking healing from:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-sacred-gold" />
                    <span>Addiction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-sacred-gold" />
                    <span>Trauma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-sacred-gold" />
                    <span>Depression</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sacred-gold" />
                    <span>Disconnection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCcw className="w-4 h-4 text-sacred-gold" />
                    <span>Patterns that keep repeating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-sacred-gold" />
                    <span>A loss of direction</span>
                  </div>
                </div>
                <p>
                  Through Iboga and the teachings, they often gain clarity, peace, and a
                  renewed sense of who they are.
                </p>
              </AccordionItem>

              <AccordionItem title="Preserving the Lineage" icon={BookOpen} variant="sacred">
                <p>
                  Traditionally trained Bwiti providers carry this knowledge with the
                  highest respect. They serve as bridges between the ancient Gabonese
                  wisdom and those searching for healing in the modern world. Their role
                  is not to "fix" anyone, but to guide them back to themselves.
                </p>
                <p className="mt-4">
                  We travel to Gabon to learn this work directly from the Missoko Bwiti
                  tradition and conduct our ceremonies exactly how we have been taught,
                  preserving the integrity of this sacred lineage.
                </p>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <Quote
            text="Everything you need is already within you. The tradition guides people to remember who they truly are beneath fear, trauma, addiction, and the stories that life places on them."
            variant="large"
          />
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
