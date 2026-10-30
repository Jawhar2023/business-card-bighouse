import { motion } from "framer-motion";
import { Phone, MapPin, Mail, MessageCircle, Globe, UserPlus } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import ParallaxLogo from "@/components/ParallaxLogo";
import TypingText from "@/components/TypingText";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const spring = { type: "spring" as const, stiffness: 300, damping: 24 };
const stagger = 0.08;

const servicesLine1 = [
  { label: "Coffee Shop Supplies", emoji: "☕" },
  { label: "Restaurant Equipment", emoji: "🍽️" },
];

const servicesLine2 = [
  { label: "Packaging & Paper", emoji: "📦" },
];

const contacts = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 52 271 887",
    href: "tel:+21652271887",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bighousetunisia@gmail.com",
    href: "mailto:bighousetunisia@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+216 52 271 887",
    href: "https://wa.me/21652271887",
  },
  {
    icon: Globe,
    label: "Site Web",
    value: "bighouseariana.com",
    href: "https://www.bighouseariana.com/",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Ariana, Tunisie",
    href: "https://maps.google.com/?q=Big+House+Ariana+Tunisie",
  },
];

const socials = [
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/bighousetn",
    label: "Facebook",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/bighouseariana/?hl=fr",
    label: "Instagram (Big House)",
  },
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/21652271887",
    label: "WhatsApp",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    href: "https://www.bighouseariana.com/",
    label: "Site Web Big House Ariana",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    href: "https://maps.google.com/?q=Big+House+Ariana+Tunisie",
    label: "Google Maps",
  },
];

