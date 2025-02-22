import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Book, GraduationCap, Languages, Mail, MessageSquare, Star, Users } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Languages className="h-6 w-6" />
            <span className="text-xl font-semibold">Nikita Teploukhov</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm hover:text-primary">
              About
            </a>
            <a href="#services" className="text-sm hover:text-primary">
              Services
            </a>
            <a href="#testimonials" className="text-sm hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" className="text-sm hover:text-primary">
              Contact
            </a>
          </nav>
          <Button>Book a Trial Lesson</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted to-background">
          <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Master English with Personalized Learning
              </h1>
              <p className="text-muted-foreground text-lg">
                Experienced TEFL-certified English teacher helping students achieve fluency through customized lessons
                and proven methodologies.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Start Learning</Button>
                <Button size="lg" variant="outline">
                  View Courses
                </Button>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Teacher with student"
                className="object-cover rounded-lg"
                fill
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" id="about">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Learn With Me?</h2>
              <p className="text-muted-foreground">
                Dedicated to helping students achieve their language goals through personalized attention and proven
                teaching methods.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <GraduationCap className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-xl">Certified Teacher</h3>
                    <p className="text-muted-foreground">TEFL certified with over 5 years of teaching experience</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-xl">Personalized Approach</h3>
                    <p className="text-muted-foreground">
                      Customized lessons tailored to your goals and learning style
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Book className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-xl">Comprehensive Materials</h3>
                    <p className="text-muted-foreground">Access to quality learning resources and study materials</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted" id="services">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Services Offered</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">One-on-One Lessons</h3>
                  <p className="text-muted-foreground mb-4">
                    Personalized attention and focused learning tailored to your specific needs and goals.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Custom curriculum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                  <Button className="w-full">Book Private Lesson</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Group Classes</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive group sessions focusing on conversation and practical language skills.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Small group sizes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Interactive activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      <span>Cultural exchange</span>
                    </li>
                  </ul>
                  <Button className="w-full">Join Group Class</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" id="testimonials">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Student Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "The lessons are always engaging and tailored to my needs. I've seen significant improvement in my
                      English skills."
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Student"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">Student Name</p>
                        <p className="text-sm text-muted-foreground">Intermediate Level</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted" id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Get in Touch</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="w-full">
                    <iframe
                      src="YOUR_GOOGLE_FORM_URL?embedded=true"
                      className="w-full min-h-[600px] border-none"
                      title="Contact Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Languages className="h-6 w-6" />
              <span className="font-semibold">Nikita Teploukhov</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contact@example.com
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <MessageSquare className="h-4 w-4" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

