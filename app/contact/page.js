'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, MessageCircle, Bot } from 'lucide-react';

/* ─────────────── TRANSLATIONS ─────────────── */
const translations = {
    en: {
        backHome: 'Back to Home',
        botName: 'ALLbot Assistant',
        typing: 'ALLbot is typing...',
        inputPlaceholder: 'Type your message here...',
        btnSend: 'Send',
        btnOptions: {
            growGroup: 'Grow my group 😍',
            automBusiness: 'Automate business 😎',
            funGames: 'Play games 🥳',
            planTest: 'Test (Free! 🎁)',
            planPremium: 'Premium (10k FCFA ✨)',
            planGold: 'Gold (15k FCFA 🏆)'
        },
        messages: {
            step1: "Hi there! I'm the ALLbot Assistant 😊. I'm so excited you're here! Tell me, what's your main goal with ALLbot today? 🤔",
            step2: "Awesome choice! 🤩 We have specific features built just for that. Next, which plan are you interested in starting with? 😊 (Remember, our Test plan is totally free! 🥳)",
            step3: "Brilliant! 😇 Lastly, I just need your Name and WhatsApp phone number so my human teammates can get you set up immediately. Please type them below (e.g., Jane Doe, +237 600000000) 👇",
            success: "Perfect! 😁 I've got everything I need. I'm now going to transfer you directly to our WhatsApp support line to finalize the setup. See you there! 👋😉"
        }
    },
    fr: {
        backHome: 'Retour à l\'accueil',
        botName: 'Assistant ALLbot',
        typing: 'ALLbot écrit...',
        inputPlaceholder: 'Tapez votre message ici...',
        btnSend: 'Envoyer',
        btnOptions: {
            growGroup: 'Développer mon groupe 😍',
            automBusiness: 'Automatiser mon entreprise 😎',
            funGames: 'Jouer à des jeux 🥳',
            planTest: 'Test (Gratuit ! 🎁)',
            planPremium: 'Premium (10k FCFA ✨)',
            planGold: 'Gold (15k FCFA 🏆)'
        },
        messages: {
            step1: "Salut ! Je suis l'Assistant ALLbot 😊. Je suis ravi de vous voir ici ! Dites-moi, quel est votre objectif principal avec ALLbot aujourd'hui ? 🤔",
            step2: "Excellent choix ! 🤩 Nous avons des fonctionnalités spécifiques conçues exactement pour ça. Ensuite, par quel forfait souhaitez-vous commencer ? 😊 (N'oubliez pas, notre plan Test est totalement gratuit ! 🥳)",
            step3: "Génial ! 😇 Enfin, j'ai juste besoin de votre Nom et de votre numéro WhatsApp pour que mes collègues humains puissent vous configurer immédiatement. Veuillez les taper ci-dessous (ex: Jane Doe, +237 600000000) 👇",
            success: "Parfait ! 😁 J'ai tout ce qu'il me faut. Je vais maintenant vous transférer directement vers notre ligne WhatsApp pour finaliser la configuration. À tout de suite ! 👋😉"
        }
    }
};