const Index = () => {
  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Big House",
      "ORG:Big House Papeterie & Fournitures",
      "TITLE:Fournitures Coffee Shop & Restaurant",
      "TEL;TYPE=CELL,VOICE:+21652271887",
      "EMAIL;TYPE=WORK,INTERNET:bighousetunisia@gmail.com",
      "URL:https://www.bighouseariana.com/",
      "ADR;TYPE=WORK:;;Ariana;Ariana;;;Tunisia",
      "NOTE:Nous fournissons tout le nécessaire pour les coffee shops et restaurants.",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Big_House_Contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#ebe8e4] px-4 py-6">
      <BackgroundEffects variant="optic" />

      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-[380px]"
      >
        {/* Phone frame — warm gold & luxury amber rim */}
        <div
          className="relative rounded-[2.35rem] p-[2px] shadow-[0_28px_70px_-18px_rgb(0_0_0/0.2),0_0_0_1px_rgb(0_0_0/0.06),0_-1px_0_rgb(255_255_255/0.5)_inset]"
          style={{
            background:
              "linear-gradient(155deg, #ffffff 0%, #f5efe6 42%, hsl(38 65% 90%) 72%, #ebe4dc 100%)",
          }}
        >
          <div className="rounded-[2.2rem] bg-neutral-950 p-[3px] shadow-[inset_0_2px_8px_rgb(0_0_0/0.45)]">
            <div className="relative rounded-[2.05rem] bg-white p-1.5 shadow-[inset_0_0_0_1px_rgb(0_0_0/0.04)]">
              <div
                className="pointer-events-none absolute -right-6 -top-10 h-32 w-40 rounded-full opacity-[0.28] blur-3xl"
                style={{ background: "hsl(38 90% 80%)" }}
              />
              <div className="relative z-[1] mx-auto mt-1.5 h-[5px] w-[72px] shrink-0 rounded-full bg-neutral-900/85" />

              <div className="optic-phone-card relative z-[1] mt-3 mx-0.5 mb-1 rounded-[1.4rem] border border-neutral-200/90 bg-white px-3 sm:px-4 pb-5 pt-4 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.1)]">
                {/* Logo section */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, ...spring }}
                  className="flex flex-col items-center"
                >
                  <ParallaxLogo variant="brand" />

                  <h1 className="mt-5 flex w-full justify-center text-center">
                    <TypingText
                      text="Big House"
                      className="font-display text-[1.45rem] font-black uppercase tracking-[0.2em] text-neutral-900 sm:text-2xl sm:tracking-[0.25em]"
                      cursorClassName="typing-cursor-optic"
                    />
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="font-opticDesc mx-auto mt-3.5 max-w-[19rem] text-center text-[0.92rem] font-normal leading-relaxed text-neutral-600 sm:text-base"
                  >
                    Nous fournissons tout ce dont les coffee shops et restaurants ont besoin — emballages, vaisselle, consommables et accessoires professionnels de qualité.
                  </motion.p>
                </motion.div>

                {/* Services in 2 lines */}
                <div className="mt-5 flex flex-col items-center gap-1.5 w-full">
                  {/* Line 1: 2 items side-by-side */}
                  <div className="flex w-full items-center justify-center gap-1.5">
                    {servicesLine1.map((s, i) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, scale: 0.5, rotate: -6 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 1.4 + i * stagger, ...spring }}
                        whileHover={{ scale: 1.03, boxShadow: "0 6px 20px -8px hsl(38 85% 65% / 0.5)" }}
                        className="press-feedback flex min-w-0 items-center justify-center gap-1 rounded-full border border-neutral-200/90 bg-neutral-50/90 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-neutral-800 backdrop-blur-sm whitespace-nowrap"
                      >
                        <span className="shrink-0">{s.emoji}</span>
                        <span className="truncate">{s.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Line 2: 1 item centered */}
                  <div className="flex w-full items-center justify-center">
                    {servicesLine2.map((s) => (
                      <motion.div
                        key={s.label}
                        initial={{ opacity: 0, scale: 0.5, rotate: 6 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 1.56, ...spring }}
                        whileHover={{ scale: 1.03, boxShadow: "0 6px 20px -8px hsl(38 85% 65% / 0.5)" }}
                        className="press-feedback flex items-center justify-center gap-1.5 rounded-full border border-neutral-200/90 bg-neutral-50/90 px-3.5 py-1 text-[11px] sm:text-xs font-medium text-neutral-800 backdrop-blur-sm whitespace-nowrap"
                      >
                        <span className="shrink-0">{s.emoji}</span>
                        <span>{s.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleSaveContact}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, ...spring }}
                  className="press-feedback mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-900 bg-neutral-900 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_28px_-10px_rgb(0_0_0/0.28),0_0_0_1px_rgb(0_0_0/0.06)] transition-[color,background-color,transform] hover:bg-neutral-800"
                >
                  <UserPlus className="h-4 w-4 shrink-0 text-white" />
                  + Ajouter aux contacts
                </motion.button>

                {/* Quick actions */}
                <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                  <motion.a
                    href="tel:+21652271887"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.0, ...spring }}
                    whileHover={{ scale: 1.15 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm"
                    aria-label="Call +216 52 271 887"
                  >
                    <Phone className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="mailto:bighousetunisia@gmail.com"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.05, ...spring }}
                    whileHover={{ scale: 1.15 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm"
                    aria-label="Email bighousetunisia@gmail.com"
                  >
                    <Mail className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/21652271887"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.1, ...spring }}
                    whileHover={{ scale: 1.15 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-emerald-700 shadow-sm dark:text-emerald-600"
                    aria-label="WhatsApp Big House"
                  >
                    <WhatsAppIcon />
                  </motion.a>
                  <motion.a
                    href="https://www.bighouseariana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.12, ...spring }}
                    whileHover={{ scale: 1.15 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm"
                    aria-label="Website Big House Ariana"
                  >
                    <Globe className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com/?q=Big+House+Ariana+Tunisie"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.18, ...spring }}
                    whileHover={{ scale: 1.15 }}
                    className="press-feedback flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-amber-800 shadow-sm"
                    aria-label="Location Ariana, Tunisie"
                  >
                    <MapPin className="h-4 w-4" />
                  </motion.a>
                </div>

                {/* Contact cards */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {contacts.map((c, i) => (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 + i * stagger, ...spring }}
                      className="press-feedback flex items-center gap-3 rounded-xl border-y border-r border-neutral-200/90 border-l-[3px] border-l-[hsl(38_88%_48%)] bg-neutral-50/90 p-3 transition-all hover:border-neutral-300 hover:bg-white"
                      style={{ animationDelay: `${2.2 + i * 0.15}s` }}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-200/60">
                        <c.icon className="h-4 w-4 text-neutral-800" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                          {c.label}
                        </p>
                        <p className="truncate font-mono text-xs font-medium text-neutral-900">{c.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social icons */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 pb-2">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.6 + i * stagger, ...spring }}
                      whileHover={{
                        scale: 1.12,
                        boxShadow: "0 10px 28px -10px hsl(38 85% 65% / 0.4)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="press-feedback flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-800 shadow-sm transition-colors hover:border-neutral-300 hover:text-neutral-950"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
