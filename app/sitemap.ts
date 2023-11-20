import { MetadataRoute } from "next";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl: string = process.env.baseUrl ?? 'localhost:3000';
    const posts = allPosts.sort((a, b) => 
        compareDesc(new Date(a.date), new Date(b.date))
    );

    const blog =  posts.map( (post) => ({
      url: `${baseUrl + post.url}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "monthly" as "monthly",
    }));

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
          },
          {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
          },
          ...blog,
    ];
}