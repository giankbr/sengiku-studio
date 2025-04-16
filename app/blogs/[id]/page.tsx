"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { useParams } from "next/navigation"
import { Input } from "@/components/ui/input"

// This would typically come from a database or API
const blogPostsData = {
  "building-positive-office": {
    title: "Building a Positive Office Environment for Designers",
    excerpt:
      "A well-designed workspace can fuel creativity, productivity, and teamwork in the design industry. This blog post explores how to create an inspiring office environment that meets designers' unique needs.",
    date: "Nov 4, 2024",
    author: "Aiko Tanaka",
    authorRole: "Creative Director",
    readTime: "5 min read",
    category: "Design",
    image: "/placeholder.svg?height=800&width=1200",
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
    tags: ["Workspace Design", "Creativity", "Productivity", "Team Culture"],
    relatedPosts: ["crafting-experiences", "managing-creative-teams", "effective-online-meetings"],
  },
  "crafting-experiences": {
    title: "Crafting Experiences that Keep Visitors Coming Back",
    excerpt:
      "User experience (UX) is at the heart of every successful design project. This article covers the principles of user-centric design, from research to prototyping, and explains how prioritizing the user's journey leads to more engaging digital products.",
    date: "Nov 4, 2024",
    author: "Ryo Nakamura",
    authorRole: "Lead UI/UX Designer",
    readTime: "7 min read",
    category: "UX/UI",
    image: "/placeholder.svg?height=800&width=1200",
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
    tags: ["User Experience", "UX Design", "User Research", "Digital Design"],
    relatedPosts: ["building-positive-office", "managing-creative-teams", "typography-fundamentals"],
  },
  "managing-creative-teams": {
    title: "Managing Creative Teams in the Design Industry",
    excerpt:
      "Managing a team of designers requires a unique blend of creativity, leadership, and strategy. This post delves into effective ways to inspire, motivate, and guide a design team while balancing deadlines, client demands, and creative excellence.",
    date: "Nov 4, 2024",
    author: "Takashi Ito",
    authorRole: "Project Manager",
    readTime: "6 min read",
    category: "Design",
    image: "/placeholder.svg?height=800&width=1200",
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
    tags: ["Leadership", "Team Management", "Creative Process", "Design Teams"],
    relatedPosts: ["building-positive-office", "crafting-experiences", "effective-online-meetings"],
  },
}

export default function BlogDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const postId = params.id as string

  const post = blogPostsData[postId as keyof typeof blogPostsData]

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
    )
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      )

      // Animate related posts
      gsap.utils.toArray(".related-post").forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  // Get related posts data
  const relatedPosts = post.relatedPosts
    .map((id) => {
      const relatedPost = blogPostsData[id as keyof typeof blogPostsData]
      return relatedPost
        ? {
            id,
            title: relatedPost.title,
            excerpt: relatedPost.excerpt,
            image: relatedPost.image,
            date: relatedPost.date,
            readTime: relatedPost.readTime,
          }
        : null
    })
    .filter(Boolean)

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back to blogs link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
          </Link>

          {/* Blog Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="fade-in mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="fade-in text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="fade-in flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>
                  {post.author}, {post.authorRole}
                </span>
              </div>
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

          {/* Featured Image */}
          <div className="fade-in max-w-4xl mx-auto mb-10">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full rounded-lg" />
          </div>

          {/* Blog Content */}
          <div className="fade-in max-w-3xl mx-auto mb-16">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium">Share this article:</span>
              <button className="p-2 rounded-full hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="fade-in max-w-3xl mx-auto mb-16 p-6 bg-muted dark:bg-zinc-900 rounded-lg flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{post.author}</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{post.author}</h3>
              <p className="text-sm text-primary mb-2">{post.authorRole}</p>
              <p className="text-sm text-muted-foreground">
                A passionate designer with over a decade of experience in creating meaningful digital experiences.
                Specializing in user-centered design approaches that balance aesthetics with functionality.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="fade-in text-2xl font-bold mb-8">You might also like</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link href={`/blogs/${relatedPost.id}`} key={index} className="related-post group">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter */}
          <div className="fade-in max-w-3xl mx-auto py-10 px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to get more insights on design, creativity, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
