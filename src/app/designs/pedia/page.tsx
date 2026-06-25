import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ClipboardList, Puzzle, MapPin, ArrowLeft } from 'lucide-react';

const SyringeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF7A59]">
        <path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15 7"/><path d="m9 15 4-4"/><path d="m5 11 4-4"/>
    </svg>
);

const InhalerIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF7A59]">
        <path d="M7 22a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H7Z"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M6 7V2h12v5"/>
    </svg>
);

const PediaHeader = () => (
  <header className="py-6 px-4 sm:px-8 md:px-16">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-extrabold text-[#0A2540]">PediaCare</div>
      <nav className="hidden md:flex items-center gap-8 text-lg font-bold">
        <a href="#about" className="hover:text-[#FF7A59] transition-colors">About</a>
        <a href="#services" className="hover:text-[#FF7A59] transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-[#FF7A59] transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-[#FF7A59] transition-colors">Contact</a>
      </nav>
      <Button className="rounded-full bg-[#FF7A59] text-white text-md font-bold px-6 py-3 hover:bg-[#ff6a49] transition-colors">
        Book Appointment
      </Button>
    </div>
  </header>
);

const ServiceCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center text-center gap-3 group">
        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <p className="font-bold text-lg text-center">{title}</p>
    </div>
)

const PediaPage = () => {
  return (
    <div className="overflow-x-hidden bg-[#FFFCF9] text-[#0A2540] font-sans-pedia">
      <div className="fixed top-4 left-4 right-4 z-50 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-lg text-center md:left-1/2 md:-translate-x-1/2 md:w-auto">
        <span className="hidden md:inline">This is a design preview. Buttons and links may not be functional.</span>
        <span className="md:hidden">Design Preview</span>
        <Link href="/" className="ml-4 font-bold text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      <PediaHeader />

      <main className="container mx-auto px-4 sm:px-8 md:px-16">
        <section className="relative py-12 sm:py-20">
            {/* Background shapes */}
            <div className="absolute top-0 -left-20 w-60 h-60 bg-[#DDEEFE]/70 rounded-full -z-10" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFDDC2]/70 rounded-full -z-10" />
            <svg
              className="absolute top-1/4 -right-20 w-1/2 h-1/2 text-[#FFC4B8]/50 -z-10"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M40.8,-63.3C52,-54.6,59.6,-41.8,65.8,-27.9C72,-14,76.8,1.1,73.5,14.2C70.2,27.3,58.8,38.5,47.7,48.6C36.6,58.7,25.8,67.8,12.9,73.1C0,78.4,-15,79.9,-28.9,75.4C-42.7,70.9,-55.4,60.4,-65.4,48.2C-75.3,36,-82.5,22,-84.1,7.2C-85.7,-7.5,-81.7,-23,-73.2,-35.1C-64.7,-47.2,-51.7,-55.9,-38.7,-63.4C-25.7,-70.9,-12.9,-77.2,0.8,-78.1C14.5,-79,29.<seg_117>,-72,40.8,-63.3Z"
                transform="translate(100 100)"
              />
            </svg>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 bg-white rounded-3xl shadow-lg relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#0A2540] leading-tight">
                  Compassionate<br />
                  Care for<br />
                  Children
                </h1>
                <Button className="mt-8 rounded-full bg-[#FF7A59] text-white text-lg font-bold px-8 py-6 hover:bg-[#ff6a49] transition-colors">
                  Book a Checkup
                </Button>
              </div>
              <div className="relative h-80 md:h-[450px] md:-ml-24">
                <Image
                  src="https://placehold.co/800x600.png"
                  alt="Doctor with a child patient"
                  fill
                  className="object-cover rounded-3xl shadow-xl"
                  data-ai-hint="doctor child patient"
                />
              </div>
            </div>
        </section>

        <section id="about" className="py-20 md:py-28">
             <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <Image
                            src="https://placehold.co/400x400.png"
                            alt="Dr. Anna smiling"
                            fill
                            className="object-cover rounded-3xl"
                            data-ai-hint="friendly doctor portrait"
                        />
                    </div>
                </div>
                 <div className="text-center md:text-left">
                     <h2 className="text-5xl font-extrabold">Hi, I'm Dr. Anna!</h2>
                     <p className="mt-4 text-xl text-[#0A2540]/80 max-w-md mx-auto md:mx-0">
                         I provide comprehensive medical care for infants, children, and adolescents in a warm and friendly environment.
                     </p>
                 </div>
            </div>
        </section>
        
        <section id="services" className="py-12 md:py-20 text-center">
            <h2 className="text-5xl font-extrabold">Our Services</h2>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <ServiceCard icon={<SyringeIcon />} title="Vaccinations" />
                <ServiceCard icon={<ClipboardList className="w-10 h-10 text-[#71C5E8]"/>} title="Well-Child Exams" />
                <ServiceCard icon={<Puzzle className="w-10 h-10 text-[#73D4A1]"/>} title="Developmental Screenings" />
                <ServiceCard icon={<InhalerIcon />} title="Asthma Management" />
            </div>
        </section>

        <section id="testimonials" className="py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start">
                 <div className="flex flex-col gap-8">
                     <Card className="p-8 bg-[#E6F4F1] border-none rounded-3xl transition-transform duration-300 hover:scale-105">
                         <p className="text-lg text-[#0A2540]/80">"Dr. Anna is wonderful! She always takes the time to listen and makes my child feel at ease."</p>
                         <p className="mt-4 font-bold text-lg">Emily R.</p>
                     </Card>
                     <Card className="p-8 bg-white border-none rounded-3xl shadow-md transition-transform duration-300 hover:scale-105">
                         <p className="text-lg text-[#0A2540]/80">"The best pediatric care we could ask for. The clinic is clean, and the staff is incredibly welcoming."</p>
                         <p className="mt-4 font-bold text-lg">John S.</p>
                     </Card>
                 </div>

                <div id="contact" className="text-center md:text-left md:sticky md:top-28">
                    <MapPin className="w-16 h-16 text-[#B5E4F4] mx-auto md:mx-0" strokeWidth={1.5} />
                    <h2 className="mt-4 text-5xl font-extrabold">Testimonials</h2>
                    <p className="mt-4 text-xl text-[#0A2540]/80">
                        We are proud to share the kind words from the families we serve.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <footer className="py-10 text-center text-gray-500">
        &copy; {new Date().getFullYear()} PediaCare. All Rights Reserved.
      </footer>
    </div>
  );
};

export default PediaPage;
