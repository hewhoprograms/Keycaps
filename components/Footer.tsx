import Link from "next/link";
import React from "react";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { greeting } from '@/data/web_settings';

function Footer() {
  return (
    <footer className="w-full h-20 border-t lg:flex px-6 pt-5 absolute bottom-0 hidden">
      <div className="w-1/2 h-full flex items-center justify-start">
        <p className="text-sm text-slate-900">
          © 2023 {" "}
          {/* Powered by{" "} */}
          <Link href="/" target="_blank" className="hover:underline">{ greeting.logoName }</Link> {" "}
          All Rights Reserved.
          {/* <Link href="https://vercel.com" target="_blank" className="font-semibold hover:underline">Vercel</Link> */}
        </p>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link href="https://twitter.com/#" target="_blank" ><AiOutlineTwitter className="text-2xl text-slate-500 ml-3" /></Link>
        <Link href="https://github.com/samiti3d" target="_blank" ><AiFillGithub className="text-2xl text-slate-500 ml-3" /></Link> 
      </div>
    </footer>
  );
}

export default Footer;