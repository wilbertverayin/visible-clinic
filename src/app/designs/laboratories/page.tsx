import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, FlaskConical, Stethoscope, MessageSquare, Plus, Leaf, Users, Clock, Hospital, ChevronLeft, ChevronRight, ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const ClinicoLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-500">
      <path d="M3 12H7L9.5 5L14.5 19L17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold text-gray-800 tracking-wider">CLINICO</span>
  </div>
);

const ClinicoHeader = () => (
  <header className="py-4 px-6 md:px-12 bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <ClinicoLogo />
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="py-2 px-3 bg-sky-500 text-white rounded-md">Home</a>
        <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-sky-500 transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-sky-500 transition-colors">Contacts</a>
      </nav>
      <Button className="hidden md:inline-flex bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-sm text-xs font-bold tracking-widest transition-colors">FIND A DOCTOR</Button>
    </div>
  </header>
);

const ServiceCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="bg-sky-500 text-white p-8 relative transition-transform duration-300 hover:-translate-y-2">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-sm opacity-90 leading-relaxed">{text}</p>
    <button className="absolute bottom-4 right-4 bg-sky-600 hover:bg-sky-700 rounded-sm p-2 transition-colors">
      <Plus className="w-5 h-5" />
    </button>
  </div>
);

const InfoCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="bg-gray-50 rounded-lg p-8 flex items-start gap-6 transition-shadow hover:shadow-xl hover:-translate-y-1">
    <div className="flex-shrink-0 p-4 rounded-full bg-sky-100">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  </div>
);

const whyChooseUsItems = [
    { icon: <CheckCircle className="w-10 h-10 text-white" />, title: "Accurate Results", description: "Our state-of-the-art equipment and certified professionals ensure the highest accuracy." },
    { icon: <Clock className="w-10 h-10 text-white" />, title: "Fast Turnaround", description: "We understand the urgency. Get your results quickly without compromising quality." },
    { icon: <Users className="w-10 h-10 text-white" />, title: "Patient-Centered Care", description: "A comfortable and seamless experience from sample collection to results delivery." },
    { icon: <ShieldCheck className="w-10 h-10 text-white" />, title: "Certified & Trusted", description: "Fully accredited laboratory trusted by doctors and patients across the region." },
];

const WhyChooseUsSection = () => (
    <section className="bg-sky-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Clinico?</h2>
            <p className="max-w-2xl mx-auto mb-12 opacity-90">We are committed to excellence in diagnostic services.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {whyChooseUsItems.map(item => (
                    <div key={item.title} className="flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110">
                        <div className="bg-sky-700 p-4 rounded-full">
                            {item.icon}
                        </div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const testimonials = [
    { name: "Dr. Elena Reyes, MD", text: "Clinico Labs is my go-to for reliable and fast diagnostic results. Their professionalism is unmatched.", avatarHint: "doctor portrait female", avatarSrc: "/testimonials/doctor-female-1.png" },
    { name: "Mark B.", text: "The online portal is so convenient for accessing my family's results. The staff were also very accommodating during our visit.", avatarHint: "smiling man portrait", avatarSrc: "/testimonials/man-1.png" },
    { name: "Angela S.", text: "I was impressed with the cleanliness and efficiency of the lab. My results came back much faster than I expected. Highly recommended!", avatarHint: "smiling woman portrait", avatarSrc: "/testimonials/woman-1.png" },
];

const TestimonialsSection = () => (
    <section id="testimonials" className="container mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Partners & Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
                <div key={testimonial.name} className="bg-gray-50 p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    <div className="flex items-center mt-6">
                        <Image
                            src={testimonial.avatarSrc}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                            data-ai-hint={testimonial.avatarHint}
                        />
                        <p className="ml-4 font-bold text-gray-800">{testimonial.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);


const ClinicoFooter = () => (
  <footer id="contact" className="bg-gray-800 text-white">
    <div className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-500">
                <path d="M3 12H7L9.5 5L14.5 19L17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold text-white tracking-wider">CLINICO</span>
        </div>
        <p className="mt-4 text-gray-400 text-sm">Your trusted partner in diagnostics. Providing accurate and timely results to support better health outcomes.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
          <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find a Doctor</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-1 text-sky-400 flex-shrink-0"/><span>123 Lab Avenue, Science City, Metro Manila</span></li>
          <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-sky-400"/><span>(02) 8-123-4567</span></li>
          <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-sky-400"/><span>contact@clinico.ph</span></li>
        </ul>
      </div>
       <div>
        <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
          <li>Saturday: 7:00 AM - 12:00 PM</li>
          <li>Sunday & Holidays: Closed</li>
        </ul>
      </div>
    </div>
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Clinico Laboratories. All Rights Reserved. Designed by <Link href="/" className="hover:underline">Visible Clinic</Link>.
      </div>
    </div>
  </footer>
);


const LaboratoriesPage = () => {
  return (
    <div className="bg-white text-gray-700 font-roboto">
      <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
        <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
        <span className="md:hidden">Design Preview</span>
        <Link href="/" className="ml-4 font-bold text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      <ClinicoHeader />
      <main>
        <section className="relative h-[60vh] bg-gray-200">
          <Image
            src="https://placehold.co/1600x900.png"
            alt="Child at a dental check-up"
            fill
            className="object-cover"
            data-ai-hint="child dentist"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-end">
            <div className="w-full md:w-1/3 mr-0 md:mr-16 bg-white/80 backdrop-blur-sm p-8 text-center text-gray-800">
              <FlaskConical className="w-12 h-12 mx-auto text-sky-500 mb-2" />
              <h2 className="text-4xl font-bold text-sky-600">LAB TESTING</h2>
              <p className="text-sm my-4">Accurate, reliable, and rapid lab testing services you can trust.</p>
              <div className="flex justify-center items-center">
                <Button variant="ghost" size="icon" className="hover:bg-sky-100"><ChevronLeft /></Button>
                <Button variant="link" className="text-sky-600 font-bold">READ MORE</Button>
                <Button variant="ghost" size="icon" className="hover:bg-sky-100"><ChevronRight /></Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<Heart className="w-8 h-8"/>} title="Heart Rate" text="Advanced cardiac monitoring to assess heart health and function." />
          <ServiceCard icon={<FlaskConical className="w-8 h-8"/>} title="Lab Test" text="Comprehensive lab tests for accurate diagnosis and health screening." />
          <ServiceCard icon={<Stethoscope className="w-8 h-8"/>} title="Symptom Check" text="Detailed analysis to help identify the root cause of your symptoms." />
          <ServiceCard icon={<MessageSquare className="w-8 h-8"/>} title="Online Help" text="Access your results and get support from our team through our secure online portal." />
        </section>
        
        <section className="container mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <InfoCard icon={<Leaf className="w-8 h-8 text-sky-500"/>} title="Transplant Services" text="Specialized laboratory support for organ and tissue transplant procedures." />
            <InfoCard icon={<Users className="w-8 h-8 text-sky-500"/>} title="Qualified Doctors" text="Our team of certified pathologists and lab technicians ensure the highest standards of quality." />
            <InfoCard icon={<Clock className="w-8 h-8 text-sky-500"/>} title="24 Hours Service" text="Our lab operates around the clock to provide timely results for critical cases." />
            <InfoCard icon={<Hospital className="w-8 h-8 text-sky-500"/>} title="Emergency Departments" text="Dedicated support for emergency departments, delivering fast and accurate diagnostic results." />
          </div>
        </section>

        <WhyChooseUsSection />
        <TestimonialsSection />
      </main>
      <ClinicoFooter />
    </div>
  );
};

export default LaboratoriesPage;
