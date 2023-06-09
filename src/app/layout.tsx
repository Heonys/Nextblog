import "./globals.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Jiheon blog",
    template: "Jiheon blog | %s",
  },
  description: "developer jiheon's blog ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <header className="flex justify-between p-2">
          <Link href="/">
            <h1 className="font-bold text-3xl">{`Jiheon's blog`}</h1>
          </Link>
          <ul className="font-semibold flex gap-2 text-lg">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/posts">posts</Link>
            <Link href="/contact">contact</Link>
          </ul>
        </header>
        <main className="grow">{children}</main>
        <footer className="text-center bg-slate-700 text-white">
          Copyrightⓒ2023 Jiheon All rights reserved.
        </footer>
      </body>
    </html>
  );
}
