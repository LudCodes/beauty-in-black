'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Instagram, Menu, Minus, MoveUpRight, X } from 'lucide-react'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'
const whatsappMessage = 'Olá! Conheci o Beauty in Black pelo site e gostaria de saber mais sobre os serviços e agendamentos.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

const images = {
  braids: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-hannah-bickmore-105653438-11269004-imxWElDNhGOjcbBmbgE2TE3YVK6oVM.jpg',
  group: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-admar-kamosso-oficial-623570766-27987135-mPK1mie7FPASPEhOAlfUAmyypLJoIs.jpg',
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-speakmediauganda-37600597-nvGDPznUNEehIcoFKwv2lTodNy0Mvw.jpg',
  circle: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-heyy-kazz-705792-18459701-X7LOluEjkRGHoOqf4Hw5YamFCBtVG7.jpg',
  closeup: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-kwesiblaq-12293132-zSWnRtSGkj5wTInHpx0ePsYAZMYPY2.jpg',
  essence: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1-YajupK2PCSYdc8w7b0sorZBFernUMd.jpg',
  service2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img2-QpiiF27hEDUYbqlnzoBFZkhaMNQmci.jpg',
  service3: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img3-e3rpNzV1useudkVsBc4eaSmsc4PaV4.jpg',
  service4: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img4-IYVFHVaUTaTQKOxDkrZ1OZrgmLJ0B7.jpg',
  service5: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img5-00qkt1DXyfIs04WTsZ08EEEYiidUAc.jpg',
  editorial: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-dylannhendricks-16349429-uKCULfYl0RyeiOePUWhaY9pskgFAgM.jpg',
  neon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-paiva-31751104-Z3FujAe9mSt5KQhF5iOBmj5Te6GBof.jpg',
  color: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-oscar-calstrom-428110439-18854500-oTLWTopavu4EPmGIv0dKWklCl2mRMJ.jpg',
  duo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-mateus-oliveira-2150975619-32114212-U9hb8tYm41zaCHFh648fDIgnmuWCDa.jpg',
  blue: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-vkmoraesph-103845317-17576657-GPjuhCAMikL8y4MyBVTmnDUi2u5ndo.jpg',
  pink: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-marinaphotos-16849818-M1INKjzOY8S6Hq883GwMll1gnz07Xc.jpg',
}

const services = [
  { number: '01', title: 'Cabelos naturais', description: 'Tratamentos, finalização e definição para celebrar a sua textura.', image: images.service2 },
  { number: '02', title: 'Tranças & penteados', description: 'Box braids, twists e criações para momentos que pedem presença.', image: images.service3 },
  { number: '03', title: 'Tratamentos capilares', description: 'Cuidado personalizado para devolver força, brilho e movimento aos fios.', image: images.service4 },
  { number: '04', title: 'Styling & transformação', description: 'Cortes, modelagem e looks pensados para expressar quem você é.', image: images.service5 },
]

const gallery = [
  { image: images.group, alt: 'Grupo de mulheres negras com diferentes penteados', label: 'Glow' },
  { image: images.editorial, alt: 'Close editorial de uma pessoa negra com dreadlocks', label: 'Depth' },
  { image: images.neon, alt: 'Retrato de uma pessoa negra com tranças cor-de-rosa', label: 'Bold' },
  { image: images.color, alt: 'Retrato de uma mulher negra com maquiagem azul', label: 'Color' },
  { image: images.duo, alt: 'Duas pessoas negras sorrindo juntas', label: 'Connection' },
  { image: images.blue, alt: 'Retrato de uma mulher negra com cabelo azul', label: 'Energy' },
  { image: images.pink, alt: 'Retrato de uma pessoa negra com cabelo rosa', label: 'Attitude' },
]

function BrandMark() {
  return <a href="#inicio" className="brand-mark" aria-label="Beauty in Black, início"><span>BEAUTY IN BLACK</span><small>BEAUTY <i>•</i> IDENTITY <i>•</i> POWER</small></a>
}

