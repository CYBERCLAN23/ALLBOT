'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Users, Briefcase, Gamepad2, Bot, Bell,
  BarChart3, Image, Terminal, CheckCircle2, ChevronDown,
  ArrowRight, Star, Menu, X, Github, Twitter, Linkedin,
  Globe, Shield, Zap, Send, Clock, Settings, Heart, Play,
  Sparkles, TrendingUp, BookOpen, GraduationCap, ShoppingCart,
  Megaphone, UserPlus, Lock, Headphones, Mail, Phone,
  Sun, Moon, Download, Languages
} from 'lucide-react';

/* ─────────────── TRANSLATIONS ─────────────── */
const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'v2.4 — Now Live',
      title1: 'One Bot.',
      title2: 'Every Need.',
      description: 'ALLbot is your all-in-one WhatsApp companion — group management, business tools, games, and AI chat in a single bot.',
      addBtn: 'Add to WhatsApp',
      howItWorksBtn: 'See How It Works',
      bubble1: '!tagall',
      bubble2: '@everyone check new guidelines!'
    },
    featuresInfo: {
      label: 'Features',
      title1: 'Everything You Need,',
      title2: 'In One Bot',
      subtitle: '200+ commands packed into a single, easy-to-use WhatsApp bot.',
      items: [
        { title: 'Group Management', desc: 'Auto-moderation, welcome messages, and member tracking.' },
        { title: 'Business Tools', desc: 'Orders, invoices, automated replies, and support.' },
        { title: 'Fun & Games', desc: 'Trivia, word games, memes, and group challenges.' },
        { title: 'AI Chat', desc: 'Ask questions, get summaries, and translate text.' },
        { title: 'Smart Reminders', desc: 'Scheduled reminders and recurring task alerts.' },
        { title: 'Polls & Surveys', desc: 'Instant polls with real-time analytics.' },
        { title: 'Media Tools', desc: 'Sticker maker, video downloader, and converter.' },
        { title: 'Custom Commands', desc: 'Build your own commands and automations.' }
      ]
    },
    showcase1: {
      label: 'Group Management',
      title: 'Keep Your Groups Clean & Organized',
      desc: 'Automatically moderate spam, welcome new members, set custom rules, and track member activity — all hands-free. Your groups run themselves.',
      features: ['Auto-moderation & anti-spam', 'Welcome messages & member tracking', 'Role-based permissions', 'Scheduled announcements']
    },
    showcase2: {
      label: 'Business Tools',
      title: 'Turn WhatsApp Into Your Business Engine',
      desc: 'Handle customer inquiries, send invoices, track orders, and automate replies. ALLbot transforms your WhatsApp into a full customer service platform.',
      features: ['Automated customer replies', 'Order tracking & notifications', 'Invoice generation', 'Team task management']
    },
    steps: {
      label: 'How It Works',
      title: 'Up & Running in 60 Seconds',
      subtitle: 'No app to install. No complex setup. Just add the bot and go.',
      items: [
        { title: 'Add ALLbot', desc: 'Scan the QR code or tap "Add to WhatsApp" to invite ALLbot.' },
        { title: 'Choose Features', desc: 'Enable group management, games, business tools, or all of the above.' },
        { title: 'Sit Back & Enjoy', desc: 'ALLbot handles the rest. Manage, automate, and entertain.' }
      ]
    },
    pricingData: {
      label: 'Pricing',
      title: 'Simple, Transparent Pricing',
      subtitle: 'Start free testing. Upgrade when you need more power.',
      periodForever: '/year',
      periodMonth: '/6 months',
      periodTest: '/7 days',
      popularBadge: 'Best Value',
      plans: [
        {
          name: 'Test', desc: 'Try it out before you buy', price: 'Free', periodSuffix: 'periodTest',
          features: ['Test the bot for 7 days', 'Limited commands', 'Fun & Games', 'Community Support'],
          cta: 'Start Testing'
        },
        {
          name: 'Premium', desc: 'For everyday users & growth', price: '10,000 FCFA', periodSuffix: 'periodMonth',
          features: ['Valid for 6 months', 'Essential business tools', 'AI-powered chat', 'Priority Support'],
          cta: 'Get Premium'
        },
        {
          name: 'Gold', desc: 'For power users & organizations', price: '15,000 FCFA', periodSuffix: 'periodForever',
          features: ['Valid for 1 full year', 'ALL commands unlocked', 'Complete follow-up & setup', 'Custom solutions'],
          cta: 'Get Gold'
        }
      ]
    },
    testimonialsText: {
      label: 'Testimonials',
      title: 'Loved by Thousands',
      items: [
        {
          name: 'Sarah K.', role: 'Community Manager',
          text: 'ALLbot transformed how I manage our 5,000-member community. The auto-moderation saves me hours every day.'
        },
        {
          name: 'David M.', role: 'Small Business Owner',
          text: 'My customers love getting instant replies. ALLbot handles 80% of inquiries automatically.'
        },
        {
          name: 'Amina T.', role: 'University Student',
          text: 'Our study group uses ALLbot for quizzes and reminders. It makes studying actually fun!'
        }
      ]
    },
    faqText: {
      label: 'FAQ',
      title: 'Got Questions?',
      items: [
        { q: 'How do I add ALLbot to my WhatsApp group?', a: 'Simply click "Add to WhatsApp" and scan the QR code. Then add it to any group where you\'re an admin.' },
        { q: 'Is ALLbot free to use?', a: 'Yes! ALLbot has a free tier with 50+ commands. Upgrade for AI chat, business tools, and unlimited groups.' },
        { q: 'Is my data safe?', a: 'We use end-to-end encryption and never store personal messages. Your privacy is our top priority.' },
        { q: 'Can I create custom commands?', a: 'Pro and Enterprise users can create custom commands and auto-replies using our command builder.' },
        { q: 'What makes ALLbot different?', a: 'ALLbot is truly all-in-one: group management, business tools, games, AI, and 200+ commands in a single bot.' }
      ]
    },
    ctaBanner: {
      title1: 'Ready to Try',
      title2: 'ALLbot?',
      subtitle: 'Join 50,000+ users automating their WhatsApp experience. It takes less than a minute.',
      primaryBtn: 'Add to WhatsApp Now',
      secondaryBtn: 'Contact Sales'
    },
    footer: {
      brandDesc: 'The ultimate all-in-one WhatsApp bot. Built with ❤️ by XyberClan for everyone.',
      product: 'Product',
      company: 'Company',
      support: 'Support',
      about: 'About XyberClan',
      blog: 'Blog',
      contact: 'Contact',
      docs: 'Documentation',
      help: 'Help Center',
      status: 'Status',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      pricing: 'Tarifs',
      faq: 'FAQ',
      getStarted: 'Commencer'
    },
    hero: {
      badge: 'v2.4 — En direct',
      title1: 'Un seul bot.',
      title2: 'Tous vos besoins.',
      description: 'ALLbot est votre compagnon WhatsApp tout-en-un — gestion de groupe, outils professionnels, jeux et chat IA dans un seul bot.',
      addBtn: 'Ajouter à WhatsApp',
      howItWorksBtn: 'Voir le fonctionnement',
      bubble1: '!tagtous',
      bubble2: '@everyone vérifiez les nouvelles règles !'
    },
    featuresInfo: {
      label: 'Fonctionnalités',
      title1: 'Tout ce dont vous avez besoin,',
      title2: 'Dans un seul bot',
      subtitle: 'Plus de 200 commandes regroupées dans un bot WhatsApp facile à utiliser.',
      items: [
        { title: 'Gestion de groupe', desc: 'Modération auto, messages de bienvenue, et suivi des membres.' },
        { title: 'Outils Pros', desc: 'Commandes, factures, réponses automatisées et support.' },
        { title: 'Jeux & Fun', desc: 'Quiz, jeux de mots, mèmes et défis de groupe.' },
        { title: 'Chat IA', desc: 'Posez des questions, obtenez des résumés et traduisez.' },
        { title: 'Rappels Intelligents', desc: 'Rappels planifiés et alertes de tâches récurrentes.' },
        { title: 'Sondages', desc: 'Sondages instantanés avec analyses en temps réel.' },
        { title: 'Outils Médias', desc: 'Créateur de stickers, téléchargements et convertisseurs.' },
        { title: 'Commandes Personnalisées', desc: 'Créez vos propres commandes et automatisations.' }
      ]
    },
    showcase1: {
      label: 'Gestion de Groupe',
      title: 'Gardez vos groupes propres et organisés',
      desc: 'Modérez automatiquement le spam, accueillez les nouveaux membres, définissez des règles et suivez l\'activité — les mains libres. Vos groupes s\'autogèrent.',
      features: ['Anti-spam & modération', 'Accueil & suivi des membres', 'Permissions basées sur les rôles', 'Annonces programmées']
    },
    showcase2: {
      label: 'Outils Professionnels',
      title: 'Transformez WhatsApp en moteur pour votre entreprise',
      desc: 'Gérez les demandes, envoyez des factures, suivez les commandes et automatisez les réponses. ALLbot transforme WhatsApp en un service client complet.',
      features: ['Réponses automatisées', 'Suivi des commandes', 'Création de factures', 'Gestion des tâches d\'équipe']
    },
    steps: {
      label: 'Comment ça marche',
      title: 'Prêt en 60 secondes',
      subtitle: 'Aucune application à installer. Aucune configuration complexe. Ajoutez simplement le bot.',
      items: [
        { title: 'Ajouter ALLbot', desc: 'Scannez le QR code ou appuyez sur "Ajouter à WhatsApp".' },
        { title: 'Choisir les options', desc: 'Activez la gestion de groupe, les jeux ou les outils pros.' },
        { title: 'Profiter', desc: 'ALLbot s\'occupe du reste. Gérez, automatisez et amusez-vous.' }
      ]
    },
    pricingData: {
      label: 'Tarifs',
      title: 'Des tarifs simples et transparents',
      subtitle: 'Testez l\'outil, puis choisissez la puissance dont vous avez besoin.',
      periodForever: '/an',
      periodMonth: '/6 mois',
      periodTest: '/7 jours',
      popularBadge: 'Le Meilleur Choix',
      plans: [
        {
          name: 'Test', desc: 'Pour découvrir le bot', price: 'Gratuit', periodSuffix: 'periodTest',
          features: ['Testez le bot pendant 7 jours', 'Commandes limitées', 'Jeux & Fun', 'Support communautaire'],
          cta: 'Commencer le Test'
        },
        {
          name: 'Premium', desc: 'Pour les utilisateurs réguliers', price: '10 000 FCFA', periodSuffix: 'periodMonth',
          features: ['Valable pendant 6 mois', 'Outils professionnels essentiels', 'Chat propulsé par l\'IA', 'Support prioritaire'],
          cta: 'Devenir Premium'
        },
        {
          name: 'Gold', desc: 'Pour les experts et entreprises', price: '15 000 FCFA', periodSuffix: 'periodForever',
          features: ['Valable pendant 1 an complet', 'Toutes les commandes débloquées', 'Suivi complet et configuration', 'Solutions sur mesure'],
          cta: 'Obtenir Gold'
        }
      ]
    },
    testimonialsText: {
      label: 'Témoignages',
      title: 'Aimé par des milliers de personnes',
      items: [
        {
          name: 'Sarah K.', role: 'Community Manager',
          text: 'ALLbot a transformé ma façon de gérer notre communauté de 5000 membres. La modération automatique me fait gagner des heures.'
        },
        {
          name: 'David M.', role: 'Propriétaire de PME',
          text: 'Mes clients adorent recevoir des réponses instantanées. ALLbot gère 80% des demandes automatiquement.'
        },
        {
          name: 'Amina T.', role: 'Étudiante Universitaire',
          text: 'Notre groupe d\'étude utilise ALLbot pour les quiz et rappels. Ça rend les études vraiment amusantes !'
        }
      ]
    },
    faqText: {
      label: 'FAQ',
      title: 'Des questions ?',
      items: [
        { q: 'Comment ajouter ALLbot à mon groupe ?', a: 'Cliquez sur "Ajouter à WhatsApp" ou scannez le QR. Ajoutez-le ensuite à tout groupe dont vous êtes admin.' },
        { q: 'ALLbot est-il gratuit ?', a: 'Oui ! ALLbot a un niveau gratuit avec 50+ commandes. Passez au niveau supérieur pour l\'IA et les outils pros.' },
        { q: 'Mes données sont-elles en sécurité ?', a: 'Nous utilisons un chiffrement de bout en bout et ne stockons jamais les messages personnels. Votre confidentialité est notre priorité.' },
        { q: 'Puis-je créer des commandes personnalisées ?', a: 'Les utilisateurs Pro et Entreprise peuvent créer des commandes et des réponses automatiques.' },
        { q: 'Qu\'est-ce qui rend ALLbot différent ?', a: 'ALLbot est vraiment tout-en-un : modération, outils pro, jeux, IA, le tout dans un seul bot.' }
      ]
    },
    ctaBanner: {
      title1: 'Prêt à essayer',
      title2: 'ALLbot ?',
      subtitle: 'Rejoignez plus de 50 000 utilisateurs qui automatisent WhatsApp. Ça prend moins d\'une minute.',
      primaryBtn: 'Ajouter à WhatsApp',
      secondaryBtn: 'Contacter les Ventes'
    },
    footer: {
      brandDesc: 'L\'ultime bot WhatsApp tout-en-un. Construit avec ❤️ par XyberClan pour tous.',
      product: 'Produit',
      company: 'Entreprise',
      support: 'Support',
      about: 'À propos de XyberClan',
      blog: 'Blog',
      contact: 'Nous Contacter',
      docs: 'Documentation',
      help: 'Centre d\'Aide',
      status: 'Statut des Services',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation'
    }
  }
};


