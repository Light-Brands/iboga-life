import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ClipboardCheck,
  Leaf,
  Flame,
  Sun,
  Heart,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Phone,
  Sunrise,
  Moon,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { Hero } from '../components/ui/Hero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProcessStep } from '../components/ui/ProcessStep';
import { ScheduleDay } from '../components/ui/ScheduleDay';
import { Card } from '../components/ui/Card';
import { Quote } from '../components/ui/Quote';

const processSteps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Initial Consultation',
    description:
      "Your journey begins with an honest conversation. We'll discuss where you are, what you're seeking, and whether Iboga is the right path for you. This call is free, with no pressure—just genuine dialogue about your situation.",
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: 'Health Screening',
    description:
      "Safety is paramount. You'll complete a comprehensive health questionnaire covering cardiac health, current medications, and medical history. This screening ensures the medicine is safe for you and allows us to prepare appropriately.",
  },
  {
    number: 3,
    icon: Leaf,
    title: 'Preparation Phase',
    description:
      "Receive detailed guidelines for physical, mental, and spiritual preparation. This includes dietary recommendations, substances to avoid, and practices to help you arrive ready for deep work. Setting clear intentions is a key part of this phase.",
  },
  {
    number: 4,
    icon: Flame,
    title: 'The Ceremony',
    description:
      "The ceremony takes place in a safe, sacred container with Jay present throughout. The medicine does its work while you receive continuous guidance and support. This is where transformation unfolds.",
  },
  {
    number: 5,
    icon: Sun,
    title: 'Integration Support',
    description:
      "After ceremony, integration is where real transformation takes root. You'll receive guidance for making sense of your experience and embodying the insights in daily life. This ongoing support helps ensure lasting change.",
  },
];

const goodCandidates = [
  'Ready to do deep inner work',
  'Seeking freedom from addiction or trauma',
  'Feeling stuck in patterns you can\'t break',
  'Open to the medicine and the process',
  'Committed to following preparation guidelines',
  'Willing to be honest with yourself and your guide',
];

const notReady = [
  'Looking for a quick fix or escape',
  'Unwilling to follow preparation protocols',
  'Have certain cardiac conditions (screening required)',
  'Currently on contraindicated medications',
  'In active psychosis or certain mental health crises',
  'Being pressured by others rather than called from within',
];

const preparationCategories = [
  {
    title: 'Physical Preparation',
    icon: Heart,
    items: [
      'Clean diet 1-2 weeks before (no processed foods, reduce meat)',
      'No alcohol for at least 1 week prior',
      'Stop certain medications (with medical guidance)',
      'Avoid recreational substances',
      'Stay hydrated and well-rested',
    ],
  },
  {
    title: 'Mental/Emotional Preparation',
    icon: Shield,
    items: [
      'Journal about your intentions and what you seek',
      'Reduce stress and create space before ceremony',
      'Practice meditation or quiet reflection',
      'Begin processing any surface-level concerns',
      'Prepare to be honest with yourself',
    ],
  },
  {
    title: 'Practical Preparation',
    icon: ClipboardCheck,
    items: [
      'Clear your schedule for ceremony plus recovery time',
      'Arrange transportation (you cannot drive after)',
      'Prepare comfortable clothing',
      'Inform someone you trust about your journey',
      'Complete all pre-ceremony requirements',
    ],
  },
];

const retreatSchedule = [
  {
    day: 1,
    title: 'Welcome & Ceremony',
    icon: Sunrise,
    activities: [
      'Welcome and settling in.',
      'Meet your facilitators and fellow journeyers.',
      'First sacred Iboga ceremony with full medical supervision and experienced facilitators.',
    ],
  },
  {
    day: 2,
    title: 'Recovery',
    icon: Moon,
    activities: [
      'Rest and gentle integration.',
      'Nourishing meals, nature time, and one-on-one support available.',
    ],
  },
  {
    day: 3,
    title: 'Integration',
    icon: Sparkles,
    activities: [
      'Group sharing circles.',
      'Journaling and processing insights from your experience.',
      'Visit to Spa.',
    ],
  },
  {
    day: 4,
    title: 'Ceremony',
    icon: Flame,
    activities: [
      'Second sacred Iboga ceremony.',
      'Going deeper with the medicine.',
    ],
  },
  {
    day: 5,
    title: 'Recovery',
    icon: Moon,
    activities: [
      'Rest and gentle integration.',
      'Nourishing meals, nature time, and one-on-one support available.',
    ],
  },
  {
    day: 6,
    title: 'Integration & Departure',
    icon: Calendar,
    activities: [
      'Final integration sessions, future planning, and building lasting connections.',
      'Farewell breakfast and beginning your new chapter.',
    ],
  },
];