function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode; light?: boolean }) {
  return <div className={`section-intro ${light ? 'section-intro--light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-copy">{children}</p>}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof gallery[number] | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedImage])

  const closeMenu = () => setMenuOpen(false)

  return <main>
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <BrandMark />
      <nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Navegação principal">
        {[['Início', '#inicio'], ['Nossa essência', '#essencia'], ['Serviços', '#servicos'], ['Galeria', '#galeria'], ['Contato', '#contato']].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-booking">Agende sua experiência <ArrowUpRight aria-hidden="true" /></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section id="inicio" className="hero">
      <div className="hero-image" role="img" aria-label="Mulher negra com cabelo natural em um retrato editorial" />
      <div className="hero-content page-shell"><p className="eyebrow hero-eyebrow">BELEZA QUE CARREGA HISTÓRIA</p><h1>BELEZA NEGRA.<br /><em>PRESENÇA</em><br />INCONFUNDÍVEL.</h1><p className="hero-copy">Celebramos a beleza que nasce das nossas raízes, a força que existe em nossa identidade e a liberdade de sermos quem somos.</p><div className="hero-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button--gold">Agende sua experiência <ArrowUpRight aria-hidden="true" /></a><a href="#essencia" className="text-link">Conheça nosso universo <Minus aria-hidden="true" /></a></div></div>
      <a href="#manifesto" className="scroll-cue" aria-label="Rolar para baixo"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
    </section>

    <section className="identity-strip" aria-label="Diferenciais da marca"><div><span className="strip-icon">✦</span><strong>BELEZA AUTÊNTICA</strong><small>Cada textura conta uma história.</small></div><div><span className="strip-icon">◌</span><strong>CUIDADO ESPECIALIZADO</strong><small>Técnicas que respeitam sua identidade.</small></div><div><span className="strip-icon">✧</span><strong>EXPERIÊNCIA PREMIUM</strong><small>Seu momento de se sentir extraordinária.</small></div></section>

    <section id="essencia" className="essence section-shell"><div className="essence-visual"><div className="essence-photo" role="img" aria-label="Mulher negra com cabelo afro volumoso" /><span className="vertical-label">BEAUTY IN BLACK / 2026</span></div><div className="essence-content"><SectionIntro eyebrow="MAIS DO QUE ESTÉTICA" title={<>BELEZA É IDENTIDADE.<br />É HISTÓRIA.<br /><em>É PODER.</em></>}><>Beauty in Black nasceu para celebrar a beleza negra em todas as suas formas. Acreditamos que cuidar dos cabelos vai além da aparência: é reconhecer nossas raízes, expressar nossa individualidade e ocupar todos os espaços com confiança.<br /><br />Aqui, cada mulher é recebida com respeito, atenção e cuidado. Cada textura é valorizada. Cada escolha é sua.</></SectionIntro><a href="#servicos" className="text-link text-link--gold">Descubra nossa essência <ArrowUpRight aria-hidden="true" /></a></div></section>

    <section id="servicos" className="services section-shell"><SectionIntro eyebrow="EXPERIÊNCIAS BEAUTY IN BLACK" title={<>Seu cabelo.<br /><em>Sua expressão.</em></>}><>Cuidados especializados para valorizar sua beleza em cada detalhe.</></SectionIntro><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt="" loading="lazy" /></div><div className="service-info"><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Conheça o serviço <ArrowUpRight aria-hidden="true" /></a></div></article>)}</div></section>

    <section id="galeria" className="gallery section-shell"><SectionIntro eyebrow="BELEZA EM TODAS AS SUAS FORMAS" title={<>BLACK IS <em>ART.</em></>}><>Texturas, formas e expressões que não precisam de tradução.</></SectionIntro><div className="gallery-grid">{gallery.map((item, index) => <button type="button" className={`gallery-item gallery-item--${index + 1}`} key={item.image} onClick={() => setSelectedImage(item)}><img src={item.image} alt={item.alt} loading="lazy" /><span>{item.label} <ArrowUpRight aria-hidden="true" /></span></button>)}</div></section>

    <section id="manifesto" className="manifesto"><div className="manifesto-glow" /><div className="manifesto-inner"><p className="eyebrow">UM MANIFESTO BEAUTY IN BLACK</p><h2>Não nascemos para caber em padrões.<br /><em>Nascemos para redefini-los.</em></h2><p>Nossa beleza tem raízes profundas, histórias que atravessam gerações e uma força que não pede permissão para existir. Somos diversas. Somos potentes. Somos extraordinárias.</p><span>BLACK BEAUTY. LIMITLESS POWER.</span></div></section>

    <section className="values section-shell"><SectionIntro eyebrow="O QUE NOS MOVE" title={<>CUIDADO QUE VOCÊ SENTE.<br /><em>BELEZA QUE VOCÊ VÊ.</em></>} /><div className="values-grid">{['Atendimento personalizado.', 'Respeito a diferentes texturas capilares.', 'Ambiente acolhedor e sofisticado.', 'Atenção aos detalhes em cada experiência.'].map((value, index) => <div className="value" key={value}><span>0{index + 1}</span><h3>{value}</h3><i>+</i></div>)}</div></section>

    <section id="contato" className="booking"><div className="booking-overlay" /><div className="booking-content"><p className="eyebrow">SEU MOMENTO COMEÇA AQUI.</p><h2>Reserve um tempo<br /><em>para você.</em></h2><p>Vamos celebrar sua beleza do jeito que ela merece.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button--light">Agendar pelo WhatsApp <ArrowUpRight aria-hidden="true" /></a></div></section>

    <footer className="site-footer"><div className="footer-top"><div><BrandMark /><p className="footer-tagline">Sua beleza. Suas raízes. Seu poder.</p><p className="footer-note">Um espaço para sua beleza existir<br />sem pedir licença.</p></div><div className="footer-links"><div><span>NAVEGUE</span><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#essencia">Nossa essência</a></div><div><span>EXPLORE</span><a href="#galeria">Galeria</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Agendamento</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></div></div><div className="footer-contact"><span>FALE COM A GENTE</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight aria-hidden="true" /></a><a href="mailto:hello@beautyinblack.com">hello@beautyinblack.com</a><small>Endereço demonstrativo<br />São Paulo, SP</small></div></div><div className="footer-bottom"><span>© 2026 Beauty in Black. Todos os direitos reservados.</span><span>Projeto conceitual para portfólio.</span><a href="#inicio" aria-label="Voltar ao topo"><ArrowUpRight aria-hidden="true" /></a></div></footer>

    {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Imagem ${selectedImage.label}`} onClick={() => setSelectedImage(null)}><button type="button" aria-label="Fechar imagem" onClick={() => setSelectedImage(null)}><X /></button><img src={selectedImage.image} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()} /></div>}
  </main>
}
