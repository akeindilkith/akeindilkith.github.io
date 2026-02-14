
"use client";

import { BLOG_POSTS } from '@/lib/blog-data';
import { PostCard } from '@/components/blog/PostCard';

export default function Home() {
  return (
    <div className="fade-in space-y-12">
      <header className="space-y-4">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Thoughts on <span className="text-primary italic">Inspiration</span> & <span className="text-primary italic">Intelligence</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-prose">
          Welcome to my digital ink. Here I document my journey through design, technology, and the evolving world of AI.
        </p>
      </header>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Latest Posts
          </h2>
          <div className="h-px flex-1 ml-6 bg-primary/10" />
        </div>
        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
