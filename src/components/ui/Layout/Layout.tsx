import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Next.js" }) => {
  return (
    <div className=" flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className=" bg-gray-800 w-screen">
          <div className=" flex items-center pl-8 h-14">
            <div className=" flex space-x-4">
              <Link href="/test">
                <a data-testid="home-nav" className=" text-gray-300  hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/test/blog">
                <a data-testid="blog-nav" className=" text-gray-300  hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/test/comment">
                <a data-testid="comment-nav" className=" text-gray-300  hover:bg-gray-700 px-3 py-2 rounded">
                  Comment
                </a>
              </Link>
              <Link href="/test/context">
                <a data-testid="context-nav" className=" text-gray-300  hover:bg-gray-700 px-3 py-2 rounded">
                  Context
                </a>
              </Link>
              <Link href="/test/task">
                <a data-testid="task-nav" className=" text-gray-300  hover:bg-gray-700 px-3 py-2 rounded">
                  Todo
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex justify-center items-center flex-col min-h-screen font-mono">{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};
