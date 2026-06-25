import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse, Activity, Users, ClipboardList, Pill } from 'lucide-react';

const IMHeader = () => (
  <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-black/30 to-transparent">
    <div className="container mx-auto flex justify-between items-center text-white">
      <div className="text-xl font-bold">Dr. Alex Chen, MD</div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex text-white border-white bg-transparent hover:bg-white hover:text-teal-700 transition-colors">
        Book Now
      </Button>
    </div>
  </header>
);

const IMFooter = () => (
  <footer id="contact" className="bg-gray-100 py-16 px-8">
    <div className="container mx-auto text-center text-gray-600">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Book a Consultation</h3>
      <p className="max-w-xl mx-auto mb-8">
        Take the next step towards better health. Schedule your appointment today.
      </p>
      <Button size="lg" className="bg-teal-600 hover:bg-teal-700 transition-colors">Book Now</Button>
      <div className="mt-12 border-t pt-8">
        <p className="font-bold text-lg">Dr. Alex Chen, MD</p>
        <p>123 Health St, Wellness City, 12345</p>
        <p>(123) 456-7890 | contact@dralexchen.com</p>
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} Dr. Alex Chen. All Rights Reserved. Designed by <Link href="/" className="hover:underline">Visible Clinic</Link>.</p>
      </div>
    </div>
  </footer>
);

const LungIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L12 3l.24.24a6 6 0 0 0 8.49 8.49zM12 3v18"/>
        <path d="m3.76 12.24a6 6 0 0 1 8.49-8.49L12 3l-.24.24a6 6 0 0 1-8.49 8.49z"/>
    </svg>
);

const StomachIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2C6.8 2 5.5 4.5 5.5 6.5C5.5 10 7.5 12 9 13.5L10 17C10 20 14 22 17.5 20C21 18 20.5 13.5 19 12L17.5 9.5C16 7 15 5.5 15 4C15 2.5 13 2 11.5 2H9.5Z" />
        <path d="M15 4C15 5.5 15.5 7 17.5 9.5" />
    </svg>
);


const conditions = [
  { name: 'Hypertension', icon: <HeartPulse className="w-10 h-10 text-teal-600"/> },
  { name: 'Diabetes', icon: <Activity className="w-10 h-10 text-teal-600"/> },
  { name: 'Asthma', icon: <LungIcon className="w-10 h-10 text-teal-600"/> },
  { name: 'GERD', icon: <StomachIcon className="w-10 h-10 text-teal-600"/> },
];

const helpSteps = [
    { name: 'Consult', icon: <Users className="w-10 h-10 text-teal-600"/>, description: "Discuss your symptoms and medical history." },
    { name: 'Diagnose', icon: <ClipboardList className="w-10 h-10 text-teal-600"/>, description: "Utilize advanced diagnostics to identify the issue." },
    { name: 'Manage', icon: <Pill className="w-10 h-10 text-teal-600"/>, description: "Develop a tailored treatment plan." },
]

export default function InternalMedicinePage() {
  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
        <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
        <span className="md:hidden">Design Preview</span>
        <Link href="/" className="ml-4 font-bold text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      <IMHeader />

      <main>
        <section className="relative h-[80vh] min-h-[500px] flex items-center text-white">
            <div className="absolute inset-0">
                <Image 
                    src="https://placehold.co/1600x900.png"
                    alt="Doctor with a patient"
                    fill
                    className="object-cover"
                    data-ai-hint="doctor patient consultation"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative container mx-auto px-6 z-10">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Internal Medicine.<br/>Personalized.
                    </h1>
                    <p className="mt-4 text-lg text-slate-200">
                        Comprehensive medical care for adults, focused on your health and well-being.
                    </p>
                    <Button size="lg" className="mt-8 bg-teal-600 hover:bg-teal-700 transition-colors">
                        Book Consultation
                    </Button>
                </div>
            </div>
        </section>

        <section id="about" className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="flex justify-center">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Dr. Alex Chen"
                            width={350}
                            height={350}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="friendly doctor portrait"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About the Doctor</h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            He is board-certified with over 15 years of experience in internal medicine, committed to providing high-quality, evidence-based care for our adults.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Conditions Treated</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {conditions.map((condition) => (
                        <Card key={condition.name} className="border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                                {condition.icon}
                                <h3 className="font-semibold text-lg">{condition.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="services" className="py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">How We Help</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {helpSteps.map((step) => (
                        <div key={step.name} className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                            {step.icon}
                            <h3 className="font-bold text-xl mt-4 mb-2">{step.name}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Patients Say</h2>
                <Card className="bg-slate-50 border-none p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <CardContent className="p-0">
                         <p className="text-lg text-gray-700 italic leading-relaxed">
                            "The thorough and compassionate care I received made all the difference. Dr. Chen truly listens and creates a plan that works for you. I've never felt more confident in my healthcare."
                         </p>
                         <div className="mt-6 flex items-center justify-center gap-4">
                            <Image
                                src="/testimonials/patient-female-1.png"
                                alt="Patient photo"
                                width={60}
                                height={60}
                                className="rounded-full"
                                data-ai-hint="smiling patient portrait"
                            />
                             <div>
                                 <p className="font-bold text-gray-900">- Sarah Johnson</p>
                                 <p className="text-sm text-gray-600">Patient for 5+ years</p>
                             </div>
                         </div>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>

      <IMFooter />
    </div>
  );
}
