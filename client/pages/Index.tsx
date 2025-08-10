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
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Pronunciation Coach",
    description: "Real-time feedback helps students perfect their pronunciation with personalized exercises",
    bgColor: "bg-knova-light-blue",
  },
  {
    icon: BookOpen,
    title: "Interactive Storytelling",
    description: "Learn from virtual historical figures and fictional characters in immersive narratives",
    bgColor: "bg-blue-50",
  },
  {
    icon: Globe,
    title: "Virtual Field Trips",
    description: "Explore cultures and landmarks worldwide through virtual travel experiences",
    bgColor: "bg-green-50",
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Personalized paths that adjust to each student's pace and learning style",
    bgColor: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Group projects and peer reviews that build teamwork and communication skills",
    bgColor: "bg-purple-50",
  },
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description: "Badges, leaderboards, and interactive quizzes make learning engaging and fun",
    bgColor: "bg-yellow-50",
  },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-3xl font-bold text-knova-primary">
                Knova
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-knova-dark hover:text-knova-primary transition-colors">
                  Schools <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-knova-dark hover:text-knova-primary transition-colors">
                  For Teachers <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <Link to="/features" className="text-knova-dark hover:text-knova-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-knova-dark hover:text-knova-primary transition-colors">
                Pricing
              </Link>
              <div className="relative group">
                <button className="flex items-center text-knova-dark hover:text-knova-primary transition-colors">
                  Resources <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </nav>

            {/* Desktop Login Button */}
            <div className="hidden lg:block">
              <Button className="bg-knova-primary hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                Log in as a student <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-knova-dark" />
              ) : (
                <Menu className="w-6 h-6 text-knova-dark" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="space-y-4">
                <Link to="/features" className="block text-knova-dark hover:text-knova-primary">Features</Link>
                <Link to="/pricing" className="block text-knova-dark hover:text-knova-primary">Pricing</Link>
                <Link to="/about" className="block text-knova-dark hover:text-knova-primary">About</Link>
                <Button className="w-full bg-knova-primary hover:bg-blue-600 text-white">
                  Log in as a student
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-knova-dark mb-6 leading-tight">
                The{" "}
                <span className="underline decoration-knova-primary decoration-4 underline-offset-8">
                  AI platform
                </span>{" "}
                for K-12 education
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Knova's unified AI platform provides personalized learning experiences,
                safeguards student progress, and accelerates educational outcomes.
              </p>
              
              {/* Main CTA */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-knova-primary hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-xl font-medium"
                  asChild
                >
                  <Link to="/demo">
                    Log in as a student <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <Card className="bg-knova-light-blue border-0 p-6">
                    <div className="text-center">
                      <MessageSquare className="w-8 h-8 text-knova-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-knova-dark mb-2">For Teachers</h3>
                      <p className="text-sm text-gray-600">Access AI tutoring tools and student progress insights</p>
                    </div>
                  </Card>
                  
                  <Card className="bg-gray-50 border-0 p-6">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-knova-green mx-auto mb-3" />
                      <h3 className="font-semibold text-knova-dark mb-2">For Schools</h3>
                      <p className="text-sm text-gray-600">Implement district-wide AI learning solutions</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-knova-light-blue to-blue-100 rounded-2xl p-8 lg:p-12">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-knova-primary rounded-full"></div>
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    <div className="h-3 bg-knova-primary rounded w-3/5"></div>
                  </div>
                  <div className="mt-6 flex space-x-2">
                    <div className="w-12 h-8 bg-knova-light-blue rounded"></div>
                    <div className="w-12 h-8 bg-gray-100 rounded"></div>
                    <div className="w-12 h-8 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-8">Trusted by over 1,000 schools nationwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-knova-primary mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-knova-primary mb-2">95%</div>
              <div className="text-gray-600">Student Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-knova-primary mb-2">40%</div>
              <div className="text-gray-600">Learning Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-knova-primary mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-knova-dark mb-4">
              Everything you need for modern learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI platform provides all the tools students, teachers, 
              and schools need for engaging, effective education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-knova-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-knova-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Focus Section */}
      <section className="py-20 bg-knova-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-knova-dark mb-6">
                Built for student success
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Knova's AI adapts to each student's unique learning style, 
                providing personalized experiences that boost engagement and achievement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knova-green mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-knova-dark">Personalized Learning Paths</h4>
                    <p className="text-gray-600">AI adjusts content difficulty based on individual progress</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knova-green mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-knova-dark">Real-time Feedback</h4>
                    <p className="text-gray-600">Instant pronunciation correction and learning guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-knova-green mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-knova-dark">Safe Learning Environment</h4>
                    <p className="text-gray-600">Privacy-first design protects student data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-knova-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-knova-dark">AI Learning Assistant</h3>
                <p className="text-gray-600">Available 24/7 to help with any subject</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-700">
                  "Hi! I noticed you're working on fractions. Would you like me to 
                  show you a fun way to visualize adding fractions with different denominators?"
                </p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" className="bg-knova-primary hover:bg-blue-600 text-white">
                  Yes, please!
                </Button>
                <Button size="sm" variant="outline">
                  Show examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-knova-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform learning in your classroom?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of educators using Knova to create engaging, 
            personalized learning experiences for every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-knova-primary hover:bg-gray-50 px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link to="/demo">Get Started Free</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-knova-primary px-8 py-4 text-lg font-medium"
              asChild
            >
              <Link to="/contact">Request School Demo</Link>
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-knova-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-6">Knova</div>
              <p className="text-gray-300 mb-4">
                AI-powered learning platform transforming K-12 education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Schools</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/schools" className="hover:text-white transition-colors">Implementation</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Teachers</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/training" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Knova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
