'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Lazy-load GSAP on client to avoid SSR issues
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// This would typically come from a database or API
const blogPostsData = {
  'building-positive-office': {
    title: 'Building a Positive Office Environment for Designers',
    excerpt:
      "A well-designed workspace can fuel creativity, productivity, and teamwork in the design industry. This blog post explores how to create an inspiring office environment that meets designers' unique needs.",
    date: 'Nov 4, 2024',
    author: 'Aiko Tanaka',
    authorRole: 'Creative Director',
    readTime: '5 min read',
    category: 'Design',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>The environment in which designers work plays a crucial role in their creativity, productivity, and overall job satisfaction. As the design industry continues to evolve, so too does our understanding of what makes an effective workspace for creative professionals. This article explores the key elements of creating a positive office environment specifically tailored to the needs of designers.</p>
      
      <h2>The Importance of Physical Space</h2>
      <p>The physical layout of an office significantly impacts how designers work and collaborate. Open floor plans have become popular in creative industries, but they're not without drawbacks. While they facilitate communication and spontaneous collaboration, they can also lead to distractions and reduced focus.</p>
      
      <p>A balanced approach might include:</p>
      <ul>
        <li>Dedicated quiet zones for focused work</li>
        <li>Collaborative spaces for team discussions and brainstorming</li>
        <li>Flexible workstations that allow for both standing and sitting</li>
        <li>Natural lighting whenever possible</li>
        <li>Proper acoustic treatment to manage noise levels</li>
      </ul>
      
      <h2>Inspiring Visual Elements</h2>
      <p>Designers are visual thinkers, and their surroundings should reflect and stimulate this aspect of their work. Consider incorporating:</p>
      <ul>
        <li>Rotating displays of design work, both from team members and external sources</li>
        <li>Writable surfaces for spontaneous ideation</li>
        <li>Carefully chosen color schemes that energize without overwhelming</li>
        <li>Plants and natural elements to improve air quality and wellbeing</li>
        <li>Thoughtfully curated art that inspires without dictating aesthetic direction</li>
      </ul>
      
      <h2>Technology and Tools</h2>
      <p>Designers need access to appropriate technology and tools to perform at their best. This includes:</p>
      <ul>
        <li>High-quality monitors with accurate color representation</li>
        <li>Ergonomic input devices like graphics tablets and precision mice</li>
        <li>Sufficient processing power for resource-intensive design software</li>
        <li>Reliable internet connectivity for research and cloud-based tools</li>
        <li>Digital asset management systems that facilitate organization and collaboration</li>
      </ul>
      
      <h2>Cultural Considerations</h2>
      <p>Beyond the physical environment, the culture of the workplace significantly impacts designers' experience. Key cultural elements include:</p>
      <ul>
        <li>Psychological safety that allows for creative risk-taking</li>
        <li>Regular feedback mechanisms that are constructive rather than critical</li>
        <li>Recognition of both process and outcomes</li>
        <li>Opportunities for professional development and skill expansion</li>
        <li>Work-life balance that acknowledges the cyclical nature of creative energy</li>
      </ul>
      
      <h2>Case Study: Studio Redesign</h2>
      <p>When our own studio underwent a redesign last year, we implemented many of these principles. The results were striking: team members reported a 27% increase in job satisfaction, and we saw a 15% reduction in project turnaround times. The most appreciated changes were the addition of dedicated quiet spaces and the implementation of a flexible schedule policy that allowed team members to work during their most productive hours.</p>
      
      <h2>Conclusion</h2>
      <p>Creating an optimal environment for designers requires attention to both physical and cultural elements. By thoughtfully addressing workspace design, available tools, and team dynamics, organizations can foster conditions where creativity flourishes and designers can do their best work. Remember that the perfect environment will vary depending on your team's specific needs and work styles—regular check-ins and willingness to adapt are essential to maintaining a positive office environment over time.</p>
    `,
    tags: ['Workspace Design', 'Creativity', 'Productivity', 'Team Culture'],
    relatedPosts: ['crafting-experiences', 'managing-creative-teams', 'effective-online-meetings'],
  },
  'crafting-experiences': {
    title: 'Crafting Experiences that Keep Visitors Coming Back',
    excerpt:
      "User experience (UX) is at the heart of every successful design project. This article covers the principles of user-centric design, from research to prototyping, and explains how prioritizing the user's journey leads to more engaging digital products.",
    date: 'Nov 4, 2024',
    author: 'Ryo Nakamura',
    authorRole: 'Lead UI/UX Designer',
    readTime: '7 min read',
    category: 'UX/UI',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>In today's digital landscape, creating a website or application that merely looks good is no longer enough. Users expect intuitive, engaging, and memorable experiences that solve their problems efficiently. This article explores how to craft digital experiences that not only attract visitors but keep them coming back.</p>
      
      <h2>Understanding Your Users</h2>
      <p>The foundation of any successful user experience is a deep understanding of your target audience. This involves:</p>
      <ul>
        <li>Conducting user research through interviews, surveys, and analytics</li>
        <li>Creating detailed user personas that represent your core audience segments</li>
        <li>Mapping user journeys to understand how people interact with your product</li>
        <li>Identifying pain points and opportunities in the current experience</li>
      </ul>
      
      <h2>Designing for Emotional Connection</h2>
      <p>Beyond usability, truly memorable experiences create an emotional connection with users. Consider how your design can:</p>
      <ul>
        <li>Reflect your brand's personality through visual design, copy, and interactions</li>
        <li>Surprise and delight users with thoughtful micro-interactions</li>
        <li>Acknowledge and respond to user accomplishments</li>
        <li>Create moments of joy throughout the user journey</li>
      </ul>
      
      <h2>The Power of Storytelling</h2>
      <p>Humans are naturally drawn to stories. Incorporating narrative elements into your digital experience can significantly increase engagement:</p>
      <ul>
        <li>Structure your user flow as a journey with a clear beginning, middle, and end</li>
        <li>Use visual hierarchy to guide users through your content in a meaningful sequence</li>
        <li>Create a consistent narrative that aligns with your brand values</li>
        <li>Use storytelling techniques to make complex information more digestible and memorable</li>
      </ul>
      
      <h2>Balancing Innovation and Familiarity</h2>
      <p>While innovative design can set you apart, it's important to balance novelty with familiarity:</p>
      <ul>
        <li>Follow established design patterns for core functionality</li>
        <li>Introduce innovative elements gradually and purposefully</li>
        <li>Test new ideas thoroughly to ensure they enhance rather than hinder the experience</li>
        <li>Consider progressive disclosure to introduce advanced features as users become more familiar with your product</li>
      </ul>
      
      <h2>Continuous Improvement</h2>
      <p>Great user experiences evolve over time based on feedback and changing user needs:</p>
      <ul>
        <li>Implement analytics to track user behavior and identify areas for improvement</li>
        <li>Conduct regular usability testing to validate design decisions</li>
        <li>Create feedback loops that allow users to contribute to the evolution of your product</li>
        <li>Stay current with evolving design trends and user expectations</li>
      </ul>
      
      <h2>Case Study: E-commerce Redesign</h2>
      <p>When we redesigned an e-commerce platform last year, we focused heavily on creating an emotional connection with users. By implementing personalized recommendations, a streamlined checkout process, and thoughtful post-purchase communications, we saw a 40% increase in return visitors and a 25% increase in average order value. The most significant improvement came from redesigning the product discovery experience to tell a cohesive story about how products fit into customers' lives.</p>
      
      <h2>Conclusion</h2>
      <p>Crafting experiences that keep visitors coming back requires a thoughtful blend of user research, emotional design, storytelling, and continuous improvement. By putting users at the center of your design process and focusing on creating meaningful connections, you can build digital products that not only meet functional needs but also create lasting relationships with your audience. Remember that great user experience is never "finished"—it's an ongoing conversation between your brand and your users.</p>
    `,
    tags: ['User Experience', 'UX Design', 'User Research', 'Digital Design'],
    relatedPosts: ['building-positive-office', 'managing-creative-teams', 'typography-fundamentals'],
  },
  'managing-creative-teams': {
    title: 'Managing Creative Teams in the Design Industry',
    excerpt:
      'Managing a team of designers requires a unique blend of creativity, leadership, and strategy. This post delves into effective ways to inspire, motivate, and guide a design team while balancing deadlines, client demands, and creative excellence.',
    date: 'Nov 4, 2024',
    author: 'Takashi Ito',
    authorRole: 'Project Manager',
    readTime: '6 min read',
    category: 'Design',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>Leading a team of creative professionals presents unique challenges and opportunities. Design teams thrive under different conditions than other departments, requiring leadership approaches that balance structure with creative freedom. This article explores strategies for effectively managing creative teams in the design industry.</p>
      
      <h2>Understanding Creative Professionals</h2>
      <p>Designers and other creative professionals often have distinct work preferences and motivations:</p>
      <ul>
        <li>They value autonomy and the space to explore ideas</li>
        <li>They're often intrinsically motivated by the quality of their work</li>
        <li>They may have strong emotional connections to their creations</li>
        <li>They typically respond better to inspiration than directive management</li>
        <li>They need both collaboration and uninterrupted focus time</li>
      </ul>
      
      <h2>Creating the Right Environment</h2>
      <p>The work environment significantly impacts creative performance:</p>
      <ul>
        <li>Establish psychological safety where team members feel comfortable sharing ideas</li>
        <li>Balance collaborative spaces with quiet areas for focused work</li>
        <li>Provide inspiration through access to design resources, workshops, and creative stimuli</li>
        <li>Minimize unnecessary administrative burdens that distract from creative work</li>
        <li>Create rituals that celebrate creativity and design thinking</li>
      </ul>
      
      <h2>Effective Communication Strategies</h2>
      <p>Communication with creative teams requires thoughtfulness:</p>
      <ul>
        <li>Frame feedback constructively, focusing on objectives rather than personal preferences</li>
        <li>Use visual communication when possible—mood boards, sketches, and references</li>
        <li>Be clear about constraints while leaving room for creative solutions</li>
        <li>Practice active listening to understand the reasoning behind design decisions</li>
        <li>Create regular opportunities for both structured and informal communication</li>
      </ul>
      
      <h2>Balancing Creative Freedom with Business Needs</h2>
      <p>One of the greatest challenges in managing creative teams is balancing artistic expression with practical requirements:</p>
      <ul>
        <li>Clearly communicate business objectives and constraints at the project outset</li>
        <li>Involve designers in strategic discussions so they understand the "why" behind requirements</li>
        <li>Create processes that allow for exploration within defined parameters</li>
        <li>Establish evaluation criteria that balance creativity with effectiveness</li>
        <li>Advocate for the team's creative vision when communicating with clients or other departments</li>
      </ul>
      
      <h2>Professional Development for Creative Teams</h2>
      <p>Supporting growth is essential for retaining creative talent:</p>
      <ul>
        <li>Encourage continuous learning through courses, conferences, and skill-sharing</li>
        <li>Provide opportunities to work on diverse projects that stretch capabilities</li>
        <li>Create mentorship programs that pair junior and senior creatives</li>
        <li>Recognize that career paths for creatives may not always be linear</li>
        <li>Support side projects that allow for experimentation and passion pursuits</li>
      </ul>
      
      <h2>Case Study: Restructuring Our Design Department</h2>
      <p>When we restructured our design department last year, we moved from a traditional hierarchy to a more flexible pod system. Each pod consists of complementary skill sets (UI, UX, illustration, etc.) and works together on client projects. We implemented "no-meeting Wednesdays" to ensure uninterrupted creative time and introduced monthly design critiques open to the entire company. The results have been remarkable: employee satisfaction increased by 35%, and our client satisfaction scores improved by 28%.</p>
      
      <h2>Conclusion</h2>
      <p>Managing creative teams effectively requires a delicate balance of structure and freedom, clear communication, and genuine appreciation for the creative process. By creating an environment where designers feel both supported and challenged, leaders can unlock their team's full creative potential while meeting business objectives. Remember that great creative leadership is often more about removing obstacles and providing resources than directing every decision—trust your team's expertise and give them the conditions they need to excel.</p>
    `,
    tags: ['Leadership', 'Team Management', 'Creative Process', 'Design Teams'],
    relatedPosts: ['building-positive-office', 'crafting-experiences', 'effective-online-meetings'],
  },
  'effective-online-meetings': {
    title: 'Tips for More Effective Online Meetings',
    excerpt: "In today's digital-first world, online meetings are more important than ever. Learn how to make your virtual collaborations more productive and engaging with these practical tips.",
    date: 'Nov 4, 2024',
    author: 'Yuki Sato',
    authorRole: 'Communication Specialist',
    readTime: '4 min read',
    category: 'Design',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>As remote work becomes increasingly common, the ability to conduct effective online meetings has become a crucial skill for professionals across all industries. This article provides practical strategies to make your virtual meetings more productive, engaging, and successful.</p>
      
      <h2>Preparation is Key</h2>
      <p>Successful online meetings start long before the actual session:</p>
      <ul>
        <li>Set clear objectives and create a focused agenda</li>
        <li>Share materials and pre-reading at least 24 hours in advance</li>
        <li>Test your technology and internet connection beforehand</li>
        <li>Choose the right platform for your meeting type and audience size</li>
        <li>Set up a backup plan in case of technical difficulties</li>
      </ul>
      
      <h2>Creating an Engaging Environment</h2>
      <p>Keep participants engaged and focused throughout the meeting:</p>
      <ul>
        <li>Start with a brief check-in to build connection</li>
        <li>Use visual aids and screen sharing to maintain interest</li>
        <li>Incorporate interactive elements like polls or breakout rooms</li>
        <li>Encourage camera use when appropriate to maintain human connection</li>
        <li>Take regular breaks for longer sessions</li>
      </ul>
      
      <h2>Effective Communication Techniques</h2>
      <p>Clear communication is even more important in virtual settings:</p>
      <ul>
        <li>Speak clearly and at a measured pace</li>
        <li>Use hand signals or chat features to indicate when you want to speak</li>
        <li>Summarize key points and decisions as you go</li>
        <li>Ask for confirmation to ensure understanding</li>
        <li>Use the mute function appropriately to reduce background noise</li>
      </ul>
      
      <h2>Managing Meeting Flow</h2>
      <p>Keep your meetings on track and productive:</p>
      <ul>
        <li>Start and end on time to respect participants' schedules</li>
        <li>Assign a timekeeper to monitor the agenda</li>
        <li>Use the parking lot technique for off-topic discussions</li>
        <li>End with clear action items and next steps</li>
        <li>Follow up with meeting notes and action items within 24 hours</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective online meetings require thoughtful preparation, clear communication, and active engagement strategies. By implementing these practices, you can create virtual meetings that are not only productive but also enjoyable for all participants. Remember that the goal is to maintain the human connection and collaborative spirit that makes in-person meetings valuable, even in a digital environment.</p>
    `,
    tags: ['Remote Work', 'Communication', 'Productivity', 'Virtual Collaboration'],
    relatedPosts: ['building-positive-office', 'managing-creative-teams', 'crafting-experiences'],
  },
  'color-theory-design': {
    title: 'Understanding Color Theory in Modern Design',
    excerpt: "Color is one of the most powerful tools in a designer's toolkit. This comprehensive guide explores color theory principles and how to apply them effectively in your design projects.",
    date: 'Oct 28, 2024',
    author: 'Mika Yamamoto',
    authorRole: 'Visual Designer',
    readTime: '8 min read',
    category: 'Design',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>Color theory is fundamental to creating effective and visually appealing designs. Understanding how colors work together, their psychological impact, and their cultural significance can transform your design work from good to exceptional.</p>
      
      <h2>The Color Wheel and Basic Principles</h2>
      <p>The color wheel is the foundation of color theory:</p>
      <ul>
        <li>Primary colors: Red, blue, and yellow</li>
        <li>Secondary colors: Green, orange, and purple</li>
        <li>Tertiary colors: Combinations of primary and secondary colors</li>
        <li>Complementary colors: Colors opposite each other on the wheel</li>
        <li>Analogous colors: Colors next to each other on the wheel</li>
      </ul>
      
      <h2>Color Psychology</h2>
      <p>Different colors evoke different emotional responses:</p>
      <ul>
        <li>Red: Energy, passion, urgency</li>
        <li>Blue: Trust, stability, professionalism</li>
        <li>Green: Growth, nature, harmony</li>
        <li>Yellow: Optimism, creativity, attention</li>
        <li>Purple: Luxury, creativity, mystery</li>
        <li>Orange: Enthusiasm, adventure, confidence</li>
      </ul>
      
      <h2>Practical Application</h2>
      <p>Apply color theory effectively in your designs:</p>
      <ul>
        <li>Use complementary colors for high contrast and visual impact</li>
        <li>Create harmony with analogous color schemes</li>
        <li>Consider cultural color associations for global audiences</li>
        <li>Ensure sufficient contrast for accessibility</li>
        <li>Use color to guide user attention and create hierarchy</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering color theory takes practice and experimentation. Start with the basics, understand your audience, and don't be afraid to break the rules once you understand them. The most successful designs often use color thoughtfully and intentionally to enhance both aesthetics and functionality.</p>
    `,
    tags: ['Color Theory', 'Visual Design', 'Design Principles', 'Psychology'],
    relatedPosts: ['typography-fundamentals', 'crafting-experiences', 'branding-small-business'],
  },
  'typography-fundamentals': {
    title: 'Typography Fundamentals Every Designer Should Know',
    excerpt: 'Typography can make or break your design. Learn the essential principles of typography that will elevate your design work and improve readability and user experience.',
    date: 'Oct 21, 2024',
    author: 'Kenji Tanaka',
    authorRole: 'Typography Specialist',
    readTime: '6 min read',
    category: 'Design',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>Typography is more than just choosing fonts—it's about creating clear, readable, and visually appealing text that enhances your design's message and user experience.</p>
      
      <h2>Typeface Selection</h2>
      <p>Choose typefaces that align with your design goals:</p>
      <ul>
        <li>Serif fonts: Traditional, trustworthy, formal</li>
        <li>Sans-serif fonts: Modern, clean, approachable</li>
        <li>Display fonts: Creative, attention-grabbing, decorative</li>
        <li>Monospace fonts: Technical, code-like, structured</li>
      </ul>
      
      <h2>Hierarchy and Scale</h2>
      <p>Create clear visual hierarchy through typography:</p>
      <ul>
        <li>Use size to indicate importance</li>
        <li>Establish consistent scale relationships</li>
        <li>Limit your typeface choices to 2-3 per project</li>
        <li>Use weight and style variations for emphasis</li>
      </ul>
      
      <h2>Readability and Legibility</h2>
      <p>Ensure your text is easy to read:</p>
      <ul>
        <li>Choose appropriate line lengths (45-75 characters)</li>
        <li>Set comfortable line spacing (1.4-1.6 for body text)</li>
        <li>Ensure sufficient contrast with backgrounds</li>
        <li>Consider reading distance and device context</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Good typography is invisible—it helps readers focus on the content rather than the presentation. By mastering these fundamentals, you'll create designs that are both beautiful and functional.</p>
    `,
    tags: ['Typography', 'Design Principles', 'Readability', 'Visual Hierarchy'],
    relatedPosts: ['color-theory-design', 'crafting-experiences', 'branding-small-business'],
  },
  'branding-small-business': {
    title: 'Effective Branding Strategies for Small Businesses',
    excerpt: 'Small businesses face unique challenges when it comes to branding. Discover practical strategies to create a memorable brand identity without breaking the bank.',
    date: 'Oct 14, 2024',
    author: 'Sakura Kimura',
    authorRole: 'Brand Strategist',
    readTime: '5 min read',
    category: 'Branding',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>Branding is crucial for small businesses to stand out in competitive markets. This guide provides practical strategies to create a strong brand identity on a budget.</p>
      
      <h2>Understanding Your Brand</h2>
      <p>Start by defining your brand foundation:</p>
      <ul>
        <li>Identify your unique value proposition</li>
        <li>Define your target audience clearly</li>
        <li>Establish your brand personality and voice</li>
        <li>Create a compelling brand story</li>
      </ul>
      
      <h2>Visual Identity on a Budget</h2>
      <p>Create professional visuals without high costs:</p>
      <ul>
        <li>Use online logo makers and design tools</li>
        <li>Choose a simple, memorable logo design</li>
        <li>Develop a consistent color palette</li>
        <li>Create templates for marketing materials</li>
      </ul>
      
      <h2>Digital Presence</h2>
      <p>Build your brand online effectively:</p>
      <ul>
        <li>Maintain consistent messaging across platforms</li>
        <li>Use social media to showcase your personality</li>
        <li>Create valuable content for your audience</li>
        <li>Engage with customers authentically</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective branding for small businesses is about consistency, authenticity, and understanding your audience. Focus on building genuine connections rather than competing with larger budgets.</p>
    `,
    tags: ['Branding', 'Small Business', 'Marketing', 'Brand Identity'],
    relatedPosts: ['color-theory-design', 'typography-fundamentals', 'illustration-trends'],
  },
  'illustration-trends': {
    title: 'Current Trends in Digital Illustration',
    excerpt: 'The world of digital illustration is constantly evolving. Stay ahead of the curve with this overview of the latest trends and techniques in the field.',
    date: 'Oct 7, 2024',
    author: 'Hiroshi Watanabe',
    authorRole: 'Digital Artist',
    readTime: '7 min read',
    category: 'Illustration',
    image: '/placeholder.svg?height=800&width=1200',
    content: `
      <h2>Introduction</h2>
      <p>Digital illustration continues to evolve with new tools, techniques, and styles emerging regularly. This article explores current trends that are shaping the industry.</p>
      
      <h2>Emerging Styles</h2>
      <p>Popular illustration styles in 2024:</p>
      <ul>
        <li>3D illustration with depth and dimension</li>
        <li>Isometric designs for technical and business contexts</li>
        <li>Hand-drawn digital styles with organic textures</li>
        <li>Minimalist line art with bold colors</li>
        <li>Mixed media combining digital and traditional techniques</li>
      </ul>
      
      <h2>Technology and Tools</h2>
      <p>New tools are expanding creative possibilities:</p>
      <ul>
        <li>AI-assisted illustration tools</li>
        <li>Advanced brush systems in digital painting software</li>
        <li>Real-time collaboration features</li>
        <li>Improved tablet and stylus technology</li>
        <li>Cloud-based workflow solutions</li>
      </ul>
      
      <h2>Industry Applications</h2>
      <p>Illustration is finding new applications:</p>
      <ul>
        <li>Enhanced user interface design</li>
        <li>Educational and instructional content</li>
        <li>Brand storytelling and marketing</li>
        <li>Product visualization and packaging</li>
        <li>Editorial and publishing</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of digital illustration is bright, with new technologies and styles constantly emerging. Stay curious, experiment with new tools, and develop your unique artistic voice.</p>
    `,
    tags: ['Digital Illustration', 'Art Trends', 'Creative Tools', 'Visual Design'],
    relatedPosts: ['branding-small-business', 'color-theory-design', 'crafting-experiences'],
  },
};

export default function BlogDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const postId = params.id as string;

  const post = blogPostsData[postId as keyof typeof blogPostsData];

  // Fallback if post doesn't exist
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blogs">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      // Animate page elements
      if (!isMounted) return;
      ctx = gsap.context(() => {
        gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });

        // Animate related posts
        gsap.utils.toArray('.related-post').forEach((item: any, i) => {
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
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  // Get related posts data
  const relatedPosts = post.relatedPosts
    .map((id) => {
      const relatedPost = blogPostsData[id as keyof typeof blogPostsData];
      return relatedPost
        ? {
            id,
            title: relatedPost.title,
            excerpt: relatedPost.excerpt,
            image: relatedPost.image,
            date: relatedPost.date,
            readTime: relatedPost.readTime,
          }
        : null;
    })
    .filter(Boolean);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to blogs link */}
          <Link href="/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Link>

          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="fade-in mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">{post.category}</span>
            </div>
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{post.title}</h1>

            {/* Author and Meta Info */}
            <div className="fade-in flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="/placeholder.svg?height=200&width=200" alt={post.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="fade-in max-w-5xl mx-auto mb-16">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
              <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="fade-in">
                <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                <button className="p-2 rounded-full hover:bg-muted transition-colors border border-border/50">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Author Bio */}
              <div className="fade-in panel p-6">
                <h3 className="text-lg font-semibold mb-4">About the author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/placeholder.svg?height=200&width=200" alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{post.author}</h4>
                    <p className="text-sm text-primary mb-2">{post.authorRole}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A passionate designer with over a decade of experience in creating meaningful digital experiences. Specializing in user-centered design approaches that balance aesthetics with
                      functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="fade-in panel p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest articles and insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Enter your email" className="h-10" />
                  <Button className="w-full h-10">Subscribe</Button>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-7xl mx-auto mt-20">
              <h2 className="fade-in text-3xl font-bold mb-10 text-center">You might also like</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(
                  (relatedPost, index) =>
                    relatedPost && (
                      <Link href={`/blogs/${relatedPost.id}`} key={index} className="related-post panel overflow-hidden group">
                        <div className="aspect-[16/10] w-full overflow-hidden">
                          <img src={relatedPost.image || '/placeholder.svg'} alt={relatedPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-6 space-y-3">
                          <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <span>{relatedPost.date}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">{relatedPost.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </Link>
                    )
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
