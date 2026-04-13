import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { JsonLd } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 400, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-navy">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: new Date(post.date).toISOString(),
          dateModified: new Date(post.date).toISOString(),
          author: {
            "@type": "Organization",
            name: "Sri Lakshmi Knit Exports",
            url: "https://www.srilakshmiknit.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Sri Lakshmi Knit Exports",
            url: "https://www.srilakshmiknit.com",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.srilakshmiknit.com/blog/${post.slug}`,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.srilakshmiknit.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://www.srilakshmiknit.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `https://www.srilakshmiknit.com/blog/${post.slug}`,
            },
          ],
        }}
      />

      <article className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-text-secondary hover:text-navy transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm font-body text-text-secondary mb-4">
              <span className="inline-block px-3 py-1 bg-gold/20 text-navy font-semibold text-xs rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="font-body text-lg text-text-secondary">
              By {post.author}
            </p>
          </div>

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none font-body text-text-primary prose-headings:font-heading prose-headings:text-navy prose-a:text-gold-dark prose-strong:text-navy prose-strong:font-semibold">
            {post.content.split("\n\n").map((block, index) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                    {parseInlineMarkdown(block.replace("## ", ""))}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-8 mb-3">
                    {parseInlineMarkdown(block.replace("### ", ""))}
                  </h3>
                );
              }
              if (block.startsWith("| ")) {
                const rows = block.split("\n").filter((r) => !r.startsWith("|-"));
                const headers = rows[0]
                  ?.split("|")
                  .filter(Boolean)
                  .map((h) => h.trim());
                const dataRows = rows.slice(1);
                return (
                  <div key={index} className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          {headers?.map((h, i) => (
                            <th
                              key={i}
                              className="border border-gray-200 px-4 py-2 text-left font-semibold"
                            >
                              {parseInlineMarkdown(h)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => (
                          <tr key={ri}>
                            {row
                              .split("|")
                              .filter(Boolean)
                              .map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="border border-gray-200 px-4 py-2"
                                >
                                  {parseInlineMarkdown(cell.trim())}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").map((l) => l.replace(/^- /, ""));
                return (
                  <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{parseInlineMarkdown(item)}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("1. ")) {
                const items = block
                  .split("\n")
                  .map((l) => l.replace(/^\d+\.\s/, ""));
                return (
                  <ol key={index} className="list-decimal pl-6 my-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{parseInlineMarkdown(item)}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="my-4 leading-relaxed font-normal">
                  {parseInlineMarkdown(block)}
                </p>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-navy/5 rounded-xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                Ready to source premium knitwear?
              </h3>
              <p className="font-body text-text-secondary mb-6">
                Get a custom quote from our team. MOQ starts at 500 pieces.
              </p>
              <Link
                href="/quote"
                className="inline-block px-8 py-3 bg-gold text-navy font-body font-semibold rounded-lg hover:bg-gold-dark transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
