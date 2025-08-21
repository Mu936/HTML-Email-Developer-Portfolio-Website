"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Masithembin Mulalo
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & Email Template Specialist
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            National Diploma in Information Technology (Software Development) graduate with expertise in full-stack
            development and solid HTML5 & CSS3 knowledge. Specializing in responsive email templates and modern web
            applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Email Templates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">Full Stack</div>
            <div className="text-sm text-muted-foreground">Development</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">HTML5/CSS3</div>
            <div className="text-sm text-muted-foreground">Expertise</div>
          </div>
        </div>
      </div>
    </section>
  )
}
