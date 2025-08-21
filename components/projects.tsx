"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Eye, Mail, ShoppingCart, FileText, Users, Calendar, ShoppingBag } from "lucide-react"

const emailTemplates = [
  {
    id: 1,
    title: "E-commerce Summer Sale",
    description: "Promotional email template for seasonal sales with product showcase and discount codes",
    category: "Promotional",
    icon: ShoppingCart,
    file: "promo-sale-ecommerce.html",
    features: ["Responsive Design", "Product Grid", "Discount Codes", "Social Links"],
    preview: "/ecommerce-summer-sale-email.png",
    /* Added pricing in South African Rands */
    pricing: "R850 - R1,200",
  },
  {
    id: 2,
    title: "SaaS Monthly Newsletter",
    description: "Professional newsletter template for SaaS companies with feature updates and metrics",
    category: "Newsletter",
    icon: FileText,
    file: "monthly-newsletter-saas.html",
    features: ["Feature Highlights", "Metrics Display", "CTA Buttons", "Clean Layout"],
    preview: "/saas-newsletter-email-template.png",
    pricing: "R750 - R1,000",
  },
  {
    id: 3,
    title: "Order Confirmation",
    description: "Transactional email for automotive parts orders with detailed order summary",
    category: "Transactional",
    icon: FileText,
    file: "order-confirmation-automotive.html",
    features: ["Order Details", "Shipping Info", "Customer Support", "Tracking Links"],
    preview: "/order-confirmation-email.png",
    pricing: "R650 - R900",
  },
  {
    id: 4,
    title: "App Welcome Email",
    description: "Onboarding email template for new app users with getting started guide",
    category: "Onboarding",
    icon: Users,
    file: "welcome-onboarding-app.html",
    features: ["Welcome Message", "Getting Started", "App Features", "Support Links"],
    preview: "/app-welcome-onboarding-email.png",
    pricing: "R700 - R950",
  },
  {
    id: 5,
    title: "Webinar Invitation",
    description: "Event invitation template with speaker profiles and registration details",
    category: "Event",
    icon: Calendar,
    file: "webinar-invitation.html",
    features: ["Event Details", "Speaker Profiles", "Registration CTA", "Calendar Integration"],
    preview: "/webinar-invitation-email.png",
    pricing: "R800 - R1,100",
  },
  {
    id: 6,
    title: "Abandoned Cart Recovery",
    description: "Retail email template to recover abandoned shopping carts with product reminders",
    category: "Retention",
    icon: ShoppingBag,
    file: "abandoned-cart-retail.html",
    features: ["Product Reminders", "Discount Incentive", "Easy Checkout", "Urgency Elements"],
    preview: "/abandoned-cart-email-template.png",
    pricing: "R900 - R1,250",
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Promotional", "Newsletter", "Transactional", "Onboarding", "Event", "Retention"]

  const filteredTemplates =
    selectedCategory === "All"
      ? emailTemplates
      : emailTemplates.filter((template) => template.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Email Template Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional HTML email templates built with responsive design, cross-client compatibility, and modern best
            practices. Each template is crafted for maximum deliverability and engagement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => {
            const IconComponent = template.icon
            return (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-primary font-semibold">
                      {template.pricing}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src={template.preview || "/placeholder.svg"}
                      alt={`${template.title} preview`}
                      className="w-full h-48 object-cover rounded-lg border border-border"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{template.title}</DialogTitle>
                          <DialogDescription>{template.description}</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <iframe
                            src={`/templates/${template.file}`}
                            className="w-full h-96 border border-border rounded-lg"
                            title={`${template.title} preview`}
                            sandbox="allow-same-origin"
                            onError={(e) => {
                              console.error(`Failed to load template: ${template.file}`);
                              e.currentTarget.srcdoc = `
                                <html>
                                  <body style="display: flex; justify-content: center; align-items: center; height: 100%;">
                                    <p>Preview not available. Please check the console for errors.</p>
                                  </body>
                                </html>
                              `;
                            }}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button size="sm" className="flex-1" asChild>
                      <a 
                        href={`/templates/${template.file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All templates are built with table-based layouts, inline CSS, and bulletproof buttons for maximum
            compatibility.
          </p>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Request Custom Template
          </Button>
        </div>
      </div>
    </section>
  )
}
