import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Eye, Glasses, Stethoscope, Heart, Brain, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const OphthaHeader = () => (
  <header className="py-6 px-8 flex justify-between items-center">
    <div className="font-bold text-xl tracking-wide">JUAN DELA CRUZ, MD, DPBO</div>
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#services" className="hover:text-primary transition-colors">Services</a>
      <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
    </nav>
    <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full transition-all hover:from-purple-600 hover:to-indigo-700 hover:scale-105">
      Book Now
    </Button>
  </header>
);

const serviceItems = [
    { icon: <Eye className="w-8 h-8 text-purple-500" />, title: "General Eye Care", description: "Comprehensive eye exams and vision testing." },
    { icon: <Glasses className="w-8 h-8 text-blue-500" />, title: "Cataract & Refractive Surgery", description: "Advanced surgical solutions for vision correction." },
    { icon: <Stethoscope className="w-8 h-8 text-yellow-500" />, title: "Laser Procedures", description: "Minimally invasive laser treatments for various eye conditions." },
    { icon: <Heart className="w-8 h-8 text-green-500" />, title: "Eye Health & Nutrition", description: "Guidance on maintaining optimal eye health through diet." },
    { icon: <Brain className="w-8 h-8 text-red-500" />, title: "Surgical Procedures", description: "A range of surgical options for complex eye issues." },
];

const faqItems = [
    { q: "How often should I have an eye exam?", a: "We recommend a comprehensive eye exam every one to two years, depending on your age, risk factors, and whether you currently wear corrective lenses." },
    { q: "What are the signs of a cataract?", a: "Common signs include cloudy or blurry vision, colors appearing faded, glare, poor night vision, and frequent changes in your prescription." },
    { q: "Do you offer financing options?", a: "Yes, we partner with several financing providers to make our services more accessible. Please contact our clinic for more information." },
    { q: "What should I bring to my appointment?", a: "Please bring your current eyeglasses or contact lenses, a list of any medications you are taking, and your insurance information." },
]

const testimonials = [
    { name: "Maria S.", quote: "Dr. dela Cruz is incredibly thorough and caring. I felt at ease throughout the entire process. My vision has never been better!", rating: 5 },
    { name: "John D.", quote: "The clinic staff are professional and friendly. Scheduling was a breeze and the facilities are top-notch. Highly recommend!", rating: 5 },
    { name: "Anna K.", quote: "A truly wonderful experience. Dr. dela Cruz took the time to explain everything clearly. I'm so grateful for the excellent care I received.", rating: 5 },
];

const StarRating = ({ rating = 5 }: { rating: number }) => (
    <div className="flex gap-0.5 text-yellow-500">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        ))}
    </div>
);

