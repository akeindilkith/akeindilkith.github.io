
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  imageId: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-ai-interfaces',
    title: 'The Future of AI Interfaces',
    description: 'Exploring how generative models are reshaping user experience through conversational and adaptive UI.',
    content: `
      <p>Generative AI is not just a tool; it's a paradigm shift in how we interact with software. Traditional interfaces were static, built on rigid hierarchies of buttons and menus. The AI-driven interface of the future is fluid, contextual, and deeply personalized.</p>
      <p>In this post, we'll dive into how "Large Action Models" are bridging the gap between intention and execution, making the interface itself almost invisible.</p>
      <h3>The Shift to Intent-Based Design</h3>
      <p>Imagine a software that doesn't wait for you to find the right tool, but instead surfaces the exact functionality you need based on the conversation you're having. This is the promise of intent-based design.</p>
      <blockquote>"Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs</blockquote>
      <p>When AI understands the 'why' behind a user's action, it can optimize the 'how' in real-time. We are moving from 'point-and-click' to 'describe-and-receive'.</p>
    `,
    date: 'Oct 24, 2024',
    category: 'Technology',
    imageId: 'blog-1'
  },
  {
    id: '2',
    slug: 'minimalism-in-digital-spaces',
    title: 'Minimalism in Digital Spaces',
    description: 'Why less is more in an era of information overload and constant connectivity.',
    content: `
      <p>Minimalism is often misunderstood as just an aesthetic choice. In reality, it's a strategic approach to information architecture. By removing the non-essential, we amplify the essential.</p>
      <p>Digital fatigue is at an all-time high. Every notification, every bright color, and every complex layout competes for our most valuable resource: attention.</p>
      <h3>Cognitive Load and Design</h3>
      <p>When a user lands on a page, they have a finite amount of cognitive energy. A cluttered layout forces them to spend that energy just navigating, rather than consuming the content. Minimalist design protects the user's focus.</p>
    `,
    date: 'Nov 12, 2024',
    category: 'Design',
    imageId: 'blog-2'
  },
  {
    id: '3',
    slug: 'beyond-the-event-horizon',
    title: 'Beyond the Event Horizon',
    description: 'A deep dive into the mysteries of black holes and what they teach us about the universe.',
    content: `
      <p>Black holes are the universe's ultimate mystery. Regions of space where gravity is so strong that nothing, not even light, can escape. But beyond the physics, they represent the boundaries of human knowledge.</p>
      <p>In recent years, our understanding of these celestial giants has evolved from theoretical curiosities to observable realities, thanks to projects like the Event Horizon Telescope.</p>
    `,
    date: 'Dec 05, 2024',
    category: 'Science',
    imageId: 'blog-3'
  }
];

export const ABOUT_ME = {
  name: 'Akein Dikith',
  role: 'Creative Designer & AI Enthusiast',
  bio: `I am Akein Dikith, a designer and thinker obsessed with the intersection of human creativity and artificial intelligence. My work focuses on building digital experiences that feel intuitive, futuristic, and deeply human. With a background in minimalist architecture and digital product design, I strive to create spaces that inspire clarity and wonder.`,
  socials: [
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'GitHub', url: '#' }
  ]
};
