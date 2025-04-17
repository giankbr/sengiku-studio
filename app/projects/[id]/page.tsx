'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// This would typically come from a database or API
const projectsData = {
  'petshop-app': {
    title: 'PETSHOP',
    category: 'Mobile App',
    description: "A comprehensive mobile app for pet owners to manage their pets' health, schedule vet appointments, and shop for pet supplies.",
    client: 'PetCare Inc.',
    year: '2024',
    duration: '3 months',
    services: ['UI/UX Design', 'Mobile App Design', 'Prototyping', 'User Testing'],
    challenge:
      "PetCare Inc. needed a user-friendly mobile application that would help pet owners manage all aspects of their pets' care in one place. The challenge was to create an intuitive interface that could accommodate various pet types while providing personalized recommendations and reminders.",
    solution:
      "We designed a comprehensive mobile app with a clean, playful interface that makes pet care management simple and engaging. The app features customizable pet profiles, health tracking, appointment scheduling, medication reminders, and an integrated shop for pet supplies. We implemented a recommendation engine that suggests products and care routines based on the pet's species, breed, age, and health conditions.",
    outcome:
      'The PetShop app launched successfully with over 50,000 downloads in the first month. User engagement metrics show that 78% of users return to the app at least three times per week, and the in-app purchase conversion rate is 23% higher than industry average. PetCare Inc. has reported a 35% increase in their online sales since the app launch.',
    mainImage: '/placeholder.svg?height=800&width=1200',
    gallery: ['/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800'],
    testimonial: {
      quote:
        'The Sengiku Studio team delivered beyond our expectations. They truly understood our vision and created an app that our customers love. The attention to detail and user-centered approach has made all the difference in our digital presence.',
      author: 'Sarah Johnson',
      position: 'Digital Marketing Director, PetCare Inc.',
    },
    nextProject: 'arteco-brand',
  },
  'arteco-brand': {
    title: 'ARTECO',
    category: 'Branding',
    description: 'Complete brand identity for an eco-friendly art supply company, including logo design, packaging, and digital assets.',
    client: 'Arteco Supplies',
    year: '2023',
    duration: '2 months',
    services: ['Brand Strategy', 'Logo Design', 'Packaging Design', 'Brand Guidelines'],
    challenge:
      'Arteco Supplies was launching a new line of eco-friendly art materials and needed a brand identity that would communicate their commitment to sustainability while appealing to professional artists and art enthusiasts. They needed to stand out in a competitive market while clearly conveying their environmental values.',
    solution:
      'We developed a comprehensive brand identity that balances artistic expression with environmental consciousness. The logo combines organic shapes with clean lines to represent the harmony between creativity and sustainability. We created a color palette inspired by natural pigments and designed packaging that minimizes waste while maximizing visual impact. The brand guidelines ensure consistency across all touchpoints while allowing for creative applications.',
    outcome:
      "The new brand identity has been instrumental in Arteco's successful market entry. The company reported a 45% higher brand recognition in their target market compared to their initial projections. The distinctive packaging has received industry recognition, including a sustainable design award. Retailers have responded positively, with placement in 30% more stores than initially targeted.",
    mainImage: '/placeholder.svg?height=800&width=1200',
    gallery: ['/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800'],
    testimonial: {
      quote:
        "Sengiku Studio captured the essence of our brand perfectly. They understood our commitment to sustainability and translated it into a visual identity that resonates with our audience. The thoughtful design system they created has given us a strong foundation for our brand's growth.",
      author: 'Michael Chen',
      position: 'Founder, Arteco Supplies',
    },
    nextProject: 'nomad-website',
  },
  'nomad-website': {
    title: 'NOMAD',
    category: 'Web Design',
    description: 'A responsive website for a travel blog focusing on off-the-beaten-path destinations and authentic experiences.',
    client: 'Nomad Explorers',
    year: '2024',
    duration: '6 weeks',
    services: ['Web Design', 'UI/UX Design', 'Content Strategy', 'Development'],
    challenge:
      'Nomad Explorers needed a website redesign that would showcase their unique travel content while improving user engagement and monetization opportunities. They wanted a platform that would stand out from conventional travel blogs and reflect their focus on authentic, immersive travel experiences.',
    solution:
      'We designed a responsive website with an immersive, content-first approach that highlights the visual storytelling aspect of their brand. The layout features large, impactful photography with thoughtful typography that enhances readability. We implemented an intuitive navigation system organized by regions and travel themes rather than traditional chronological blog posts. The design incorporates subtle animations that create a sense of journey and exploration as users move through the site.',
    outcome:
      'Since launching the new website, Nomad Explorers has seen a 65% increase in average session duration and a 40% decrease in bounce rate. Newsletter subscriptions have increased by 85%, and affiliate link conversions have improved by 50%. The distinctive design has also attracted partnership opportunities with premium travel brands, opening new revenue streams for the business.',
    mainImage: '/placeholder.svg?height=800&width=1200',
    gallery: ['/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800'],
    testimonial: {
      quote:
        "Working with Sengiku Studio transformed our online presence. They didn't just create a beautiful website; they developed a digital experience that perfectly captures the spirit of exploration that defines our brand. Our readers have responded enthusiastically, and we're seeing tangible business results.",
      author: 'Elena Rodriguez',
      position: 'Co-founder, Nomad Explorers',
    },
    nextProject: 'lumina-ux',
  },
  'lumina-ux': {
    title: 'LUMINA',
    category: 'UI/UX',
    description: 'User interface and experience design for a smart home control system, focusing on accessibility and intuitive interactions.',
    client: 'Lumina Tech',
    year: '2023',
    duration: '4 months',
    services: ['UI/UX Design', 'Interaction Design', 'Accessibility Consulting', 'Prototyping'],
    challenge:
      'Lumina Tech was developing a new smart home system that needed to be accessible to users of all ages and abilities. The challenge was to create an interface that would simplify the control of complex home automation while being intuitive enough for users with varying levels of technical proficiency.',
    solution:
      'We designed a user interface that prioritizes clarity and simplicity without sacrificing functionality. The system features a modular dashboard that users can customize based on their most-used functions, with consistent navigation patterns throughout. We implemented an adaptive interface that responds to user behavior over time, bringing frequently used controls to the forefront. Accessibility was built into every aspect of the design, with considerations for color contrast, text size, voice control, and motor impairments.',
    outcome:
      'User testing showed that the new interface reduced the learning curve for new users by 60% compared to competitor products. The accessibility features have been particularly well-received, with 95% of users with disabilities rating the system as "very easy to use." Lumina Tech has reported that customer support inquiries related to interface confusion have decreased by 70% since implementing our design.',
    mainImage: '/placeholder.svg?height=800&width=1200',
    gallery: ['/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800', '/placeholder.svg?height=600&width=800'],
    testimonial: {
      quote:
        "Sengiku Studio's approach to inclusive design has been revolutionary for our product. They showed us that accessibility isn't just a checklist but an opportunity to create a better experience for everyone. The result is a smart home system that truly lives up to its promise of making life simpler for all our users.",
      author: 'David Park',
      position: 'Product Director, Lumina Tech',
    },
    nextProject: 'petshop-app',
  },
};

