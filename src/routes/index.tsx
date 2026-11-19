import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Phone, MessageCircle, Clock3, CakeSlice, Menu as MenuIcon, ChevronRight, Star, ShoppingBag, Croissant, Cookie, Soup, Coffee, Truck, CreditCard, Package, ArrowUpRight } from "lucide-react";
import { shop } from "../data/shop";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Flavour Sweets & Bakers: Mithai, Cakes & Samosas in Soan Garden" },
    { name: "description", content: "Fresh mithai, cakes and samosas on Main Double Road, H Block, Soan Garden, Islamabad. Open 7 AM to 1:30 AM daily. Order by call or WhatsApp." },
    { property: "og:title", content: "Flavour Sweets & Bakers | Soan Garden, Islamabad" },
    { property: "og:description", content: "Fresh mithai, cakes and samosas in Soan Garden, Islamabad." },
    { property: "og:type", content: "website" },
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
        <a href="#top" aria-label="Flavour Sweets & Bakers home" className="w-[156px] shrink-0 sm:w-[190px]"><img src="/flavour-logo.svg" alt="Flavour Sweets & Bakers" className="h-auto w-full"/></a>
        <nav className="hidden items-center gap-7 text-[13px] font-extrabold text-[#442832] lg:flex"><a href="#about" className="hover:text-[#A46C3D]">Our Products</a><a href="#menu" className="hover:text-[#A46C3D]">Menu</a><a href="#orders" className="hover:text-[#A46C3D]">Cakes & Orders</a><a href="#photos" className="hover:text-[#A46C3D]">Photos</a><a href="#find-us" className="hover:text-[#A46C3D]">Find Us</a></nav>
        <a href={phone} onClick={()=>track("click_call","header","header")} className="hidden min-h-11 items-center gap-2 rounded-full bg-[#633047] px-5 text-sm font-bold text-white md:inline-flex"><Phone size={16}/> +92 306 5833000</a>
        <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-lg border border-[#633047]/20 p-2 text-[#633047] lg:hidden"><MenuIcon/></button>
      </div>
      {open&&<nav className="grid gap-1 border-t border-[#633047]/10 bg-[#FBF5EA] px-5 py-3 text-sm font-bold lg:hidden"><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#about">Our Products</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#menu">Menu</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#orders">Cakes & Orders</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#photos">Photos</a><a onClick={()=>setOpen(false)} className="rounded-lg p-3" href="#find-us">Find Us</a></nav>}
    </header>

    <section className="relative isolate overflow-hidden bg-[#32131F] text-[#FBF5EA]">
      <div className="absolute inset-0 bakery-pattern opacity-30"/>
      <div className="absolute -right-24 top-0 h-[520px] w-[520px] rounded-full border border-[#D7AD75]/20"/>
      <div className="absolute -right-12 top-12 h-[420px] w-[420px] rounded-full border border-[#D7AD75]/15"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:py-20 lg:grid-cols-[1fr_.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.24em] text-[#D7AD75]"><span className="h-px w-8 bg-[#D7AD75]"/> Mithai · Bakery · Refreshments</div>
          <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[.99] tracking-tight sm:text-6xl lg:text-[4.5rem]">A little sweetness.<br/><em className="text-[#E5BD80]">A lot of flavour.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#F6E7D2]/85 sm:text-lg">Fresh mithai, cakes and samosas in Soan Garden, Islamabad. Find Flavour Sweets & Bakers on H Block Main Double Road.</p>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            <HeroMini icon={<Croissant/>} title="Traditional" sub="Mithai"/><HeroMini icon={<CakeSlice/>} title="Fresh" sub="Cakes"/><HeroMini icon={<Soup/>} title="Savouries" sub="& Snacks"/><HeroMini icon={<Coffee/>} title="Refreshments" sub="& more"/>
          </div>
          <div className="mt-9 flex flex-wrap gap-3"><ActionLink href={phone} kind="gold" event="click_call" label="hero" section="hero"><Phone size={17}/> Call now</ActionLink><ActionLink href={wa} kind="light" event="click_whatsapp" label="general" section="hero"><MessageCircle size={17}/> WhatsApp <span className="text-[10px]">[CONFIRM NUMBER]</span></ActionLink><ActionLink href={directions} kind="outline" event="click_directions" label="hero" section="hero"><MapPin size={17}/> Get directions</ActionLink></div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#F6E7D2]/80"><span className={`rounded-full px-3 py-2 ${isOpen?"bg-emerald-100 text-emerald-900":"bg-white/10 text-[#F6E7D2]"}`}>{isOpen?"● Open now":"● Closed right now"}</span><span>Every day · 7 AM – 1:30 AM</span><span className="text-[#E5BD80]">Friday: [CONFIRM]</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="absolute -inset-4 rounded-[48%_48%_38%_38%] border border-[#D7AD75]/35"/>
          <div className="relative overflow-hidden rounded-[46%_46%_2rem_2rem] border-[7px] border-[#D7AD75]/70 bg-gradient-to-br from-[#6E3545] via-[#4B1F30] to-[#24121B] p-5 shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:p-8">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(#D7AD75 1px, transparent 1px)",backgroundSize:"18px 18px"}}/>
            <div className="relative flex min-h-[350px] flex-col items-center justify-center text-center sm:min-h-[430px]">
              <img src="/flavour-logo-light.svg" alt="Flavour Sweets & Bakers" className="mb-7 w-[78%] max-w-[340px]"/>
              <div className="flex items-end justify-center gap-2 sm:gap-4">
                <SweetIllustration kind="mithai"/><SweetIllustration kind="cake"/><SweetIllustration kind="samosa"/>
              </div>
              <p className="mt-7 font-serif text-2xl font-semibold italic text-[#F6E7D2] sm:text-3xl">Made for your moments</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#D7AD75]">Soan Garden · Islamabad</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-1 rounded-2xl border border-[#D7AD75]/40 bg-[#E5BD80] px-5 py-3 text-[#32131F] shadow-xl sm:-left-8"><span className="block font-serif text-xl font-bold">Sweeten the day</span><span className="text-[10px] font-extrabold uppercase tracking-wider">Flavour Sweets & Bakers</span></div>
        </div>
      </div>
    </section>

    <section className="relative z-10 mx-auto -mt-1 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#D7AD75]/30 bg-[#D7AD75]/40 shadow-lg sm:grid-cols-4">
      <InfoTile icon={<MapPin/>} title="Visit us" detail="H Block, Soan Garden"/>
      <InfoTile icon={<Clock3/>} title="Opening hours" detail="7 AM – 1:30 AM daily"/>
      <InfoTile icon={<CreditCard/>} title="Payments" detail="Cash, card, JazzCash, Easypaisa"/>
      <InfoTile icon={<Truck/>} title="Delivery" detail="[CONFIRM AREA & CHARGES]"/>
    </section>

    <section id="about" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="text-center"><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">From our counter</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">What we make</h2><DecorativeRule/><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#665B55]">A selection of mithai, bakery favourites and savoury bites available at Flavour Sweets & Bakers.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard icon={<Croissant/>} title="Traditional Mithai" text="Barfi, rasgulla, gulab jamun, motichoor ladoo and jalebi." tone="plum"/>
        <CategoryCard icon={<CakeSlice/>} title="Fresh Cakes & Bakery" text="Fresh cream cake, fruit cake and biscuits." tone="gold"/>
        <CategoryCard icon={<Soup/>} title="Savouries & Snacks" text="Samosa, chicken veggie samosa, chicken veggie roll, samosa chaat and dahi bhallay." tone="rose"/>
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
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#D7AD75] to-[#A46C3D] p-8"><div className="absolute inset-0 bakery-pattern opacity-40"/><div className="relative text-center text-[#32131F]"><CakeSlice size={76} strokeWidth={1.2} className="mx-auto"/><p className="mt-5 font-serif text-3xl font-bold">Made to celebrate</p><p className="mt-2 text-xs font-bold uppercase tracking-[.2em]">Custom cakes · Bulk mithai</p></div></div>
        <div className="p-8 text-[#FBF5EA] sm:p-10"><p className="text-[11px] font-extrabold uppercase tracking-[.23em] text-[#E5BD80]">For special occasions</p><h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Custom Cakes &<br/>Bulk Orders</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/80">Planning a birthday, a wedding or an office event? We take custom cake orders and bulk mithai orders. Tell us what you need and the date.</p><div className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><p className="rounded-xl border border-white/15 bg-white/5 p-3"><CakeSlice className="mb-2 text-[#E5BD80]"/>Custom cake orders · Lead time [CONFIRM]</p><p className="rounded-xl border border-white/15 bg-white/5 p-3"><Package className="mb-2 text-[#E5BD80]"/>Bulk mithai orders · Lead time [CONFIRM]</p></div><p className="mt-4 text-xs text-[#E5BD80]">Please order [CONFIRM: number] days ahead. Delivery: [CONFIRM area, charge and minimum order].</p><div className="mt-7 flex flex-wrap gap-3"><ActionLink href={wa} kind="gold" event="click_whatsapp" label="cake_bulk" section="orders"><MessageCircle size={17}/> WhatsApp about an order</ActionLink><ActionLink href={phone} kind="light" event="click_call" label="orders" section="orders"><Phone size={17}/> Call the shop</ActionLink></div></div>
      </div>
    </section>

    <section id="photos" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20"><div className="text-center"><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">A peek inside</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">Our shop & selections</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#665B55]">[OWNER PHOTOS NEEDED — add authentic shop and product photos here. No stock photos used.]</p></div><div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">{["Shop front","Mithai counter","Fresh cakes","Savoury selection","Barfi & jalebi","Celebration cake","Biscuits","Shop interior"].map((name,i)=><div key={name} className={`photo-placeholder flex aspect-[1.12] items-end rounded-2xl border border-[#D7AD75]/40 p-4 ${i%3===0?"bg-[#E7D4BD]":i%3===1?"bg-[#EEDFCB]":"bg-[#E4D0BB"}`}><span className="rounded-lg bg-[#FBF5EA]/90 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#633047]">Photo needed · {name}</span></div>)}</div></section>

    <section id="find-us" className="border-y border-[#D7AD75]/30 bg-[#F1E4D3]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-20"><div><p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#A46C3D]">Come say hello</p><h2 className="mt-3 font-serif text-4xl font-bold text-[#633047] sm:text-5xl">Visit our shop</h2><div className="mt-8 space-y-6"><ContactRow icon={<MapPin/>} title="Address"><p>H Block Main Double Road, Gate #2, Soan Garden, H Block Extension, Islamabad 45700</p><small>Landmark: [CONFIRM]</small></ContactRow><ContactRow icon={<Phone/>} title="Call the shop"><a href={phone} onClick={()=>track("click_call","find_us","find_us")}>{shop.phone}</a></ContactRow><ContactRow icon={<Clock3/>} title="Opening hours"><p>Every day: 7:00 AM – 1:30 AM</p><small>Friday opening: [CONFIRM 7:30 AM]</small></ContactRow></div><div className="mt-8 flex flex-wrap gap-3"><ActionLink href={directions} event="click_directions" label="find_us" section="find_us"><MapPin size={17}/> Get directions</ActionLink><ActionLink href={shop.reviewUrl} kind="outline" event="click_review" label="google_review" section="find_us"><Star size={17}/> Leave a Google review</ActionLink></div></div><div className="overflow-hidden rounded-[2rem] border border-[#D7AD75]/50 bg-[#E7D9C8] p-2 shadow-lg"><iframe title="Map showing Flavour Sweets & Bakers in Soan Garden, Islamabad" src="https://www.google.com/maps?q=33.5560193,73.1650735&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[350px] w-full rounded-[1.5rem] border-0"/></div></div></section>

    <footer className="bg-[#32131F] px-5 py-12 pb-28 text-[#FBF5EA] md:pb-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr]"><div><img src="/flavour-logo-light.svg" alt="Flavour Sweets & Bakers" className="h-auto w-[190px]"/><p className="mt-5 max-w-sm text-sm leading-7 text-white/65">Mithai, cakes and savouries in Soan Garden, Islamabad.</p><p className="mt-3 text-sm text-white/65">H Block Main Double Road, Gate #2, Soan Garden, Islamabad 45700</p><a href={phone} className="mt-3 inline-block text-sm underline underline-offset-4" onClick={()=>track("click_call","footer","footer")}>{shop.phone}</a></div><div className="flex flex-col gap-3 text-sm font-semibold md:items-end"><a href="#menu">Menu</a><a href="#orders">Custom cakes & bulk orders</a><a href="#find-us">Find us</a><a href="/privacy">Privacy</a></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50"><span>© {new Date().getFullYear()} Flavour Sweets & Bakers</span><a href="https://genrationz.com" target="_blank" rel="noopener noreferrer">Website by Genrationz ↗</a></div></footer>
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#D7AD75]/40 bg-[#FBF5EA] p-2 shadow-[0_-8px_30px_rgba(42,35,32,.12)] md:hidden"><a href={phone} onClick={()=>track("click_call","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-extrabold text-[#633047]"><Phone size={16}/> Call</a><a href={wa} onClick={()=>track("click_whatsapp","general","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#633047] text-xs font-extrabold text-white"><MessageCircle size={16}/> WhatsApp</a><a href={directions} onClick={()=>track("click_directions","mobile_bar","mobile_bar")} className="flex min-h-12 items-center justify-center gap-2 rounded-xl text-xs font-extrabold text-[#633047]"><MapPin size={16}/> Directions</a></div>
  </main>;
}
function HeroMini({icon,title,sub}:{icon:React.ReactNode;title:string;sub:string}){return <div className="flex flex-col items-center gap-2 border-r border-[#D7AD75]/20 px-2 text-center last:border-0"><span className="text-[#D7AD75]">{icon}</span><span className="text-[10px] font-extrabold leading-tight text-[#FBF5EA] sm:text-xs">{title}<br/>{sub}</span></div>}
function SweetIllustration({kind}:{kind:"mithai"|"cake"|"samosa"}){return <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D7AD75]/50 bg-gradient-to-br from-[#E9C58E] to-[#A66A42] text-[#633047] shadow-xl sm:h-28 sm:w-28">{kind==="cake"?<CakeSlice size={52} strokeWidth={1.2}/>:kind==="mithai"?<Cookie size={52} strokeWidth={1.2}/>:<Croissant size={52} strokeWidth={1.2}/>}</div>}
function InfoTile({icon,title,detail}:{icon:React.ReactNode;title:string;detail:string}){return <div className="flex items-center gap-3 bg-[#633047] px-4 py-5 text-[#FBF5EA] sm:px-6"><span className="text-[#E5BD80]">{icon}</span><div><p className="text-[11px] font-extrabold">{title}</p><p className="mt-1 text-[10px] leading-4 text-white/75">{detail}</p></div></div>}
function DecorativeRule(){return <div className="mx-auto mt-4 flex max-w-40 items-center gap-3"><span className="h-px flex-1 bg-[#D7AD75]"/><span className="text-[#A46C3D]">✧</span><span className="h-px flex-1 bg-[#D7AD75]"/></div>}
function CategoryCard({icon,title,text,tone}:{icon:React.ReactNode;title:string;text:string;tone:"plum"|"gold"|"rose"}){const bg=tone==="plum"?"bg-[#633047]":tone==="gold"?"bg-[#D7AD75]":"bg-[#8D4B57]";const fg=tone==="gold"?"text-[#32131F]":"text-[#FBF5EA]";return <article className={`group relative overflow-hidden rounded-[1.7rem] p-7 shadow-md transition-transform hover:-translate-y-1 ${bg} ${fg}`}><div className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-current/15"/><div className="relative"><span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-current/25">{icon}</span><h3 className="mt-7 font-serif text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 opacity-85">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.18em]">Explore <ArrowUpRight size={14}/></span></div></article>}
function MenuGroup({title,subtitle,icon,items}:{title:string;subtitle:string;icon:React.ReactNode;items:string[]}){return <article className="rounded-[1.7rem] border border-[#D7AD75]/40 bg-[#FBF5EA] p-7 shadow-sm"><div className="mb-6 flex items-center justify-between"><div><h3 className="font-serif text-2xl font-bold text-[#633047]">{title}</h3><p className="mt-1 text-[10px] font-extrabold uppercase tracking-[.15em] text-[#A46C3D]">{subtitle}</p></div><span className="text-[#A46C3D]">{icon}</span></div><ul className="space-y-3">{items.map(item=><li key={item} className="flex items-center justify-between border-b border-[#633047]/10 pb-3 text-sm"><span>{item}</span><span className="text-[#C28A50]">✦</span></li>)}</ul></article>}
function ContactRow({icon,title,children}:{icon:React.ReactNode;title:string;children:React.ReactNode}){return <div className="flex gap-4"><span className="mt-1 shrink-0 text-[#633047]">{icon}</span><div><p className="font-extrabold text-[#633047]">{title}</p><div className="mt-1 max-w-md space-y-1 text-sm leading-6 text-[#665B55]">{children}</div></div></div>}