/* ─────────────── PAGE COMPONENT ─────────────── */
export default function InteractiveChatContact() {
    const [lang, setLang] = useState('en');
    const [theme, setTheme] = useState('dark');
    const t = translations[lang];

    // Chat State
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isTyping, setIsTyping] = useState(false);
    const [formData, setFormData] = useState({ need: '', plan: '', contactInfo: '' });
    const [inputValue, setInputValue] = useState('');

    const messagesEndRef = useRef(null);

    // Initialize lang and theme, and start chat
    useEffect(() => {
        const savedLang = localStorage.getItem('allbot-lang') || 'en';
        setLang(savedLang);
        const savedTheme = localStorage.getItem('allbot-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Initial bot message
        triggerBotMsg(translations[savedLang].messages.step1, 1);
    }, []);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const addMessage = (text, sender) => {
        setMessages(prev => [...prev, { id: Date.now(), text, sender }]);
    };

    const triggerBotMsg = (text, delayFactor = 1) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            addMessage(text, 'bot');
        }, 1200 * delayFactor); // Fake typing delay
    };

    const handleUserSelection = (action, val, displayLabel) => {
        addMessage(displayLabel, 'user');

        if (action === 'need') {
            setFormData(prev => ({ ...prev, need: displayLabel }));
            setCurrentStep(2);
            triggerBotMsg(t.messages.step2);
        }
        else if (action === 'plan') {
            setFormData(prev => ({ ...prev, plan: displayLabel }));
            setCurrentStep(3);
            triggerBotMsg(t.messages.step3);
        }
    };

    const handleTextInputSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        addMessage(inputValue, 'user');
        setFormData(prev => ({ ...prev, contactInfo: inputValue }));
        setInputValue('');
        setCurrentStep(4);

        triggerBotMsg(t.messages.success);

        // Trigger WhatsApp Redirect
        setTimeout(() => {
            const waMsg = encodeURIComponent(
                `Hello XyberClan!\nI am interested in ALLbot.\n\n*Contact Info:* ${inputValue}\n*Need:* ${formData.need}\n*Plan:* ${formData.plan}`
            );
            window.open(`https://wa.me/237696814391?text=${waMsg}`, '_self');
        }, 4000); // Redirect after reading the success message
    };

    return (
        <main className="chat-contact-page">
            {/* Navbar Minimalite */}
            <nav className="contact-nav">
                <a href="/" className="back-link">
                    <ArrowLeft size={18} /> {t.backHome}
                </a>
                <div className="navbar-logo">
                    <div className="navbar-logo-icon">
                        <img src="/logo.png" alt="Logo" />
                    </div>
                    <span>ALLbot</span>
                </div>
                <div style={{ width: 100 }}></div> {/* spacer */}
            </nav>

            {/* Chat Area */}
            <section className="chat-container">

                <div className="chat-header">
                    <div className="bot-avatar">
                        <Bot size={24} color="#fff" />
                    </div>
                    <div className="bot-info">
                        <h2>{t.botName}</h2>
                        <span className="online-indicator">Online</span>
                    </div>
                </div>

                <div className="chat-messages">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`chat-bubble-wrapper ${msg.sender}`}
                            >
                                {msg.sender === 'bot' && (
                                    <div className="bubble-avatar">
                                        <img src="/logo.png" alt="bot" />
                                    </div>
                                )}
                                <div className={`chat-bubble ${msg.sender}`}>
                                    <p>{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="chat-bubble-wrapper bot"
                            >
                                <div className="bubble-avatar">
                                    <img src="/logo.png" alt="bot" />
                                </div>
                                <div className="chat-bubble bot typing">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </AnimatePresence>
                </div>

                {/* Chat Inputs / Options */}
                <div className="chat-input-area">
                    {!isTyping && currentStep === 1 && (
                        <motion.div className="choice-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('need', 'growGroup', t.btnOptions.growGroup)}>
                                {t.btnOptions.growGroup}
                            </button>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('need', 'automBusiness', t.btnOptions.automBusiness)}>
                                {t.btnOptions.automBusiness}
                            </button>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('need', 'funGames', t.btnOptions.funGames)}>
                                {t.btnOptions.funGames}
                            </button>
                        </motion.div>
                    )}

                    {!isTyping && currentStep === 2 && (
                        <motion.div className="choice-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('plan', 'planTest', t.btnOptions.planTest)}>
                                {t.btnOptions.planTest}
                            </button>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('plan', 'planPremium', t.btnOptions.planPremium)}>
                                {t.btnOptions.planPremium}
                            </button>
                            <button className="chat-choice-btn" onClick={() => handleUserSelection('plan', 'planGold', t.btnOptions.planGold)}>
                                {t.btnOptions.planGold}
                            </button>
                        </motion.div>
                    )}

                    {(!isTyping && currentStep === 3) && (
                        <motion.form className="chat-form" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onSubmit={handleTextInputSubmit}>
                            <input
                                type="text"
                                placeholder={t.inputPlaceholder}
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                autoFocus
                            />
                            <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                                <Send size={18} />
                            </button>
                        </motion.form>
                    )}

                    {currentStep === 4 && (
                        <div className="chat-status-text">
                            Redirecting to WhatsApp...
                        </div>
                    )}
                </div>

            </section>
        </main>
    );
}
