import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import CodeSnippet from '@/components/CodeSnippet';

export async function generateMetadata({ params }) {
    const { postSlug } = await params;
    const post = await loadBlogPost(postSlug);

    return {
        title: `${post.frontmatter.title} • ${BLOG_TITLE}`,
        description: post.frontmatter.abstract,
    }
}

async function BlogPost({ params }) {
    const { postSlug } = await params;
    const post = await loadBlogPost(postSlug);

    return (
        <article className={styles.wrapper}>
            <BlogHero {...post.frontmatter} />
            <div className={styles.page}>
                <MDXRemote source={post.content} components={{ pre: CodeSnippet }} />
            </div>
        </article>
    );
}

export default BlogPost;
