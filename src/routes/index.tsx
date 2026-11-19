import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Phone, MessageCircle, Clock3, CakeSlice, Menu as MenuIcon, ChevronRight, Star, ShoppingBag } from "lucide-react";

import { shop } from "../data/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flavour Sweets & Bakers: Mithai, Cakes & Samosas in Soan Garden" },
      { name: "description", content: "Fresh mithai, cakes and samosas on Main Double Road, H Block, Soan Garden, Islamabad. Open 7 AM to 1:30 AM daily. Order by call or WhatsApp." },
      { property: "og:title", content: "Flavour Sweets & Bakers | Soan Garden, Islamabad" },
      { property: "og:description", content: "Fresh mithai, cakes and samosas in Soan Garden, Islamabad." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function track(event: string, label: string, section: string) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", event, { label, section });
}
function ActionLink({ href, children, kind = "dark", event, label, section }: { href: string; children: React.ReactNode; kind?: "dark" | "light" | "outline"; event: string; label: string; section: string }) {
  return <a href={href} onClick={() => track(event, label, section)} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${kind === "dark" ? "bg-[#633047] text-white hover:bg-[#5f1721]" : kind === "light" ? "bg-[#FBF5EA] text-[#302323]" : "border border-[#633047]/35 bg-transparent text-[#633047] hover:bg-[#633047]/5"}`}>{children}</a>;
}
function Index() {
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);
  const local = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
  const day = local.getDay();
  const minutes = local.getHours() * 60 + local.getMinutes();
  const opens = day === 5 ? 7 * 60 + 30 : 7 * 60;
  const isOpen = minutes >= opens || minutes < 90;
  const phone = `tel:${shop.phone.replace(/[^+0-9]/g, "")}`;
  const wa = shop.whatsappConfirmed ? `https://wa.me/${shop.whatsapp.replace(/[^0-9]/g, "")}` : "#orders";
  const directions = "https://www.google.com/maps/dir/?api=1&destination=33.5560193,73.1650735";
  return (
    <main id="top" className="min-h-screen bg-[#FBF5EA] pb-24 text-[#302323]">
      <div className="bg-[#302323] px-4 py-2 text-center text-xs tracking-[.14em] text-[#FBF5EA] sm:text-sm">SOAN GARDEN · ISLAMABAD <span className="mx-2 text-[#C98B4A]">✦</span> FRESHLY MADE, READY TO SHARE</div>
      <header className="sticky top-0 z-40 border-b border-[#633047]/10 bg-[#FBF5EA]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="Flavour Sweets & Bakers home" className="block w-[172px] sm:w-[198px]"><img src="/flavour-logo.svg" alt="Flavour Sweets & Bakers" className="h-auto w-full" /></a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex"><a href="#about" className="hover:text-[#633047]">Our kitchen</a><a href="#menu" className="hover:text-[#633047]">Menu</a><a href="#orders" className="hover:text-[#633047]">Special orders</a><a href="#find-us" className="hover:text-[#633047]">Find us</a></nav>
          <a href={phone} onClick={() => track("click_call","header","header")} className="hidden min-h-11 items-center gap-2 rounded-full bg-[#633047] px-5 text-sm font-semibold text-white md:inline-flex"><Phone size={16}/> Call the shop</a>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden"><MenuIcon/></button>
        </div>
        {open && <nav className="grid gap-1 border-t border-[#633047]/10 px-5 py-3 text-sm md:hidden"><a onClick={() => setOpen(false)} className="rounded-lg p-3" href="#about">Our kitchen</a><a onClick={() => setOpen(false)} className="rounded-lg p-3" href="#menu">Menu</a><a onClick={() => setOpen(false)} className="rounded-lg p-3" href="#orders">Special orders</a><a onClick={() => setOpen(false)} className="rounded-lg p-3" href="#find-us">Find us</a></nav>}
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#C98B4A]/10 blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#633047]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[.17em] text-[#633047]"><span className="h-2 w-2 rounded-full bg-[#C98B4A]"/> Mithai · Cakes · Savouries</div>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">Fresh mithai, cakes and samosas <em className="text-[#633047]">in Soan Garden.</em></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#665B55]">Flavour Sweets & Bakers on Main Double Road, H Block. A neighbourhood stop for something sweet, savoury or made for sharing.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ActionLink href={phone} event="click_call" label="hero" section="hero"><Phone size={17}/> Call now</ActionLink><ActionLink href={wa} kind="outline" event="click_whatsapp" label="general" section="hero"><MessageCircle size={17}/> WhatsApp</ActionLink><ActionLink href={directions} kind="outline" event="click_directions" label="hero" section="hero"><MapPin size={17}/> Directions</ActionLink></div>
            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-[#665B55]"><span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 font-semibold ${isOpen ? "bg-emerald-100 text-emerald-900" : "bg-[#633047]/10 text-[#633047]"}`}><span className={`h-2 w-2 rounded-full ${isOpen ? "bg-emerald-600" : "bg-[#633047]"}`}/>{isOpen ? "Open now" : "Closed right now"}</span><span>Daily hours: 7:00 AM – 1:30 AM</span><span className="text-xs">Friday opening: [CONFIRM 7:30 AM]</span></div>
          </div>
          <div className="relative">
            <div className="aspect-[4/4.2] overflow-hidden rounded-[2rem] border border-[#633047]/15 bg-[#F2E4D1] p-5 sm:p-8">
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-[#633047]/35 bg-[#F0E4D4] px-6 text-center">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#633047] text-[#FBF5EA] shadow-[0_12px_30px_rgba(99,48,71,.22)]"><CakeSlice size={42}/></div>
                <p className="font-serif text-3xl font-semibold text-[#633047]">A little sweetness<br/>for every occasion.</p>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#665B55]">[OWNER PHOTO PLACEHOLDER — add an authentic shop-front photo here]</p>
                <span className="mt-6 rounded-full bg-[#FBF5EA] px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#633047]">Flavour Sweets & Bakers</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-[#C98B4A] px-5 py-4 shadow-lg sm:block"><span className="block font-serif text-2xl font-bold">Made to share</span><span className="text-xs font-medium">Sweet moments start here</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#633047]/10 bg-[#F0E4D4]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#633047]">A neighbourhood favourite</p><h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Something for every kind of craving.</h2></div><p className="max-w-2xl text-base leading-8 text-[#665B55]">From classic mithai to cakes and teatime savouries, explore the treats listed at Flavour Sweets & Bakers. Looking for a particular item? Ask the shop about today's availability.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3"><article className="rounded-3xl bg-[#FBF5EA] p-7"><span className="text-3xl">✳</span><h3 className="mt-5 font-serif text-2xl font-semibold">Traditional mithai</h3><p className="mt-3 text-sm leading-7 text-[#665B55]">A selection of familiar sweet-shop classics, including barfi, rasgulla and gulab jamun.</p></article><article className="rounded-3xl bg-[#FBF5EA] p-7"><span className="text-3xl">♡</span><h3 className="mt-5 font-serif text-2xl font-semibold">Cakes & bakery</h3><p className="mt-3 text-sm leading-7 text-[#665B55]">Fresh cream cakes, fruit cake and biscuits for everyday treats and celebrations.</p></article><article className="rounded-3xl bg-[#FBF5EA] p-7"><span className="text-3xl">⌁</span><h3 className="mt-5 font-serif text-2xl font-semibold">Savoury bites</h3><p className="mt-3 text-sm leading-7 text-[#665B55]">Samosas, rolls, samosa chaat and dahi bhallay for a savoury break.</p></article></div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#633047]">From the counter</p><h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">A taste of the menu</h2></div><p className="max-w-sm text-sm leading-6 text-[#665B55]">A selection of confirmed items. Full menu and prices: [CONFIRM with shop].</p></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <MenuGroup title="Mithai" subtitle="Traditional sweets" items={["Barfi","Rasgulla","Gulab jamun","Motichoor ladoo","Jalebi"]}/>
          <MenuGroup title="Bakery" subtitle="Cakes & baked treats" items={["Fresh cream cake","Fruit cake","Biscuits"]}/>
          <MenuGroup title="Savoury" subtitle="Snacks & chaat" items={["Samosa","Chicken veggie samosa","Chicken veggie roll","Samosa chaat","Dahi bhallay"]}/>
        </div>
        <p className="mt-9 rounded-2xl border border-[#633047]/15 bg-[#F0E4D4] p-5 text-center text-sm text-[#665B55]">Prices and today's items: ask in the shop or message us on WhatsApp.</p>
        <div className="mt-7 text-center"><ActionLink href={wa} event="click_whatsapp" label="general" section="menu">Ask about today's menu <ChevronRight size={16}/></ActionLink></div>
      </section>

      <section id="orders" className="bg-[#633047] text-[#FBF5EA]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#D7AD75]">For your special moments</p><h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">A celebration calls for something special.</h2><p className="mt-6 max-w-xl leading-8 text-white/80">Planning a birthday, a wedding or an office event? We take custom cake orders and bulk mithai orders. Tell us what you need and the date.</p><p className="mt-4 text-sm text-[#F8DCA0]">Please order [CONFIRM: number] days ahead.</p><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={wa} kind="light" event="click_whatsapp" label="cake_bulk" section="orders"><MessageCircle size={17}/> WhatsApp about an order</ActionLink><ActionLink href={phone} kind="outline" event="click_call" label="orders" section="orders"><Phone size={17}/> Call the shop</ActionLink></div></div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8"><div className="flex items-center gap-3"><CakeSlice className="text-[#D7AD75]" size={25}/><h3 className="font-serif text-2xl font-semibold">Order details</h3></div><div className="mt-7 space-y-5 text-sm"><div><p className="font-semibold">Custom cakes</p><p className="mt-1 text-white/70">Available · Lead time: [CONFIRM]</p></div><div className="h-px bg-white/20"/><div><p className="font-semibold">Bulk mithai orders</p><p className="mt-1 text-white/70">Available · Lead time: [CONFIRM]</p></div><div className="h-px bg-white/20"/><div><p className="font-semibold">Delivery</p><p className="mt-1 text-white/70">We deliver [CONFIRM: area, charge, minimum order].</p></div><div className="h-px bg-white/20"/><div><p className="font-semibold">Payment methods</p><p className="mt-1 text-white/70">Cash, card, JazzCash and Easypaisa.</p></div></div></div>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#633047]">A peek inside</p><h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Made here, shared everywhere.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#665B55]">[OWNER PHOTOS NEEDED — real shop, mithai, cakes and savouries. No stock photos used.]</p></div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{["Shop front","Mithai counter","Fresh cakes","Savoury selection","Barfi & jalebi","Celebration cake","Biscuits","Shop interior"].map((name,i)=><div key={name} className={`flex aspect-square items-center justify-center rounded-2xl border border-dashed border-[#633047]/25 bg-[#F0E4D4] p-4 text-center ${i===0||i===3?"md:col-span-1":""}`}><span className="text-xs font-semibold uppercase tracking-wider text-[#633047]/70">[Photo needed]<br/><span className="mt-2 block normal-case tracking-normal">{name}</span></span></div>)}</div>
      </section>

      <section id="find-us" className="border-t border-[#633047]/10 bg-[#F0E4D4]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#633047]">Come say hello</p><h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Find us in Soan Garden.</h2><div className="mt-9 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-[#633047]"/><div><p className="font-semibold">Address</p><p className="mt-1 max-w-sm text-sm leading-7 text-[#665B55]">H Block Main Double Road, Gate #2, Soan Garden, H Block Extension, Islamabad 45700</p><p className="mt-1 text-xs text-[#633047]">Landmark: [CONFIRM]</p></div></div><div className="flex gap-4"><Phone className="mt-1 shrink-0 text-[#633047]"/><div><p className="font-semibold">Call the shop</p><a className="mt-1 inline-block text-sm text-[#665B55] underline underline-offset-4" href={phone} onClick={() => track("click_call","find_us","find_us")}>{shop.phone}</a></div></div><div className="flex gap-4"><Clock3 className="mt-1 shrink-0 text-[#633047]"/><div><p className="font-semibold">Opening hours</p><p className="mt-1 text-sm text-[#665B55]">Every day: 7:00 AM – 1:30 AM</p><p className="text-sm text-[#665B55]">Friday opening: [CONFIRM 7:30 AM]</p></div></div></div><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={directions} event="click_directions" label="find_us" section="find_us"><MapPin size={17}/> Get directions</ActionLink><ActionLink href={shop.reviewUrl} kind="outline" event="click_review" label="google_review" section="find_us"><Star size={17}/> Leave a Google review</ActionLink></div></div>
          <div className="min-h-[350px] overflow-hidden rounded-3xl border border-[#633047]/15 bg-[#EDE0CF]"><iframe title="Map showing Flavour Sweets & Bakers in Soan Garden, Islamabad" src="https://www.google.com/maps?q=33.5560193,73.1650735&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[350px] w-full border-0"/></div>
        </div>
      </section>

      <footer className="bg-[#302323] px-5 py-12 pb-28 text-[#FBF5EA] md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr]"><div><img src="/flavour-logo-light.svg" alt="Flavour Sweets & Bakers" className="h-auto w-[190px]" /><p className="mt-5 max-w-sm text-sm leading-7 text-white/65">Mithai, cakes and savouries in Soan Garden, Islamabad.</p><p className="mt-3 text-sm text-white/65">H Block Main Double Road, Gate #2, Soan Garden, Islamabad 45700</p><a href={phone} className="mt-3 inline-block text-sm underline underline-offset-4" onClick={() => track("click_call","footer","footer")}>{shop.phone}</a></div><div className="flex flex-col gap-3 text-sm md:items-end"><a href="#menu" className="hover:text-[#D7AD75]">Menu</a><a href="#orders" className="hover:text-[#D7AD75]">Special orders</a><a href="#find-us" className="hover:text-[#D7AD75]">Find us</a><a href="/privacy" className="hover:text-[#D7AD75]">Privacy</a></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50"><span>© {new Date().getFullYear()} Flavour Sweets & Bakers</span><a href="https://genrationz.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Website by Genrationz ↗</a></div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#633047]/15 bg-[#FBF5EA] p-2 shadow-[0_-8px_30px_rgba(42,35,32,.12)] md:hidden"><a href={phone} onClick={() => track("click_call","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-bold text-[#633047]"><Phone size={16}/> Call</a><a href={wa} onClick={() => track("click_whatsapp","general","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#633047] text-xs font-bold text-white"><MessageCircle size={16}/> WhatsApp</a><a href={directions} onClick={() => track("click_directions","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-bold text-[#633047]"><MapPin size={16}/> Directions</a></div>
    </main>
  );
}
function MenuGroup({title,subtitle,items}:{title:string;subtitle:string;items:string[]}) {
  return <article className="rounded-3xl border border-[#633047]/15 bg-white/50 p-7"><div className="mb-6 flex items-center justify-between"><div><h3 className="font-serif text-2xl font-semibold">{title}</h3><p className="mt-1 text-xs uppercase tracking-[.13em] text-[#633047]">{subtitle}</p></div><ShoppingBag className="text-[#633047]"/></div><ul className="space-y-4">{items.map(item=><li key={item} className="flex items-center justify-between border-b border-[#633047]/10 pb-3 text-sm"><span>{item}</span><span className="text-[#C98B4A]">✦</span></li>)}</ul></article>;
}
