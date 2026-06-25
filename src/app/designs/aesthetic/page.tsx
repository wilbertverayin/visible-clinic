import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Star, Phone, Mail, MapPin, ArrowLeft, Sparkles, Zap, Droplet } from 'lucide-react';

const AestheticHeader = () => (
  <header className="py-6 px-8 flex justify-between items-center">
    <div className="font-display text-2xl font-bold tracking-wider">AURA Aesthetic</div>
    <nav className="hidden md:flex items-center gap-8 font-sans-aesthetic text-sm tracking-widest uppercase">
      <a href="#services" className="hover:text-pink-400 transition-colors">Services</a>
      <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
      <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
    </nav>
    <Button variant="outline" className="rounded-full border-stone-400 font-sans-aesthetic tracking-widest text-xs transition-all hover:bg-stone-800 hover:text-white">Book Now</Button>
  </header>
);

const StarRating = ({ rating = 5 }: { rating: number }) => (
    <div className="flex gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current text-yellow-500' : 'text-stone-300'}`} />
        ))}
    </div>
);


const AestheticPage = () => {
  return (
    <div className="relative overflow-hidden font-sans-aesthetic bg-[#FBF9F6] text-stone-800">
      <div aria-hidden="true" className="absolute top-0 -left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-1/4 -right-1/4 w-[40rem] h-[40rem] bg-stone-200/50 rounded-full blur-3xl" />
      <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
        <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
        <span className="md:hidden">Design Preview</span>
        <Link href="/" className="ml-4 font-bold text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      <AestheticHeader />

      <main className="container mx-auto px-4">
        <section className="relative text-center py-20">
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight">
            Where Science<br />Meets<br />Beauty
          </h1>
          <div className="inline-flex items-center gap-2 mt-4">
             <MessageCircle className="w-4 h-4" />
             <span className="text-sm font-medium">1000+ REVIEWS</span>
          </div>
        </section>

        <section id="about" className="relative mb-20 md:mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative z-10 p-8 md:p-16 bg-stone-800 text-white rounded-2xl shadow-2xl md:-mr-16">
                    <h2 className="font-display text-2xl mb-4">Welcome to AURA Aesthetic</h2>
                    <p className="font-sans-aesthetic text-stone-300 leading-relaxed">
                        At AURA Aesthetic, we are dedicated to providing the highest quality of care and aesthetic services. Our team of experts combines artistry with the latest technology to help you achieve your desired look. We believe in enhancing your natural beauty and promoting overall wellness. From our state-of-the-art facilities to our personalized treatment plans, we ensure every visit is a serene and transformative experience. Your journey to radiance and confidence starts here.
                    </p>
                </div>
                <div className="aspect-[4/5] md:aspect-auto md:h-full relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/aesthetic/image.png"
                        alt="Doctor for Belle Aesthetic & Wellness Group"
                        fill
                        className="object-cover"
                        data-ai-hint="doctor portrait"
                    />
                </div>
            </div>
        </section>


        <section id="services" className="text-center py-20">
            <div className="inline-flex items-center gap-4 mb-12">
                <h2 className="font-display text-3xl md:text-4xl">Here’s how we provide top quality skin care service</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                    {
                        icon: <Sparkles className="w-10 h-10 text-pink-400" />,
                        title: "Rejuvenating Facials",
                        description: "Customized facials to cleanse, exfoliate, and nourish your skin for a radiant glow."
                    },
                    {
                        icon: <Zap className="w-10 h-10 text-pink-400" />,
                        title: "Laser Skin Resurfacing",
                        description: "Advanced laser technology to reduce wrinkles, scars, and pigmentation issues."
                    },
                    {
                        icon: <Droplet className="w-10 h-10 text-pink-400" />,
                        title: "Dermal Fillers",
                        description: "Restore volume and smooth out lines with our range of safe and effective dermal fillers."
                    }
                ].map((service, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center">
                            {service.icon}
                        </div>
                        <h3 className="font-display text-xl mt-2">{service.title}</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="my-20 md:my-40">
            <div className="bg-stone-800 text-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl">Subscribe To Our Newsletter</h3>
                    <p className="text-stone-300 mt-2">Get the latest updates on promotions and new services.</p>
                </div>
                <form className="flex-1 w-full flex gap-2">
                    <Input type="email" placeholder="Your Email Address" className="bg-stone-700 border-stone-600 text-white rounded-full focus:ring-pink-400" />
                    <Button type="submit" className="bg-white text-black rounded-full hover:bg-stone-200 transition-colors">Subscribe</Button>
                </form>
            </div>
        </section>

        <section className="text-center py-20">
             <h2 className="font-display text-3xl md:text-4xl mb-12">Our Services</h2>
             <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto text-left">
                <div>
                    <h3 className="font-display text-xl mb-2">Skin Care Treatments</h3>
                    <ul className="space-y-1 text-stone-600 font-light">
                        <li>Diamond Peel</li>
                        <li>HydraFacial</li>
                        <li>Chemical Peel</li>
                        <li>Acne Treatment</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-display text-xl mb-2">Body Treatments</h3>
                    <ul className="space-y-1 text-stone-600 font-light">
                        <li>Laser Hair Removal</li>
                        <li>Body Sculpting</li>
                        <li>Cellulite Reduction</li>
                    </ul>
                </div>
             </div>
             <Button variant="link" className="mt-8 text-stone-800 hover:text-pink-400">See our full list of services</Button>
        </section>
        
        <section className="py-20 md:py-32">
            <h2 className="font-display text-3xl md:text-4xl text-center mb-16">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                    <StarRating rating={5} />
                    <p className="mt-4 mb-4 text-stone-600">"The best clinic I've been to! The staff are so professional and the results are amazing."</p>
                    <p className="font-bold">Mary Criselda</p>
                </div>
                 <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                    <StarRating rating={5} />
                    <p className="mt-4 mb-4 text-stone-600">"I love the ambiance and the service. Highly recommended!"</p>
                    <p className="font-bold">Clara A.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                    <StarRating rating={4} />
                    <p className="mt-4 mb-4 text-stone-600">"Great results from my treatment. Will definitely come back."</p>
                    <p className="font-bold">Roy</p>
                </div>
            </div>
        </section>

      </main>

      <footer id="contact" className="bg-stone-100 py-16 px-8 mt-20">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="font-display text-xl mb-4">AURA Aesthetic</h3>
                <p className="text-sm text-stone-600">Beauty &amp; Wellness Redefined</p>
            </div>
            <div>
                <h3 className="font-display text-xl mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#services" className="hover:text-pink-400 transition-colors">Services</a></li>
                    <li><a href="#about" className="hover:text-pink-400 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-pink-400 transition-colors">Book Now</a></li>
                </ul>
            </div>
             <div>
                <h3 className="font-display text-xl mb-4">Contact</h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +63 123 456 7890</li>
                    <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> contact@auraclinic.ph</li>
                </ul>
            </div>
             <div>
                <h3 className="font-display text-xl mb-4">Location</h3>
                 <p className="text-sm text-stone-600 flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 flex-shrink-0"/>123 Beauty Lane, Glamour City, Metro Manila, Philippines</p>
            </div>
        </div>
        <div className="text-center text-xs text-stone-500 mt-16 border-t border-stone-200 pt-8">
            &copy; {new Date().getFullYear()} AURA Aesthetic Clinic. All Rights Reserved. Designed by <Link href="/" className="hover:underline">Visible Clinic</Link>.
        </div>
      </footer>
    </div>
  );
};

export default AestheticPage;
