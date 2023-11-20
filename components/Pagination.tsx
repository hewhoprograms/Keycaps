'use client'
import { Link } from '@geist-ui/core';
import React, { FC } from 'react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    isMainPage: boolean;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, isMainPage }) => {
    let isDisplayMainPage: boolean = totalPages !== 4 ? true : false;

    if(totalPages > 0) {
        if(totalPages % 1 === 0.5) {
            totalPages = Math.ceil(totalPages);
        }
    }

    return (
        <>
            <div className="bg-white p-4 flex justify-center mt-20 items-center flex-wrap">
                <nav aria-label="Page navigation">
                    {
                        !isMainPage && isDisplayMainPage && (
                            <ul className="inline-flex">
                                {/* {
                                    currentPage == 1 ? "" : (
                                        <li>
                                            <Link
                                                className='disabled'
                                                style={{
                                                    pointerEvents: (currentPage == 1) ? "none" : "auto",
                                                }}  
                                            href={ `${ currentPage - 1}` }>
                                                <button className="px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-100">
                                                    Prev
                                                </button>
                                            </Link>
                                        </li>
                                    )
                                } */}
                                <div className="join">
                                {
                                    Array.from(Array(totalPages), (e, i) => {
                                        // i + 1 === totalPages || 
                                        return (
                                            <li key={ i + 1 }>
                                                <Link  href={`/page/${i + 1}`} key={ i + 1} >
                                                    {
                                                        (  
                                                            <button className={ `join-item btn${ Number(currentPage) === i + 1 ? ' btn-active' : ''}` }>{ i + 1 }</button>
                                                                // <button className="join-item btn btn-active">2</button>
                                                            // <button 
                                                            //     className={`${ currentPage === i + 1 ? "bg-slate-500" : "bg-slate-500"} border border-r-0 border-green-600 px-4 py-2 text-green-600 transition-colors duration-150 bg-white focus:shadow-outline`}>
                                                            //     { i + 1 }
                                                            // </button>
                                                        )
                                                    }

                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                </div>
                                {/* { currentPage < totalPages ? (
                                    <li>
                                        <Link href={`${ Number(currentPage) + 1 }`}>
                                            <button className="border-l-0 px-4 py-2 text-green-600 transition-colors duration-150 bg-white border border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100">Next</button>
                                        </Link>
                                    </li>
                                ) : (" ")} */}
                            </ul>
                        )
                    }
                    {
                        !!isMainPage && (
                            <ul className="inline-flex">
                                <div className="join">
                                {
                                    Array.from(Array(totalPages), (e, i) => {
                                        // i + 1 === totalPages || 
                                        return (
                                            <li key={ i + 1 }>
                                                <Link  href={`/page/${i + 1}`} key={ i + 1} >
                                                    {
                                                        (  
                                                            <button className={ `join-item btn${ Number(currentPage) === i + 1 ? ' btn-active' : ''}` }>{ i + 1 }</button>
                                                                // <button className="join-item btn btn-active">2</button>
                                                            // <button 
                                                            //     className={`${ currentPage === i + 1 ? "bg-slate-500" : "bg-slate-500"} border border-r-0 border-green-600 px-4 py-2 text-green-600 transition-colors duration-150 bg-white focus:shadow-outline`}>
                                                            //     { i + 1 }
                                                            // </button>
                                                        )
                                                    }

                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                </div>
                            </ul>
                        )
                    }
                </nav>
            </div>
        </>
    )
}

export default Pagination