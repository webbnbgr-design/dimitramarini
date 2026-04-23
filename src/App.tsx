/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Briefcase,
  Users,
  Building2,
  GraduationCap
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Αρχική", href: "#home" },
    { name: "Η Δήμητρα", href: "#bio" },
    { name: "Τομείς", href: "#practice" },
    { name: "Το Γραφείο", href: "#office" },
    { name: "Επικοινωνία", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-xl md:text-2xl font-serif tracking-tighter uppercase font-medium leading-none">
            Δήμητρα Κ. Μαρίνη
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-slate/60 mt-1">
            Δικηγορικό Γραφείο
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="text-xs uppercase tracking-widest hover:text-brand-rose transition-colors font-medium"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="tel:6977407451"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-brand-slate text-brand-cream text-xs uppercase tracking-widest rounded-full hover:bg-brand-rose transition-colors"
          >
            Κληση
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-slate"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-slate/10 py-10 px-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:6977407451"
              className="mt-4 px-6 py-4 bg-brand-rose text-brand-slate text-center text-sm uppercase tracking-widest font-bold"
            >
              Προγραμματίστε μια Συνάντηση
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Abstract Background Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-brand-slate opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-brand-rose opacity-40" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-brand-slate/60 mb-6 block">
            Ήθος   •   Συνέπεια   •   Κύρος
          </span>
          <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-10">
            Δήμητρα Κ. Μαρίνη<br />
            <span className="italic text-brand-rose font-light text-4xl md:text-6xl block mt-4">Νομική Εκπροσώπηση με Σύγχρονη Αντίληψη</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-slate/70 mb-12 font-light leading-relaxed">
            Συνδυάζοντας την ακαδημαϊκή αριστεία του ΑΠΘ με την δυναμική προσέγγιση της νέας γενιάς, 
            προσφέρουμε εξατομικευμένη νομική εκπροσώπηση υψηλού επιπέδου στην Κόρινθο.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:6977407451"
              className="px-10 py-5 bg-brand-slate text-brand-cream rounded-none text-sm uppercase tracking-widest font-medium hover:bg-brand-rose transition-colors flex items-center gap-3"
            >
              Προγραμματίστε Συνάντηση <Phone size={16} />
            </motion.a>
            <motion.a
              href="#practice"
              className="text-xs uppercase tracking-widest border-b border-brand-slate pb-1 hover:border-brand-rose hover:text-brand-rose transition-all flex items-center gap-2"
            >
              Δείτε τους Τομείς Πρακτικής <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Footnote */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-6 right-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-brand-slate/40"
      >
        <span>Δικηγόρος Κορίνθου</span>
        <span>Est. New Generation</span>
      </motion.div>
    </section>
  );
};

