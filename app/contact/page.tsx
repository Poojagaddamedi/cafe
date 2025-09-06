"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowLeft, MapPin, Clock, Phone, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Street, Downtown District", "New York, NY 10001"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Monday - Friday: 6:00 AM - 10:00 PM", "Saturday - Sunday: 7:00 AM - 11:00 PM"],
      action: "View Schedule",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Phone: (555) 123-CAFE", "WhatsApp: (555) 123-4567"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@hipsterscafe.com", "catering@hipsterscafe.com"],
      action: "Send Email",
    },
  ]

  const locations = [
    {
      name: "Downtown Flagship",
      address: "123 Coffee Street, Downtown District",
      phone: "(555) 123-CAFE",
      hours: "Mon-Fri: 6AM-10PM, Sat-Sun: 7AM-11PM",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Uptown Branch",
      address: "456 Brew Avenue, Uptown Plaza",
      phone: "(555) 456-BREW",
      hours: "Mon-Fri: 7AM-9PM, Sat-Sun: 8AM-10PM",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "University Campus",
      address: "789 Campus Drive, University District",
      phone: "(555) 789-JAVA",
      hours: "Mon-Fri: 6AM-11PM, Sat-Sun: 8AM-11PM",
      image: "/placeholder.svg?height=200&width=300",
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
                <span className="text-lg font-bold text-foreground font-space-grotesk">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 coffee-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk animate-slide-up">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-dm-sans">
            We'd love to hear from you. Whether you have questions, feedback, or just want to say hello, we're here to
            help make your coffee experience extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 font-space-grotesk">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm mb-2 font-dm-sans">
                      {detail}
                    </p>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-6 font-space-grotesk">
                  Send us a <span className="text-primary">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-card-foreground mb-2 font-dm-sans"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-card-foreground mb-2 font-dm-sans"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-card-foreground mb-2 font-dm-sans"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-card-foreground mb-2 font-dm-sans"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="catering">Catering Services</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-card-foreground mb-2 font-dm-sans"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full gold-gradient text-primary-foreground font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card className="bg-card border-border overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-dm-sans">Interactive Map Coming Soon</p>
                    <p className="text-sm text-muted-foreground font-dm-sans">123 Coffee Street, Downtown District</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4 font-space-grotesk">
                    Quick <span className="text-primary">Facts</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-dm-sans">Response Time</span>
                      <span className="text-card-foreground font-semibold">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-dm-sans">Languages</span>
                      <span className="text-card-foreground font-semibold">English, Spanish</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-dm-sans">Support Hours</span>
                      <span className="text-card-foreground font-semibold">9 AM - 6 PM EST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 coffee-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">
              Our <span className="text-primary">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans">Visit any of our three convenient locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 font-space-grotesk">
                    {location.name}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground font-dm-sans">
                    <p className="flex items-start">
                      <MapPin className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {location.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {location.phone}
                    </p>
                    <p className="flex items-start">
                      <Clock className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {location.hours}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer catering services?",
                answer:
                  "Yes! We provide catering for events of all sizes. Contact us at catering@hipsterscafe.com for more information.",
              },
              {
                question: "Can I reserve a table?",
                answer: "We accept reservations for groups of 6 or more. Please call us at least 24 hours in advance.",
              },
              {
                question: "Do you have WiFi?",
                answer:
                  "Yes, we offer complimentary high-speed WiFi at all our locations. Perfect for remote work or studying.",
              },
              {
                question: "Are you hiring?",
                answer:
                  "We're always looking for passionate team members! Check our careers page or visit any location to apply.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 font-space-grotesk">{faq.question}</h3>
                  <p className="text-muted-foreground font-dm-sans">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