export const Journey: React.FC = () => {
  return (
    <>
      {/* Hero */}
      {/* 📍 IMAGE: journey-hero - Path through forest with light breaking through */}
      <Hero
        subtitle="The Process"
        title="Your Healing Journey"
        description="From first conversation to lasting transformation—understand what to expect every step of the way."
        size="large"
        backgroundImage="/images/journey-hero.jpg"
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
              The Sacred Path
            </p>
            <h2 className="font-accent text-h2 text-forest-deep mb-8">
              This Is Not a Quick Fix
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-bark font-primary text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Working with Iboga is a commitment to yourself—a decision to face what
              you've been avoiding and step into who you truly are. It requires
              preparation, courage, and follow-through.
            </p>
            <p>
              The ceremony itself is just one part of a larger journey that includes
              careful preparation before and meaningful integration after. Each phase is
              essential for lasting transformation.
            </p>
          </motion.div>

          <Quote
            text="This isn't about escaping life. It's about returning to it—whole, present, sovereign, and awake."
            author="Jay Nzingo"
          />
        </div>
      </Section>

      {/* Process Steps */}
      <Section variant="default">
        <SectionHeading
          subtitle="The Process"
          title="Your Journey Step by Step"
          description="From first contact to lasting transformation, here's what to expect at each stage."
        />

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === processSteps.length - 1}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Is This For Me */}
      <Section variant="earth">
        <SectionHeading
          title="Is This Right For You?"
          subtitle="Honest Reflection"
          description="Iboga is powerful medicine, but it's not for everyone—and that's okay. Here's help determining if this path is calling you."
          light
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Candidates */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-8 border border-truth/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-truth" />
              <h3 className="font-accent text-xl text-cream">You May Be Ready If...</h3>
            </div>
            <div className="space-y-4">
              {goodCandidates.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-truth mt-0.5 flex-shrink-0" />
                  <span className="text-cream/80 font-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not Ready */}
          <motion.div
            className="bg-forest-light/30 rounded-sacred p-8 border border-caution/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-caution" />
              <h3 className="font-accent text-xl text-cream">This May Not Be The Time If...</h3>
            </div>
            <div className="space-y-4">
              {notReady.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-caution mt-0.5 flex-shrink-0" />
                  <span className="text-cream/80 font-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-cream/70 font-primary text-lg mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Not sure? That's okay. A conversation costs nothing and can help bring clarity.
          Reach out, and let's talk about where you are.
        </motion.p>
      </Section>

      {/* Preparation */}
      <Section variant="cream">
        <SectionHeading
          subtitle="Preparing For Ceremony"
          title="How to Arrive Ready"
          description="Proper preparation creates the conditions for deep, meaningful work. Here's what's involved."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {preparationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-cream-warm rounded-sacred p-8 border border-sacred-gold/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-forest-deep/10 flex items-center justify-center mb-6">
                <category.icon className="w-6 h-6 text-sacred-gold" />
              </div>
              <h3 className="font-accent text-xl text-forest-deep mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-sacred-gold mt-1 flex-shrink-0" />
                    <span className="text-bark font-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="default" className="border-l-4 border-l-sacred-gold">
            <p className="text-bark font-primary leading-relaxed">
              <strong className="text-forest-deep">Detailed preparation guidelines</strong>{' '}
              are provided after your consultation and health screening are complete.
              These will include specific timelines, dietary requirements, and everything
              you need to arrive fully prepared.
            </p>
          </Card>
        </motion.div>
      </Section>

      {/* What to Expect */}
      <Section variant="earth">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sacred-gold font-accent text-sm uppercase tracking-[0.2em] mb-4">
              The Ceremony
            </p>
            <h2 className="font-accent text-h2 text-cream mb-6">
              What to Expect
            </h2>
            <p className="text-cream/70 font-primary text-lg">
              The ceremony is sacred space, held with reverence and care.
            </p>

            {/* Ceremony space image */}
            <img
              src="/images/journey-ceremony-space.jpg"
              alt="Sacred ceremony space prepared for healing work"
              className="mt-8 max-w-2xl mx-auto w-full rounded-sacred object-cover aspect-video"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-forest-light/30 rounded-sacred p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Flame className="w-10 h-10 text-sacred-gold mb-6" />
              <h3 className="font-accent text-xl text-cream mb-4">During Ceremony</h3>
              <div className="space-y-4 text-cream/80 font-primary leading-relaxed">
                <p>
                  The ceremony typically lasts 24-36 hours, with the most intensive
                  period in the first 12-16 hours. Jay remains present throughout,
                  providing guidance and support.
                </p>
                <p>
                  Experiences vary widely—some receive vivid visions, others deep
                  emotional processing, others profound body healing. The medicine gives
                  each person what they need.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-forest-light/30 rounded-sacred p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Sun className="w-10 h-10 text-sacred-gold mb-6" />
              <h3 className="font-accent text-xl text-cream mb-4">After Ceremony</h3>
              <div className="space-y-4 text-cream/80 font-primary leading-relaxed">
                <p>
                  The days following ceremony are often profound. Many describe feeling
                  "reset"—clearer, lighter, more connected to themselves. This is when
                  integration work begins.
                </p>
                <p>
                  You'll receive guidance for the critical first 48 hours, the first
                  week, and ongoing support as you embody your experience in daily life.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Quote
              text="The ceremony is where you meet yourself. Integration is where you become who you've always been."
              author="Jay Nzingo"
              variant="large"
            />
          </motion.div>
        </div>
      </Section>

      {/* Retreat Schedule */}
      <Section variant="default">
        <SectionHeading
          subtitle="6-Day Retreat"
          title="Your Retreat Schedule"
          description="A carefully crafted journey of ceremony, recovery, and integration over six transformative days."
        />

        <div className="max-w-3xl mx-auto bg-forest-deep/50 rounded-sacred p-8 md:p-12">
          {retreatSchedule.map((day, index) => (
            <ScheduleDay
              key={day.day}
              day={day.day}
              title={day.title}
              activities={day.activities}
              icon={day.icon}
              isLast={index === retreatSchedule.length - 1}
              index={index}
            />
          ))}
        </div>

        <motion.p
          className="text-center text-bark/70 font-primary text-base mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Each retreat is tailored to the needs of participants. The schedule provides structure while allowing space for the medicine to guide the experience.
        </motion.p>
      </Section>

      {/* Safety */}
      <Section variant="cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-12 h-12 text-truth mx-auto mb-6" />
            <h2 className="font-accent text-h2 text-forest-deep mb-6">
              Safety Is Sacred
            </h2>
            <p className="text-bark font-primary text-lg max-w-2xl mx-auto">
              This is serious work, treated seriously. Your safety is paramount, and we
              take every precaution to ensure you're in good hands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-truth">
              <h3 className="font-accent text-lg text-forest-deep mb-4">
                Medical Screening
              </h3>
              <p className="text-bark font-primary leading-relaxed">
                Comprehensive health screening ensures the medicine is safe for you.
                This includes cardiac assessment, medication review, and honest
                discussion of your health history.
              </p>
            </Card>

            <Card className="border-l-4 border-l-truth">
              <h3 className="font-accent text-lg text-forest-deep mb-4">
                Experienced Guidance
              </h3>
              <p className="text-bark font-primary leading-relaxed">
                Jay's training under 10th-generation Shaman Moughenda Mikala, combined
                with extensive experience, ensures you're guided by someone who knows
                this medicine deeply.
              </p>
            </Card>

            <Card className="border-l-4 border-l-truth">
              <h3 className="font-accent text-lg text-forest-deep mb-4">
                Continuous Presence
              </h3>
              <p className="text-bark font-primary leading-relaxed">
                You're never alone during ceremony. Jay remains present throughout,
                monitoring your wellbeing and providing support as needed.
              </p>
            </Card>

            <Card className="border-l-4 border-l-truth">
              <h3 className="font-accent text-lg text-forest-deep mb-4">
                Emergency Protocols
              </h3>
              <p className="text-bark font-primary leading-relaxed">
                Comprehensive emergency protocols are in place. Safety measures,
                emergency contacts, and medical resources are all prepared before
                ceremony begins.
              </p>
            </Card>
          </div>
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
              Ready to Take the First Step?
            </h2>
            <p className="text-cream/70 font-primary text-lg mb-10 leading-relaxed">
              That first step takes real courage. If you're feeling called to this work,
              reach out for a conversation. No pressure, no obligation—just honest
              dialogue about your situation.
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
              <a
                href="tel:+15199842400"
                className="inline-flex items-center gap-2 text-sacred-gold hover:text-sacred-amber font-secondary uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call +1 (519) 984-2400
              </a>
            </div>
            <p className="mt-8 text-cream/50 font-secondary text-sm">
              The door is open. When you're ready, Jay is here.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
