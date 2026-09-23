import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Bird,
  Building2,
  Bug,
  Check,
  ChevronRight,
  CircleCheck,
  Factory,
  Fence,
  Grid2X2,
  Home,
  Hotel,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";

import heroImage from "@/assets/hero-balcony.jpg";

// Existing assets mapped to separate section variables.
// Each section has its own variable, so changing a service mapping does not
// require changing the About / Applications / Gallery code.
import aboutImage from "@/assets/service-install.jpg";
import problemImage from "@/assets/problem-balcony.jpg";
import beforeImage from "@/assets/before-balcony.jpg";
import afterImage from "@/assets/service-balcony.jpg";

// Dedicated service images
import serviceInstallImage from "@/assets/service-install.jpg";
import serviceBalconyImage from "@/assets/service-balcony.jpg";
import serviceAntiBirdImage from "@/assets/service-anti-bird.jpg";
import serviceInvisibleBirdImage from "@/assets/service-invisible-bird.png";
import serviceResidentialImage from "@/assets/service-residential.png";
import serviceIndustrialImage from "@/assets/025a98e1-1e16-4bd9-b149-42269dc60c45.png";
import serviceBirdSpikeImage from "@/assets/1584e429-d97d-4bd7-b6ae-e1ea94f0697f.png";
import serviceInvisibleGrillImage from "@/assets/service-balcony.jpg";
import serviceSafetyNetImage from "@/assets/service-install.jpg";
import serviceMosquitoImage from "@/assets/mosquito-net-service-1200x912.jpg";
import serviceWindowImage from "@/assets/service-window.jpg";
import serviceAcImage from "@/assets/service-ac.jpg";
import serviceDuctImage from "@/assets/service-duct.jpg";
import serviceCommercialImage from "@/assets/application-hotel.jpg";
import serviceWarehouseImage from "@/assets/service-commercial.jpg";

// Application images
import applicationResidentialImage from "@/assets/service-install.jpg";
import applicationBalconyImage from "@/assets/service-balcony.jpg";
import applicationWindowImage from "@/assets/service-window.jpg";
import applicationOfficeImage from "@/assets/service-commercial.jpg";
import applicationHotelImage from "@/assets/application-hotel.jpg";
import applicationCommercialImage from "@/assets/service-duct.jpg";

