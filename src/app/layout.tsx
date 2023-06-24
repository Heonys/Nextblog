import Link from "next/link";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "heon's blog",
    template: "heon's blog | %s",
  },
  description: "Frontend Developer heon's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col ">
        <header>
          <div className="flex items-center justify-between p-4">
            <div className="text-3xl font-bold">
              <Link href="/">Heonys Blog</Link>
            </div>
            <nav className="flex space-x-3">
              <Link href="./">home</Link>
              <Link href="./about">about</Link>
              <Link href="./posts">posts</Link>
              <Link href="./contact">contact</Link>
            </nav>
          </div>
        </header>
        <main className="grow">{children}</main>
        <footer className="bg-slate-900 py-2 text-center text-sm  text-white">
          Copyrightⓒ2023 Heonys All rights reserved.
        </footer>
      </body>
    </html>
  );
}
