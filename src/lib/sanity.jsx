import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '3633hl3e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) return null;
  return builder.image(source).url();
};

export const categories = [
  'All',
  'Geopolitics',
  'Hidden History',
  'Philosophy',
  'Psychology',
  'Technology',
  'AI',
  'Crypto',
  'Documentaries',
  'Essays'
];

export async function fetchPosts() {
  const query = `*[_type == "post" && published == true] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    "category": category->name,
    publishedAt,
    "readTime": readTime
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug && published == true][0] {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    "category": category->name,
    publishedAt,
    "readTime": readTime
  }`;
  
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function fetchCategories() {
  const query = `*[_type == "category"] | order(name asc) {
    "id": _id,
    name,
    "slug": slug.current,
    "postCount": count(*[_type == "post" && category._ref == ^._id && published == true])
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchPostsByCategory(categorySlug) {
  const query = `*[_type == "post" && category->slug.current == $slug && published == true] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    "category": category->name,
    publishedAt,
    "readTime": readTime
  }`;
  
  try {
    return await client.fetch(query, { slug: categorySlug });
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function searchPosts(searchTerm) {
  const query = `*[_type == "post" && published == true && (
    title match $term ||
    excerpt match $term ||
    content match $term
  )] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    "category": category->name,
    publishedAt,
    "readTime": readTime
  }`;
  
  try {
    return await client.fetch(query, { term: `${searchTerm}*` });
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

export default client;
