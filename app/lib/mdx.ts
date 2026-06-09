import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/blog');

export type BlogPostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  canonicalUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  content: string;
  frontmatter: BlogPostFrontmatter;
};

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    content,
    frontmatter: data as BlogPostFrontmatter,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
  return posts;
}
