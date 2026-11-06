import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers3,
  Menu,
  Ruler,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import icon from "@/assets/ultimate-graphics-icon.png.asset.json";
import logo from "@/assets/ultimate-graphics-logo.png.asset.json";
import footerLogo from "@/assets/ultimate-graphics-footer-logo.png.asset.json";
import heroImage from "@/assets/ultimate-graphics-hero.jpg";
import vehicleImage from "@/assets/vehicle-branding-project.jpg";
import dimensionalImage from "@/assets/dimensional-sign-project.jpg";
import neonImage from "@/assets/neon-sign-project.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ultimate Graphics | Signs, Printing & Branding" },
      {
        name: "description",
        content:
          "Custom signs, vehicle branding, fabrication and print by Ultimate Graphics. 16 years of experience bringing businesses into view.",
      },
      { property: "og:title", content: "Ultimate Graphics | Signs, Printing & Branding" },
      {
        property: "og:description",
        content:
          "Custom signs, vehicle branding, fabrication and print. 16 years of experience bringing businesses into view.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const serviceGroups = [
  {
    number: "01",
    title: "Signs that make a place.",
    description: "From the first glance outside to the smallest wayfinding detail inside.",
    services: [
      "Cabinet signs",
      "Station signs",
      "Neon signs",
      "Digital signage",
      "Directional signs",
      "Custom signs",
      "Channel letters",
      "Metal letters",
      "Engraved signs",
    ],
  },
  {
    number: "02",
    title: "Built to take shape.",
    description: "Thoughtful fabrication, carefully cut, formed and finished.",
    services: ["Metal laser work", "CNC routing", "Glass frosting", "Custom fabrication"],
  },
  {
    number: "03",
    title: "Made to get noticed.",
    description: "Bring your identity to the road, the window and the everyday.",
    services: ["Vehicle branding", "Vehicle stickering", "Stickering", "Vinyl banners"],
  },
  {
    number: "04",
    title: "Print that works hard.",
    description: "Sharp, dependable print for the things your business puts out into the world.",
    services: ["Printing", "Plotting", "Sun board printing", "Business card printing"],
  },
];

const work = [
  { title: "On the move", category: "Vehicle branding · Wraps", src: vehicleImage, alt: "A white commercial van with a bold, colorful custom vehicle wrap" },
  { title: "Made to stand out", category: "Dimensional · Metal letters", src: dimensionalImage, alt: "Brushed-metal dimensional letters mounted on a dark storefront" },
  { title: "After dark", category: "Neon · Custom signs", src: neonImage, alt: "A sculptural neon installation glowing against a dark tiled wall" },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="announcement"><span>16 years of making your business seen</span><span className="announcement-mark" aria-hidden="true" /></div>

      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Ultimate Graphics home" onClick={closeMenu}>
          <img src={logo.url} alt="Ultimate Graphics" width={660} height={200} />
        </a>
        <nav id="main-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>What we make</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>Our experience</a>
          <Button asChild className="nav-cta"><a href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight aria-hidden="true" /></a></Button>
        </nav>
        <Button
          className="menu-toggle"
          variant="outline"
          size="icon"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="A contemporary shopfront with vibrant illuminated sign elements" width={1600} height={1104} fetchPriority="high" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Signs · Print · Fabrication</p>
          <h1 id="hero-title">Make your<br />business <span>impossible</span><br />to miss.</h1>
          <div className="hero-foot">
            <p>From first sketch to final fit. Thoughtful signs and graphics, made for the way your business moves.</p>
            <Button asChild className="hero-button"><a href="#services">Explore what we make <ArrowDown aria-hidden="true" /></a></Button>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>UG</span><span>01 — 04</span></div>
      </section>

      <section className="proof-strip" aria-label="Experience and capabilities">
        <p><span className="proof-number">16</span><span>years of<br />experience</span></p>
        <span className="proof-divider" aria-hidden="true" />
        <p><Layers3 aria-hidden="true" /><span>One team.<br />Many ways to make.</span></p>
        <span className="proof-divider" aria-hidden="true" />
        <p><Ruler aria-hidden="true" /><span>Made with care.<br />Built to last.</span></p>
        <span className="proof-note">Ultimate Graphics<br />Signs · Printing · Branding · Fabrication</span>
      </section>

      <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div><p className="eyebrow"><span>01</span> The things we make</p><h2 id="services-title">A good sign<br />changes <em>everything.</em></h2></div>
          <p className="section-intro">One idea, many ways to bring it to life. Explore what we do, then let’s make something that feels like you.</p>
        </div>
        <div className="service-list">
          {serviceGroups.map((group) => (
            <article className="service-group" key={group.number}>
              <div className="service-name"><span className="service-number">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div>
              <ul>{group.services.map((service) => <li key={service}><Check aria-hidden="true" />{service}</li>)}</ul>
              <ArrowUpRight className="service-arrow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="work-inner">
          <div className="section-heading work-heading">
            <div><p className="eyebrow"><span>02</span> A few possibilities</p><h2 id="work-title">Good work<br />gets <em>noticed.</em></h2></div>
            <p className="section-intro">Different materials. Different places. The same attention to the details that make it work.</p>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <article className={`work-item work-item-${index + 1}`} key={item.title}>
                <div className="work-image-frame"><img src={item.src} alt={item.alt} width={1312} height={960} loading="lazy" /><span className="work-image-number">0{index + 1}</span></div>
                <div className="work-caption"><div><h3>{item.title}</h3><p>{item.category}</p></div><ArrowUpRight aria-hidden="true" /></div>
              </article>
            ))}
          </div>
          <p className="work-note"><Sparkles aria-hidden="true" /> A glimpse of what’s possible. Your project will be its own.</p>
        </div>
      </section>

      <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
        <div className="about-index"><span>UG</span><span>Since day one</span></div>
        <div className="about-copy">
          <p className="eyebrow"><span>03</span> Experience you can see</p>
          <h2 id="about-title">Sixteen years<br />of making things<br /><em>mean more.</em></h2>
          <p className="about-description">A sign is often the first thing someone sees. We bring 16 years of hands-on experience to the details, materials and finish that make that first impression count.</p>
          <Button asChild variant="outline" className="about-button"><a href="#contact">Let’s talk about your project <ArrowRight aria-hidden="true" /></a></Button>
        </div>
        <div className="about-note"><span className="about-note-line" /><p>Made with intention.<br />Ready for the real world.</p></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div className="contact-copy"><p className="eyebrow"><span>04</span> Your next idea starts here</p><h2 id="contact-title">Got a sign<br />of <em>what’s next?</em></h2><p>Tell us a little about what you have in mind. We’ll help you find the right way to bring it to life.</p></div>
          <Button asChild className="contact-button"><a href="mailto:?subject=Project%20enquiry%20for%20Ultimate%20Graphics">Start a conversation <ArrowUpRight aria-hidden="true" /></a></Button>
          <span className="contact-watermark" aria-hidden="true">UG</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="footer-logo" href="#home" aria-label="Ultimate Graphics, back to top"><img src={footerLogo.url} alt="Ultimate Graphics" width={680} height={190} loading="lazy" /></a>
          <p className="footer-signoff">Signs · Printing · Branding · Fabrication<br />Making your business seen for 16 years.</p>
          <a className="footer-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Ultimate Graphics</span><span>Made with intention.</span><a href="#services">Explore our services <ArrowUpRight aria-hidden="true" /></a></div>
      </footer>
    </main>
  );
}