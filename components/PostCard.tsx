import React, { FC } from 'react'
import Link from 'next/link'
import { Post } from '@/.contentlayer/generated/types'
import { format, parseISO } from 'date-fns';

interface PostCardProps {
    post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Link
        href={post?.url}
        className="w-full h-full cursor-pointer flex group pb-8 flex-col items-center"
    >
            <p className="text-sm mb-2 text-slate-500 ">
            {format(parseISO(post.date), "LLLL d, yyyy")} • {post.author}
            </p>
            <h1 className="text-xl font-regula text-center group-hover:border-b-slate-900 transition-all duration-300 border-b border-b-white text-slate-900 ">
            {post.title}
            </h1>
    </Link>
  )
}

export default PostCard