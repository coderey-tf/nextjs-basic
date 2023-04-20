import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="NextJs Basic" />
      </Head>
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
