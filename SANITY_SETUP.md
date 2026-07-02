# Sanity CMS Integration Guide

This guide explains how to set up and configure Sanity CMS for the Jaks369 Tales blog.

## Prerequisites

- Sanity account (https://www.sanity.io)
- Sanity CLI installed: `npm install -g @sanity/cli`
- Your Sanity project ID and dataset name

## Configuration

### 1. Environment Variables

The blog uses the following environment variables for Sanity configuration:

```
REACT_APP_SANITY_PROJECT_ID=3633hl3e
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_API_VERSION=2024-01-01
REACT_APP_SANITY_USE_CDN=true
```

These are already configured in `.env.local` for local development.

### 2. Sanity Studio Setup

To edit content in Sanity Studio:

1. Go to your Sanity project dashboard: https://manage.sanity.io
2. Create the following document types in your schema:

#### Post Schema
```javascript
{
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'readTime',
      title: 'Reading Time (minutes)',
      type: 'number'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false
    }
  ]
}
```

#### Category Schema
```javascript
{
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: Rule => Rule.required()
    }
  ]
}
```

### 3. Create Categories

In Sanity Studio, create these categories:
- Geopolitics
- Hidden History
- Philosophy
- Psychology
- Technology
- AI
- Crypto
- Documentaries
- Essays

### 4. Publish Blog Posts

1. Create a new Post document
2. Fill in all fields (title, slug, excerpt, content, category, etc.)
3. Set `published` to `true`
4. Click "Publish"

The post will immediately appear on your blog!

## Vercel Deployment

### 1. Add Environment Variables to Vercel

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables for **Production**:

```
REACT_APP_SANITY_PROJECT_ID=3633hl3e
REACT_APP_SANITY_DATASET=production
REACT_APP_SANITY_API_VERSION=2024-01-01
REACT_APP_SANITY_USE_CDN=true
```

### 2. Redeploy

After adding environment variables:
1. Go to **Deployments**
2. Click the latest deployment
3. Click **Redeploy** to apply the new variables

## Querying Data

The blog uses these Sanity queries:

### Fetch All Posts
```javascript
import { fetchPosts } from './lib/sanity.jsx';
const posts = await fetchPosts();
```

### Fetch Post by Slug
```javascript
import { fetchPostBySlug } from './lib/sanity.jsx';
const post = await fetchPostBySlug('my-post-slug');
```

### Fetch Categories
```javascript
import { fetchCategories } from './lib/sanity.jsx';
const categories = await fetchCategories();
```

### Search Posts
```javascript
import { searchPosts } from './lib/sanity.jsx';
const results = await searchPosts('AI');
```

## Troubleshooting

### Posts not appearing
- Ensure `published` is set to `true` in Sanity
- Check that the category reference is set
- Verify environment variables are correct

### Images not loading
- Ensure images are uploaded to Sanity
- Check that the image field is properly configured
- Verify CDN is enabled in Sanity settings

### Slow loading
- Enable CDN in Sanity settings (`useCdn: true`)
- Use `@sanity/image-url` for optimized image URLs
- Consider caching strategies for frequently accessed content

## Next Steps

1. **Create your first blog post** in Sanity Studio
2. **Test locally** with `npm start`
3. **Deploy to Vercel** and verify posts appear
4. **Set up custom domain** for your blog
5. **Configure analytics** to track readership

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity CLI](https://www.sanity.io/docs/cli)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [React Integration](https://www.sanity.io/docs/js-client)
