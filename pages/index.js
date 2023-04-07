import Head from "next/head";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VAT Digital</title>
        <meta property="og:title" content="gujirati songs" key="title" />
      </Head>
      <div className="bg-[#1B0027] flex sm:px-16 px-6 justify-center items-start flex-col">
        <Navbar allsongs contact/>
        <MainPage />
      </div>
    </div>
  );
}
