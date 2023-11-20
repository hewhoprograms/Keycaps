import Image from 'next/image'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Metadata } from 'next'
import PortfoliosData from 'data/project.json';
import { greeting } from '@/data/web_settings'

export const metadata: Metadata = {
  title: "",
  description: ""
};

export default function Home() {

  return (
    <main className={styles.main}>
      <div className="sm:w-[70%] w-full h-full flex flex-col relative items-center">
        <Header />
            <div className="w-full sm:mt-10 mt-6 flex items-center justify-center">
              <Link
                href="https://github.com/samiti3d"
                target="_blank"
              >
                <div className="py-2 px-3 text-sm transition-colors duration-200 text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center">
                  <AiFillGithub className="text-xl mr-2" /> Star on GitHub
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-col items-center">
              <h1 className="md:text-6xl text-5xl sm:w-auto p-3 w-[280px] text-center mt-10 font-bold
              text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight
              ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-fuchsia-400">
                { greeting.titleTwoTones[0] ?? "Lorem"}
                </span>
                { greeting.titleTwoTones[1] ?? "Ipsum"}
              </h1>
              <p className="text-center text-xl leading-[1.8] w-[280px] text-slate-500 mt-10 sm:w-[600px] md:w-[650px]">
              { greeting.subTitle[0] ?? "Lorem ipsum dolor sit amet,"}<br/>
              { greeting.subTitle[1] ?? "consectetur adipiscing elit."}{" "} &quot; <Link href={ process.env.discordLink ?? ''} className='font-semibold hover:underline cursor-pointer'>
              { greeting.subTitle[2] ?? "Nunc lorem odio, malesuada vel est vel"}</Link>&quot;{" "} 
              { greeting.subTitle[3] ?? "iaculis tempor mauris. Maecenas facilisis."}</p>
              <Link
                href="/blog"
              >
                <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
                  Go to Articles <BsArrowRightShort className="text-3xl ml-1" />
                </div>
              </Link>
              <Link  target="__blank" href={ greeting.discord } className="mt-5 mb-20 text-sm">
                Join to Our Discord Group </Link>
            </div>
        <Footer />
      </div>
    </main>
  );
}