/* ─────────────── Animation Variants ─────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const popOut = {
  hidden: { opacity: 0, scale: 0.5, x: -40, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1, x: 0, y: 0,
    transition: { delay: 0.8 + (i * 0.3), type: "spring", stiffness: 100, damping: 15 }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ─────────────── THEME & LANG HOOKS ─────────────── */
function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('allbot-theme');
    if (saved && saved !== 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('allbot-theme', next);
  };

  return { theme, toggleTheme };
}

function useLang() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('allbot-lang');
    if (saved) {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === 'en' ? 'fr' : 'en';
    setLang(next);
    localStorage.setItem('allbot-lang', next);
  };

  return { lang, toggleLang, t: translations[lang] };
}


/* ─────────────── NAVBAR ─────────────── */
function Navbar({ theme, toggleTheme, lang, toggleLang, t, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="navbar-logo">
            <div className="navbar-logo-icon">
              <img src="/logo.png" alt="Logo" />
            </div>
            <span>ALLbot</span>
          </a>
          <div className="navbar-links">
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="navbar-cta">
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
              <Languages size={18} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              <Sun size={18} className={`theme-icon ${theme === 'light' ? 'visible' : 'hidden'}`} />
              <Moon size={18} className={`theme-icon ${theme === 'dark' ? 'visible' : 'hidden'}`} />
            </button>
            <a href="/contact" className="btn btn-primary"><Send size={16} /> {t.nav.getStarted}</a>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>
          <X size={28} />
        </button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
        <a href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          <Send size={16} /> {t.nav.getStarted}
        </a>
      </div>
    </>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero({ t, onContactClick }) {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="hero-badge">
            <span className="hero-badge-dot" />
            <span>{t.hero.badge}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-title">
            {t.hero.title1}<br />{t.hero.title2}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-description">
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              <MessageCircle size={18} /> {t.hero.addBtn}
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              {t.hero.howItWorksBtn} <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/hero-person.png" alt="Person using ALLbot" className="hero-person-img" />
          <motion.div
            className="hero-floating-chats"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={popOut} custom={0} className="chat-bubble send absolute-bubble b1">
              <div className="chat-bubble-text">{t.hero.bubble1}</div>
              <div className="chat-bubble-time">11:42 <CheckCircle2 size={10} /></div>
            </motion.div>

            <motion.div variants={popOut} custom={1} className="chat-bubble receive absolute-bubble b2">
              <div className="chat-bubble-text"><strong>ALLbot</strong><br />{t.hero.bubble2}</div>
              <div className="chat-bubble-time">11:42</div>
            </motion.div>

            <motion.div variants={popOut} custom={2} className="chat-bubble receive absolute-bubble b3">
              <div className="voice-msg">
                <div className="voice-play"><Play size={14} fill="white" /></div>
                <div className="voice-waveform">
                  {[...Array(10)].map((_, i) => <div key={i} className="voice-bar" style={{ animationDelay: `${i * 0.1}s` }} />)}
                </div>
                <span className="voice-duration">0:14</span>
              </div>
              <div className="chat-bubble-time">11:48</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── CHAT SHOWCASE (WhatsApp Simulation) ─────────────── */
function ChatShowcase({ tData, emoji, reversed = false }) {
  return (
    <section className={`section chat-showcase ${reversed ? 'reversed' : ''}`}>
      <div className="container">
        <div className="chat-showcase-grid">
          {/* Content Side */}
          <motion.div
            className="chat-showcase-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="section-label">{tData.label}</motion.div>
            <motion.h2 variants={fadeUp} className="section-title text-left">{tData.title}</motion.h2>
            <motion.p variants={fadeUp} className="showcase-desc">{tData.desc}</motion.p>
            <motion.div variants={fadeUp} className="showcase-features">
              {tData.features.map((f, i) => (
                <div key={i} className="showcase-feature">
                  <CheckCircle2 size={16} className="showcase-feature-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Chat Side */}
          <motion.div
            className="chat-showcase-window"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={scaleIn}
          >
            <div className="chat-window-bar">
              <div className="chat-window-avatar">
                <img src="/logo.png" alt="ALLbot" style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'contain' }} />
              </div>
              <div className="chat-window-info">
                <span className="chat-window-name">ALLbot</span>
                <span className="chat-window-status">online</span>
              </div>
            </div>
            <div className="chat-window-body">
              <motion.div variants={fadeUp} custom={0} className="chat-bubble receive chat-sim">
                <div className="chat-bubble-text">{emoji} <strong>{tData.label}</strong></div>
                <div className="chat-bubble-time">12:00</div>
              </motion.div>
              <motion.div variants={fadeUp} custom={1} className="chat-bubble receive chat-sim">
                <div className="chat-bubble-text">{tData.desc}</div>
                <div className="chat-bubble-time">12:00</div>
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="chat-bubble send chat-sim">
                <div className="chat-bubble-text">That&apos;s exactly what I need! How do I start? 🚀</div>
                <div className="chat-bubble-time">12:02 <CheckCircle2 size={10} /></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── BENTO FEATURES ─────────────── */
function Features({ t }) {
  const ICONS = [Users, Briefcase, Gamepad2, Bot, Bell, BarChart3, Image, Terminal];

  return (
    <section className="section features" id="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">{t.featuresInfo.label}</motion.div>
          <motion.h2 variants={fadeUp} className="section-title">
            {t.featuresInfo.title1}<br />{t.featuresInfo.title2}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            {t.featuresInfo.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="bento-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {t.featuresInfo.items.map((f, i) => {
            const Icon = ICONS[i];
            const isLarge = i < 2;
            return (
              <motion.div
                key={i}
                className={`bento-tile ${isLarge ? 'bento-large' : ''}`}
                variants={scaleIn}
                custom={i}
              >
                <div className="bento-icon"><Icon size={isLarge ? 28 : 20} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="bento-glow" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── VERTICAL TIMELINE (How It Works) ─────────────── */
function HowItWorks({ t }) {
  const ICONS = [MessageCircle, Settings, Sparkles];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <motion.div
          className="how-it-works-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">{t.steps.label}</motion.div>
          <motion.h2 variants={fadeUp} className="section-title">{t.steps.title}</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            {t.steps.subtitle}
          </motion.p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {t.steps.items.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
              >
                <div className="timeline-dot">
                  <Icon size={18} />
                </div>
                <div className="timeline-card">
                  <div className="timeline-step-num">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── GLASSMORPHIC PRICING ─────────────── */
function Pricing({ t, onContactClick }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">{t.pricingData.label}</motion.div>
          <motion.h2 variants={fadeUp} className="section-title">{t.pricingData.title}</motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            {t.pricingData.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="glass-pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          {t.pricingData.plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`glass-price-card ${i === 1 ? 'glass-featured' : ''}`}
              variants={scaleIn}
              custom={i}
            >
              {i === 1 && <div className="glass-badge">{t.pricingData.popularBadge}</div>}
              <h3>{plan.name}</h3>
              <p className="glass-desc">{plan.desc}</p>
              <div className="glass-amount">
                <span className="glass-price">{plan.price}</span>
                <span className="glass-period">{t.pricingData[plan.periodSuffix]}</span>
              </div>
              <div className="glass-features">
                {plan.features.map((f, j) => (
                  <div key={j} className="glass-feature">
                    <CheckCircle2 size={14} /> {f}
                  </div>
                ))}
              </div>
              <button className={`btn ${i === 1 ? 'btn-primary' : 'btn-secondary'} glass-cta`} onClick={onContactClick}>
                {plan.cta} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── WHATSAPP STATUS STORIES TESTIMONIALS ─────────────── */
function Testimonials({ t }) {
  const AVATARS = ['/avatar_sarah.png', '/avatar_david.png', '/avatar_amina.png'];
  const [active, setActive] = useState(0);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">{t.testimonialsText.label}</motion.div>
          <motion.h2 variants={fadeUp} className="section-title">{t.testimonialsText.title}</motion.h2>
        </motion.div>

        <motion.div
          className="stories-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          {/* Story Avatars Row */}
          <div className="stories-avatars">
            {t.testimonialsText.items.map((item, i) => (
              <button
                key={i}
                className={`story-avatar-btn ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="story-ring">
                  <img src={AVATARS[i]} alt={item.name} className="story-avatar-img" />
                </div>
                <span className="story-name">{item.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Story Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="story-card"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="story-progress">
                {t.testimonialsText.items.map((_, i) => (
                  <div key={i} className={`story-progress-bar ${i <= active ? 'filled' : ''}`} />
                ))}
              </div>
              <div className="story-stars">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#FFD700" color="#FFD700" />)}
              </div>
              <p className="story-text">&ldquo;{t.testimonialsText.items[active].text}&rdquo;</p>
              <div className="story-author">
                <img src={AVATARS[active]} alt="" className="story-author-img" />
                <div>
                  <h4>{t.testimonialsText.items[active].name}</h4>
                  <p>{t.testimonialsText.items[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── CHAT-INTERFACE FAQ ─────────────── */
function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">{t.faqText.label}</motion.div>
          <motion.h2 variants={fadeUp} className="section-title">{t.faqText.title}</motion.h2>
        </motion.div>

        <motion.div
          className="faq-chat-window"
          initial="visible"
        >
          <div className="faq-chat-bar">
            <div className="faq-chat-avatar">
              <img src="/logo.png" alt="Avatar" style={{ width: '24px', height: '24px', borderRadius: '4px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="faq-chat-info">
              <span>ALLbot Support</span>
              <span className="faq-online">online</span>
            </div>
          </div>
          <div className="faq-chat-body">
            <div className="chat-bubble receive faq-welcome">
              <div className="chat-bubble-text">👋 {t.faqText.label}! Tap a question below.</div>
              <div className="chat-bubble-time">Now</div>
            </div>
            {t.faqText.items.map((item, i) => (
              <div key={i} className="faq-exchange">
                <button
                  className={`chat-bubble send faq-q ${openIndex === i ? 'active-q' : ''}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="chat-bubble-text">{item.q}</div>
                  <div className="chat-bubble-time"><CheckCircle2 size={10} /></div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="chat-bubble receive faq-a"
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="chat-bubble-text">{item.a}</div>
                      <div className="chat-bubble-time">Now</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── ANIMATED CTA ─────────────── */
function CTABanner({ t }) {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <motion.div
          className="cta-immersive"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-dot-grid">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="cta-dot" style={{ animationDelay: `${(i % 8) * 0.2}s` }} />
            ))}
          </div>
          <div className="cta-content">
            <h2>{t.ctaBanner.title1} <span className="gradient-text">{t.ctaBanner.title2}</span></h2>
            <p>{t.ctaBanner.subtitle}</p>
            <div className="cta-banner-actions">
              <a href="/contact" className="btn btn-primary btn-lg">
                <MessageCircle size={20} /> {t.ctaBanner.primaryBtn}
              </a>
              <a href="/contact" className="btn btn-secondary">
                <Mail size={16} /> {t.ctaBanner.secondaryBtn}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── COMPACT FOOTER ─────────────── */
function Footer({ t }) {
  return (
    <footer className="footer-compact">
      <div className="container">
        <div className="footer-top-strip">
          <a href="#" className="navbar-logo">
            <div className="navbar-logo-icon">
              <img src="/logo.png" alt="Logo" />
            </div>
            <span>ALLbot</span>
          </a>
          <div className="footer-inline-links">
            <a href="#features">{t.featuresInfo.label}</a>
            <a href="#pricing">{t.pricingData.label}</a>
            <a href="#">{t.footer.docs}</a>
            <a href="#">{t.footer.about}</a>
            <a href="#">{t.footer.contact}</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="GitHub"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="footer-bottom-strip">
          <p>&copy; {new Date().getFullYear()} ALLbot by <a href="#">XyberClan</a>. {t.footer.rights}</p>
          <div className="footer-legal">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── MAIN PAGE ─────────────── */
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} t={t} />
      <Hero t={t} />
      <Features t={t} />
      <ChatShowcase tData={t.showcase1} emoji="👥" reversed={false} />
      <ChatShowcase tData={t.showcase2} emoji="💼" reversed={true} />
      <HowItWorks t={t} />
      <Pricing t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
      <CTABanner t={t} />
      <Footer t={t} />
    </>
  );
}
