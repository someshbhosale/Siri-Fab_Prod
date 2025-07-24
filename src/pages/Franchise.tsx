import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  HandHeart, 
  Users, 
  TrendingUp, 
  Award, 
  ShoppingBag, 
  Heart,
  Crown,
  Target,
  Phone
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Franchise = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cityOfResidence: '',
    franchiseLocation: '',
    investment: '',
    experience: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'cityOfResidence', 'franchiseLocation', 'investment'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Please fill all required fields",
        description: "All fields marked with * are mandatory.",
        variant: "destructive",
      });
      return;
    }

    // Prepare WhatsApp message
    const message = `🌟 FRANCHISE INQUIRY - SIRI FAB 🌟

📝 APPLICANT DETAILS:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• City of Residence: ${formData.cityOfResidence}

🏪 FRANCHISE DETAILS:
• Desired Franchise Location: ${formData.franchiseLocation}
• Willing to Invest: ${formData.investment}
• Previous Business Experience: ${formData.experience || 'Not specified'}

📋 ADDITIONAL INFORMATION:
${formData.additionalInfo || 'No additional information provided'}

Please contact me to discuss the franchise opportunity.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Inquiry sent successfully!",
      description: "We'll contact you within 24 hours to discuss the franchise opportunity.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      cityOfResidence: '',
      franchiseLocation: '',
      investment: '',
      experience: '',
      additionalInfo: ''
    });
  };

  const benefits = [
    {
      icon: Crown,
      title: "Premium Brand Recognition",
      description: "Associate with Siri Fab's established reputation in ethnic fashion"
    },
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description: "Time-tested franchise system with consistent growth and profitability"
    },
    {
      icon: HandHeart,
      title: "Complete Support System",
      description: "Training, marketing, inventory management, and ongoing operational support"
    },
    {
      icon: Award,
      title: "Exclusive Territory Rights",
      description: "Protected territory with no competing Siri Fab stores in your area"
    },
    {
      icon: Users,
      title: "Growing Market Demand",
      description: "Tap into the ever-growing ethnic fashion market with loyal customers"
    },
    {
      icon: Target,
      title: "Marketing & Advertising",
      description: "National advertising campaigns and local marketing support"
    }
  ];

  const investmentOptions = [
    "₹5-10 Lakhs",
    "₹10-20 Lakhs", 
    "₹20-50 Lakhs",
    "₹50 Lakhs - 1 Crore",
    "Above ₹1 Crore"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/80 via-royal-purple/60 to-gold/80" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Partner with <span className="font-myFont">Siri Fab</span>
          </h1>
          <p className="text-xl mb-8">
            Be part of India's leading ethnic fashion franchise and build your successful business
          </p>
          <Badge className="bg-gold text-royal-purple text-lg px-6 py-2">
            Franchise Opportunities Available
          </Badge>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Choose Siri Fab Franchise */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Siri Fab Franchise?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a brand that's revolutionizing ethnic fashion retail with proven success, 
              comprehensive support, and unlimited growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Partner with <span className="text-primary">Us?</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Established Brand Legacy</h3>
                      <p className="text-muted-foreground">
                        Siri Fab has been a trusted name in ethnic fashion for years, with a loyal customer base and strong market presence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                      <p className="text-muted-foreground">
                        Our products are crafted with premium fabrics and attention to detail, ensuring customer satisfaction and repeat business.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Proven Profitability</h3>
                      <p className="text-muted-foreground">
                        Our franchise partners enjoy healthy margins and consistent growth with our established business model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6 text-primary">Franchise Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Complete training program</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Store setup assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Inventory management support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Marketing and promotional materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Ongoing operational support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="w-8 h-8 rounded-full p-0 flex items-center justify-center">✓</Badge>
                    <span>Protected territory rights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Part of Siri Fab Family?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful franchise partners across India and build your dream business with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-lg">
                <Phone className="h-5 w-5" />
                <span>Call us: +91 98765 43210</span>
              </div>
              <span className="hidden sm:block text-xl">|</span>
              <span className="text-lg">Fill the form below for quick response</span>
            </div>
          </div>
        </section>

        {/* Franchise Inquiry Form */}
        <section>
          <Card className="max-w-4xl mx-auto border-2">
            <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle className="text-3xl font-bold text-primary">
                Franchise Inquiry Form
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cityOfResidence" className="text-base font-medium">
                      City of Residence *
                    </Label>
                    <Input
                      id="cityOfResidence"
                      type="text"
                      placeholder="Your current city"
                      value={formData.cityOfResidence}
                      onChange={(e) => handleInputChange('cityOfResidence', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="franchiseLocation" className="text-base font-medium">
                      Desired Franchise Location *
                    </Label>
                    <Input
                      id="franchiseLocation"
                      type="text"
                      placeholder="City/Area for franchise"
                      value={formData.franchiseLocation}
                      onChange={(e) => handleInputChange('franchiseLocation', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="investment" className="text-base font-medium">
                      Willing to Invest *
                    </Label>
                    <Select value={formData.investment} onValueChange={(value) => handleInputChange('investment', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        {investmentOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-base font-medium">
                    Previous Business Experience
                  </Label>
                  <Input
                    id="experience"
                    type="text"
                    placeholder="Years of experience / Type of business"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalInfo" className="text-base font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any additional details you'd like to share..."
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    className="mt-1 min-h-24"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-lg py-6"
                >
                  Submit Franchise Inquiry
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-6">
                * Required fields. We respect your privacy and will never share your information with third parties.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Franchise;