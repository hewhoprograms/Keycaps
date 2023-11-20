import React from 'react';
import Link from "next/link";
import { prefix } from '@/app/prefix';
import { greeting } from '@/data/web_settings';
import Image  from 'next/image';
function Header() {
    return (
        <header className="w-full h-auto border-b-2 flex px-6 py-5">
          <Link
            href="/"
            className="sm:w-1/2 w-[80%] h-full flex items-center justify-start"
          >
            <Image src={ `${ prefix ? '/logo.png' : '/logo.png' }` } alt='logo' width={128} height={93} className="w-[120px] h-[90px] mr-3" />

            {/* <Image
              src={`${ prefix }/samitidev.png`}
              alt="รับทำเว็บไซต์นึกถึง samiti.dev"
              width={128}
              height={93}
              className="w-[128px] h-[93px] mr-3"
              priority
            /> */}
            <h1 className="font-semibold ml-2  text-[1.800rem]">{ greeting.logoName ?? ""}</h1>
          </Link>
          {/* <Link
            href="https://vercel.com"
            target="_blank"
            className="sm:w-1/2 w-[20%] h-full flex items-center justify-end"
          >
            <Image
              src="/vercel.svg"
              alt="vercel svg"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
              priority
            />
          </Link> */}
        </header>
    );
}

export default Header