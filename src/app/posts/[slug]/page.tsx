
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

/**
 * For static exports, we must tell Next.js which paths to pre-render
 * at build time for dynamic segments like [slug].
 */
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostDetails({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="mt-4 text-primary hover:underline">Return home</Link>
      </div>
    );
  }

  const image = PlaceHolderImages.find(img => img.id === post.imageId);

  return (
    <div className="fade-in space-y-8">
      <Link 
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary w-fit"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to home
      </Link>

      <article className="space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {post.category}</span>
            <span className="flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-3 w-3" /> {post.date}</span>
          </div>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
        </header>

        {image && (
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl ai-border ai-glow">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}

        <div 
          className="prose prose-invert prose-blue max-w-none 
          prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tight
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
          prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="border-t border-primary/10 pt-12 mt-20">
        <h3 className="text-lg font-bold mb-6">Read more</h3>
        <div className="grid gap-6">
          {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((other) => (
            <Link key={other.id} href={`/posts/${other.slug}`} className="group p-4 ai-border rounded-lg bg-card/20 hover:bg-card/40 transition-colors">
              <h4 className="font-bold group-hover:text-primary transition-colors">{other.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{other.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
