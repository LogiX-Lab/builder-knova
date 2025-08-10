import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Sparkles, 
  Play, 
  Mic, 
  BookOpen, 
  Globe, 
  Brain,
  Volume2,
  Users,
  CheckCircle 
} from "lucide-react";

export default function Demo() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("japan");

  return (
    <div className="min-h-screen bg-gradient-to-br from-knova-accent via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-knova-primary to-knova-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-knova-primary to-knova-secondary bg-clip-text text-transparent">
                Knova
              </span>
            </Link>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-knova-primary/10 text-knova-primary border-knova-primary/20">
            🎮 Interactive Demo
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Experience Knova's 
            <span className="block bg-gradient-to-r from-knova-primary to-knova-secondary bg-clip-text text-transparent">
              AI-Powered Learning
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Try out our core features and see how AI transforms the learning experience
          </p>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="pronunciation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="pronunciation" className="flex items-center gap-2">
                <Mic className="w-4 h-4" />
                <span className="hidden sm:inline">Pronunciation</span>
              </TabsTrigger>
              <TabsTrigger value="storytelling" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Storytelling</span>
              </TabsTrigger>
              <TabsTrigger value="travel" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Virtual Travel</span>
              </TabsTrigger>
              <TabsTrigger value="ai-tutor" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">AI Tutor</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="pronunciation" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mic className="w-5 h-5 text-blue-600" />
                    </div>
                    Pronunciation Coach
                  </CardTitle>
                  <CardDescription>
                    Practice your pronunciation with real-time AI feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Today's Word: "Butterfly"</h4>
                      <div className="flex items-center gap-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {}}
                        >
                          <Volume2 className="w-4 h-4 mr-2" />
                          Listen
                        </Button>
                        <span className="text-sm text-gray-600">/ˈbʌtərˌflaɪ/</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button 
                        size="lg" 
                        className={`${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
                        onClick={() => setIsRecording(!isRecording)}
                      >
                        <Mic className="w-5 h-5 mr-2" />
                        {isRecording ? "Stop Recording" : "Start Recording"}
                      </Button>
                      
                      {isRecording && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-600">Listening...</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-800">Great job!</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        Your pronunciation accuracy: 92%. Try emphasizing the "fly" at the end.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="storytelling" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    Interactive Story with Albert Einstein
                  </CardTitle>
                  <CardDescription>
                    Learn about physics through an engaging conversation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-sm font-bold">
                          AE
                        </div>
                        <div>
                          <p className="text-gray-800">
                            "Hello, young scientist! I'm Albert Einstein. Today, let's explore the fascinating world of light. 
                            Did you know that light behaves both as a wave and as particles called photons?"
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-800">How would you like to respond?</p>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start h-auto p-4">
                          <span className="text-left">"That's amazing! Can you tell me more about photons?"</span>
                        </Button>
                        <Button variant="outline" className="w-full justify-start h-auto p-4">
                          <span className="text-left">"How did you discover this?"</span>
                        </Button>
                        <Button variant="outline" className="w-full justify-start h-auto p-4">
                          <span className="text-left">"Can we do an experiment together?"</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="travel" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-green-600" />
                    </div>
                    Virtual World Explorer
                  </CardTitle>
                  <CardDescription>
                    Travel the world and explore different cultures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: "japan", name: "Japan 🇯🇵", color: "border-red-200 bg-red-50" },
                        { id: "egypt", name: "Egypt 🇪🇬", color: "border-yellow-200 bg-yellow-50" },
                        { id: "brazil", name: "Brazil 🇧🇷", color: "border-green-200 bg-green-50" },
                      ].map((country) => (
                        <Button
                          key={country.id}
                          variant="outline"
                          className={`h-auto p-4 ${selectedCountry === country.id ? country.color : ''}`}
                          onClick={() => setSelectedCountry(country.id)}
                        >
                          {country.name}
                        </Button>
                      ))}
                    </div>

                    {selectedCountry === "japan" && (
                      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                        <h4 className="font-bold text-lg mb-3">🏯 Welcome to Japan!</h4>
                        <p className="text-gray-700 mb-4">
                          You're now visiting Tokyo, the bustling capital of Japan. Let's learn about Japanese culture!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-3">
                            <h5 className="font-semibold">🍱 Traditional Food</h5>
                            <p className="text-sm text-gray-600">Sushi, Ramen, Tempura</p>
                          </div>
                          <div className="bg-white rounded-lg p-3">
                            <h5 className="font-semibold">🎌 Language</h5>
                            <p className="text-sm text-gray-600">こんにちは (Konnichiwa) - Hello</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai-tutor" className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-orange-600" />
                    </div>
                    AI Learning Assistant
                  </CardTitle>
                  <CardDescription>
                    Get personalized help with your studies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                          <Brain className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 mb-3">
                            "Hi! I'm your AI tutor. I can see you're working on fractions today. 
                            Would you like me to help you understand how to add fractions with different denominators?"
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm">Yes, please!</Button>
                            <Button size="sm" variant="outline">Show me examples</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📊 Your Learning Progress</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Math - Fractions</span>
                          <span className="text-green-600">85% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-knova-primary to-knova-secondary text-white border-0 mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6">
                Experience the full power of Knova's AI-driven learning platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-knova-primary">
                  <Users className="w-4 h-4 mr-2" />
                  Request School Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
