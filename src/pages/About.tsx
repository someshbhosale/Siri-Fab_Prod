import { Heart, Star, Users, Award, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import image from '@/assets/hero-bg.jpg';

const About = () => {

  const features = [
    {
      icon: Heart,
      title: 'Handcrafted Quality',
      description: 'Every piece is carefully crafted with attention to detail and traditional techniques.'
    },
    {
      icon: Star,
      title: 'Premium Fabrics',
      description: 'We use only the finest silk, cotton, and other premium materials for our collection.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We showcase products that celebrate your style.'
    },
    {
      icon: Award,
      title: 'Authentic Designs',
      description: 'Traditional patterns and contemporary styles that honor Indian fashion heritage.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-primary-foreground py-16"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-secondary/50"></div>
        
      
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-myFont opacity-95 mb-6">About Siri Fab</h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
            Celebrating the beauty of traditional Indian fashion with contemporary elegance
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              Siri Fab was born from a passion for preserving and celebrating the rich heritage of Indian fashion. 
              We believe that every piece of clothing tells a story, and our collection is designed to honor the 
              timeless beauty of traditional Indian wear while embracing modern sensibilities.
            </p>
            <p>
              Our curated selection features exquisite kurtis, elegant suits, beautiful dupatta, and comfortable 
              pants that reflect the diversity and artistry of Indian craftsmanship. Each piece is chosen for its 
              quality, design, and the story it tells.
            </p>
            <p>
              We are not just a showcase platform; we are storytellers of fashion, bringing you closer to the 
              artisans and traditions that make Indian clothing so special. Through Siri Fab, we aim to connect 
              you with pieces that celebrate your individuality and cultural pride.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-light-gray">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-light-gray">
              <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">Authenticity</h4>
              <p className="text-muted-foreground">
                We showcase only genuine, traditional designs that honor Indian fashion heritage.
              </p>
            </div>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-light-gray">
            <div className="p-6">
              <h4 className="text-xl font-semibold  mb-3">Quality</h4>
              <p className="text-muted-foreground">
                Every piece in our collection meets our high standards for craftsmanship and materials.
              </p>
            </div>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-light-gray">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-muted-foreground">
                We blend traditional designs with contemporary trends to create timeless pieces.
              </p>
            </div>
            </Card>
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Visit Our Store</h2>
          <Card className="overflow-hidden border-light-gray">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.674730066256!2d74.2423991!3d16.693152599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101d511bfc5fb%3A0x7804b1a4e35731bf!2sSiri%20fab!5e0!3m2!1sen!2sin!4v1753084909444!5m2!1sen!2sin" className='h-64 md:h-80 w-full'></iframe>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-8 w-8 text-primary" />
                <p>9th Ln, beside Balaji Collection, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416001</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-accent rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">
            Have questions about our collection? Want to know more about a specific piece? 
            We'd love to hear from you!
          </p>
          <div className="flex justify-center gap-8 mt-6">
            <a 
              href="https://wa.me/9483270602?text=Hello%20Siri%20Fab,%20I%20have%20a%20query%20about%20your%20products." 
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a 
              href="mailto:" 
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="font-semibold">Email</span>
            </a>
            <a href='https://www.instagram.com/siri_fab_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;