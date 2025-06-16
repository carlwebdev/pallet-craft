import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Hammer, Star, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const products = [
    {
      name: "Shoe Rack Organizer",
      description: "Multi-tier shoe storage solution perfect for entryways and closets",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Beginner",
    },
    {
      name: "Rustic Bar Station",
      description: "Complete bar setup with bottle storage and serving counter",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Intermediate",
    },
    {
      name: "Guitar Display Rack",
      description: "Elegant wall-mounted or standing guitar storage and display",
      image: "/placeholder.svg?height=300&width=400",
      category: "Display",
      difficulty: "Beginner",
    },
    {
      name: "Garden Planter Box",
      description: "Raised garden beds perfect for vegetables, herbs, and flowers",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Beginner",
    },
    {
      name: "Coffee Table",
      description: "Stylish living room centerpiece with built-in storage",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Intermediate",
    },
    {
      name: "Wall Shelving Unit",
      description: "Floating shelves for books, decor, and everyday items",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Beginner",
    },
  ]

  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "100% Recycled Materials",
      description: "Every product is made from reclaimed wooden pallets, giving new life to discarded materials.",
    },
    {
      icon: <Hammer className="h-8 w-8 text-amber-600" />,
      title: "DIY-Friendly Designs",
      description: "Step-by-step instructions and video tutorials make building easy for all skill levels.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly Choice",
      description: "Reduce waste and your carbon footprint while creating beautiful, functional furniture.",
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Unique Character",
      description: "Each piece has its own story and character from the original pallet wood.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">PalletCraft</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Sustainable • DIY • Unique</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Pallets Into
            <span className="text-green-600 block">Beautiful Furniture</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our collection of DIY recycled pallet furniture plans. Create stunning, eco-friendly pieces for
            your home while reducing waste and saving money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Browse Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Tutorial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PalletCraft?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of DIY enthusiasts who are creating beautiful furniture while making a positive impact on
              the environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From storage solutions to garden furniture, discover our complete range of pallet DIY projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    View Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Furniture Made Simple</h2>
              <p className="text-gray-600 mb-6">
                At PalletCraft, we believe that beautiful furniture shouldn't cost the earth. Our mission is to help you
                create stunning, functional pieces from recycled wooden pallets while reducing waste and environmental
                impact.
              </p>
              <p className="text-gray-600 mb-6">
                Each of our designs comes with detailed instructions, material lists, and video tutorials to guide you
                through every step of the building process. Whether you're a complete beginner or an experienced
                woodworker, we have projects that match your skill level.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">10,000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Design Plans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Pallet furniture workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join our community of eco-conscious DIY enthusiasts and start creating beautiful, sustainable furniture
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse All Plans
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Download Free Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our plans or need help with your project? We're here to help!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@palletcraft.com</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Portland, Oregon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">PalletCraft</span>
              </div>
              <p className="text-gray-400">
                Creating sustainable furniture solutions through innovative pallet recycling.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Garden Items
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Display Racks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tool Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Safety Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PalletCraft. All rights reserved. Built with sustainable practices in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
