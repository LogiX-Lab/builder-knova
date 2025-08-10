import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Globe, 
  Users, 
  Gamepad2, 
  Microscope, 
  MessageSquare, 
  Heart, 
  BookOpen,
  Mic,
  Trophy,
  Play,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Pronunciation Auto Correction",
    description: "AI-powered real-time pronunciation feedback with personalized exercises",
    color: "text-knova-blue",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "Interactive Storytelling",
    description: "Virtual sessions with historical figures and fictional characters",
    color: "text-knova-purple",
    bgColor: "bg-purple-50",
  },
  {
    icon: Globe,
    title: "Global Travel Experiences",
    description: "Virtual journeys through different countries and cultures",
    color: "text-knova-green",
    bgColor: "bg-green-50",
  },
  {
    icon: Brain,
    title: "Personalized Learning Paths",
    description: "Adaptive content that adjusts to each student's pace and needs",
    color: "text-knova-orange",
    bgColor: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Collaborative Projects",
    description: "Group assignments with shared workspaces and peer reviews",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Gamepad2,
    title: "Gamification Elements",
    description: "Achievement badges, leaderboards, and interactive quizzes",
    color: "text-knova-purple",
    bgColor: "bg-purple-50",
  },
  {
    icon: Microscope,
    title: "Virtual Labs",
    description: "Safe simulated science experiments with real-time data analysis",
    color: "text-knova-green",
    bgColor: "bg-green-50",
  },
  {
    icon: MessageSquare,
    title: "AI-Driven Tutoring",
    description: "24/7 AI tutors providing instant help and personalized guidance",
    color: "text-knova-blue",
    bgColor: "bg-blue-50",
  },
  {
    icon: Trophy,
    title: "Progress Dashboards",
    description: "Comprehensive tracking for parents and teachers",
    color: "text-knova-orange",
    bgColor: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Mindfulness & Well-being",
    description: "Mental health support with mindfulness exercises and assessments",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "5th Grade Teacher",
    content: "Knova has transformed how my students engage with learning. The interactive storytelling feature has made history come alive in our classroom.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Parent",
    content: "My daughter's pronunciation has improved dramatically with the AI feedback. She actually looks forward to her language lessons now!",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Education Specialist",
    content: "The personalized learning paths adapt perfectly to each student's needs. We've seen a 40% improvement in learning outcomes.",
    rating: 5,
  },
];

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-knova-accent via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-knova-primary to-knova-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-knova-primary to-knova-secondary bg-clip-text text-transparent">
                Knova
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-knova-primary transition-colors">Features</Link>
              <Link to="/platform" className="text-gray-700 hover:text-knova-primary transition-colors">Platform</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-knova-primary transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-knova-primary transition-colors">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-knova-primary/10 text-knova-primary border-knova-primary/20">
            🚀 Revolutionizing K-12 Education
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            AI-Powered Learning for
            <span className="block bg-gradient-to-r from-knova-primary via-knova-secondary to-knova-blue bg-clip-text text-transparent">
              Young Minds
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform K-12 education with interactive storytelling, virtual travel experiences, 
            AI tutoring, and personalized learning paths that make education engaging and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/demo">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/demo">
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-knova-primary mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-knova-secondary mb-2">95%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-knova-green mb-2">40%</div>
              <div className="text-gray-600">Learning Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-knova-orange mb-2">1000+</div>
              <div className="text-gray-600">Schools Using Knova</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Learning Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers a complete suite of tools designed to engage, 
              educate, and inspire K-12 students through innovative learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning Demo */}
      <section className="py-20 bg-gradient-to-r from-knova-primary to-knova-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Interactive Learning
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            See how our AI-powered features work together to create an immersive, 
            personalized learning experience for every student.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Mic className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">AI Voice Coach</h3>
              <p className="text-white/80">Real-time pronunciation feedback</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <BookOpen className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Story Adventures</h3>
              <p className="text-white/80">Interactive historical narratives</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <Globe className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Virtual Travel</h3>
              <p className="text-white/80">Explore cultures worldwide</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/demo">
              Try Interactive Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Educators & Students
            </h2>
            <p className="text-xl text-gray-600">
              See what teachers, parents, and students are saying about Knova
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of educators who are already using Knova to engage and inspire their students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-knova-primary to-knova-secondary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Knova</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing K-12 education with AI-powered learning experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link to="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Knova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
