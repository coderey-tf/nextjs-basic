import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <h1 className="">Welcome Reynaldi Satriawan Wikyanhadi!</h1>
    </Layout>
  );
}