export default function ProjectDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const projectId = params.id as string;

  const project = projectsData[projectId as keyof typeof projectsData];

  // Fallback if project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/projects">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    let ctx: gsap.Context;

    if (pageRef.current) {
      ctx = gsap.context(() => {
        // Animate page elements
        gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });

        // Animate gallery images
        gsap.utils.toArray('.gallery-item').forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.3 + i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              },
            }
          );
        });
      }, pageRef);

      return () => {
        if (ctx) {
          ctx.revert();
        }
      };
    }
  }, [project]);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to projects link */}
          <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="fade-in mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{project.category}</span>
            </div>
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="fade-in text-xl text-muted-foreground mb-8">{project.description}</p>

            <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Client</h3>
                <p className="text-base">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Year</h3>
                <p className="text-base">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Duration</h3>
                <p className="text-base">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Services</h3>
                <p className="text-base">{project.services.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="fade-in mb-16">
            <img src={project.mainImage || '/placeholder.svg'} alt={project.title} className="w-full rounded-lg" />
          </div>

          {/* Project Details */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="fade-in mb-12">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>

            <div className="fade-in mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-4">The Outcome</h2>
              <p className="text-muted-foreground">{project.outcome}</p>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h2 className="fade-in text-2xl font-bold mb-8 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="gallery-item overflow-hidden rounded-lg">
                  <img src={image || '/placeholder.svg'} alt={`${project.title} - Gallery ${index + 1}`} className="w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="fade-in max-w-3xl mx-auto mb-16 py-10 px-8 bg-muted dark:bg-zinc-900 rounded-lg">
              <blockquote className="text-xl italic mb-6">"{project.testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="/placeholder.svg?height=100&width=100" alt={project.testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">{project.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next Project */}
          <div className="fade-in max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-2">Next Project</p>
            <Link href={`/projects/${project.nextProject}`} className="text-2xl font-bold hover:text-primary transition-colors inline-flex items-center">
              {projectsData[project.nextProject as keyof typeof projectsData]?.title}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* CTA */}
          <div className="fade-in mt-16 md:mt-20 py-8 md:py-12 px-4 md:px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Interested in working with us?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6">Let's discuss how we can help bring your project to life with our development expertise.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="rounded-full px-6 md:px-8 w-full sm:w-auto">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <Button variant="outline" className="rounded-full px-6 md:px-8 w-full sm:w-auto mt-2 sm:mt-0">
                  View All Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
