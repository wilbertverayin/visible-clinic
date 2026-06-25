import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin } from 'lucide-react';

const CleaningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 21.5C7.266 21.5 5 20.328 5 17.5C5 14.672 7.266 13.5 9.5 13.5C11.734 13.5 14 14.672 14 17.5C14 20.328 11.734 21.5 9.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 21.5C16.734 21.5 19 20.328 19 17.5C19 14.672 16.734 13.5 14.5 13.5C12.266 13.5 10 14.672 10 17.5C10 20.328 12.266 21.5 14.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 13.5V9.75C9.5 8.784 8.716 8 7.75 8C6.784 8 6 8.784 6 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 13.5V9.75C14.5 8.784 15.284 8 16.25 8C17.216 8 18 8.784 18 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 3L8.5 4.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 3L15.5 4.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 4V2" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WhiteningIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 21.5C7.266 21.5 5 20.328 5 17.5C5 14.672 7.266 13.5 9.5 13.5C11.734 13.5 14 14.672 14 17.5C14 20.328 11.734 21.5 9.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 21.5C16.734 21.5 19 20.328 19 17.5C19 14.672 16.734 13.5 14.5 13.5C12.266 13.5 10 14.672 10 17.5C10 20.328 12.266 21.5 14.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 13.5V9.75C9.5 8.784 8.716 8 7.75 8C6.784 8 6 8.784 6 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 13.5V9.75C14.5 8.784 15.284 8 16.25 8C17.216 8 18 8.784 18 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BracesIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 21.5C7.266 21.5 5 20.328 5 17.5C5 14.672 7.266 13.5 9.5 13.5C11.734 13.5 14 14.672 14 17.5C14 20.328 11.734 21.5 9.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 21.5C16.734 21.5 19 20.328 19 17.5C19 14.672 16.734 13.5 14.5 13.5C12.266 13.5 10 14.672 10 17.5C10 20.328 12.266 21.5 14.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 13.5V9.75C9.5 8.784 8.716 8 7.75 8C6.784 8 6 8.784 6 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 13.5V9.75C14.5 8.784 15.284 8 16.25 8C17.216 8 18 8.784 18 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10H18" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="7" y="9" width="2" height="2" rx="0.5" fill="#0072CE" stroke="#0072CE"/>
        <rect x="15" y="9" width="2" height="2" rx="0.5" fill="#0072CE" stroke="#0072CE"/>
    </svg>
);

const RestorativeIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 21.5C7.266 21.5 5 20.328 5 17.5C5 14.672 7.266 13.5 9.5 13.5C11.734 13.5 14 14.672 14 17.5C14 20.328 11.734 21.5 9.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 21.5C16.734 21.5 19 20.328 19 17.5C19 14.672 16.734 13.5 14.5 13.5C12.266 13.5 10 14.672 10 17.5C10 20.328 12.266 21.5 14.5 21.5Z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 13.5V9.75C9.5 8.784 8.716 8 7.75 8C6.784 8 6 8.784 6 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 13.5V9.75C14.5 8.784 15.284 8 16.25 8C17.216 8 18 8.784 18 9.75V12.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ImplantsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11.25V9C16 7.89543 15.1046 7 14 7H10C8.89543 7 8 7.89543 8 9V11.25" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11V14.5" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18H14" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 21H14" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14.5L14.25 16.25" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14.5L9.75 16.25" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DentistFooter = () => (
  <footer id="contact-footer" className="bg-slate-100 py-16 px-8 mt-16 md:mt-24">
    <div className="container mx-auto grid md:grid-cols-4 gap-8 text-gray-700">
        <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">SMILE DENTAL</h3>
            <p className="text-sm text-gray-600">Caring for Your Smile</p>
        </div>
        <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-[#f56565] transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-[#f56565] transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-[#f56565] transition-colors">Reviews</a></li>
            </ul>
        </div>
         <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span>(123) 456-7890</span></li>
                <li className="flex items-center gap-2"><span>contact@smiledental.com</span></li>
            </ul>
        </div>
         <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Location</h3>
             <p className="text-sm text-gray-600 flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 flex-shrink-0"/>123 Smile Ave, Toothville, 12345</p>
        </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-16 border-t border-slate-200 pt-8">
        &copy; {new Date().getFullYear()} Smile Dental. All Rights Reserved. Designed by <Link href="/" className="hover:underline">Visible Clinic</Link>.
    </div>
  </footer>
);

const serviceCards = [
    { icon: <CleaningIcon />, title: "Cleanings" },
    { icon: <WhiteningIcon />, title: "Whitening" },
    { icon: <BracesIcon />, title: "Braces" },
    { icon: <RestorativeIcon />, title: "Restorative" },
    { icon: <ImplantsIcon />, title: "Implants" },
];

const reviews = [
  { name: "Sarah L.", text: "Dr. Smith is fantastic! She made me feel so comfortable during my visit. The entire staff is friendly and professional. Highly recommend!" },
  { name: "Michael B.", text: "A great experience from start to finish. The clinic is modern, clean, and welcoming. I'm very happy with my treatment." },
  { name: "Jessica P.", text: "I used to be afraid of the dentist, but Dr. Smith and her team completely changed my perspective. They are so gentle and caring." },
];

export default function DentistPage() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
                <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
                <span className="md:hidden">Design Preview</span>
                <Link href="/" className="ml-4 font-bold text-primary hover:underline">
                  Back to Home
                </Link>
            </div>
            
            <header className="relative bg-slate-50 overflow-hidden">
                <nav className="absolute top-0 left-0 right-0 z-20 py-6 px-4 sm:px-8 md:px-16">
                    <div className="container mx-auto flex justify-between items-center text-blue-900">
                        <div className="text-xl font-bold">SMILE DENTAL</div>
                        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
                            <a href="#about" className="hover:text-[#f56565] transition-colors">About</a>
                            <a href="#services" className="hover:text-[#f56565] transition-colors">Services</a>
                            <a href="#reviews" className="hover:text-[#f56565] transition-colors">Reviews</a>
                            <a href="#contact-footer" className="hover:text-[#f56565] transition-colors">Contact</a>
                        </div>
                    </div>
                </nav>
                <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 items-center gap-8 relative z-10 pt-40">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">Caring for Your <br/>Smile Starts Here</h1>
                        <p className="mt-4 text-lg text-gray-600">Trusted family dental care in a modern, comfortable clinic.</p>
                        <Button className="mt-8 bg-[#f56565] text-white hover:bg-[#e53e3e] px-8 py-3 h-auto text-lg rounded-full transition-colors">Schedule a Visit</Button>
                    </div>
                    <div className="hidden md:block">
                      <Image
                        src="https://placehold.co/600x400.png"
                        alt="Dentist with a patient"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="dentist patient"
                      />
                    </div>
                </div>
                 <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] text-white fill-current">
                        <path d="M600,120 C300,120 0,0 0,0 L0,120 L1200,120 L1200,0 C1200,0 900,120 600,120 Z"></path>
                    </svg>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16 md:py-24">
                <section id="about">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">About the Dentist</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Dr. Jane Smith, DDS has over 10 years of experience providing high-quality, compassionate dental care for children and adults. She is dedicated to creating a comfortable and welcoming environment where patients can achieve their best smiles.
                            </p>
                        </div>
                        <Card className="bg-slate-100 border-none p-6 rounded-2xl transition-transform duration-300 hover:scale-105">
                            <CardContent className="flex items-center gap-6 p-0">
                                <Image 
                                    src="https://placehold.co/100x100.png" 
                                    alt="Dr. Jane Smith" 
                                    width={100} 
                                    height={100} 
                                    className="rounded-full"
                                    data-ai-hint="friendly dentist portrait"
                                />
                                <div>
                                    <h3 className="font-bold text-lg text-blue-900">Dr. Jane Smith, DDS</h3>
                                    <p className="text-gray-600">10-years of experience providing high-quality dental care for children and adults.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section id="services" className="mt-16 md:mt-24 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">Our Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
                        {serviceCards.map(service => (
                            <div key={service.title} className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
                                <div className="bg-blue-100 rounded-2xl p-4 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="font-semibold text-gray-700">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="reviews" className="mt-16 md:mt-24">
                     <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Patient Reviews</h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map(review => (
                            <Card key={review.name} className="bg-slate-50 border-none p-6 rounded-2xl transition-shadow duration-300 hover:shadow-xl">
                                <CardContent className="p-0">
                                    <p className="text-gray-600 mb-4">"{review.text}"</p>
                                    <p className="font-bold text-blue-900">- {review.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                     </div>
                </section>

                <section id="contact" className="mt-16 md:mt-24 text-center bg-blue-500 text-white rounded-2xl p-12 transition-transform duration-300 hover:scale-105">
                  <h2 className="text-3xl font-bold">Book Your Appointment Today!</h2>
                  <p className="mt-2 max-w-2xl mx-auto">
                      Ready to start your journey to a healthier smile? Contact us to schedule a visit.
                  </p>
                  <div className="flex justify-center mt-6">
                      <Button className="bg-white text-blue-500 hover:bg-slate-100 px-8 py-3 h-auto text-lg rounded-full transition-colors">
                          Schedule a Visit
                      </Button>
                  </div>
                </section>
            </main>
            <DentistFooter />
        </div>
    );
}
