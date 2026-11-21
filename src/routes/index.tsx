import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, MessageCircle, Clock3, CakeSlice, Menu as MenuIcon, ChevronRight, Star, ShoppingBag, Croissant, Cookie, Soup, Coffee, Truck, CreditCard, Package, ArrowUpRight } from "lucide-react";
import { shop } from "../data/shop";
import cakeImg from "@/assets/cake.png.asset.json";
import mithaiImg from "@/assets/mithai.png.asset.json";
import samosaImg from "@/assets/samosa.png.asset.json";
import savouriesImg from "@/assets/savouries.png.asset.json";
import mithaiPlatter from "@/assets/mithai-platter.jpg.asset.json";
import savouryPlatter from "@/assets/savoury-platter.jpg.asset.json";
import cakeWide from "@/assets/cake-wide.png.asset.json";
import logoImg from "@/assets/flavour-logo.png.asset.json";
import ownerPortrait from "@/assets/owner-portrait.jpg.asset.json";
import customCrown from "@/assets/custom-cake-pink-crown.webp.asset.json";
import customMinnie from "@/assets/custom-cake-minnie-bows.webp.asset.json";
import customRainbow from "@/assets/custom-cake-pastel-rainbow.webp.asset.json";

import originalShop from "@/assets/original-shop-selection.webp.asset.json";
import originalMithai from "@/assets/original-mithai-counter.webp.asset.json";
import originalCakes from "@/assets/original-cake-counter.webp.asset.json";
import originalBiscuits from "@/assets/original-biscuit-counter.webp.asset.json";
import originalBakery from "@/assets/original-bakery-counter.webp.asset.json";
import originalChaat from "@/assets/original-chaat-counter.webp.asset.json";
import originalSnacks from "@/assets/original-snack-counter.webp.asset.json";
import originalSavouries from "@/assets/original-savoury-counter.webp.asset.json";

