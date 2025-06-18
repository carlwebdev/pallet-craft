"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Hammer, Star, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const products = [
    // Storage Solutions
    {
      name: "Shoe Rack Organizer",
      description: "Multi-tier shoe storage solution perfect for entryways and closets",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "2 pallets",
    },
    {
      name: "Wall Shelving Unit",
      description: "Floating shelves for books, decor, and everyday items",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Beginner",
      estimatedTime: "3-4 hours",
      materials: "1 pallet",
    },
    {
      name: "Storage Chest",
      description: "Large storage box with hinged lid for blankets and toys",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Intermediate",
      estimatedTime: "4-5 hours",
      materials: "2 pallets",
    },
    {
      name: "Closet Organizer",
      description: "Vertical storage system with multiple compartments",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Advanced",
      estimatedTime: "6-8 hours",
      materials: "3 pallets",
    },
    {
      name: "Pantry Shelves",
      description: "Kitchen pantry organization with adjustable shelving",
      image: "/placeholder.svg?height=300&width=400",
      category: "Storage",
      difficulty: "Intermediate",
      estimatedTime: "4-6 hours",
      materials: "2 pallets",
    },

    // Furniture
    {
      name: "Rustic Bar Station",
      description: "Complete bar setup with bottle storage and serving counter",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Intermediate",
      estimatedTime: "8-10 hours",
      materials: "4 pallets",
    },
    {
      name: "Coffee Table",
      description: "Stylish living room centerpiece with built-in storage",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Intermediate",
      estimatedTime: "5-6 hours",
      materials: "2 pallets",
    },
    {
      name: "Dining Table",
      description: "Large family dining table with rustic charm",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Advanced",
      estimatedTime: "10-12 hours",
      materials: "5 pallets",
    },
    {
      name: "Sofa Frame",
      description: "Comfortable outdoor sofa base ready for cushions",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Advanced",
      estimatedTime: "8-10 hours",
      materials: "4 pallets",
    },
    {
      name: "Bed Frame",
      description: "Queen size platform bed with headboard",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Advanced",
      estimatedTime: "12-15 hours",
      materials: "6 pallets",
    },
    {
      name: "TV Stand",
      description: "Entertainment center with cable management",
      image: "/placeholder.svg?height=300&width=400",
      category: "Furniture",
      difficulty: "Intermediate",
      estimatedTime: "4-6 hours",
      materials: "2 pallets",
    },

    // Garden & Outdoor
    {
      name: "Garden Planter Box",
      description: "Raised garden beds perfect for vegetables, herbs, and flowers",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "1 pallet",
    },
    {
      name: "Vertical Garden Wall",
      description: "Space-saving vertical planting system",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Intermediate",
      estimatedTime: "4-5 hours",
      materials: "2 pallets",
    },
    {
      name: "Compost Bin",
      description: "Three-compartment composting system",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Intermediate",
      estimatedTime: "3-4 hours",
      materials: "3 pallets",
    },
    {
      name: "Garden Bench",
      description: "Comfortable seating for your outdoor space",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Beginner",
      estimatedTime: "3-4 hours",
      materials: "2 pallets",
    },
    {
      name: "Potting Station",
      description: "Organized workspace for gardening activities",
      image: "/placeholder.svg?height=300&width=400",
      category: "Garden",
      difficulty: "Intermediate",
      estimatedTime: "5-6 hours",
      materials: "3 pallets",
    },

    // Display & Decor
    {
      name: "Guitar Display Rack",
      description: "Elegant wall-mounted or standing guitar storage and display",
      image: "/placeholder.svg?height=300&width=400",
      category: "Display",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "1 pallet",
    },
    {
      name: "Wine Rack",
      description: "Stylish wine bottle storage and display",
      image: "/placeholder.svg?height=300&width=400",
      category: "Display",
      difficulty: "Intermediate",
      estimatedTime: "4-5 hours",
      materials: "2 pallets",
    },
    {
      name: "Picture Frame Wall",
      description: "Rustic photo display with multiple frames",
      image: "/placeholder.svg?height=300&width=400",
      category: "Display",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "1 pallet",
    },
    {
      name: "Book Display Stand",
      description: "Angled display for books and magazines",
      image: "/placeholder.svg?height=300&width=400",
      category: "Display",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "1 pallet",
    },

    // Kids & Play
    {
      name: "Toy Storage Bins",
      description: "Colorful storage solutions for children's toys",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kids",
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      materials: "1 pallet",
    },
    {
      name: "Play Kitchen",
      description: "Mini kitchen set for imaginative play",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kids",
      difficulty: "Advanced",
      estimatedTime: "10-12 hours",
      materials: "4 pallets",
    },
    {
      name: "Sandbox",
      description: "Covered sandbox for outdoor fun",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kids",
      difficulty: "Intermediate",
      estimatedTime: "4-6 hours",
      materials: "3 pallets",
    },
    {
      name: "Reading Nook",
      description: "Cozy corner seating with book storage",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kids",
      difficulty: "Intermediate",
      estimatedTime: "6-8 hours",
      materials: "3 pallets",
    },
  ]

  const categories = ["All", "Storage", "Furniture", "Garden", "Display", "Kids"]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    // Scroll to products section
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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

      {/* Category Chips Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find the perfect project for your needs</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({products.filter((p) => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
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

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
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
                    <button
                      onClick={() => handleCategoryClick(product.category)}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 border-transparent bg-secondary text-secondary-foreground hover:bg-green-100 hover:text-green-800 hover:scale-105 cursor-pointer"
                    >
                      {product.category}
                    </button>
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(product.difficulty)}`}>
                      {product.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>⏱️ {product.estimatedTime}</span>
                    <span>📦 {product.materials}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    View Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category Stats */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.slice(1).map((category) => {
                const count = products.filter((p) => p.category === category).length
                return (
                  <div key={category} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{count}</div>
                    <div className="text-sm text-gray-600">{category} Projects</div>
                  </div>
                )
              })}
            </div>
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
                  <div className="text-2xl font-bold text-green-600">15,000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{products.length}+</div>
                  <div className="text-sm text-gray-600">Design Plans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
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
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => handleCategoryClick("Storage")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Storage Solutions ({products.filter((p) => p.category === "Storage").length})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Furniture")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Furniture ({products.filter((p) => p.category === "Furniture").length})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Garden")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Garden & Outdoor ({products.filter((p) => p.category === "Garden").length})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Display")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Display & Decor ({products.filter((p) => p.category === "Display").length})
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("Kids")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Kids & Play ({products.filter((p) => p.category === "Kids").length})
                  </button>
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