const TestimonialsSection = () => (
    <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">What Our Patients Say</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">We are proud to have earned the trust of our patients. Here’s what they have to say.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="bg-purple-50/50 border-purple-100 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <CardContent className="p-0">
                            <StarRating rating={testimonial.rating} />
                            <p className="mt-4 text-gray-700 italic">"{testimonial.quote}"</p>
                            <p className="mt-6 font-bold text-gray-900">- {testimonial.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export default function OphthaPage() {
  return (
    <div className="bg-[#F9F9FF] text-gray-800 font-sans">
      <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
        <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
        <span className="md:hidden">Design Preview</span>
        <Link href="/" className="ml-4 font-bold text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      <OphthaHeader />

      <main>
        <section id="hero" className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center py-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Juan dela<br />Cruz,<br />MD, DPBO</h1>
            <p className="mt-4 text-lg text-gray-600">Fellow, Philippine Academy of Ophthalmology<br/>Cornea & External Diseases, Uveitis</p>
            <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed-hendrerit, urna eu practissim, justo.</p>
            <Button size="lg" className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full px-10 transition-all hover:from-purple-600 hover:to-indigo-700 hover:scale-105">
              Book a Consultation
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Eye glasses"
                width={400}
                height={400}
                className="rounded-full object-cover border-8 border-white shadow-2xl"
                data-ai-hint="eyeglasses eye chart"
              />
            </div>
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
             <div className="flex justify-center">
                <Image
                    src="https://placehold.co/400x500.png"
                    alt="Dr. Juan dela Cruz"
                    width={350}
                    height={438}
                    className="rounded-full object-cover shadow-xl"
                    data-ai-hint="friendly doctor portrait"
                />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-primary mb-6">About Dr. dela Cruz</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Dr. Juan dela Cruz is a board-certified ophthalmologist with fellowship training in Cornea & External Diseases and Uveitis. He is dedicated to providing compassionate and state-of-the-art eye care to his patients.
                </p>
                <Card className="bg-white border-none rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl text-primary">Personal Quotes</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                        <ul className="space-y-2 text-gray-500">
                            <li className="italic">"Your vision is my mission."</li>
                            <li className="italic">"Dedicated to preserving the gift of sight."</li>
                            <li className="italic">"Clarity in vision, clarity in life."</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section id="services" className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Services Offered</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">Comprehensive solutions for all your eye care needs, from routine exams to advanced surgical procedures.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.slice(0, 5).map(item => (
                 <Card key={item.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
                    <CardHeader className="p-0 flex flex-row items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-full">{item.icon}</div>
                        <CardTitle className="text-xl text-gray-800">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                        <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
             <Card className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left md:col-span-2 lg:col-span-1">
                <CardHeader className="p-0 flex flex-row items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-full"><CheckCircle2 className="w-8 h-8 text-purple-500" /></div>
                    <CardTitle className="text-xl text-gray-800">And more...</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                    <p className="text-gray-600">Contact us to learn about our full range of services.</p>
                </CardContent>
            </Card>
          </div>
        </section>

        <section id="why-us" className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Why choose us?</h2>
                <ul className="space-y-4">
                    {["Expertise and Experience", "Personalized Care", "Advanced Eye Care Solutions", "Commitment to Patient Reliability", "1,000+ Happy Patients"].map(item => (
                        <li key={item} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-purple-50">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <span className="text-lg text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                 <Image
                    src="https://placehold.co/500x500.png"
                    alt="Clinic interior"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    data-ai-hint="modern clinic interior"
                />
            </div>
        </section>

        <TestimonialsSection />

        <section id="schedule" className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Clinic Schedule & Locations</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">Find the most convenient time and place for your next appointment.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <Card className="bg-white p-6 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3 text-gray-500 mb-2"><MapPin className="w-5 h-5"/><span>Medical Center, Metro Manila</span></div>
                    <CardTitle className="text-xl">ClearView Eye Clinic</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 space-y-2">
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500"/>Monday, Wednesday, Friday: 9am-5pm</p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500"/>(123) 456-7890</p>
                    <Button variant="link" className="p-0 h-auto text-primary">View on map</Button>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                    <div className="flex items-center gap-3 text-gray-500 mb-2"><MapPin className="w-5 h-5"/><span>General Hospital, Sorsogon</span></div>
                    <CardTitle>Sorsogon Medical Mission Group</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 space-y-2">
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500"/>Tuesday, Thursday: 10am-4pm</p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500"/>(098) 765-4321</p>
                    <Button variant="link" className="p-0 h-auto text-primary">View on map</Button>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                     <div className="flex items-center gap-3 text-gray-500 mb-2"><MapPin className="w-5 h-5"/><span>Online Consultation</span></div>
                    <CardTitle>Virtual Eye Care Clinic</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 space-y-2">
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-500"/>By Appointment</p>
                    <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-500"/>contact@drcruz.com</p>
                    <Button className="mt-2 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white transition-all hover:from-purple-600 hover:to-indigo-700 hover:scale-105">Book Online</Button>
                </CardContent>
              </Card>
          </div>
        </section>

        <section id="assessment-cta" className="container mx-auto px-6 text-center py-16">
            <Card className="bg-white p-8 rounded-2xl shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold">Need to Schedule an Assessment?</h3>
                <p className="text-gray-600 mt-2">Reach out to us to book your appointment today.</p>
                <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
                    <a href="mailto:contact@cleareyeclinic.com" className="font-semibold text-primary transition-colors hover:text-indigo-600">contact@cleareyeclinic.com</a>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <a href="tel:+639171378543" className="font-semibold text-primary transition-colors hover:text-indigo-600">(+63) 917 137 8543</a>
                </div>
            </Card>
        </section>
        
        <section id="faq" className="container mx-auto px-6 py-24 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">FAQs</h2>
            <p className="text-gray-600 mb-8 text-center">Find answers to common questions about our services and procedures.</p>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i+1}`} className="bg-white rounded-lg shadow-sm mb-4 px-6 transition-colors hover:bg-purple-50">
                        <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        <section id="contact" className="container mx-auto px-6 py-24">
            <Card className="bg-white p-8 md:p-12 rounded-2xl shadow-xl grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-primary mb-2">Contact Us</h2>
                    <p className="text-gray-600 mb-8">Send us a message and we'll get back to you as soon as possible.</p>
                    <div className="space-y-4">
                        <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary"/> contact@cleareyeclinic.com</p>
                        <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary"/> (+63) 917 137 8543</p>
                        <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-1"/> ClearView Eye Clinic & Sorsogon Medical Mission Group</p>
                    </div>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <Input id="name" name="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <Textarea id="message" name="message" rows={4} placeholder="Your message..." required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white transition-all hover:from-purple-600 hover:to-indigo-700 hover:scale-105">
                        Send Message
                    </Button>
                </form>
            </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Juan dela Cruz, MD, DPBO. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Designed by <Link href="/" className="hover:underline">Visible Clinic</Link></p>
      </footer>
    </div>
  );
}