const products = [
  { name: "Cakes", src: cakeImg.url },
  { name: "Mithai", src: mithaiImg.url },
  { name: "Samosas", src: samosaImg.url },
  { name: "Savouries", src: savouriesImg.url },
];
const ROTATION_SECONDS = 24;

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Flavour Sweets & Bakers: Mithai, Cakes & Samosas in Soan Garden" },
    { name: "description", content: "Traditional Pakistani sweets, fresh bakery items, fast food and refreshments in Soan Garden, Islamabad. Halwa Puri breakfast every Sunday. Open 7 AM to 1:30 AM daily." },
    { property: "og:title", content: "Flavour Sweets & Bakers | Soan Garden, Islamabad" },
    { property: "og:description", content: "Fresh mithai, cakes and samosas in Soan Garden, Islamabad." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function track(event: string, label: string, section: string) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event, { label, section });
}
function ActionLink({ href, children, kind = "dark", event, label, section }: { href: string; children: React.ReactNode; kind?: "dark" | "gold" | "light" | "outline"; event: string; label: string; section: string }) {
  const style = kind === "dark" ? "bg-[#633047] text-white hover:bg-[#4e2437]" : kind === "gold" ? "bg-[#D7AD75] text-[#38232A] hover:bg-[#e5c28e]" : kind === "light" ? "bg-[#FBF5EA] text-[#633047]" : "border border-[#633047]/35 text-[#633047] hover:bg-[#633047]/5";
  return <a href={href} onClick={() => track(event,label,section)} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${style}`}>{children}</a>;
}
function Index() {
  const [open,setOpen] = useState(false);
  const [now,setNow] = useState(new Date());
  useEffect(() => { const timer=window.setInterval(()=>setNow(new Date()),60000); return ()=>window.clearInterval(timer); },[]);
  const local=new Date(now.toLocaleString("en-US",{timeZone:"Asia/Karachi"}));
  const day=local.getDay(), minutes=local.getHours()*60+local.getMinutes();
  const opens=day===5?450:420;
  const isOpen=minutes>=opens||minutes<90;
  const phone=`tel:${shop.phone.replace(/[^+0-9]/g,"")}`;
  const wa=shop.whatsappConfirmed?`https://wa.me/${shop.whatsapp.replace(/[^0-9]/g,"")}`:"#orders";
  const directions="https://www.google.com/maps/dir/?api=1&destination=33.5560193,73.1650735";
  return <main id="top" className="min-h-screen overflow-hidden bg-[#FBF5EA] pb-24 text-[#302323]">
    <div className="bg-[#32131F] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[.22em] text-[#F6E7D2] sm:text-xs">SOAN GARDEN · ISLAMABAD <span className="mx-2 text-[#D7AD75]">✦</span> FLAVOUR SWEETS & BAKERS</div>
    <header className="sticky top-0 z-40 border-b border-[#D7AD75]/25 bg-[#FBF5EA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#top" aria-label="Flavour Sweets & Bakers home" className="shrink-0"><img src={logoImg.url} alt="Flavour Sweets & Bakers" className="h-14 w-auto sm:h-[70px]"/></a>
        <nav className="hidden items-center gap-7 text-[13px] font-extrabold text-[#442832] lg:flex"><a href="#welcome" className="hover:text-[#A46C3D]">About</a><a href="#about" className="hover:text-[#A46C3D]">Our Products</a><a href="#menu" className="hover:text-[#A46C3D]">Menu</a><a href="#orders" className="hover:text-[#A46C3D]">Cakes & Orders</a><a href="#photos" className="hover:text-[#A46C3D]">Photos</a><a href="#find-us" className="hover:text-[#A46C3D]">Find Us</a></nav>
        <a href={phone} onClick={()=>track("click_call","header","header")} className="hidden min-h-11 items-center gap-2 rounded-full bg-[#633047] px-5 text-sm font-bold text-white md:inline-flex"><Phone size={16}/> +92 306 5833000</a>
        <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-lg border border-[#633047]/20 p-2 text-[#633047] lg:hidden"><MenuIcon/></button>
      </div>
      {open&&<nav className="grid gap-1 border-t border-[#633047]/10 bg-[#FBF5EA] px-5 py-3 text-sm font-bold lg:hidden"><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#welcome">About</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#about">Our Products</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#menu">Menu</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#orders">Cakes & Orders</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#photos">Photos</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#find-us">Find Us</a></nav>}
    </header>

    <section className="relative isolate overflow-hidden bg-[#32131F] text-[#FBF5EA]">
      <div className="absolute inset-0 bakery-pattern opacity-30"/>
      <div className="absolute -right-24 top-0 h-[520px] w-[520px] rounded-full border border-[#D7AD75]/20"/>
      <div className="absolute -right-12 top-12 h-[420px] w-[420px] rounded-full border border-[#D7AD75]/15"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 sm:py-20 md:grid-cols-[1fr_1fr] md:gap-8 lg:grid-cols-[1fr_.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10 order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.24em] text-[#D7AD75]"><span className="h-px w-8 bg-[#D7AD75]"/> Mithai · Bakery · Refreshments</div>
          <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[.99] tracking-tight sm:text-6xl lg:text-[4.5rem]">A little sweetness.<br/><em className="text-[#E5BD80]">A lot of flavour.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#F6E7D2]/85 sm:text-lg">Fresh mithai, cakes and samosas in Soan Garden, Islamabad. Find Flavour Sweets & Bakers on H Block Main Double Road.</p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            <HeroMini icon={<Croissant/>} title="Traditional" sub="Mithai"/><HeroMini icon={<CakeSlice/>} title="Fresh" sub="Cakes"/><HeroMini icon={<Soup/>} title="Savouries" sub="& Snacks"/><HeroMini icon={<Coffee/>} title="Refreshments" sub="& more"/>
          </div>
          <div className="mt-9 flex flex-wrap gap-3"><ActionLink href={phone} kind="gold" event="click_call" label="hero" section="hero"><Phone size={17}/> Call now</ActionLink><ActionLink href={wa} kind="light" event="click_whatsapp" label="general" section="hero"><MessageCircle size={17}/> WhatsApp</ActionLink><ActionLink href={directions} kind="outline" event="click_directions" label="hero" section="hero"><MapPin size={17}/> Get directions</ActionLink></div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#F6E7D2]/80"><span className={`rounded-full px-3 py-2 ${isOpen?"bg-emerald-100 text-emerald-900":"bg-white/10 text-[#F6E7D2]"}`}>{isOpen?"● Open now":"● Closed right now"}</span><span>Every day · 7 AM – 1:30 AM</span><span className="text-[#E5BD80]">Friday: same hours</span></div>
        </div>
        <div className="relative order-1 mx-auto flex w-full max-w-[590px] items-center justify-center py-1 sm:py-8 md:order-2">
          <div className="hero-product-orbit" aria-label="Four bakery products revolving in a 3D circle">
            <div className="hero-product-orbit-glow"/>
            <div className="hero-product-orbit-ring hero-product-orbit-ring-a"/>
            <div className="hero-product-orbit-ring hero-product-orbit-ring-b"/>
            <div className="hero-product-orbit-center"><span>✦</span><small>SOAN GARDEN · ISLAMABAD</small></div>
            <ProductCarousel/>
            <span className="hero-product-orbit-star orbit-star-a">✦</span><span className="hero-product-orbit-star orbit-star-b">✧</span><span className="hero-product-orbit-star orbit-star-c">✦</span>
          </div>
        </div>
      </div>
    </section>

    <section className="relative z-10 mx-auto -mt-1 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#D7AD75]/30 bg-[#D7AD75]/40 shadow-lg sm:grid-cols-4">
      <InfoTile icon={<MapPin/>} title="Visit us" detail="H Block, Soan Garden"/>
      <InfoTile icon={<Clock3/>} title="Opening hours" detail="7 AM – 1:30 AM daily"/>
      <InfoTile icon={<CreditCard/>} title="Payments" detail="Cash, card, JazzCash, Easypaisa"/>
      <InfoTile icon={<Truck/>} title="Delivery" detail={shop.delivery}/>
    </section>

    <section className="mx-auto max-w-7xl px-5 pt-14 lg:px-8 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D7AD75]/40 shadow-xl">
          <img src={ownerPortrait.url} alt="The owner of Flavour Sweets & Bakers standing behind the shop counter" loading="lazy" className="aspect-square w-full object-cover object-center"/>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#32131F]/85 via-[#32131F]/35 to-transparent px-5 pb-4 pt-14">
            <p className="font-serif text-2xl font-bold text-[#FBF5EA] sm:text-3xl">Haji Gulzar Ahmed</p>
            <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#E5BD80]">Owner · Flavour Sweets &amp; Bakers</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">A warm welcome</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#633047] sm:text-5xl">The face behind the counter</h2>
          <DecorativeRule/>
          <p className="mt-6 text-[15px] leading-8 text-[#5A4E49]">Behind this counter, every sweet, cake and samosa at Flavour Sweets &amp; Bakers is prepared fresh and served with pride.</p>
          <p className="mt-5 text-sm font-bold text-[#633047]">Open every day · 7 AM – 1:30 AM · Soan Garden, Islamabad</p>
        </div>
      </div>
    </section>

    <section id="story" className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
      <div className="overflow-hidden rounded-[2rem] border border-[#D7AD75]/40 bg-[#FBF5EA] shadow-lg">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">The Story Behind Flavour</p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#633047] sm:text-5xl">Passion, Experience &amp; Exceptional Taste</h2>
            <DecorativeRule/>
            <p className="mt-6 text-[15px] leading-8 text-[#5A4E49]">Founded in 2022 by Haji Gulzar Ahmed, Flavour Sweets &amp; Bakers and Refreshment Center is built on more than three decades of professional experience in the bakery and confectionery industry.</p>
            <p className="mt-4 text-[15px] leading-8 text-[#5A4E49]">From working with renowned bakeries across Pakistan, including the prestigious Serena Hotel Islamabad, to gaining 20 years of international experience in Saudi Arabia, Haji Gulzar Ahmed has transformed his passion and expertise into a brand dedicated to quality, freshness and exceptional taste.</p>
            <p className="mt-4 text-[15px] leading-8 text-[#5A4E49]">Rooted in the values of honesty, dedication and hard work, Flavour offers a delightful variety of traditional Pakistani sweets, freshly baked products, cakes, pastries, snacks and fast food.</p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl border border-[#D7AD75]/40 bg-white/60 p-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#A46C3D]">Our Promise</p>
              <p className="mt-3 text-[15px] leading-7 text-[#5A4E49]">Pure ingredients, fresh products, hygienic preparation and customer satisfaction are at the heart of everything we do.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-[#D7AD75]/40 bg-white/60 p-4"><p className="font-serif text-3xl font-bold text-[#633047]">30+</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#A46C3D]">Years of experience</p></div>
              <div className="rounded-2xl border border-[#D7AD75]/40 bg-white/60 p-4"><p className="font-serif text-3xl font-bold text-[#633047]">20</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#A46C3D]">Years in Saudi Arabia</p></div>
              <div className="rounded-2xl border border-[#D7AD75]/40 bg-white/60 p-4"><p className="font-serif text-3xl font-bold text-[#633047]">2022</p><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#A46C3D]">Flavour founded</p></div>
            </div>
            <p className="font-serif text-xl italic leading-8 text-[#633047]">“Flavour Sweets &amp; Bakers – Where Tradition Meets Taste and Quality Meets Trust!”</p>
          </div>
        </div>
      </div>
    </section>

    <section id="welcome" className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">Welcome to</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#633047] sm:text-5xl">Flavour Sweets &amp; Bakers</h2>
          <DecorativeRule/>
          <p className="mt-6 text-[15px] leading-8 text-[#5A4E49]">{shop.description}</p>
          <p className="mt-6 font-serif text-2xl font-bold italic text-[#633047]">“{shop.tagline}”</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <WelcomeCard icon={<Cookie/>} title="Traditional Sweets" text="Barfi, Rasgulla, Gulab Jamun and Motichoor Ladoo."/>
          <WelcomeCard icon={<CakeSlice/>} title="Fresh Bakery" text="Butter Biscuits, Rusk, Cakes, Bread and much more."/>
          <WelcomeCard icon={<Soup/>} title="Fast Food & Refreshments" text="Burgers, Shawarma, French Fries, Samosas, Pakoras, Jalebi, Dahi Bhallay, Chana Chaat and Gol Gappay."/>
          <WelcomeCard icon={<Coffee/>} title="Sunday Breakfast" text="Traditional Halwa Puri breakfast, served every Sunday."/>
        </div>
      </div>
    </section>

    <section id="about" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="text-center"><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">From our counter</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">What we make</h2><DecorativeRule/><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#665B55]">A selection of mithai, bakery favourites and savoury bites available at Flavour Sweets & Bakers.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard icon={<Croissant/>} title="Traditional Mithai" img={mithaiPlatter.url} text="Barfi, rasgulla, gulab jamun, motichoor ladoo and jalebi." tone="plum"/>
        <CategoryCard icon={<CakeSlice/>} title="Fresh Cakes & Bakery" img={cakeWide.url} text="Fresh cream cake, fruit cake and biscuits." tone="gold"/>
        <CategoryCard icon={<Soup/>} title="Savouries & Snacks" img={savouryPlatter.url} text="Samosa, chicken veggie samosa, chicken veggie roll, samosa chaat and dahi bhallay." tone="rose"/>
      </div>
    </section>

    <section id="menu" className="bg-[#F1E4D3] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">The menu</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">A taste of Flavour</h2></div><p className="max-w-sm text-sm leading-6 text-[#665B55]">Full menu and prices: [CONFIRM with shop]. Ask about today's available items.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3"><MenuGroup title="Mithai" subtitle="Traditional sweets" icon={<Croissant/>} items={["Barfi","Rasgulla","Gulab jamun","Motichoor ladoo","Jalebi"]}/><MenuGroup title="Bakery" subtitle="Cakes & baked treats" icon={<CakeSlice/>} items={["Fresh cream cake","Fruit cake","Biscuits"]}/><MenuGroup title="Savouries" subtitle="Snacks & chaat" icon={<Soup/>} items={["Samosa","Chicken veggie samosa","Chicken veggie roll","Samosa chaat","Dahi bhallay"]}/></div>
        <p className="mt-8 rounded-xl border border-[#633047]/10 bg-[#FBF5EA] p-4 text-center text-sm text-[#665B55]">Prices and today's items: ask in the shop or message us on WhatsApp.</p>
        <div className="mt-6 text-center"><ActionLink href={wa} event="click_whatsapp" label="general" section="menu">Ask about today's menu <ChevronRight size={16}/></ActionLink></div>
      </div>
    </section>

    <section id="orders" className="px-5 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#633047] shadow-xl lg:grid-cols-[.8fr_1.2fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-[#32131F]"><img src={cakeWide.url} alt="Chocolate strawberry celebration cake" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#32131F]/90 to-transparent p-6 text-center text-[#FBF5EA]"><p className="font-serif text-3xl font-bold">Made to celebrate</p><p className="mt-1 text-xs font-bold uppercase tracking-[.2em] text-[#E5BD80]">Custom cakes · Bulk mithai</p></div></div>
        <div className="p-8 text-[#FBF5EA] sm:p-10"><p className="text-[11px] font-extrabold uppercase tracking-[.23em] text-[#E5BD80]">For special occasions</p><h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Custom Cakes &<br/>Bulk Orders</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/80">Planning a birthday, a wedding or an office event? We take custom cake orders and bulk mithai orders. Tell us what you need and the date.</p><div className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><p className="rounded-xl border border-white/15 bg-white/5 p-3"><CakeSlice className="mb-2 text-[#E5BD80]"/>Custom cake orders · Order 2 days ahead</p><p className="rounded-xl border border-white/15 bg-white/5 p-3"><Package className="mb-2 text-[#E5BD80]"/>Bulk mithai orders · Order 2 days ahead</p></div><p className="mt-4 text-xs text-[#E5BD80]">Please order at least 2 days ahead. Delivery: free all over Soan Garden.</p><div className="mt-6"><p className="text-[11px] font-extrabold uppercase tracking-[.23em] text-[#E5BD80]">Sample custom cakes</p><div className="mt-3 grid grid-cols-3 gap-3">{[["Pink crown cake",customCrown.url],["Minnie bow cake",customMinnie.url],["Pastel rainbow cake",customRainbow.url]].map(([name,src])=><figure key={name} className="group min-w-0 overflow-hidden rounded-lg border border-border/20"><div className="aspect-[4/5] overflow-hidden"><img src={src} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><figcaption className="px-2 py-2 text-[10px] font-bold leading-4 text-primary-foreground">{name}</figcaption></figure>)}</div></div><div className="mt-7 flex flex-wrap gap-3"><ActionLink href={wa} kind="gold" event="click_whatsapp" label="cake_bulk" section="orders"><MessageCircle size={17}/> WhatsApp about an order</ActionLink><ActionLink href={phone} kind="light" event="click_call" label="orders" section="orders"><Phone size={17}/> Call the shop</ActionLink></div></div>
      </div>
    </section>

    <section id="photos" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20"><div className="text-center"><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">A peek inside</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">Our shop & selections</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#665B55]">Mithai, cakes and savouries from our counter.</p></div><div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">{[["Our counter",originalShop.url],["Traditional mithai",originalMithai.url],["Fresh cakes",originalCakes.url],["Butter biscuits",originalBiscuits.url],["Bakery favourites",originalBakery.url],["Chaat & refreshments",originalChaat.url],["Samosas & pakoras",originalSnacks.url],["Savoury selections",originalSavouries.url]].map(([name,src])=><figure key={name} className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#D7AD75]/40 bg-[#32131F]"><img src={src} alt={name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><figcaption className="absolute bottom-3 left-3 rounded-lg bg-[#FBF5EA]/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#633047]">{name}</figcaption></figure>)}</div></section>

    <section id="find-us" className="border-y border-[#D7AD75]/30 bg-[#F1E4D3]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20"><div><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">Come say hello</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">Visit our shop</h2><div className="mt-8 space-y-6"><ContactRow icon={<MapPin/>} title="Address"><p>H Block Main Double Road, Gate #2, Soan Garden, H Block Extension, Islamabad 45700</p><small>Landmark: [CONFIRM]</small></ContactRow><ContactRow icon={<Phone/>} title="Call the shop"><a href={phone} onClick={()=>track("click_call","find_us","find_us")}>{shop.phone}</a></ContactRow><ContactRow icon={<Clock3/>} title="Opening hours"><p>Every day: 7:00 AM – 1:30 AM</p><small>Friday: same hours</small></ContactRow></div><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={directions} event="click_directions" label="find_us" section="find_us"><MapPin size={17}/> Get directions</ActionLink><ActionLink href={shop.reviewUrl} kind="outline" event="click_review" label="google_review" section="find_us"><Star size={17}/> Leave a Google review</ActionLink></div></div><div className="overflow-hidden rounded-[2rem] border border-[#D7AD75]/50 bg-[#E7D9C8] p-2 shadow-lg"><iframe title="Map showing Flavour Sweets & Bakers in Soan Garden, Islamabad" src="https://www.google.com/maps?q=33.5560193,73.1650735&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[350px] w-full rounded-[1.5rem] border-0"/></div></div></section>

    <footer className="bg-[#32131F] px-5 py-12 pb-28 text-[#FBF5EA] md:pb-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr]"><div><img src={logoImg.url} alt="Flavour Sweets & Bakers" className="h-auto w-[150px]"/><p className="mt-5 max-w-sm text-sm leading-7 text-white/65">Mithai, cakes and savouries in Soan Garden, Islamabad.</p><p className="mt-3 text-sm text-white/65">H Block Main Double Road, Gate #2, Soan Garden, Islamabad 45700</p><a href={phone} className="mt-3 inline-block text-sm underline underline-offset-4" onClick={()=>track("click_call","footer","footer")}>{shop.phone}</a></div><div className="flex flex-col gap-3 text-sm font-semibold md:items-end"><a href="#menu">Menu</a><a href="#orders">Custom cakes & bulk orders</a><a href="#find-us">Find us</a><a href="/privacy">Privacy</a></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50"><span>© {new Date().getFullYear()} Flavour Sweets & Bakers</span><a href="https://genrationz.com" target="_blank" rel="noopener noreferrer">Website by Genrationz ↗</a></div></footer>
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#D7AD75]/40 bg-[#FBF5EA] p-2 shadow-[0_-8px_30px_rgba(42,35,32,.12)] md:hidden"><a href={phone} onClick={()=>track("click_call","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-extrabold text-[#633047]"><Phone size={16}/> Call</a><a href={wa} onClick={()=>track("click_whatsapp","general","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#633047] text-xs font-extrabold text-white"><MessageCircle size={16}/> WhatsApp</a><a href={directions} onClick={()=>track("click_directions","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-extrabold text-[#633047]"><MapPin size={16}/> Directions</a></div>
  </main>;
}
function ProductCarousel(){
  const wrap=useRef<HTMLDivElement>(null);
  const items=useRef<(HTMLDivElement|null)[]>([]);
  useEffect(()=>{
    const box=wrap.current; if(!box) return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf=0,last=performance.now(),angle=0,paused=false;
    const on=()=>{paused=true},off=()=>{paused=false};
    box.addEventListener("mouseenter",on);box.addEventListener("mouseleave",off);
    const draw=()=>{
      const w=box.clientWidth,h=box.clientHeight;
      items.current.forEach((el,i)=>{ if(!el) return;
        const rad=((angle+i*90)*Math.PI)/180;
        const depth=(Math.cos(rad)+1)/2;
        const x=Math.sin(rad)*w*0.3, y=(depth-0.5)*h*0.13;
        el.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%) scale(${0.45+depth*0.85})`;
        el.style.zIndex=String(Math.round(depth*100));
        el.style.opacity=String(0.45+depth*0.55);
        const label=el.lastElementChild as HTMLElement|null; if(label) label.style.opacity=depth>0.85?"1":"0";
      });
    };
    const tick=(t:number)=>{const dt=Math.min(t-last,50);last=t;if(!paused)angle=(angle+dt/1000*(360/ROTATION_SECONDS))%360;draw();raf=requestAnimationFrame(tick)};
    draw(); if(!reduce) raf=requestAnimationFrame(tick);
    return ()=>{cancelAnimationFrame(raf);box.removeEventListener("mouseenter",on);box.removeEventListener("mouseleave",off)};
  },[]);
  return <div ref={wrap} className="hero-carousel">{products.map((p,i)=><div key={p.name} ref={el=>{items.current[i]=el}} className="hero-carousel-item">
      <img src={p.src} alt={p.name} loading="eager" decoding="async"/>
      <span className="hero-product-orbit-label">{p.name}</span>
    </div>)}</div>;
}

function WelcomeCard({icon,title,text}:{icon:React.ReactNode;title:string;text:string}){return <div className="rounded-2xl border border-[#D7AD75]/45 bg-[#FBF5EA] p-5 shadow-sm"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#633047] text-[#E5BD80]">{icon}</span><h3 className="mt-4 font-serif text-xl font-bold text-[#633047]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#665B55]">{text}</p></div>}
function HeroMini({icon,title,sub}:{icon:React.ReactNode;title:string;sub:string}){return <div className="flex flex-col items-center gap-2 border-r border-[#D7AD75]/20 px-2 text-center last:border-0"><span className="text-[#D7AD75]">{icon}</span><span className="text-[10px] font-extrabold leading-tight text-[#FBF5EA] sm:text-xs">{title}<br/>{sub}</span></div>}
function SweetIllustration({kind}:{kind:"mithai"|"cake"|"samosa"}){return <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D7AD75]/50 bg-gradient-to-br from-[#E9C58E] to-[#A66A42] text-[#633047] shadow-xl sm:h-28 sm:w-28">{kind==="cake"?<CakeSlice size={52} strokeWidth={1.2}/>:kind==="mithai"?<Cookie size={52} strokeWidth={1.2}/>:<Croissant size={52} strokeWidth={1.2}/>}</div>}
function InfoTile({icon,title,detail}:{icon:React.ReactNode;title:string;detail:string}){return <div className="flex items-center gap-3 bg-[#633047] px-4 py-5 text-[#FBF5EA] sm:px-6"><span className="text-[#E5BD80]">{icon}</span><div><p className="text-[11px] font-extrabold">{title}</p><p className="mt-1 text-[10px] leading-4 text-white/75">{detail}</p></div></div>}
function DecorativeRule(){return <div className="mx-auto mt-4 flex max-w-40 items-center gap-3"><span className="h-px flex-1 bg-[#D7AD75]"/><span className="text-[#A46C3D]">✧</span><span className="h-px flex-1 bg-[#D7AD75]"/></div>}
function CategoryCard({icon,title,text,tone,img}:{icon:React.ReactNode;title:string;text:string;tone:"plum"|"gold"|"rose";img:string}){const bg=tone==="plum"?"bg-[#633047]":tone==="gold"?"bg-[#D7AD75]":"bg-[#8D4B57]";const fg=tone==="gold"?"text-[#32131F]":"text-[#FBF5EA]";return <article className={`group relative overflow-hidden rounded-[1.7rem] p-7 shadow-md transition-transform hover:-translate-y-1 ${bg} ${fg}`}><div className="-mx-7 -mt-7 mb-6 aspect-[16/10] overflow-hidden bg-[#32131F]"><img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="relative"><span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-current/25">{icon}</span><h3 className="mt-7 font-serif text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 opacity-85">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em]">Explore <ArrowUpRight size={14}/></span></div></article>}
function MenuGroup({title,subtitle,icon,items}:{title:string;subtitle:string;icon:React.ReactNode;items:string[]}){return <article className="rounded-[1.7rem] border border-[#D7AD75]/40 bg-[#FBF5EA] p-7 shadow-sm"><div className="mb-6 flex items-center justify-between"><div><h3 className="font-serif text-2xl font-bold text-[#633047]">{title}</h3><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-[#A46C3D]">{subtitle}</p></div><span className="text-[#A46C3D]">{icon}</span></div><ul className="space-y-3">{items.map(item=><li key={item} className="flex items-center justify-between border-b border-[#633047]/10 pb-3 text-sm"><span>{item}</span><span className="text-[#C28A50]">✦</span></li>)}</ul></article>}
function ContactRow({icon,title,children}:{icon:React.ReactNode;title:string;children:React.ReactNode}){return <div className="flex gap-4"><span className="mt-1 shrink-0 text-[#633047]">{icon}</span><div><p className="font-extrabold text-[#633047]">{title}</p><div className="mt-1 max-w-md space-y-1 text-sm leading-6 text-[#665B55]">{children}</div></div></div>}
