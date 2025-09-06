import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowLeft, Award, Users, Heart, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a dream to create the perfect coffee experience",
    },
    {
      year: "2019",
      title: "First Expansion",
      description: "Opened our second location and introduced artisanal pastries",
    },
    { year: "2020", title: "Community Focus", description: "Launched community programs and local partnerships" },
    { year: "2021", title: "Digital Innovation", description: "Introduced online ordering and mobile app" },
    {
      year: "2022",
      title: "Sustainability",
      description: "Became carbon neutral and introduced eco-friendly packaging",
    },
    { year: "2024", title: "Premium Experience", description: "Redesigned spaces for the ultimate coffee experience" },
  ]

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We source only the finest beans from sustainable farms worldwide",
    },
    { icon: Users, title: "Community", description: "Building connections one cup at a time in our welcoming spaces" },
    { icon: Heart, title: "Passion", description: "Every drink is crafted with love and attention to detail" },
    { icon: Clock, title: "Tradition", description: "Honoring coffee traditions while embracing innovation" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Head Barista",
      image: "/placeholder.svg?height=300&width=300",
      experience: "8 years",
    },
    {
      name: "Michael Chen",
      role: "Coffee Roaster",
      image: "/placeholder.svg?height=300&width=300",
      experience: "12 years",
    },
    {
      name: "Emma Rodriguez",
      role: "Pastry Chef",
      image: "/placeholder.svg?height=300&width=300",
      experience: "10 years",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground font-space-grotesk">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 coffee-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk animate-slide-up">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-dm-sans">
            From humble beginnings to becoming the city's premier coffee destination, our journey has been fueled by
            passion, quality, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-space-grotesk">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-dm-sans">
                At The Hipsters Cafe, we believe that coffee is more than just a beverage – it's a moment of connection,
                a pause in the day, and a catalyst for community. Our mission is to create extraordinary experiences
                through exceptional coffee, warm hospitality, and spaces that inspire.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-dm-sans">
                We're committed to sustainability, supporting coffee farmers, and fostering a culture where every
                customer feels valued and every cup tells a story of craftsmanship and care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground font-dm-sans">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground font-dm-sans">Coffee Origins</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Coffee Roasting Process"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 coffee-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 font-space-grotesk">{value.title}</h3>
                  <p className="text-muted-foreground font-dm-sans">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans">Milestones that shaped our story</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-card border-border hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2 font-space-grotesk">{item.year}</div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 font-space-grotesk">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-dm-sans">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 coffee-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans">The passionate people behind every perfect cup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white mb-1 font-space-grotesk">{member.name}</h3>
                    <p className="text-primary font-dm-sans">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-dm-sans">Experience</span>
                    <span className="text-primary font-semibold">{member.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Ready to Experience <span className="text-primary">Excellence?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-dm-sans">
            Visit us today and discover why we're the city's favorite coffee destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="gold-gradient text-primary-foreground font-semibold">
                View Our Menu
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Visit Our Cafe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