const Bio = () => {
  return (
    <section id="bio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative aspect-[4/5] bg-brand-cream overflow-hidden border border-brand-slate/10"
        >
          {/* We use an abstract container instead of many photos */}
          <div className="absolute inset-0 flex items-center justify-center text-brand-slate/10 scale-[5]">
             <GraduationCap size={100} />
          </div>
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-3xl font-serif mb-4">Η Θεμελίωση</h3>
            <p className="text-sm tracking-widest uppercase text-brand-slate/60">Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest text-brand-rose font-bold mb-4 block">Το Προφίλ</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Επαγγελματισμός με <br /><span className="italic">Προσωπική Προσέγγιση</span>
          </h2>
          <div className="space-y-6 text-brand-slate/80 leading-relaxed font-light text-lg">
            <p>
              Η Δήμητρα Κ. Μαρίνη είναι δικηγόρος Κορίνθου, απόφοιτος της νομικής σχολής του 
              <span className="font-medium text-brand-slate"> Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ)</span>. 
              Η εκπαίδευσή της σε ένα από τα κορυφαία ακαδημαϊκά ιδρύματα της χώρας αποτελεί την εγγύηση 
              της άρτιας νομικής κατάρτισης και του ήθους που διέπει κάθε της ενέργεια.
            </p>
            <p>
              Εκπροσωπεί τη νέα γενιά δικηγόρων που αντιλαμβάνεται τις προκλήσεις της σύγχρονης εποχής, 
              χρησιμοποιώντας νέα εργαλεία και άμεση επικοινωνία για να προσφέρει ειλικρινή και 
              αποτελεσματική υποστήριξη στους πελάτες της.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-serif">4.7/5</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-slate/50">Google reviews</span>
              <div className="flex gap-1 text-brand-rose mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
            </div>
            <div className="w-[1px] h-12 bg-brand-slate/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif">AUTh</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-slate/50">Law School Foundation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    { title: "Αστικό Δίκαιο", desc: "Οικογενειακές διαφορές, εμπράγματο και κληρονομικό δίκαιο με λεπτή διαχείριση.", icon: <Users size={24} /> },
    { title: "Εμπορικό Δίκαιο", desc: "Συμβουλευτική επιχειρήσεων και νομική κάλυψη εμπορικών δραστηριοτήτων.", icon: <Briefcase size={24} /> },
    { title: "Ποινικό Δίκαιο", desc: "Υπεύθυνη εκπροσώπηση και προάσπιση των δικαιωμάτων σας σε κάθε στάδιο.", icon: <Scale size={24} /> },
    { title: "Ακίνητα & City Law", desc: "Νομικός έλεγχος και υποστήριξη σε αγοραπωλησίες και μισθώσεις.", icon: <Building2 size={24} /> },
  ];

  return (
    <section id="practice" className="py-24 bg-brand-cream border-y border-brand-slate/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest text-brand-rose font-bold mb-4 block">Τι Κάνουμε</span>
          <h2 className="text-4xl md:text-6xl font-serif">Τομείς Πρακτικής</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-slate/10 border border-brand-slate/10">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-cream p-12 hover:bg-white transition-colors group"
            >
              <div className="text-brand-rose mb-8 group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{area.title}</h3>
              <p className="text-brand-slate/60 text-sm leading-relaxed mb-6 italic">
                {area.desc}
              </p>
              <ArrowRight size={16} className="text-brand-rose opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Office = () => {
  return (
    <section id="office" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl"
         >
           <span className="text-xs uppercase tracking-widest text-brand-rose font-bold mb-4 block">Ο Χώρος μας</span>
           <h2 className="text-4xl md:text-6xl font-serif mb-12">Κολιάτσου 34, Κόρινθος</h2>
           <p className="text-xl md:text-2xl font-serif italic text-brand-slate/50 mb-16 leading-relaxed">
             "Ένας χώρος με ιδιαίτερη αισθητική στο κέντρο της πόλης, σχεδιασμένος για να αποπνέει την σοβαρότητα και την προσοχή στη λεπτομέρεια που αξίζει η υπόθεσή σας."
           </p>
         </motion.div>

         <div className="grid md:grid-cols-3 gap-8 w-full">
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               className="h-96 bg-brand-slate/5 border border-brand-slate/10 flex items-center justify-center p-12 relative overflow-hidden group"
            >
               <span className="text-sm uppercase tracking-widest font-bold z-10">Αισθητική</span>
               <div className="absolute inset-0 bg-brand-rose/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="h-96 bg-brand-slate/5 border border-brand-slate/10 flex items-center justify-center p-12 relative overflow-hidden group md:mt-12"
            >
               <span className="text-sm uppercase tracking-widest font-bold z-10">Εμπιστευτικότητα</span>
               <div className="absolute inset-0 bg-brand-rose/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 30 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="h-96 bg-brand-slate/5 border border-brand-slate/10 flex items-center justify-center p-12 relative overflow-hidden group"
            >
               <span className="text-sm uppercase tracking-widest font-bold z-10">Σοβαρότητα</span>
               <div className="absolute inset-0 bg-brand-rose/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
         </div>
      </div>
    </section>
  );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-slate text-brand-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-serif mb-12">Προγραμματίστε μια Συνάντηση</h2>
                        <div className="space-y-12">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full border border-brand-cream/20 text-brand-rose">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-2 block font-medium">Τηλεφωνική Επικοινωνία</span>
                                    <a href="tel:6977407451" className="text-2xl md:text-3xl font-serif hover:text-brand-rose transition-colors">6977 407451</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full border border-brand-cream/20 text-brand-rose">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 mb-2 block font-medium">Διεύθυνση</span>
                                    <p className="text-2xl md:text-3xl font-serif">Κολιάτσου 34, Κόρινθος</p>
                                    <p className="text-sm text-brand-cream/50 mt-2">Κέντρο Πόλης, Τ.Κ. 20131</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <div className="p-12 border border-brand-cream/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-2xl font-serif mb-6 italic">Γιατί εμάς;</h3>
                            <ul className="space-y-6">
                                {[
                                    "Εγγύηση νομικής κατάρτισης ΑΠΘ",
                                    "Εξατομικευμένη υποστήριξη πελάτη",
                                    "Άμεση και ειλικρινής επικοινωνία",
                                    "Συνέπεια και αποτελεσματικότητα"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-brand-cream/70">
                                        <CheckCircle2 size={16} className="text-brand-rose" />
                                        <span className="text-sm font-light tracking-wide">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.a
                               whileHover={{ scale: 1.02 }}
                               whileTap={{ scale: 0.98 }}
                               href="tel:6977407451"
                               className="mt-12 w-full py-6 bg-brand-rose text-brand-slate text-center text-xs uppercase tracking-widest font-bold block"
                            >
                                Καλέστε Άμεσα
                            </motion.a>
                        </div>
                    </div>
                </div>
                
                <div className="mt-32 pt-16 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-widest text-brand-cream/30">
                    <div className="text-center md:text-left">
                        © 2024 Δικηγορικό Γραφείο Δήμητρας Κ. Μαρίνη. All rights reserved.
                    </div>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-brand-cream">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-cream">Legal Notice</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function App() {
  return (
    <div className="relative selection:bg-brand-rose/30 selection:text-brand-slate">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <PracticeAreas />
        <Office />
        <Contact />
      </main>
    </div>
  );
}

