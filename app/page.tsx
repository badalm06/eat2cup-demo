'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronDown, Coffee, Leaf, Menu, MessageCircle, Package, Sparkles, X } from 'lucide-react';
import { wholesaleOffer } from '../data/site';

const WA = 'https://wa.me/919818192575';
const imageSlots = {
  logo: '/images/cup2eat-logo.png',
  hero: '/images/hero-edible-cups.png',
  chocolate: '/images/chocolate-cup.png',
  vanilla: '/images/vanilla-cup.png',
  elaichi: '/images/elaichi-cup.png',
  story: '/images/story-cup.png',
};

const products = [
  { name: 'Chocolate Cup', key: 'chocolate', desc: 'Rich, chocolate-inspired goodness for those who love a little indulgence.', tags: ['Coffee', 'Desserts'], color: '#8b5134' },
  { name: 'Vanilla Cup', key: 'vanilla', desc: 'A smooth, classic flavour that pairs beautifully with your favourite beverages.', tags: ['Chai', 'Ice cream'], color: '#d7ae68' },
  { name: 'Elaichi Cup', key: 'elaichi', desc: 'A delightful cardamom-inspired flavour with a familiar Indian twist.', tags: ['Chai', 'Events'], color: '#a3b96c' },
];

const faqs = [
  ['What is CUP2EAT?', 'CUP2EAT makes edible, crunchy cups designed to turn your beverage moment into a delicious experience.'],
  ['Are the cups actually edible?', 'Yes — the product concept is a cup you can enjoy after finishing your drink. Please contact the team for current product and serving details.'],
  ['What flavours are available?', 'Chocolate, Vanilla and Elaichi (Cardamom) are currently presented in this demo.'],
  ['Can the cups be used for chai and coffee?', 'They are designed for chai and coffee moments, alongside ice cream and desserts. Ask the team about the best serving use for your menu.'],
  ['Can businesses purchase in bulk?', 'Yes. CUP2EAT is built for wholesale, cafés, restaurants, hotels, events and distribution enquiries.'],
  ['How can I become a distributor?', 'Use the enquiry form and choose Distribution. The team can help you explore bringing CUP2EAT to your city.'],
];

function Slot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`image-slot ${className}`} style={{ backgroundImage: `url(${src})` }} role="img" aria-label={alt} />;
}