// Gallery images
import galleryBalconyImage from "@/assets/service-balcony.jpg";
import galleryResidentialImage from "@/assets/service-install.jpg";
import galleryCommercialImage from "@/assets/service-commercial.jpg";
import galleryWindowImage from "@/assets/service-window.jpg";
import galleryDuctImage from "@/assets/service-duct.jpg";
import galleryPremiumBalconyImage from "@/assets/problem-balcony.jpg";
import galleryAcImage from "@/assets/service-ac.jpg";
import galleryHotelImage from "@/assets/application-hotel.jpg";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bird Net Surat | Pigeon Net, Bird Protection & Safety Solutions" },
      {
        name: "description",
        content:
          "Bird Net Surat provides professional pigeon netting, bird protection, invisible grill, mosquito net and safety solutions for homes, apartments, commercial and industrial spaces in Surat.",
      },
      { property: "og:title", content: "Bird Net Surat | Pigeon Net, Bird Protection & Safety Solutions" },
      {
        property: "og:description",
        content: "Professional pigeon netting, invisible grill, mosquito net and bird protection solutions across Surat, Gujarat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = ["Home", "About", "Services", "Applications", "Gallery", "FAQ", "Contact"];

const serviceCategories = [
  {
    id: "bird-protection",
    name: "Bird Protection",
    services: [
      { title: "Pigeon Net Installation", description: "Professional pigeon net installation for balconies, windows and open spaces.", image: serviceInstallImage, icon: Wrench },
      { title: "Balcony Pigeon Net", description: "Custom-fitted netting designed to reduce unwanted pigeon entry into balconies.", image: serviceBalconyImage, icon: Grid2X2 },
      { title: "Anti-Bird Netting", description: "Practical bird protection solutions for residential and commercial spaces.", image: serviceAntiBirdImage, icon: ShieldCheck },
      { title: "Invisible Bird Net", description: "Low-visibility bird netting that protects while maintaining a clean appearance.", image: serviceInvisibleBirdImage, icon: Sparkles },
      { title: "Residential Bird Netting", description: "Protection planned for apartments, homes, balconies and windows.", image: serviceResidentialImage, icon: Home },
      { title: "Industrial Bird Netting", description: "Durable bird protection for factories, warehouses and industrial spaces.", image: serviceIndustrialImage, icon: Factory },
      { title: "Bird Spike Installation", description: "Bird spikes for suitable ledges, parapets, rooftops, beams and building edges.", image: serviceBirdSpikeImage, icon: Fence },
    ],
  },
  {
    id: "safety-solutions",
    name: "Safety Solutions",
    services: [
      { title: "Invisible Grill Safety", description: "Modern balcony and window safety that maintains visibility and aesthetics.", image: serviceInvisibleGrillImage, icon: ShieldCheck },
      { title: "Balcony Safety Net", description: "Safety net solutions for balconies and elevated residential spaces.", image: serviceSafetyNetImage, icon: Grid2X2 },
    ],
  },
  {
    id: "home-protection",
    name: "Home Protection",
    services: [
      { title: "Mosquito Net Service", description: "Window and door nets that help keep insects outside while maintaining ventilation.", image: serviceMosquitoImage, icon: Bug },
      { title: "Window Bird Protection", description: "Neatly fitted bird protection for windows and smaller openings.", image: serviceWindowImage, icon: ShieldCheck },
      { title: "AC Outdoor Unit Protection", description: "Protection around exposed AC outdoor units to help discourage nesting.", image: serviceAcImage, icon: Wrench },
      { title: "Duct & Shaft Protection", description: "Custom netting for open ducts, shafts and building openings.", image: serviceDuctImage, icon: Building2 },
    ],
  },
  {
    id: "commercial-industrial",
    name: "Commercial & Industrial",
    services: [
      { title: "Commercial Bird Protection", description: "Solutions for offices, hotels, restaurants, schools, hospitals and commercial properties.", image: serviceCommercialImage, icon: Hotel },
      { title: "Warehouse & Factory Bird Protection", description: "Large-area protection for warehouses, factories and industrial buildings.", image: serviceWarehouseImage, icon: Factory },
    ],
  },
];

const allServiceNames = serviceCategories.flatMap((category) => category.services.map((service) => service.title));
const whatsappUrl = "https://wa.me/919129322730?text=Hello%20Bird%20Net%20Surat%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20get%20a%20quotation.";

const applications = [
  { name: "Residential", image: applicationResidentialImage },
  { name: "Balconies", image: applicationBalconyImage },
  { name: "Windows", image: applicationWindowImage },
  { name: "Offices", image: applicationOfficeImage },
  { name: "Hotels", image: applicationHotelImage },
  { name: "Commercial Buildings", image: applicationCommercialImage },
];

const gallery = [
  { src: galleryBalconyImage, category: "Balcony", alt: "Clean high-rise balcony protected with pigeon net" },
  { src: galleryResidentialImage, category: "Residential", alt: "Professional residential bird net installation" },
  { src: galleryCommercialImage, category: "Commercial", alt: "Commercial property with bird protection netting" },
  { src: galleryWindowImage, category: "Residential", alt: "Modern apartment window fitted with bird net" },
  { src: galleryDuctImage, category: "Commercial", alt: "Building utility shaft protected with netting" },
  { src: galleryPremiumBalconyImage, category: "Balcony", alt: "Premium apartment balcony with transparent net" },
  { src: galleryAcImage, category: "Residential", alt: "Outdoor AC unit protected with fitted mesh" },
  { src: galleryHotelImage, category: "Commercial", alt: "Modern hotel exterior with discreet bird protection" },
];

const faqs = [
  ["What is pigeon netting?", "Pigeon netting is a lightweight physical barrier fitted across open areas to help prevent birds from entering, nesting or perching in your space."],
  ["How does it protect balconies?", "The net closes the open face of a balcony while preserving airflow and natural light, creating a practical barrier against bird entry."],
  ["How long does installation take?", "Most standard residential installations can be completed efficiently after the area and access requirements are assessed."],
  ["Is the net visible?", "Our low-visibility net options are designed to blend into the surroundings and maintain a clean view from the balcony."],
  ["Can it be installed on high-rise apartments?", "Yes. We assess access, anchoring points and safety requirements before recommending an installation approach."],
  ["How long does the net last?", "Lifespan depends on the material, exposure and site conditions. We recommend the most suitable specification for each property."],
  ["Do you provide commercial installations?", "Yes. Solutions can be planned for offices, hotels, shafts, atriums and other commercial spaces."],
  ["How can I request a quote?", "Use the Get Free Quote button to share your property type and requirement. We will guide you through the next step."],
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

function Brand({ scrolled = false, light = false }: { scrolled?: boolean; light?: boolean }) {
  const showLight = light || !scrolled;

  return (
    <a
      href="#home"
      aria-label="Bird Net Surat home"
      className="relative flex h-14 w-[150px] shrink-0 items-center overflow-visible sm:h-16 sm:w-[165px]"
    >
      {/* Hero / Light Logo */}
      <img
        src="/bird-net-surat-logo-light.png"
        alt="Bird Net Surat - Professional Netting Solutions"
        width={1944}
        height={809}
        className={`
      absolute left-0 top-1/2
      h-auto w-[150px] max-w-none
      -translate-y-1/2
      object-contain
      transition-all duration-500 ease-out
      sm:w-[165px]
      ${showLight
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-100"
          }
    `}
      />

      {/* Scrolled / Dark Logo */}
      {!light && (
        <img
          src="/bird-net-surat-logo.png"
          alt="Bird Net Surat - Professional Netting Solutions"
          width={1944}
          height={809}
          className={`
        absolute left-0 top-1/2
        h-auto w-[150px] max-w-none
        -translate-y-1/2
        object-contain
        transition-all duration-500 ease-out
        sm:w-[165px]
        ${scrolled
              ? "opacity-100 scale-100"
              : "pointer-events-none opacity-0 scale-100"
            }
      `}
        />
      )}
    </a>
  );
}

function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3C9.42 3 4.03 8.37 4.03 14.98c0 2.11.55 4.17 1.59 5.98L3 29l8.25-2.58a12 12 0 0 0 4.78.99h.01c6.61 0 12-5.38 12-11.99C28.04 8.8 22.65 3 16.04 3Zm0 22.38h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-4.9 1.53 1.31-4.77-.24-.39a9.94 9.94 0 1 1 9.26 5.23Zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-background/95 shadow-nav backdrop-blur-md" : "bg-transparent"}`}>
      <div className={`site-container flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-20" : "h-24 sm:h-28"}`}>
        <Brand scrolled={scrolled} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-semibold transition-colors hover:text-secondary ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}>{item}</a>
          ))}
        </nav>
        <Button asChild size="lg" className="hidden lg:inline-flex">
          <a href="#contact">Get Free Quote <ArrowRight /></a>
        </Button>
        <Button variant="ghost" size="icon" className={`lg:hidden ${!scrolled && !open ? "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" : "text-primary"}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border bg-background lg:hidden">
            <div className="site-container flex flex-col py-4">
              {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold text-foreground">{item}</a>)}
              <Button asChild className="mt-4"><a href="#contact" onClick={() => setOpen(false)}>Get Free Quote</a></Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <motion.div {...reveal} className={center ? "mx-auto mb-12 max-w-2xl text-center" : "mb-10 max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>}
    </motion.div>
  );
}

function HomePage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);
  const filtered = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      propertyType: String(formData.get("propertyType") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://formsubmit.co/ajax/birdnetservice20@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            propertyType: payload.propertyType,
            service: payload.service,
            message: payload.message,

            _subject: `New Quote Request - ${payload.service || "Bird Net Surat"
              }`,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("Request sent successfully!", {
        description:
          "Thank you. Bird Net Surat will contact you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("FormSubmit error:", error);

      toast.error("Unable to send request", {
        description:
          "Please try again or contact us directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bird Net Surat",
    telephone: "+91 91293 22730",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: "Surat, Gujarat, India",
  };

  return (
    <main className="overflow-hidden">
      <Header />
      <section id="home" className="relative flex min-h-[90svh] items-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="site-container relative z-10 pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.24em] text-hero-muted md:text-sm">Professional Netting Solutions</p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.06] text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">Protect Your Space.<br />Keep It Clean.</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg md:text-xl md:leading-8">Professional pigeon netting and bird protection solutions for homes, apartments and commercial spaces across Surat.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 px-7 text-sm uppercase"><a href="#contact">Get Free Quote <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-13 border-primary-foreground/50 bg-primary-foreground/10 px-7 text-sm uppercase text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground hover:text-primary"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm text-primary-foreground/90 sm:flex-row sm:gap-7">
              {["Quality Materials", "Professional Installation", "Clean Finish"].map((item) => <span key={item} className="flex items-center gap-2"><CircleCheck className="size-4 text-hero-muted" />{item}</span>)}
            </div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/70 md:flex">Discover<span className="h-8 w-px bg-primary-foreground/40" /></a>
      </section>

      <section id="about" className="section-pad bg-background">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal} className="image-frame aspect-[4/3]"><img src={aboutImage} alt="Professional netting solutions by Bird Net Surat" loading="lazy" width={1200} height={912} className="h-full w-full object-cover" /></motion.div>
          <motion.div {...reveal}>
            <p className="eyebrow">Professional Netting Solutions</p>
            <h2 className="section-title">About Bird Net Surat</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">Bird Net Surat provides practical bird protection, safety and netting solutions for residential, commercial and industrial spaces in Surat. Our solutions help protect balconies, windows, open areas and building spaces from unwanted bird entry while maintaining a clean appearance.</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">From Pigeon Net Installation Surat and Balcony Pigeon Net Surat requirements to invisible grills, mosquito nets, ducts, AC units and large commercial spaces, every installation is planned around the property.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {["Quality Materials", "Professional Installation", "Clean Finishing"].map((item) => <span key={item} className="flex items-center gap-2 text-sm font-bold"><CircleCheck className="size-5 shrink-0 text-secondary" />{item}</span>)}
            </div>
            <Button asChild size="lg" className="mt-8"><a href="#contact">Get Free Quote <ArrowRight /></a></Button>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-surface-blue">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal} className="image-frame aspect-[4/3]"><img src={problemImage} alt="Modern Surat balcony protected by subtle pigeon netting" loading="lazy" width={1200} height={912} className="h-full w-full object-cover" /></motion.div>
          <motion.div {...reveal}>
            <p className="eyebrow">A Cleaner Everyday Space</p><h2 className="section-title">Take Back Your Balcony</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Pigeons can turn a clean balcony into a constant maintenance problem. Our bird protection solutions help reduce unwanted entry, nesting and cleaning.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">{["Pigeon Droppings", "Unwanted Nesting", "Frequent Cleaning", "AC Unit Nesting"].map((item) => <span key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className="size-4 text-secondary" />{item}</span>)}</div>
            <Button asChild variant="link" className="mt-7 h-auto p-0 text-secondary"><a href="#services">Explore Solutions <ArrowRight /></a></Button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-pad bg-background">
        <div className="site-container">
          <SectionHeading eyebrow="Our Services" title="Complete Protection Solutions" text="Bird protection, invisible grill safety and mosquito net services planned for every type of property in Surat." />
          <Tabs defaultValue={serviceCategories[0].id}>
            <TabsList className="mb-9 grid h-auto w-full grid-cols-1 gap-1 bg-muted p-1 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((category) => <TabsTrigger key={category.id} value={category.id} className="min-h-11 whitespace-normal px-3 py-2 text-center">{category.name}</TabsTrigger>)}
            </TabsList>
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, index) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: (index % 3) * 0.07 }} whileHover={{ y: -7 }} key={service.title} className="group overflow-hidden rounded-md border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
                    <div className="aspect-[16/9] overflow-hidden"><img src={service.image} alt={`${service.title} service in Surat`} loading="lazy" width={1200} height={675} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                    <div className="p-6"><service.icon className="mb-4 size-7 text-secondary" strokeWidth={1.6} /><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.description}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-secondary">Get Free Quote <ChevronRight className="size-4" /></a></div>
                  </motion.article>)}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="section-pad bg-primary text-primary-foreground">
        <div className="site-container">
          <motion.div {...reveal} className="max-w-3xl"><p className="eyebrow-light">Why Choose Us</p><h2 className="section-title text-primary-foreground">Protection Without Compromising Your Space</h2></motion.div>
          <div className="mt-12 grid border-y border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-5">
            {["Quality Materials", "Professional Installation", "Minimal Visual Impact", "Clean Finishing", "Solutions for Different Spaces"].map((item, i) => <motion.div {...reveal} key={item} className="min-h-40 border-b border-primary-foreground/20 p-6 sm:border-r lg:border-b-0"><span className="text-sm font-bold text-hero-muted">0{i + 1}</span><h3 className="mt-8 text-lg font-semibold leading-6">{item}</h3></motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="site-container"><SectionHeading eyebrow="Our Process" title="Simple Process. Professional Installation." center />
          <div className="relative grid gap-8 md:grid-cols-4 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-7 before:hidden before:h-px before:bg-border md:before:block">
            {["Share Your Requirement", "Site Assessment", "Recommended Solution", "Professional Installation"].map((step, i) => <motion.div {...reveal} key={step} className="relative text-center"><span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-secondary bg-background text-sm font-extrabold text-secondary">0{i + 1}</span><h3 className="mt-5 font-bold">{step}</h3></motion.div>)}
          </div>
        </div>
      </section>

      <section id="applications" className="section-pad bg-surface-blue">
        <div className="site-container"><SectionHeading eyebrow="Applications" title="Built for Different Spaces" center />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">{applications.map((item, index) => <motion.article {...reveal} key={item.name} className={`group relative overflow-hidden rounded-sm ${index === 0 || index === 5 ? "aspect-[4/3] md:col-span-2 md:aspect-[2/1]" : "aspect-[4/3]"}`}><img src={item.image} alt={`${item.name} bird protection application`} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-image-overlay" /><h3 className="absolute bottom-4 left-4 text-base font-bold text-primary-foreground md:bottom-6 md:left-6 md:text-xl">{item.name}</h3></motion.article>)}</div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="site-container"><SectionHeading eyebrow="Before & After" title="See the Difference" center />
          <div className="grid gap-5 lg:grid-cols-2">
            {[[beforeImage, "BEFORE", "Pigeon-affected apartment balcony before protection"], [afterImage, "AFTER", "Clean apartment balcony after professional pigeon net installation"]].map(([image, label, alt]) => <motion.figure {...reveal} key={label} className="group relative aspect-[4/3] overflow-hidden rounded-sm"><img src={image} alt={alt} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute left-5 top-5 bg-primary px-4 py-2 text-xs font-extrabold tracking-[0.15em] text-primary-foreground">{label}</figcaption></motion.figure>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad bg-surface-blue">
        <div className="site-container"><SectionHeading eyebrow="Recent Work" title="Our Installation Gallery" center />
          <div className="mb-9 flex flex-wrap justify-center gap-2">{["All", "Residential", "Commercial", "Balcony"].map((item) => <Button key={item} variant={filter === item ? "default" : "outline"} size="sm" onClick={() => setFilter(item)}>{item}</Button>)}</div>
          <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">{filtered.map((item, index) => <motion.button layout key={item.alt} onClick={() => setSelectedImage(item)} className={`group relative mb-4 block w-full overflow-hidden rounded-sm ${index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`} aria-label={`View ${item.alt}`}><img src={item.src} alt={item.alt} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center bg-primary/0 text-primary-foreground opacity-0 transition-all group-hover:bg-primary/45 group-hover:opacity-100"><ZoomIn className="size-7" /></span></motion.button>)}</motion.div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Customer Experiences"
            title="What Our Customers Say"
            text="Feedback from customers who chose Bird Net Surat for their homes and properties."
            center
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Residential Customer",
                service: "Balcony Pigeon Net",
                date: "Recent customer",
                initials: "RC",
                quote:
                  "The installation looks neat and the balcony still feels open and bright. The work was completed carefully and the finishing looks clean.",
              },
              {
                name: "Apartment Resident",
                service: "Bird Net Installation",
                date: "Recent customer",
                initials: "AR",
                quote:
                  "A practical solution for our balcony. The net blends into the view nicely and the overall installation looks much cleaner than expected.",
              },
              {
                name: "Commercial Customer",
                service: "Commercial Bird Protection",
                date: "Recent customer",
                initials: "CC",
                quote:
                  "The requirement was understood properly and the installation was planned around the property access. The finishing looks professional.",
              },
            ].map((review, index) => (
              <motion.article
                {...reveal}
                transition={{
                  ...reveal.transition,
                  delay: index * 0.08,
                }}
                key={review.name}
                className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground">
                      {review.initials}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {review.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Google-style icon area */}
                  <div className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-background">
                    <span className="text-sm font-extrabold text-secondary">
                      G
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-5 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      viewBox="0 0 24 24"
                      className="size-4 fill-current text-[#F4B400]"
                      aria-hidden="true"
                    >
                      <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5z" />
                    </svg>
                  ))}

                  <span className="ml-2 text-xs font-semibold text-muted-foreground">
                    5.0
                  </span>
                </div>

                {/* Review */}
                <div className="relative mt-5 flex-1">
                  <span className="absolute -left-1 -top-4 text-4xl font-serif leading-none text-secondary/15">
                    “
                  </span>

                  <p className="relative text-[15px] leading-7 text-foreground">
                    {review.quote}
                  </p>
                </div>

                {/* Service tag */}
                <div className="mt-6 border-t border-border pt-5">
                  <span className="inline-flex items-center rounded-full bg-surface-blue px-3 py-1.5 text-xs font-bold text-secondary">
                    {review.service}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom trust line */}
          <motion.div
            {...reveal}
            className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 24 24"
                  className="size-4 fill-current text-[#F4B400]"
                  aria-hidden="true"
                >
                  <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.54L12 17.48l-5.87 3.09 1.12-6.54L2.5 9.4l6.56-.95L12 2.5z" />
                </svg>
              ))}
            </div>

            <span className="text-sm font-semibold text-muted-foreground">
              Professional service • Clean installation • Customer-focused support
            </span>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="section-pad bg-surface-blue">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" text="Clear answers about pigeon nets, installation and suitability." />
          <motion.div {...reveal}><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([q, a], i) => <AccordionItem value={`item-${i}`} key={q}><AccordionTrigger className="py-6 text-left text-base font-bold hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-6 pr-8 text-sm leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></motion.div>
        </div>
      </section>

      <section id="contact" className="net-pattern relative bg-primary py-20 text-primary-foreground md:py-24">
        <div className="site-container relative z-10">
          <motion.div {...reveal} className="mb-12 max-w-3xl"><p className="eyebrow-light">Contact Bird Net Surat</p><h2 className="text-4xl font-extrabold md:text-5xl">Let's Protect Your Space</h2><p className="mt-5 text-lg leading-8 text-primary-foreground/75">Tell us about your property and we'll help you choose a suitable protection solution.</p></motion.div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <motion.div {...reveal} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a href="tel:+919129322730" className="flex items-center gap-4 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 p-5 transition-colors hover:bg-primary-foreground/15"><span className="grid size-11 shrink-0 place-items-center rounded-sm bg-primary-foreground text-primary"><Phone className="size-5" /></span><span><span className="block text-xs font-bold uppercase text-hero-muted">Call us</span><span className="mt-1 block font-bold">+91 91293 22730</span></span></a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 p-5 transition-colors hover:bg-primary-foreground/15"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white"><WhatsAppIcon className="size-6" /></span><span><span className="block text-xs font-bold uppercase text-hero-muted">WhatsApp</span><span className="mt-1 block font-bold">+91 91293 22730</span></span></a>
              </div>
              <div className="relative min-h-56 overflow-hidden rounded-md border border-primary-foreground/20 bg-primary-foreground/10 p-0">
                <iframe
                  title="Bird Net Surat Location"
                  src="https://www.google.com/maps?q=21.136377,72.873179&z=16&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
            <motion.form {...reveal} onSubmit={handleQuoteSubmit} className="rounded-md bg-card p-6 text-card-foreground shadow-card-hover sm:p-8" noValidate>
              <h3 className="text-2xl font-extrabold">Request a Free Quote</h3>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">Full Name *<input name="name" required autoComplete="name" className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20" placeholder="Your full name" /></label>
                <label className="grid gap-2 text-sm font-bold">Phone Number *<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20" placeholder="Your phone number" /></label>
                <label className="grid gap-2 text-sm font-bold">Email<input name="email" type="email" autoComplete="email" className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20" placeholder="Optional" /></label>
                <label className="grid gap-2 text-sm font-bold">Property Type<select name="propertyType" defaultValue="" className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20"><option value="" disabled>Select property type</option>{["Apartment", "House", "Balcony", "Office", "Restaurant", "Hotel", "School", "Hospital", "Commercial Property", "Industrial Property", "Other"].map((item) => <option key={item}>{item}</option>)}</select></label>
                <label className="grid gap-2 text-sm font-bold sm:col-span-2">Service Required<select name="service" defaultValue="" className="h-11 min-w-0 rounded-md border border-input bg-background px-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20"><option value="" disabled>Select a service</option>{allServiceNames.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label className="grid gap-2 text-sm font-bold sm:col-span-2">Message<textarea name="message" rows={4} className="min-w-0 resize-y rounded-md border border-input bg-background px-3 py-3 font-normal outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/20" placeholder="Tell us about your property and requirement" /></label>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-6 w-full sm:w-auto"
              >
                {isSubmitting ? "Sending Request..." : "Request Free Quote"}
                {!isSubmitting && <ArrowRight />}
              </Button>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Your enquiry will be securely sent to the Bird Net Surat team.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <footer id="footer" className="border-t border-primary-foreground/10 bg-primary py-14 text-primary-foreground">
        <div className="site-container grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><Brand light /><p className="mt-5 text-sm font-bold">Professional Netting Solutions</p><p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/65">Bird protection and safety solutions for residential, commercial and industrial spaces across Surat.</p></div>
          <div><h3 className="footer-title">Quick Links</h3><div className="mt-5 grid gap-3">{["Home", "About", "Services", "Gallery", "FAQ", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="footer-link">{item}</a>)}</div></div>
          <div><h3 className="footer-title">Services</h3><div className="mt-5 grid gap-3">{["Pigeon Net", "Invisible Bird Net", "Bird Spikes", "Invisible Grill Safety", "Mosquito Net", "Commercial Bird Protection"].map(item => <a key={item} href="#services" className="footer-link">{item}</a>)}</div></div>
          <div><h3 className="footer-title">Contact</h3><div className="mt-5 grid gap-4 text-sm text-primary-foreground/70"><p className="flex gap-3"><MapPin className="size-4 shrink-0 text-hero-muted" />Surat, Gujarat, India</p><a href="tel:+919129322730" className="flex gap-3 hover:text-primary-foreground"><Phone className="size-4 shrink-0 text-hero-muted" />+91 91293 22730</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary-foreground"><WhatsAppIcon className="size-4 shrink-0 text-[#25D366]" />+91 91293 22730</a></div></div>
        </div>
        <div className="site-container mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">© 2026 Bird Net Surat. All Rights Reserved.</div>
      </footer>

      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 flex flex-col gap-3 sm:right-6">
        <Button asChild size="icon" className="group relative size-14 rounded-full border-0 bg-[#25D366] text-white shadow-float motion-safe:animate-pulse hover:bg-[#20BD5A] hover:text-white hover:animate-none" aria-label="Chat on WhatsApp"><a href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon className="size-7" /><span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-sm bg-card px-3 py-2 text-xs font-bold text-card-foreground opacity-0 shadow-card transition-opacity group-hover:opacity-100 md:block">Chat on WhatsApp</span></a></Button>
        <Button asChild size="icon" variant="secondary" className="group relative size-12 rounded-full shadow-float" aria-label="Call Bird Net Surat"><a href="tel:+919129322730"><Phone className="size-5" /><span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-sm bg-card px-3 py-2 text-xs font-bold text-card-foreground opacity-0 shadow-card transition-opacity group-hover:opacity-100 md:block">Call Now</span></a></Button>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}><DialogContent className="max-w-5xl border-0 bg-primary p-2"><DialogTitle className="sr-only">Installation photo</DialogTitle><DialogDescription className="sr-only">Expanded view of a Bird Net Surat installation</DialogDescription>{selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} width={1200} height={912} className="max-h-[82vh] w-full rounded-sm object-contain" />}</DialogContent></Dialog>
    </main>
  );
}