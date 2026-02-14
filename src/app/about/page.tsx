
"use client";

import Image from 'next/image';
import { Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { ABOUT_ME } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile');

  return (
    <div className="fade-in space-y-12">
      <section className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        {profileImage && (
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full ai-border ai-glow">
            <Image
              src={profileImage.imageUrl}
              alt={ABOUT_ME.name}
              fill
              className="object-cover"
              data-ai-hint={profileImage.imageHint}
            />
          </div>
        )}
        <div className="space-y-4">
          <div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground">
              {ABOUT_ME.name}
            </h1>
            <p className="text-xl font-medium text-primary">
              {ABOUT_ME.role}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/40 ai-border hover:bg-primary/20 transition-colors">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/40 ai-border hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/40 ai-border hover:bg-primary/20 transition-colors">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/40 ai-border hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Biographical Information
        </h2>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="leading-relaxed text-muted-foreground">
            {ABOUT_ME.bio}
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Currently, I am exploring how generative AI can be integrated into daily workflows without sacrificing human intent. I believe that the best technology is that which empowers us to be more of who we already are.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Core Values
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Simplicity', desc: 'Focusing on the essential to create clarity.' },
            { title: 'Innovation', desc: 'Pushing boundaries with AI-first thinking.' },
            { title: 'Humanity', desc: 'Putting people at the center of every pixel.' },
            { title: 'Curiosity', desc: 'A relentless drive to learn how things work.' }
          ].map((val) => (
            <div key={val.title} className="p-4 rounded-xl ai-border bg-card/20">
              <h3 className="font-bold text-foreground mb-1">{val.title}</h3>
              <p className="text-sm text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8 text-center">
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/80 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
          Get in touch <ExternalLink className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
