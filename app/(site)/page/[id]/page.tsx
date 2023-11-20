import React from 'react'
import { allPosts } from 'contentlayer/generated'
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { compareDesc } from 'date-fns';

export function generateStaticParams() {
    
    let showPerPage = 2;
    let totalPostCount = allPosts.length;
    let maxPage = Math.ceil(totalPostCount) / showPerPage;
    let pages = [];

    for (let index = 0; index < maxPage; index++) {
        let idObj = { id: `${ index + 1 }`};
        pages.push(idObj);
    }

    return pages
}

const Page = ({ params }: { params: { id: number }}) => {

    allPosts.sort((a, b) => 
        compareDesc(new Date(a.date), new Date(b.date))
    );

    let showPerPage = 2;
    let totalPostCount = allPosts.length;
    console.log(`totalPostCount = ${totalPostCount}`);
    let currentPage = params.id === 0 ? 1 : params.id;
    let maxPage = totalPostCount / showPerPage;
    if( maxPage % 1 === 0.5 ) {
        maxPage = Math.ceil(maxPage);
    }

    let isPreviousePage = 0;

    if(currentPage > maxPage) {
        return;
    }

    if(currentPage > 1) {
       isPreviousePage = 1;
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center">
                <div className="xl:w-[70%] w-full h-full flex flex-col">
                <Header />
                    <div className="w-full h-fit mb-10 overflow-auto space-y-10 flex flex-col xl:px-48 px-10 pt-20">
                    {
                        // allPosts.slice(0 + ( isPreviousePage * showPerPage ), showPerPage * currentPage)
                        allPosts.slice(0 + ( (showPerPage * currentPage) - (2)), showPerPage * currentPage)
                            .map((post, idx) => (
                                <PostCard key={ idx } post={ post } />
                            ))}
                    </div>
                    <div className="flex justify-center">
                        <Pagination currentPage={ currentPage } totalPages={ maxPage } isMainPage={ false } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page