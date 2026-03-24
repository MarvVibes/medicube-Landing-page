/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Sparkles, 
  CheckCircle2, 
  Truck, 
  CreditCard, 
  Gift, 
  AlertCircle, 
  Dna, 
  Beaker, 
  Droplets, 
  Sun, 
  ShieldCheck, 
  Timer, 
  Leaf, 
  UserCheck, 
  Ruler, 
  History, 
  Waves, 
  Star, 
  BadgeCheck, 
  Wand2, 
  Palette, 
  Lock, 
  Package, 
  Headphones, 
  ThumbsUp,
  Menu,
  X,
  HelpCircle,
  ArrowRightLeft,
  ShieldAlert,
  Plus,
  Minus,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ShieldCheck as ShieldIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [recentSale, setRecentSale] = useState<{ name: string; location: string } | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);

  useEffect(() => {
    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenMedicubePopup');
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 20000);

    // Exit Intent: Show popup when user moves mouse towards top of screen
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = sessionStorage.getItem('hasSeenMedicubePopup');
        if (!hasSeenPopup) {
          setShowPopup(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const sales = [
      { name: "Chioma", location: "Lagos" },
      { name: "Amina", location: "Abuja" },
      { name: "Oluwatoyin", location: "Ibadan" },
      { name: "Blessing", location: "Port Harcourt" },
      { name: "Fatima", location: "Kano" }
    ];

    const interval = setInterval(() => {
      const randomSale = sales[Math.floor(Math.random() * sales.length)];
      setRecentSale(randomSale);
      setTimeout(() => setRecentSale(null), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 md:px-16 h-20 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tighter text-zinc-900 uppercase font-headline">
            Medicube
          </span>
          
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('tech')} className="text-emerald-700 border-b-2 border-emerald-700 pb-1 font-bold tracking-tight font-headline hover:opacity-80 transition-opacity">PDRN Tech</button>
            <button onClick={() => scrollToSection('results')} className="text-zinc-600 hover:text-zinc-900 transition-colors font-bold tracking-tight font-headline">Clinical Results</button>
            <button onClick={() => scrollToSection('reviews')} className="text-zinc-600 hover:text-zinc-900 transition-colors font-bold tracking-tight font-headline">Reviews</button>
            <button onClick={() => scrollToSection('ingredients')} className="text-zinc-600 hover:text-zinc-900 transition-colors font-bold tracking-tight font-headline">Ingredients</button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={scrollToOrder}
              className="bg-secondary text-on-secondary px-4 py-2 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base hover:opacity-90 transition-all duration-300 active:scale-95"
            >
              Order Now
            </button>
            <button 
              className="md:hidden text-zinc-900 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 p-6 flex flex-col gap-4"
          >
            <button onClick={() => scrollToSection('tech')} className="font-bold text-emerald-700 text-left">PDRN Tech</button>
            <button onClick={() => scrollToSection('results')} className="font-bold text-zinc-600 text-left">Clinical Results</button>
            <button onClick={() => scrollToSection('reviews')} className="font-bold text-zinc-600 text-left">Reviews</button>
            <button onClick={() => scrollToSection('ingredients')} className="font-bold text-zinc-600 text-left">Ingredients</button>
            <button 
              onClick={() => { scrollToOrder(); setIsMenuOpen(false); }}
              className="bg-secondary text-on-secondary w-full py-4 rounded-xl font-bold"
            >
              Order Now
            </button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="tonal-gradient min-h-[700px] md:min-h-[800px] flex items-center pt-8 md:pt-12 pb-16 md:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-xs md:text-sm font-semibold tracking-wide uppercase mx-auto md:mx-0">
                <Sparkles size={16} className="fill-current" />
                Advanced Skin Recovery
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold text-zinc-900 leading-[1.1] tracking-tight">
                Wake Up Looking 10 Years Younger
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed mx-auto md:mx-0">
                Say goodbye to expensive, painful clinical treatments. Our PDRN Pink Peptide Serum delivers salon-grade skin rejuvenation in one bottle.
              </p>
              <ul className="space-y-3 md:space-y-4 text-left max-w-md mx-auto md:mx-0">
                {[
                  "Brightens skin instantly",
                  "Fades dark spots & hyperpigmentation",
                  "Restores a luminous youthful glow"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base md:text-lg font-medium text-on-surface">
                    <CheckCircle2 size={24} className="text-secondary shrink-0 fill-secondary/10" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-6 pt-4">
                <button 
                  onClick={scrollToOrder}
                  className="bg-secondary text-on-secondary text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl font-black hover:opacity-95 transition-all w-full md:w-fit shadow-lg shadow-secondary/20 animate-bounce-subtle"
                >
                  GET THE PINK GLOW NOW
                </button>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 items-center text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <Truck size={18} />
                    <span className="text-xs md:text-sm font-medium">Free delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={18} />
                    <span className="text-xs md:text-sm font-medium">Pay on delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift size={18} />
                    <span className="text-xs md:text-sm font-medium">Free gift</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mt-4 md:mt-0"
            >
              <div className="absolute -inset-4 md:-inset-10 bg-primary-container/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                alt="Medicube Pink Peptide Serum" 
                className="relative z-10 w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover rounded-3xl shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3fOqroDNrTOWDT8RokxvPP91LXENUFE2G4njWimqHkccsjTc9uvj6C8DV29I725a1rC7SGkyBEry6GlY81pNDMNATcqh4h907CC2lAIk_pqUOpGVcxvNB0Q1NGTLSACNIWzVJaglR1IMse0hxBIcKpyKLFVBsn_RrF58m_TapYlw7nUhHNigXibhEE6mbAHDqYCm-fqVIYchAG31m3LlSwaTMGQaLYusex8ZR0emusKIco5SvBKR6Aa-qQhuA9veTHWTE6boDDaE9"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-6 z-20 bg-white p-3 md:p-6 rounded-xl shadow-lg border-l-4 border-secondary max-w-[180px] md:max-w-[280px]"
              >
                <p className="text-zinc-900 font-bold text-xs md:text-lg italic">"The only serum that actually worked for my spots!"</p>
                <p className="text-on-surface-variant text-[8px] md:text-sm mt-1">— Sarah J., Verified Buyer</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Visual Proof Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-headline font-bold text-zinc-900 tracking-tight">Real Results, Real People</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuANojLlC0CsMXQ_lzSK5eho4rWYD1cW1HjVpOYepYpt5c3FqJ6DCOxegP0Lw3Kc3zzOGqAzKMUdNAIHv4MjumwPikzXmK-HOUms2v1c9OmD7D4gFH1EyqksrhocGYVIMtYBoJeyNwJPqLCkDAi59JuhTLVTV4CGiO8wtCUBThZbBLPWIjZC3jpRFr2Rx64Sa33CdywHEuWm_XIW8m1vaCDXZPMs1yqk8LX02oUwQspgMSZwlVcqAOt3GIq6nWlv3pDyUF9ARevPNRGy",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuALXhxO4Av57B7W30cNWIQqYbakc6TqE37s8lgHeoCdzzwCE1Bx3sDJV9Zds5crKGeK28GBOdhMpVqqR9UvzRjo0c2s6SJ2gvNx57Uy05uMVKk-t5upwbhSuN5p8SL6yDhLovl2FeeIadlYAXKlNYM51Hh9kmHEveIn4kvBWcINdlfuS_QOVJ_V6cyQ0miOjDk7C6-ZKeO7sVq815XS2g9egXH1HqXlC9pnZi7ipttNsmj8UEWzXbyqpvErlMn_I50hKYGWMZmbxEzV",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDuWbt6XJHVTIc__upVlB1NexeNebGZIiUSzWX2wddXhgKjoRftOFY6EOSw2WqTSjrPPeQogan0q2NDAG7ZlOKMpCbpYj3gLKPVrvgCX2YH20s4u5jDvKAJlqqr5s6aExsKWeKlf0Nt6_cz-9lfzMqVqmw20shRj_OLNDBx9a2m3TDs0hSuwkpvQvF8y8WoJTAEYLTJfi6Rkfxs_LtdrDZVEP3SiPOR6KIqvl8VF_mLvmKAPPCWqDB5vxHKazWCqp7eiESTdzEjj186",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDlrwv3zYEX_40hkmzMoMhpOT24eXv3JxiJInP2pGTUYF3OqbN9NuODDy9MIikF9G3vXskfJiHEzyayCChJHqhVuzkFgLWQTj3c8UKRlPUPwVQvd72k1p0ZfCeVeCh0Tl312yWD3X38w9QhN1I4NwCuV8b9d_5v08cdiCBv3DYMwP2kVLqhjy22Iggt6AQUxokon_DoIlfmc636Drs8hWy1I_3RRpu1t-3lTOA_4_IfgPgaFVICNBSUWlofbmLL5V3ZfQGPVM_wkLsb"
              ].map((src, i) => (
                <motion.img 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full aspect-square md:h-80 object-cover rounded-2xl shadow-sm ${i % 2 !== 0 ? 'md:mt-12' : ''}`} 
                  src={src}
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-1 md:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img className="w-full aspect-square object-cover rounded-2xl border border-zinc-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLl77ITXMRYyZgvrmiHNt30j18Efxw60T1RBNcVsYM_WgvRl7ufSuA4ZIHL1nD9LjKtijxsH5hTKMU61mWKNHy_dnebvGCDAfn5B4uQpSAppkCKG7ZCQ3sObiE1iiw3cMiAuyg5CX9p0loHsd-WwtCgcl9Qlr7EYIJ5Pgcw8_ZmaPcNNIFiu4eM5HTdEbx72P8hbvQXW1qaW94k2RZXjyW2A8MaGjiWqRIskzfeUo5aG_ljXoRV4VP9KRsekwnZ9lWdKXIDtRiB2I2" referrerPolicy="no-referrer" />
                <p className="text-[10px] md:text-sm font-black text-center text-error uppercase tracking-widest">Uneven Skin Tone</p>
              </div>
              <div className="space-y-4 pt-8 md:pt-16">
                <img className="w-full aspect-square object-cover rounded-2xl border border-zinc-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMUsr9Wxq3nWf-Io0tKIKjXQbvAiNPSHXx7tblWjloSJ6aRU71fOz22rvS5NxZJb_eYiMFUuPEs6x5y1Yt2XGYD3wJT1FMQqhQmK1brzimA3GxvmsIGKAeVTYuC9SlR28L4-HehsZ5v7Bc_Bw_5qCpsXjRag9GXf6qWm_XRFexJTzHBKPPmzQ2C9kuSpB2ZcXhJsDDzfaacVvNxa5hgm3hXahkBOL3kgIIzRSxL6MrWiXb1H6vShCwkSax0UwewPGM1FFsaJ27she" referrerPolicy="no-referrer" />
                <p className="text-[10px] md:text-sm font-black text-center text-error uppercase tracking-widest">Premature Aging</p>
              </div>
            </div>
            <div className="order-2 md:order-2 space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-zinc-900 leading-tight">Tired of hiding behind layers of makeup?</h2>
              <p className="text-base md:text-xl text-on-surface-variant leading-relaxed">
                Acne scars, sun damage, and dullness don't just affect your skin—they affect your confidence. Many treatments are either too harsh or take months to show even a slight difference.
              </p>
              <div className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-primary italic">
                <p className="text-lg md:text-2xl font-semibold text-primary">
                  "I felt like everyone was staring at my spots instead of me."
                </p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4 text-secondary font-bold text-sm md:text-lg">
                  <AlertCircle size={28} className="shrink-0" />
                  <span>Traditional creams only sit on the surface...</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-primary-container/10" id="tech">
          <div className="max-w-7xl mx-auto px-8 md:px-16 text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-zinc-900 mb-4 tracking-tight">The DNA Transformation</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Our proprietary PDRN (Salmon DNA) complex works at the cellular level to repair and regenerate your skin from within.</p>
          </div>
          <div className="max-w-5xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img className="w-full h-[500px] object-cover rounded-3xl shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1unNnpSEnkVfv9NsLPZ5I5Q7gyIBn0tt1U4nlqbVm4uAg-SDYZbmx-bGwrsw5qda1YZe4rnq5d8zdIWje_aCo_U9R3tbtvzYGwCDbZ02ywqYVxqoUD1XCpE_RDIRbL6yxMiSRffb4MKj1VRDufPCjxTobYUPpbpTkjAlGAv03Nn7dx0x8dGjU1SVUp3P7QuInI1J-_keUTKoPglFxfnsfq2_FfACb-1Sylj5DDwjhWfOFwQgxVYI7pr8OiKYf5rn7uL2B_Z_t5w0" referrerPolicy="no-referrer" />
            </motion.div>
            <div className="space-y-10">
              {[
                {
                  icon: <Dna size={32} />,
                  title: "PDRN (Salmon DNA)",
                  desc: "Stimulates collagen production and accelerates skin repair up to 3x faster than standard actives."
                },
                {
                  icon: <Beaker size={32} />,
                  title: "Pink Peptides",
                  desc: "A complex of 5 ultra-stable peptides that firm skin and smooth out fine lines and wrinkles."
                },
                {
                  icon: <Droplets size={32} />,
                  title: "Deep Hydration",
                  desc: "Locks in moisture for 48 hours, giving you that plump, 'glass skin' look all day long."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="bg-white h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-sm text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-on-surface-variant">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-zinc-900 tracking-tight">Why Medicube PDRN?</h2>
              <p className="text-on-surface-variant mt-4">See how we compare to traditional skincare treatments.</p>
            </div>
            
            {/* Mobile Comparison Cards */}
            <div className="md:hidden space-y-6">
              {[
                { feature: "Active Ingredient", medicube: "Salmon DNA (PDRN)", generic: "Basic Hyaluronic Acid" },
                { feature: "Absorption Depth", medicube: "Deep Dermal Layer", generic: "Surface Level Only" },
                { feature: "Cellular Repair", medicube: "Yes, DNA-Level", generic: "No" },
                { feature: "Results Timeline", medicube: "Visible in 14 Days", generic: "3-6 Months" },
                { feature: "Clinical Grade", medicube: "Yes", generic: "No" }
              ].map((row, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded-2xl border border-zinc-100">
                  <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">{row.feature}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-primary uppercase">Medicube</p>
                      <p className="font-bold text-zinc-900">{row.medicube}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase">Generic</p>
                      <p className="text-zinc-500">{row.generic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Comparison Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-zinc-100">
                    <th className="py-6 px-4 text-left font-headline text-xl">Feature</th>
                    <th className="py-6 px-4 text-center bg-primary-container/10 rounded-t-2xl">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-primary font-bold">Medicube PDRN</span>
                        <CheckCircle2 className="text-secondary" />
                      </div>
                    </th>
                    <th className="py-6 px-4 text-center text-zinc-400">Generic Serums</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Active Ingredient", medicube: "Salmon DNA (PDRN)", generic: "Basic Hyaluronic Acid" },
                    { feature: "Absorption Depth", medicube: "Deep Dermal Layer", generic: "Surface Level Only" },
                    { feature: "Cellular Repair", medicube: "Yes, DNA-Level", generic: "No" },
                    { feature: "Results Timeline", medicube: "Visible in 14 Days", generic: "3-6 Months" },
                    { feature: "Clinical Grade", medicube: "Yes", generic: "No" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-50">
                      <td className="py-6 px-4 font-bold text-zinc-700">{row.feature}</td>
                      <td className="py-6 px-4 text-center bg-primary-container/5 font-bold text-primary">{row.medicube}</td>
                      <td className="py-6 px-4 text-center text-zinc-500">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Before & After Grid */}
        <section className="py-24 bg-white" id="results">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-zinc-900 tracking-tight">Real Transformations</h2>
              <p className="text-on-surface-variant mt-4 font-medium uppercase tracking-widest text-sm">Visible results in as little as 14 days</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU8Sm7eM45Ex_w7iivt2M5geZyVRy0KJLxWhTgx_myZ35HSPaDCy55ziDjxFdcd0b17BabH8S0tTHKlhzvVBHXD1knDRYV-nH9uryehAOStkTk_ZyNFi8OmWNOFyQIlMU25HKUDSLeSXaSTgSvYB66GM1ep3nTZwobbPq389QgWxzh6coNhSpz9CaPssFE8H2chP1fXVU1jSLW8a1h8OIfKaVaRiX-7wyxdPerQC2Ui7nfNdov6ZSHCrBKcMDXlYjy36IQa0Vzp8nd",
                  after: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG0jh8dFnNm8uzxJmBQLRtHSLsjQ-pfKcVsFOLcq51ftM1-bTBEq-bmTME5oZHtPEpOeo9KcXMC4FjDpHMrh6QojE-_r7rlbzgCHxkDr6P3jkgmYWq_BBUWZyXAXhPesbS38ELDbiAn2FIPQvdulOKj7GBpMWr8ezZpLeZDX0C81GrdIKKiFe0RtIrH0R4wREBI38cIB9b8rHcsYOx-Cy2EjLVgclenMKEG1K6EZrOLlK-UA7XpFKgOUbxyXIL8YnMkoBMVHLPg6RP",
                  afterText: "AFTER 2 WEEKS",
                  quote: "The dark spots I had for years are finally fading."
                },
                {
                  before: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hStI1PMycMz99lf-UPwVCnC2CL37cR0X5Sg08vbaTrgeDB0ITafcqe4kkjz9m4cVXCts6Y0n-Nf0R-8D5Ne4I1eBpa3pxq002NCo5kesclj4s8NnqhFEJ2T11dps2YFh9aPI_kcAGNsheBBU7kLb-PANWSe0iW2aXlEZh-mF5sCmEfkr0XABOZrDcYcDZpiyIn_X3KZbQXHoAmGaECQimtD56-XN58pA3UM0mmD9Zwu3cqxoMNCyEzDXdWGd2GigBwArItOJRqhV",
                  after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnZhFn1P6Kh16_Z4hmtY-u7YbFRoDRHXEuP89s4x4N_AM4LGK1wQIESK5U29Gwg4iR1uGSIZXCiyRbbaIY5Aoit7To3wgFIw51lKFOWwRc7WjJbjXnERbYGgC5fsJY90Ql4behyv-Qfy7Ask59-DWDHml-buskgqTe_5yYlrOePNUHbFh-U3xZD3aZLgIbvSsIhSzgN288KC3jo70tbdGZeGVFW4MKPSkkYsA771N7Rugha18Xf42c302voyd4icW0CdhJ5COJugou",
                  afterText: "AFTER 1 MONTH",
                  quote: "My friends asked if I got Botox. I just used Medicube!"
                },
                {
                  before: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-fpuQxJg2E7204OVAYxGyH9ElvlLKq_vosnMdloTm4eWGxgmgnUBsCa6MfjsOi7t9TSnFMoJWogGnZGN7kJcPJ3_-QOFCQTNE9oTOHdij63cvH-uZpL94KLW4ukaWiF-peorN2tny4TbmUeu20iHQOyOZM4sYXxWs_XYINTl-Ap5k2sq9RVF8HSm0ns-TUzOOIREPIZxWGaJwNEMAleSdO6c0M23u97FAr9YmKpQ2eBQYhQY7TeSOyZPHXl04tyg3ta0cSRyUvrDp",
                  after: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgArxEjJ9wfpVQNW1L3WSK4tHiavPAioNZaznI2a5E8VsXr79THdZdP-hJszccTGdtQH3YnHa6B-zpHcjS9VIOkY2taLUlVHYSOr90QwtCKIhevF04Gpnp6L3TmruExbgvpWGcUXKD97UiwO1LfWzw41unWXKlIZQw3Lh_8Or_JmaOwwHh6wgKraC_VH8IkQb0AXn4ZHQ7ta8wdNYt5bYXzGN-yVgJkOko3WfA-rOctT_D1ll4e284F_LXC1r1Wt1DrIWgitvQutR",
                  afterText: "AFTER 3 WEEKS",
                  quote: "Redness gone. Texture smooth. I'm obsessed."
                }
              ].map((item, i) => (
                <div key={i} className="bg-surface p-4 rounded-2xl">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="relative">
                      <img className="rounded-xl aspect-square w-full object-cover" src={item.before} referrerPolicy="no-referrer" />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[8px] md:text-[10px] px-2 py-1 rounded font-black tracking-widest">BEFORE</span>
                    </div>
                    <div className="relative">
                      <img className="rounded-xl aspect-square w-full object-cover border-2 border-secondary/20" src={item.after} referrerPolicy="no-referrer" />
                      <span className="absolute bottom-2 left-2 bg-secondary text-white text-[8px] md:text-[10px] px-2 py-1 rounded font-black tracking-widest">{item.afterText}</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm italic font-medium">"{item.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-zinc-900 tracking-tight">The Ultimate Skin Solution</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: <Sun />, title: "Instant Glow", desc: "Light-reflecting particles for immediate radiance." },
                { icon: <ShieldCheck />, title: "Dermatologist Tested", desc: "Safe for sensitive and acne-prone skin types." },
                { icon: <Timer />, title: "Fast Absorbing", desc: "Non-greasy formula that layers perfectly under makeup." },
                { icon: <Leaf />, title: "100% Vegan", desc: "Ethically sourced and never tested on animals." },
                { icon: <UserCheck />, title: "Barrier Repair", desc: "Strengthens your skin's natural defense system." },
                { icon: <Ruler />, title: "Pore Tightening", desc: "Refines skin texture for a smoother appearance." },
                { icon: <History />, title: "Anti-Wrinkle", desc: "Reduces appearance of crows feet and smile lines." },
                { icon: <Waves />, title: "Intense Plumping", desc: "Deeply hydrates for youthful, elastic skin." }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 sm:p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center"
                >
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-zinc-900 text-sm sm:text-base leading-tight">{benefit.title}</h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white" id="reviews">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <h2 className="text-4xl font-headline font-bold text-zinc-900 tracking-tight">Loved by 10,000+ Women</h2>
              <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-secondary fill-secondary" />)}
                </div>
                <span className="font-bold text-zinc-900">4.9/5 Rating</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amanda K.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8y4JWLqSH_bfoHKC4qhnH2DPCslYMAVEmd0OfIfWvBRy3BZPhmpADS49Vk5zZeh5p0cbywcdsXHnPu7CTQRU3Ly3dtJlSThq_ll7Ct0gEMElxv-YPYY4RjGOwr4J_KNHxREgIqe7sS4Judy7HwIpViro9B7-C4PeWm_9q7weRN0otTcHP-WqE2QkPeaFVvsmKXrdBwbiKzGNLmdnON6a7qv2SewrrsGEyndJcnZ6eIBVrahfc3deRA9cgbTIE5tTpp34C4XGX4VsZ",
                  text: "This serum is a miracle worker. My hyperpigmentation from years of sun exposure literally started disappearing in the first week. My skin has never looked this bright."
                },
                {
                  name: "Bisi O.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDOo3CSbM6cmXGDUtmHRBzMsribjyVq8QuojaDab96FNeSOu3HJ3a4nPf0ueMFtlnNvTrjrSvJkjEz_oBNXV795IL94OG3PWpIY0AgpMiklho1ax3UWj8MHPhm2yX33piayLCQHpi-rFculVR2je7adEE8plb7720sbFRABRdYIWAISAiumbjUdwyG4yuMnwMxMt0KA9omOxryYmzfKYyhNhMbiiI0KG8Qa4rhxrIXvSPCJXId2ZlsOpsAkr7bgTbPE8mLcpEYdmlz",
                  text: "I was skeptical about salmon DNA, but the results don't lie. My skin feels firm and plump. No more dullness when I wake up. It's my new holy grail."
                },
                {
                  name: "Evelyn W.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApK1cOi8LcZJudCH27jBsGbqRRvaM2Zov__TJXMxdu_cbsxjDaP1DKMI1m9VIREhIzRO8R2Tvm0JDxtcayjlCI44-2XHAo5pAJnPnNKDNePZ8KSfy3c9UADa8oDrW7jI6G4s3vuKXiPQfGrLKNVYFNEJ_Gk68xCcWvHWFe3aUBxbpoXAryRUC2gtbKFJXXrCHu3dG2a4tPndcMyXKwjPHG5zdlpwVn_1vtax1iwretF33CQY8plrWZi0rzdBqXvkuQLyeEIQRnhYWT",
                  text: "The texture is amazing, it absorbs instantly. I use it under my sunscreen every morning. My fine lines around the eyes are visibly smoother. Highly recommend!"
                }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-[0_12px_32px_rgba(122,84,91,0.06)] border border-zinc-50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img className="w-12 h-12 rounded-full object-cover" src={t.img} referrerPolicy="no-referrer" />
                    <div>
                      <h5 className="font-bold text-zinc-900">{t.name}</h5>
                      <p className="text-xs text-secondary font-bold">Verified Purchase</p>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">"{t.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 bg-surface-container-low overflow-hidden" id="ingredients">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-headline font-bold text-zinc-900 tracking-tight">Meticulously Crafted Quality</h2>
                <div className="space-y-6">
                  {[
                    { icon: <BadgeCheck />, title: "Sealed for Potency", desc: "Airtight medical-grade glass to keep actives alive." },
                    { icon: <Wand2 />, title: "Precision Dropper", desc: "Deliver exactly what your skin needs, no waste." },
                    { icon: <Palette />, title: "Natural Pink Hue", desc: "Derived from Vitamin B12, no synthetic dyes." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
                      <div className="text-secondary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900">{item.title}</p>
                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img className="rounded-2xl h-64 w-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5KCDaqe1q2cBoOFfRgyPYU4dt4uye4RiAk1cb1iLAHO4lTRL2olOnmxQ3yIU6lQCsnJ2CSPEK8o3Ac31IN7TBKkao7Wn8N8kekWYdYDKNTqvHGN7cZu4jBhS4RDn3zMcFZhVA28qXgWtn85p_pBze0mkz5RmkkKTAqFB9jly2yCE0qWgIkrNHlKvT-kfSVKlDDySdJpKEofGdTR50ZxP_zQTli6iqweUQngwXpsjKYSfGKOPaIqPdikA2jQ3zepSJWacsL3xPQGsz" referrerPolicy="no-referrer" />
                <img className="rounded-2xl h-64 w-full object-cover mt-8 shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0s-AfsXhrVmo-MCanHZy6RItJy4wVfMjiLdnXrDEv_krE-J5oTX47Fm_QWNLF0DBBPv3ijDGKtv3fNXdJV6WMO467OPhsQUPFYwqb5BsW4dAZ-TBUdNqZYpeDB1HByMg_X0nRcqom5iPK-MFh9bruvfQ2CPaesmvOzltVuyXMEU41SkJtTUexgTdNf_KNpLwEhlYh1JhkRchqjiTazgyJ5XUOEO392xzVcK8k68fsDM53bLZeZk8SwxFN8Vdtqoy0xolUOPHXlgjo" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-24 bg-white" id="order">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] border-2 border-primary-container p-6 md:p-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full bg-error text-white py-3 text-center text-xs md:text-sm font-bold uppercase tracking-widest">
                FLASH SALE ENDS IN: 04:59:12
              </div>
              <div className="pt-8 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-zinc-900">Secure Your Radiant Skin Today</h2>
                <p className="text-base md:text-lg font-bold text-zinc-900">CHOOSE YOUR BUNDLE & SAVE MORE!</p>
                
                <div className="grid gap-4 pt-4">
                  {[
                    { title: "1 Bottle (Trial Pack)", price: "₦25,000", oldPrice: "₦30,000", tag: "Popular", savings: "Save ₦5,000" },
                    { title: "2 Bottles (Best Value)", price: "₦45,000", oldPrice: "₦60,000", tag: "Recommended", savings: "Save ₦15,000" },
                    { title: "3 Bottles (Ultimate Glow)", price: "₦60,000", oldPrice: "₦90,000", tag: "Best Deal", savings: "Save ₦30,000" }
                  ].map((bundle, i) => (
                <div key={i} className={`p-4 md:p-6 rounded-2xl border-2 text-left cursor-pointer transition-all relative ${i === 1 ? 'border-secondary bg-secondary/5 animate-pulse-soft shadow-lg' : 'border-zinc-100 hover:border-secondary/30'}`}>
                  {bundle.tag && (
                    <span className={`absolute -top-3 right-4 md:right-6 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest ${i === 1 ? 'bg-secondary text-white' : 'bg-zinc-900 text-white'}`}>
                      {bundle.tag}
                    </span>
                  )}
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <h4 className="font-black text-zinc-900 text-sm md:text-base">{bundle.title}</h4>
                      <p className="text-xs md:text-sm text-secondary font-bold">{bundle.savings}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] md:text-xs text-zinc-400 line-through">{bundle.oldPrice}</p>
                      <p className="text-lg md:text-2xl font-black text-zinc-900">{bundle.price}</p>
                    </div>
                  </div>
                </div>
                  ))}
                </div>

                <div className="bg-primary-container/10 p-4 md:p-6 rounded-2xl space-y-3 inline-block w-full text-left">
                  {[
                    "Medicube PDRN Pink Peptide Serum (30ml)",
                    "BONUS: Clinical Silicone Applicator (Free)",
                    "Free Nationwide Delivery",
                    "Pay only when you receive your order"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 fill-secondary/10" />
                      <span className={i === 1 ? "font-bold" : ""}>{item}</span>
                    </div>
                  ))}
                </div>
                {!isOrdered ? (
                  <button 
                    onClick={() => setIsOrdered(true)}
                    className="w-full bg-secondary text-on-secondary text-xl md:text-2xl py-5 md:py-6 rounded-2xl font-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-secondary/20"
                  >
                    CLICK TO ORDER NOW
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border-2 border-emerald-500 p-6 rounded-2xl text-center"
                  >
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-zinc-900 mb-2">Order Received!</h3>
                    <p className="text-zinc-600">Our team will contact you shortly to confirm your delivery details.</p>
                  </motion.div>
                )}
                <p className="text-xs md:text-sm text-on-surface-variant flex items-center justify-center gap-2">
                  <Lock size={14} />
                  Safe & Secure Checkout
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
              {[
                { icon: <BadgeCheck size={40} />, label: "CAC Registered" },
                { icon: <Package size={40} />, label: "Authentic Product" },
                { icon: <Headphones size={40} />, label: "24/7 Support" },
                { icon: <ThumbsUp size={40} />, label: "100% Reliable" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center text-zinc-600">
                    {badge.icon}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-8 md:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Is this serum safe for sensitive skin?",
                  a: "Yes! Medicube PDRN is dermatologist-tested and formulated specifically to be gentle yet effective on all skin types, including sensitive and acne-prone skin."
                },
                {
                  q: "How soon will I see results?",
                  a: "Most users report a visible 'glow' after the first application. Significant improvements in skin texture and dark spots are typically seen within 14 to 21 days of consistent use."
                },
                {
                  q: "Do I pay before or after delivery?",
                  a: "We offer Payment on Delivery for your peace of mind. You only pay when the courier hands you your package."
                },
                {
                  q: "How long does one bottle last?",
                  a: "With daily use (morning and night), one 30ml bottle typically lasts between 4 to 6 weeks."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-zinc-100">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-bold text-zinc-900">{faq.q}</span>
                    {activeFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-on-surface-variant leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 tonal-gradient">
          <div className="max-w-4xl mx-auto px-8 md:px-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-zinc-900">Ready to transform your skin journey?</h2>
            <p className="text-xl text-on-surface-variant">Join thousands of women who have found their confidence in a bottle. No risks, just results.</p>
            <div className="pt-4">
              <button 
                onClick={scrollToOrder}
                className="bg-secondary text-on-secondary text-xl px-16 py-6 rounded-full font-bold shadow-2xl hover:opacity-90 transition-all active:scale-95"
              >
                BUY NOW & SAVE ₦5,000
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">
          <div className="space-y-4">
            <span className="text-lg font-bold text-zinc-900 font-headline uppercase tracking-tighter">Medicube</span>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-md mx-auto md:mx-0">
              built by Marvelous Ndukwe @2026 al rights reserved, @Kanimart store, your trusted online store
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
            {["Privacy Policy", "Terms of Service", "Shipping Info", "Contact Us", "Store Locator"].map((link, i) => (
              <a key={i} className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors hover:underline decoration-emerald-500/30 underline-offset-4" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
      {/* High-Conversion Exit/Timed Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] sm:rounded-[2.5rem] overflow-y-auto max-h-[90vh] shadow-2xl no-scrollbar"
            >
              <button 
                onClick={() => {
                  setShowPopup(false);
                  sessionStorage.setItem('hasSeenMedicubePopup', 'true');
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-white/80 backdrop-blur-md text-zinc-500 hover:bg-white transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="relative h-32 sm:h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3fOqroDNrTOWDT8RokxvPP91LXENUFE2G4njWimqHkccsjTc9uvj6C8DV29I725a1rC7SGkyBEry6GlY81pNDMNATcqh4h907CC2lAIk_pqUOpGVcxvNB0Q1NGTLSACNIWzVJaglR1IMse0hxBIcKpyKLFVBsn_RrF58m_TapYlw7nUhHNigXibhEE6mbAHDqYCm-fqVIYchAG31m3LlSwaTMGQaLYusex8ZR0emusKIco5SvBKR6Aa-qQhuA9veTHWTE6boDDaE9" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-10 text-center space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] sm:text-xs font-black uppercase tracking-widest">
                  <Timer size={14} />
                  One-Time Offer
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-headline font-black text-zinc-900 leading-tight">
                    Wait! Your Skin DNA is Calling... 🧬
                  </h3>
                  <p className="text-on-surface-variant text-base sm:text-lg">
                    Don't leave without the <span className="text-secondary font-bold">Pink Glow</span>. Grab your bottle now and get a <span className="font-bold text-zinc-900">FREE Clinical Applicator</span> (Value ₦5,000).
                  </p>
                </div>

                <div className="bg-zinc-50 p-4 sm:p-6 rounded-2xl border border-dashed border-secondary/30">
                  <p className="text-[10px] sm:text-sm text-zinc-500 uppercase font-bold tracking-widest mb-1">Exclusive Discount Code:</p>
                  <p className="text-2xl sm:text-3xl font-headline font-black text-secondary tracking-tighter">GLOW2024</p>
                </div>

                <button 
                  onClick={() => {
                    scrollToOrder();
                    setShowPopup(false);
                    sessionStorage.setItem('hasSeenMedicubePopup', 'true');
                  }}
                  className="w-full bg-secondary text-on-secondary py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  CLAIM MY FREE GIFT
                </button>

                <p className="text-xs text-zinc-400 font-medium">
                  *Offer valid for the next 10 minutes only. Free delivery included.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Social Proof Notification */}
      <AnimatePresence>
        {recentSale && (
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="fixed bottom-24 left-4 md:left-8 z-50 bg-white p-4 rounded-2xl shadow-2xl border border-zinc-100 flex items-center gap-4 max-w-[300px]"
          >
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">{recentSale.name} from {recentSale.location}</p>
              <p className="text-xs text-on-surface-variant">Just purchased 2 bottles! 🛍️</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