function Fade({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .7, delay }}>{children}</motion.div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', city: '', type: 'Wholesale', requirement: '', message: '' });
  const [errors, setErrors] = useState<string[]>([]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const missing = ['name', 'phone', 'city'].filter((key) => !form[key as keyof typeof form]);
    setErrors(missing);
    if (missing.length) return;
    const text = `CUP2EAT enquiry%0AName: ${form.name}%0ABusiness: ${form.business}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ACity: ${form.city}%0AEnquiry: ${form.type}%0ARequirement: ${form.requirement}%0AMessage: ${form.message}`;
    window.open(`${WA}?text=${text}`, '_blank');
  };

  return <main>
    <nav className="nav"><a href="#top" className="brand"><Slot src={imageSlots.logo} alt="CUP2EAT logo" className="logo" /><span className="brand-fallback">CUP<span>2</span>EAT</span></a><div className={`nav-links ${menu ? 'open' : ''}`}>
      {['Home', 'Our Products', 'Why Cup2Eat', 'Applications', 'About Us', 'Contact'].map((item, i) => <a key={item} href={['#top', '#products', '#why', '#applications', '#about', '#contact'][i]} onClick={() => setMenu(false)}>{item}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Get Wholesale Quote <ArrowUpRight size={16} /></a>
    </div><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X /> : <Menu />}</button></nav>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span /> EDIBLE FOOD INNOVATION</p><h1>Why drink your cup<br />when you can <em>eat it?</em></h1><p className="hero-lede">Meet the future of sustainable sipping. Delicious, crunchy cups that transform everyday chai and coffee moments into something extraordinary.</p><div className="actions"><a className="button primary" href="#products">Explore our cups <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Become a partner <span>↗</span></a></div><div className="hero-note"><span className="avatars">✦ ✦ ✦</span><span>Made for sustainable sipping</span></div></div><div className="hero-visual"><div className="hero-orbit" /><Slot src={imageSlots.hero} alt="Edible cups with coffee and chai" className="hero-image" /><div className="float-card float-one"><Sparkles size={15} /><span>100%<small>Edible concept</small></span></div><div className="float-card float-two"><Coffee size={15} /><span>3<small>Delicious flavours</small></span></div><div className="hero-stamp">EAT<br /><b>YOUR</b><br />DRINK</div></div></section>

    <section className="marquee"><span>CHAI</span><i>✦</i><span>COFFEE</span><i>✦</i><span>ICE CREAM</span><i>✦</i><span>GOOD IDEAS</span><i>✦</i><span>CHAI</span></section>

    <section className="idea section"><Fade className="section-intro"><p className="eyebrow">THE BIG IDEA</p><h2>Not just a cup.<br /><em>It&apos;s a delicious innovation.</em></h2><p>Imagine enjoying your favourite coffee or chai, and instead of throwing away the cup, simply enjoying it as a snack. That&apos;s the CUP2EAT experience.</p></Fade><div className="steps"><Fade delay={.05}><div className="step-icon"><Coffee /></div><span>01</span><h3>Pour your favourite drink</h3><p>Start with the beverage you love.</p></Fade><Fade delay={.12}><div className="step-icon"><Sparkles /></div><span>02</span><h3>Sip &amp; enjoy</h3><p>Make the moment a little more memorable.</p></Fade><Fade delay={.19}><div className="step-icon dark"><Leaf /></div><span>03</span><h3>Eat your cup!</h3><p>Finish on a delicious, crunchy note.</p></Fade></div></section>

    <section className="products section" id="products"><Fade className="section-head"><div><p className="eyebrow">THE CUP2EAT COLLECTION</p><h2>Meet your new<br /><em>favourite cups.</em></h2></div><p>Three irresistible flavours.<br />One deliciously sustainable idea.</p></Fade><div className="product-grid">{products.map((p, i) => <Fade key={p.name} delay={i * .1}><article className="product-card"><div className="product-photo"><Slot src={imageSlots[p.key as keyof typeof imageSlots]} alt={p.name} /><span className="flavour" style={{ background: p.color }}>● {p.name.replace(' Cup', '')}</span></div><div className="product-content"><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><a className="card-link" href="#contact">Enquire now <ArrowUpRight size={16} /></a></div></article></Fade>)}</div></section>

    <section className="why section" id="why"><Fade className="why-copy"><p className="eyebrow light">WHY CUP2EAT</p><h2>Good for your taste buds.<br /><em>Better for tomorrow.</em></h2><p>Turn a simple serving choice into a story your customers will remember — with flavour, creativity and a lighter touch.</p><a className="button cream" href="#contact">Bring it to your business <ArrowUpRight size={17} /></a></Fade><div className="benefits">{[['01', 'Edible innovation', 'Enjoy your beverage and eat the cup afterward.'], ['02', 'Eco-conscious alternative', 'A creative alternative to conventional disposable serving cups.'], ['03', 'Premium presentation', 'Give your café or restaurant a unique serving experience.'], ['04', 'Business friendly', 'An innovative product for cafés, restaurants and events.']].map(([n, t, d]) => <Fade key={n}><div className="benefit"><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={17} /></div></Fade>)}</div></section>

    <section className="applications section" id="applications"><Fade className="section-intro centered"><p className="eyebrow">MADE FOR MORE THAN COFFEE</p><h2>One cup.<br /><em>Endless possibilities.</em></h2></Fade><div className="application-grid"><Fade><div className="application-card big"><Slot src={imageSlots.story} alt="Chai served in an edible cup" /><div><span>01</span><h3>Chai &amp; Coffee</h3><p>Make an everyday ritual extraordinary.</p></div></div></Fade><div className="application-stack"><Fade delay={.08}><div className="application-card peach"><div><span>02</span><h3>Ice cream</h3><p>A crunch worth coming back for.</p></div><Coffee /></div></Fade><Fade delay={.16}><div className="application-card green"><div><span>03</span><h3>Desserts</h3><p>Serve a little surprise.</p></div><Sparkles /></div></Fade></div><Fade delay={.2}><div className="application-card dark-card"><span>04</span><h3>Cafés, restaurants<br />&amp; events</h3><p>Give your customers something to talk about.</p><ArrowUpRight /></div></Fade></div></section>

    <section className="b2b section"><div className="b2b-visual"><Slot src={imageSlots.chocolate} alt="Chocolate edible cup" className="b2b-image" />{wholesaleOffer.enabled && <span className="price-pill">Indicative offer<br /><b>{wholesaleOffer.price} <small>for {wholesaleOffer.quantity}</small></b></span>}</div><Fade className="b2b-copy"><p className="eyebrow light">FOR BUSINESSES WITH TASTE</p><h2>Make your business<br /><em>more memorable.</em></h2><p>Give your customers something beyond the ordinary. Bring CUP2EAT to your café, restaurant, hotel or next big event.</p><div className="b2b-list">{['Wholesale enquiries', 'Bulk ordering', 'Café & restaurant partnerships', 'Event, catering & distribution opportunities'].map(x => <span key={x}><Check size={15} /> {x}</span>)}</div><a className="button cream" href="#contact">Request wholesale pricing <ArrowUpRight size={17} /></a><small className="fine-print">Indicative offer shown for demonstration. Pricing and quantity can be updated before launch.</small></Fade></section>

    <section className="story section" id="about"><Fade className="story-copy"><p className="eyebrow">OUR STORY</p><h2>Rethinking the way<br /><em>we sip.</em></h2><p>CUP2EAT brings together food innovation, taste and more sustainable serving experiences — in one small, memorable cup.</p><blockquote>“Why let the experience end with the last sip?”</blockquote><a className="text-link" href="#contact">Let&apos;s build the future of serving <span>↗</span></a></Fade><Fade className="story-visual"><Slot src={imageSlots.story} alt="CUP2EAT product story" className="story-image" /><div className="story-label">GOOD<br /><b>IDEAS</b><br />ARE EDIBLE</div></Fade></section>

    <section className="presence"><Fade className="centered"><p className="eyebrow light">OUR PRESENCE</p><h2>Taking the edible<br /><em>revolution across India.</em></h2><p>Looking to bring CUP2EAT to your city? Let&apos;s connect.</p></Fade><div className="locations">{['Tripura', 'Delhi', 'Ghaziabad', 'Gujarat', 'Mumbai', 'Indore', 'Bangalore', 'Chandigarh', 'Punjab'].map((x, i) => <span key={x} style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>✦ {x}</span>)}</div><a className="button cream center-button" href="#contact">Become a distributor <ArrowUpRight size={17} /></a></section>

    <section className="special section"><Fade className="section-intro"><p className="eyebrow">WHAT MAKES THE EXPERIENCE SPECIAL</p><h2>A small cup.<br /><em>A big talking point.</em></h2></Fade><div className="special-grid"><Fade><div className="quote-card"><span>“</span><p>Something deliciously different for the moments that matter.</p><small>— A demo brand thought, not a customer testimonial</small></div></Fade><Fade delay={.12}><div className="stat-card"><Sparkles /><strong>3</strong><span>flavours to<br />start a conversation</span></div></Fade><Fade delay={.2}><div className="stat-card yellow"><Package /><strong>∞</strong><span>ways to make<br />your menu memorable</span></div></Fade></div></section>

    <section className="faq section"><Fade className="section-intro"><p className="eyebrow">GOOD QUESTIONS</p><h2>Let&apos;s clear<br /><em>things up.</em></h2></Fade><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={20} /></button><AnimatePresence>{openFaq === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{a}</motion.p>}</AnimatePresence></div>)}</div></section>

    <section className="contact section" id="contact"><Fade className="contact-heading"><p className="eyebrow light">LET&apos;S TALK BUSINESS</p><h2>Ready to serve<br /><em>something different?</em></h2><p>Tell us what you&apos;re looking for, and our team can help you explore the possibilities.</p><div className="contact-links"><a href={WA}><MessageCircle size={18} /> WhatsApp us</a><a href="tel:+919818192575">Call +91 9818192575</a></div></Fade><Fade className="form-wrap"><form onSubmit={submit}><div className="form-grid">{[['name', 'Full name *'], ['business', 'Business name'], ['phone', 'Phone number *'], ['email', 'Email address'], ['city', 'City *']].map(([key, label]) => <label key={key}>{label}<input value={form[key as keyof typeof form]} onChange={e => setForm({ ...form, [key]: e.target.value })} /></label>)}<label>Enquiry type<select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>{['Wholesale', 'Café', 'Restaurant', 'Distribution', 'Events', 'Other'].map(x => <option key={x}>{x}</option>)}</select></label></div><label>Approximate requirement<input value={form.requirement} onChange={e => setForm({ ...form, requirement: e.target.value })} placeholder="e.g. monthly cups, event size..." /></label><label>Message<textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>{errors.length > 0 && <p className="error">Please fill in the required fields marked with *.</p>}<button className="button primary" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={17} /></button><small>This demo opens a pre-filled WhatsApp message. No form data is stored.</small></form></Fade></section>

    <footer><div className="footer-top"><div><a href="#top" className="footer-brand">CUP<span>2</span>EAT</a><p>Edible cups for a more memorable way to sip, serve and share.</p><a className="text-link light-link" href={WA}>Start a conversation <span>↗</span></a></div><div><h4>Explore</h4><a href="#products">Our products</a><a href="#why">Why CUP2EAT</a><a href="#applications">Applications</a><a href="#about">About us</a></div><div><h4>Connect</h4><a href="#contact">Wholesale enquiry</a><a href="tel:+919818192575">+91 9818192575</a><a href="https://www.instagram.com/cup2eat/">Instagram ↗</a></div></div><div className="footer-bottom"><span>© 2026 CUP2EAT. Eat your drink!</span><span>Made for deliciously better ideas.</span></div></footer>
  </main>;
}
