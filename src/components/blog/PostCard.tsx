
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PostCard({ post }: { post: BlogPost }) {
  const image = PlaceHolderImages.find(img => img.id === post.imageId);

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="ai-border overflow-hidden rounded-xl bg-card/40 backdrop-blur-sm transition-all duration-300 hover:bg-card/60 hover:ai-glow hover:-translate-y-1">
        {image && (
          <div className="relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        )}
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {post.date}
            </div>
          </div>
          <h2 className="mb-2 font-headline text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
            Read Post <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
