"use client"

import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, ArrowLeft, Star, Plus, Minus, ShoppingCart, Search } from "lucide-react"
import Link from "next/link"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { MorphingButton } from "@/components/ui/morphing-button"
import { FadeInUp, StaggerContainer, StaggerItem, FloatingElement } from "@/components/animations/framer-components"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<{ [key: string]: number }>({})
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All",
    "Signature Coffee",
    "Specialty Drinks",
    "Cold Brew",
    "Frozen Delights",
    "French Pastries",
    "Gourmet Treats",
    "Artisan Sandwiches",
    "Signature Desserts",
  ]

  const menuItems = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe Single Origin",
      price: 6.5,
      category: "Signature Coffee",
      description: "Floral and citrusy notes with wine-like acidity from high-altitude farms",
      image: "/espresso-cup-dark-roast-steam.jpg",
      rating: 4.9,
      popular: true,
    },
    {
      id: 2,
      name: "Bourbon Vanilla Bean Latte",
      price: 5.75,
      category: "Specialty Drinks",
      description: "Madagascar vanilla beans with perfectly steamed milk and house espresso",
      image: "/caramel-macchiato-latte-art-foam.jpg",
      rating: 4.8,
      popular: false,
    },
    {
      id: 3,
      name: "Nitro Cold Cascade",
      price: 5.25,
      category: "Cold Brew",
      description: "Nitrogen-infused cold brew with cascading foam and smooth finish",
      image: "/cold-brew-coffee-ice-glass.jpg",
      rating: 4.7,
      popular: true,
    },
    {
      id: 4,
      name: "Maple Cinnamon Cloud Frappé",
      price: 6.0,
      category: "Frozen Delights",
      description: "Blended perfection with real maple syrup and Ceylon cinnamon",
      image: "/vanilla-frappe-whipped-cream-straw.jpg",
      rating: 4.6,
      popular: false,
    },
    {
      id: 5,
      name: "Artisan Almond Croissant",
      price: 4.25,
      category: "French Pastries",
      description: "Laminated dough with almond cream filling, baked to golden perfection",
      image: "/golden-almond-croissant.jpg",
      rating: 4.8,
      popular: true,
    },
    {
      id: 6,
      name: "Dark Chocolate Soufflé Muffin",
      price: 3.95,
      category: "Gourmet Treats",
      description: "Belgian dark chocolate with molten center and cocoa dust",
      image: "/chocolate-muffin-with-molten-center.jpg",
      rating: 4.5,
      popular: false,
    },
    {
      id: 7,
      name: "Truffle Grilled Panini",
      price: 9.95,
      category: "Artisan Sandwiches",
      description: "Truffle oil, wild mushrooms, gruyere cheese on sourdough",
      image: "/gourmet-grilled-panini-sandwich.jpg",
      rating: 4.7,
      popular: true,
    },
    {
      id: 8,
      name: "Smoked Salmon Avocado Stack",
      price: 12.5,
      category: "Artisan Sandwiches",
      description: "Norwegian smoked salmon, avocado, capers on everything bagel",
      image: "/salmon-avocado-bagel-stack.jpg",
      rating: 4.9,
      popular: false,
    },
    {
      id: 9,
      name: "Espresso Tiramisu Parfait",
      price: 7.95,
      category: "Signature Desserts",
      description: "Layers of mascarpone, ladyfingers, and our signature espresso",
      image: "/tiramisu-parfait-layers.jpg",
      rating: 4.8,
      popular: true,
    },
    {
      id: 10,
      name: "Lavender Honey Cheesecake",
      price: 6.95,
      category: "Signature Desserts",
      description: "Creamy cheesecake infused with lavender and local wildflower honey",
      image: "/lavender-honey-cheesecake-slice.jpg",
      rating: 4.6,
      popular: false,
    },
  ]

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  const addToCart = (itemId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart }
      if (newCart[itemId] > 0) {
        newCart[itemId]--
      }
      return newCart
    })
  }

  return (
    <div className="min-h-screen bg-background hero-gradient particle-system">
      <CustomCursor />

      <header className="sticky top-0 z-50 glass-effect-premium border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <MorphingButton variant="ghost" size="sm" className="magnetic-field">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </MorphingButton>
              </Link>
              <FloatingElement intensity={5} speed={3}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center animate-liquid-morph">
                    <Coffee className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-foreground font-space-grotesk holographic-text">MENU</span>
                </div>
              </FloatingElement>
            </div>

            <MorphingButton className="relative bg-amber-600 text-white hover:bg-amber-700 magnetic-field">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({getTotalItems()})
              {getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-xs font-bold text-white">{getTotalItems()}</span>
                </div>
              )}
            </MorphingButton>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 font-space-grotesk holographic-text animate-holographic">
              THE HIPSTERS
              <br />
              <span className="text-amber-500 italic">Menu</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-dm-sans leading-relaxed">
              Discover our carefully crafted selection of premium coffees, artisanal pastries, and gourmet meals that
              define extraordinary taste.
            </p>
          </div>
        </FadeInUp>

        <div className="mb-16 space-y-8">
          <FadeInUp delay={0.2}>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-6 bg-input/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary text-xl magnetic-field transition-all duration-300"
              />
            </div>
          </FadeInUp>

          <StaggerContainer>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <StaggerItem key={category}>
                  <MorphingButton
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-amber-600 text-white hover:bg-amber-700 animate-pulse-glow"
                        : "border-2 border-amber-600/40 text-amber-600 hover:bg-amber-600 hover:text-white magnetic-field"
                    }`}
                  >
                    {category}
                  </MorphingButton>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
              <StaggerItem key={item.id}>
                <InteractiveCard className="group morphing-card overflow-hidden" glowColor="#f59e0b">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 gpu-accelerated"
                    />

                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <Badge className="bg-amber-600 text-white font-bold px-4 py-2 text-sm animate-pulse-glow">
                        {item.category}
                      </Badge>
                      {item.popular && (
                        <Badge className="bg-red-500 text-white font-bold px-4 py-2 text-sm animate-pulse">
                          POPULAR
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-sm font-semibold">{item.rating}</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-card-foreground font-space-grotesk leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-3xl font-black text-amber-500 holographic-text ml-4">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6 font-dm-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      {cart[item.id] > 0 ? (
                        <div className="flex items-center space-x-4">
                          <MorphingButton
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="h-12 w-12 p-0 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                          >
                            <Minus className="h-5 w-5" />
                          </MorphingButton>
                          <span className="text-2xl font-bold text-foreground holographic-text">{cart[item.id]}</span>
                          <MorphingButton
                            size="sm"
                            onClick={() => addToCart(item.id)}
                            className="h-12 w-12 p-0 bg-amber-600 text-white hover:bg-amber-700"
                          >
                            <Plus className="h-5 w-5" />
                          </MorphingButton>
                        </div>
                      ) : (
                        <MorphingButton
                          onClick={() => addToCart(item.id)}
                          className="bg-amber-600 text-white hover:bg-amber-700 font-bold py-4 px-8 text-lg rounded-xl uppercase tracking-wider"
                        >
                          <Plus className="h-5 w-5 mr-2" />
                          Add to Cart
                        </MorphingButton>
                      )}

                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(item.rating) ? "fill-amber-500 text-amber-500" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {filteredItems.length === 0 && (
          <FadeInUp>
            <div className="text-center py-20">
              <FloatingElement intensity={10} speed={3}>
                <Coffee className="h-24 w-24 text-muted-foreground mx-auto mb-8 animate-pulse" />
              </FloatingElement>
              <h3 className="text-3xl font-bold text-foreground mb-4 font-space-grotesk">No items found</h3>
              <p className="text-xl text-muted-foreground font-dm-sans">
                Try adjusting your search or selecting a different category
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  )
}
