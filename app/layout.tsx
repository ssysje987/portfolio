import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/GeistMonoVF.woff",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'SONG SEYOUNG — Commercial Space Designer',
  description: '리테일 경험을 바탕으로 브랜드 공간을 설계하는 공간 디자이너 송세영의 포트폴리오',
  keywords: ['공간 디자이너', 'VMD', '상업 인테리어', 'NODE', '포트폴리오', '송세영'],
  openGraph: {
    title: 'SONG SEYOUNG — Commercial Space Designer',
    description: 'WHERE SUBCULTURES FLOW INTO ONE NODE.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={geist.variable}>
      <body className="font-inter bg-bg text-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
