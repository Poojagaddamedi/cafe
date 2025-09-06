"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Star,
  MapPin,
  Clock,
  Phone,
  Menu,
  X,
  ShoppingCart,
  Heart,
  User,
  ArrowRight,
  Award,
  Users,
  Zap,
} from "lucide-react"
import dynamic from "next/dynamic"
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  ParallaxText,
  FloatingElement,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/framer-components"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { MorphingButton } from "@/components/ui/morphing-button"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { LoginModal } from "@/components/ui/login-modal"

const CoffeeScene = dynamic(() => import("@/components/3d/coffee-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="animate-pulse text-amber-500">Loading 3D Experience...</div>
    </div>
  ),
})

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [loginMode, setLoginMode] = useState<"signin" | "signup">("signin")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "experience", "story", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      name: "Ethiopian Yirgacheffe Single Origin",
      price: "$8.50",
      category: "Premium Signature",
      rating: 4.9,
      image: "/premium-espresso-in-elegant-cup.jpg",
      description: "Floral notes with bright acidity and wine-like finish",
    },
    {
      name: "Bourbon Vanilla Caramel Macchiato",
      price: "$7.75",
      category: "Artisan Specialty",
      rating: 4.8,
      image: "/caramel-macchiato-with-latte-art.jpg",
      description: "Hand-crafted with Madagascar vanilla and caramel swirl",
    },
    {
      name: "Nitro Cold Cascade Reserve",
      price: "$6.25",
      category: "Cold Brew Excellence",
      rating: 4.9,
      image: "/cold-brew-coffee-ice-glass.jpg",
      description: "Smooth nitrogen-infused cold brew with chocolate undertones",
    },
    {
      name: "Maple Cinnamon Cloud Frappé",
      price: "$7.00",
      category: "Frozen Artistry",
      rating: 4.7,
      image: "/vanilla-frappe-whipped-cream-straw.jpg",
      description: "Organic maple syrup with Ceylon cinnamon and cloud foam",
    },
    {
      name: "Steaming Espresso Perfection",
      price: "$5.50",
      category: "Classic Excellence",
      rating: 4.8,
      image: "/espresso-cup-dark-roast-steam.jpg",
      description: "Double shot perfection with golden crema",
    },
    {
      name: "Citrus Cold Brew Fusion",
      price: "$6.75",
      category: "Innovative Blends",
      rating: 4.6,
      image: "/cold-brew-coffee-with-ice.jpg",
      description: "Cold brew with fresh orange essence and ice spheres",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The best coffee experience in the city! The atmosphere is incredible and the baristas are true artists.",
      image: "/professional-woman-smiling.png",
      role: "Coffee Enthusiast",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Every visit feels like a premium experience. The attention to detail in every cup is remarkable.",
      image: "/placeholder-d1cco.png",
      role: "Regular Customer",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "This place has become my daily ritual. The quality and consistency are unmatched.",
      image: "/placeholder-zxx1i.png",
      role: "Daily Visitor",
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden particle-system">
      <CustomCursor />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        mode={loginMode}
        onModeChange={setLoginMode}
      />

      <nav className="fixed top-0 w-full z-50 glass-effect-premium border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <FloatingElement intensity={5} speed={3}>
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-xl flex items-center justify-center animate-liquid-morph shadow-2xl">
                  <Coffee className="h-7 w-7 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                <div>
                  <span className="text-2xl font-black text-foreground font-space-grotesk tracking-tight holographic-text animate-holographic">
                    CAFÉ
                  </span>
                  <br />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">EXCELLENCE</span>
                </div>
              </div>
            </FloatingElement>

            <div className="hidden md:flex items-center space-x-12">
              {[
                { name: "HOME", href: "#home" },
                { name: "MENU", href: "#menu" },
                { name: "EXPERIENCE", href: "#experience" },
                { name: "STORY", href: "#story" },
                { name: "CONTACT", href: "#contact" },
              ].map((item, index) => (
                <FadeInUp key={item.name} delay={index * 0.1}>
                  <a
                    href={item.href}
                    className={`text-sm font-semibold tracking-wider transition-all duration-300 hover:text-primary relative magnetic-field ${
                      activeSection === item.href.slice(1) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary animate-morphing-bg"></div>
                    )}
                  </a>
                </FadeInUp>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {[Heart, ShoppingCart, User].map((Icon, index) => (
                <ScaleIn key={index} delay={index * 0.1}>
                  <MorphingButton variant="ghost" size="sm" className="magnetic-field">
                    <Icon className="h-5 w-5" />
                  </MorphingButton>
                </ScaleIn>
              ))}
            </div>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect-premium border-t border-primary/20 animate-curve-morph">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["HOME", "MENU", "EXPERIENCE", "STORY", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary magnetic-field"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #1a0f0a 25%, #2d1b0e 50%, #1a0f0a 75%, #000000 100%)`,
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              >
                <div
                  className="w-4 h-5 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full transform rotate-12 shadow-lg animate-pulse-glow"
                  style={{
                    clipPath: "ellipse(40% 50% at 50% 50%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black text-white mb-8 font-space-grotesk leading-none tracking-tight drop-shadow-2xl">
                <span className="block animate-geometric-shift">EVERYDAY</span>
                <span className="block text-6xl md:text-8xl">WITH</span>
                <span className="block holographic-text animate-holographic italic transform -skew-x-12">Coffee</span>
              </h1>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full animate-pulse-glow blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-full animate-float" />
            </div>

            <FadeInUp delay={0.5}>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-dm-sans leading-relaxed">
                Experience the extraordinary in every sip. Our master roasters craft each blend with passion, precision,
                and the finest beans from around the world. Welcome to coffee perfection.
              </p>
            </FadeInUp>

            <StaggerContainer>
              <div className="flex flex-col sm:flex-row gap-6">
                <StaggerItem>
                  <MorphingButton
                    size="lg"
                    onClick={() => {
                      setLoginMode("signup")
                      setIsLoginOpen(true)
                    }}
                    className="bg-amber-600 text-white hover:bg-amber-700 font-bold px-10 py-5 text-xl rounded-none uppercase tracking-wider neo-brutalist shadow-2xl magnetic-field"
                  >
                    JOIN THE EXPERIENCE
                  </MorphingButton>
                </StaggerItem>
                <StaggerItem>
                  <MorphingButton
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      setLoginMode("signin")
                      setIsLoginOpen(true)
                    }}
                    className="border-3 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold px-10 py-5 text-xl rounded-none bg-transparent uppercase tracking-wider shadow-2xl magnetic-field"
                  >
                    MEMBER LOGIN
                  </MorphingButton>
                </StaggerItem>
              </div>
            </StaggerContainer>

            <FadeInUp delay={1}>
              <div className="grid grid-cols-3 gap-8 mt-16">
                {[
                  { icon: Award, label: "PREMIUM QUALITY", value: "100%" },
                  { icon: Users, label: "HAPPY CUSTOMERS", value: "50K+" },
                  { icon: Zap, label: "DAILY FRESH", value: "24/7" },
                ].map((stat, i) => (
                  <FloatingElement key={i} intensity={10} speed={2 + i}>
                    <div className="text-center group morphing-card p-6 rounded-xl">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-amber-600/40 magnetic-field group-hover:bg-amber-600/40 transition-all duration-300 animate-liquid-morph">
                        <stat.icon className="h-8 w-8 text-amber-400" />
                      </div>
                      <div className="text-2xl font-black text-amber-400 holographic-text animate-holographic">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </FloatingElement>
                ))}
              </div>
            </FadeInUp>
          </div>

          <div className="relative flex justify-center lg:justify-end h-[700px]">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="animate-pulse text-amber-500 text-2xl">Loading 3D Coffee Experience...</div>
                </div>
              }
            >
              <CoffeeScene />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 section-bg-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-orange-600 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-24">
              <ParallaxText speed={0.3}>
                <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-space-grotesk holographic-text animate-holographic">
                  COFFEE ARTISTRY
                </h2>
              </ParallaxText>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-dm-sans leading-relaxed">
                Each cup is a masterpiece, crafted by our expert baristas using premium beans sourced from the world's
                finest coffee regions.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {[
              {
                image: "/caramel-macchiato-latte-art-foam.jpg",
                title: "Latte Art Mastery",
                description: "Every cup features hand-crafted latte art by our skilled baristas",
              },
              {
                image: "/coffee-shop-interior-warm-lighting.jpg",
                title: "Ambiance Excellence",
                description: "Immerse yourself in our carefully designed coffee sanctuary",
              },
              {
                image: "/espresso-cup-dark-roast-steam.jpg",
                title: "Steam Perfection",
                description: "Watch the aromatic steam rise from our perfectly brewed espresso",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <InteractiveCard
                  className="group overflow-hidden morphing-card animate-curve-morph"
                  glowColor="#f59e0b"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 gpu-accelerated"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <div
                      className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)",
                      }}
                    />

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white font-space-grotesk mb-2 holographic-text">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 font-dm-sans">{item.description}</p>
                    </div>
                  </div>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-32 px-4 sm:px-6 lg:px-8 section-bg-2">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-24">
              <ParallaxText speed={0.3}>
                <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-space-grotesk holographic-text animate-holographic">
                  SIGNATURE COLLECTION
                </h2>
              </ParallaxText>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-dm-sans leading-relaxed">
                Discover our carefully curated selection of premium coffees, each crafted with passion and precision to
                deliver an extraordinary experience in every sip.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {menuItems.map((item, index) => (
                <StaggerItem key={index}>
                  <InteractiveCard className="group morphing-card" glowColor="#f59e0b">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 gpu-accelerated"
                      />
                      <Badge className="absolute top-6 left-6 bg-amber-600 text-white font-bold px-4 py-2 text-sm animate-pulse-glow">
                        {item.category}
                      </Badge>
                      <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-sm font-semibold">{item.rating}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white font-space-grotesk leading-tight">{item.name}</h3>
                        <span className="text-3xl font-black text-amber-500 holographic-text ml-4">{item.price}</span>
                      </div>
                      <p className="text-gray-300 font-dm-sans mb-6 leading-relaxed">{item.description}</p>
                      <MorphingButton className="w-full bg-amber-600 text-white hover:bg-amber-700 font-bold py-4 text-lg rounded-none group uppercase tracking-wider">
                        ADD TO CART
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </MorphingButton>
                    </div>
                  </InteractiveCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 section-bg-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-600 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-24">
              <ParallaxText speed={0.3}>
                <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-space-grotesk holographic-text animate-holographic">
                  CUSTOMER STORIES
                </h2>
              </ParallaxText>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-dm-sans leading-relaxed">
                Hear from our coffee community about their extraordinary experiences at our cafe.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <InteractiveCard className="p-10 morphing-card group" glowColor="#f59e0b">
                    <div className="flex items-center mb-8">
                      <div className="relative">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-amber-500/30 group-hover:border-amber-500 transition-all duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 fill-white text-white" />
                        </div>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-bold text-foreground font-space-grotesk holographic-text">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground font-dm-sans">{testimonial.role}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-500 text-amber-500 animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg text-card-foreground font-dm-sans leading-relaxed italic relative">
                      <div className="absolute -top-4 -left-2 text-6xl text-amber-500/30 font-serif">"</div>
                      {testimonial.text}
                      <div className="absolute -bottom-8 -right-2 text-6xl text-amber-500/30 font-serif">"</div>
                    </blockquote>
                  </InteractiveCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 section-bg-1 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-orange-600 to-transparent rounded-full blur-3xl animate-pulse-glow" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-24">
              <ParallaxText speed={0.3}>
                <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-space-grotesk holographic-text animate-holographic">
                  VISIT THE HIPSTERS CAFE
                </h2>
              </ParallaxText>
              <p className="text-2xl text-muted-foreground font-dm-sans max-w-4xl mx-auto leading-relaxed">
                Experience the extraordinary. Come discover why we're the city's premier destination for coffee
                excellence.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <StaggerContainer>
              <div className="space-y-16">
                {[
                  {
                    icon: MapPin,
                    title: "Our Location",
                    content: "123 Hipster Street, Coffee District\nDowntown, NY 10001\nCorner of Art & Flavor",
                  },
                  {
                    icon: Clock,
                    title: "Opening Hours",
                    content:
                      "Monday - Friday: 6:00 AM - 10:00 PM\nSaturday - Sunday: 7:00 AM - 11:00 PM\nHolidays: 8:00 AM - 9:00 PM",
                  },
                  {
                    icon: Phone,
                    title: "Get in Touch",
                    content: "Phone: (555) 123-CAFE\nEmail: hello@hipsterscafe.com\nInstagram: @hipsterscafe",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start space-x-8">
                      <FloatingElement intensity={12} speed={3 + index}>
                        <div className="w-20 h-20 bg-gradient-to-br from-amber-500/30 to-amber-700/20 rounded-2xl flex items-center justify-center magnetic-field border border-amber-500/40 animate-liquid-morph">
                          <item.icon className="h-10 w-10 text-amber-400" />
                        </div>
                      </FloatingElement>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk holographic-text">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-dm-sans text-xl leading-relaxed whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <SlideInRight>
              <InteractiveCard className="p-12 morphing-card" glowColor="#f59e0b">
                <h3 className="text-4xl font-bold text-foreground mb-10 font-space-grotesk holographic-text">
                  Reserve Your Experience
                </h3>
                <form className="space-y-8">
                  {["Your Name", "Your Email", "Phone Number"].map((placeholder, index) => (
                    <FadeInUp key={placeholder} delay={index * 0.1}>
                      <input
                        type={index === 1 ? "email" : index === 2 ? "tel" : "text"}
                        placeholder={placeholder}
                        className="w-full px-8 py-6 bg-input/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-xl magnetic-field transition-all duration-300 hover:border-primary/40"
                      />
                    </FadeInUp>
                  ))}
                  <FadeInUp delay={0.3}>
                    <textarea
                      placeholder="Special Requests or Message"
                      rows={6}
                      className="w-full px-8 py-6 bg-input/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none text-xl magnetic-field transition-all duration-300 hover:border-primary/40"
                    ></textarea>
                  </FadeInUp>
                  <FadeInUp delay={0.4}>
                    <MorphingButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-6 text-xl rounded-xl neo-brutalist uppercase tracking-wider">
                      RESERVE NOW
                    </MorphingButton>
                  </FadeInUp>
                </form>
              </InteractiveCard>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 section-bg-1">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 font-space-grotesk holographic-text animate-holographic">
                OUR STORY
              </h2>
              <p className="text-xl text-muted-foreground font-dm-sans leading-relaxed max-w-3xl mx-auto">
                Founded in 2018, Café Excellence began as a dream to create the perfect coffee experience. We source our
                beans from the finest coffee farms around the world, ensuring every cup tells a story of quality and
                passion.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed">
                  Our skilled baristas are true artisans, crafting each drink with precision and care. From the moment
                  you step into our cafe, you're not just a customer – you're part of our coffee-loving family.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <ScaleIn delay={0.2}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 holographic-text">50K+</div>
                      <div className="text-muted-foreground">Happy Customers</div>
                    </div>
                  </ScaleIn>
                  <ScaleIn delay={0.4}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 holographic-text">15+</div>
                      <div className="text-muted-foreground">Coffee Varieties</div>
                    </div>
                  </ScaleIn>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative perspective-1000">
                <FloatingElement intensity={15} speed={4}>
                  <img
                    src="/coffee-shop-interior-warm-lighting.jpg"
                    alt="Cafe Interior"
                    className="rounded-lg shadow-2xl transform-3d gpu-accelerated"
                  />
                </FloatingElement>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse-glow"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 section-bg-2">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-space-grotesk holographic-text animate-holographic">
                What Our <span className="text-primary holographic-text animate-holographic">Customers Say</span>
              </h2>
            </div>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <InteractiveCard className="p-6" glowColor="#f59e0b">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-4 font-dm-sans">"{testimonial.text}"</p>
                    <div className="font-semibold text-primary font-space-grotesk holographic-text">
                      {testimonial.name}
                    </div>
                  </InteractiveCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <footer className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-600/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <FloatingElement intensity={5} speed={4}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center animate-liquid-morph">
                    <Coffee className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white font-space-grotesk holographic-text">CAFÉ</span>
                    <br />
                    <span className="text-sm font-medium text-amber-500 uppercase tracking-widest">EXCELLENCE</span>
                  </div>
                </div>
              </FloatingElement>
              <p className="text-gray-300 mb-10 font-dm-sans text-xl leading-relaxed max-w-lg">
                Creating extraordinary coffee experiences since 2018. Every cup tells a story of passion, quality, and
                craftsmanship that transcends the ordinary.
              </p>
              <div className="flex space-x-8">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social, index) => (
                  <ScaleIn key={social} delay={index * 0.1}>
                    <MorphingButton
                      variant="ghost"
                      className="text-gray-400 hover:text-amber-500 font-semibold magnetic-field text-lg"
                    >
                      {social}
                    </MorphingButton>
                  </ScaleIn>
                ))}
              </div>
            </div>

            {[
              { title: "Coffee Menu", items: ["Signature Blends", "Single Origins", "Cold Brews", "Specialty Drinks"] },
              {
                title: "Services",
                items: ["Online Ordering", "Corporate Catering", "Private Events", "Coffee Subscriptions"],
              },
            ].map((section, sectionIndex) => (
              <FadeInUp key={section.title} delay={sectionIndex * 0.2}>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 font-space-grotesk holographic-text">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, index) => (
                      <ScaleIn key={item} delay={index * 0.1}>
                        <li>
                          <a
                            href="#"
                            className="text-gray-300 hover:text-amber-500 transition-colors font-dm-sans text-lg magnetic-field"
                          >
                            {item}
                          </a>
                        </li>
                      </ScaleIn>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.5}>
            <div className="border-t border-amber-600/30 mt-16 pt-10 text-center">
              <p className="text-gray-300 font-dm-sans text-xl holographic-text">
                © 2024 Café Excellence. All rights reserved. Crafted with ❤️ and exceptional ☕
              </p>
            </div>
          </FadeInUp>
        </div>
      </footer>
    </div>
  )
}
