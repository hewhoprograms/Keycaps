import { allPosts } from '@/.contentlayer/generated';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { compareDesc } from 'date-fns';
import React from 'react'

const PageIndex = async () => {
    const posts = allPosts.sort((a, b) => 
        compareDesc(new Date(a.date), new Date(b.date))
    );

  return (
    <>
        <div className="w-full h-screen flex justify-center">
            <div className="xl:w-[70%] w-full h-full flex flex-col">
                <Header />
                <div className="w-full h-fit overflow-auto space-y-10 flex flex-col xl:px-48 px-10 pt-20">
                    { posts.slice(0, 2).map(( post, idx ) => (
                        <PostCard key={idx} post={post} />
                    )) }
                </div>
                <Pagination currentPage={0} totalPages={0} isMainPage={false} />
            </div>
        </div>
    </>
  )
}

export default PageIndex