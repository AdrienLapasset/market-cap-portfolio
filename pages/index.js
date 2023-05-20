import Head from "next/head";
import Table from "../components/Table";

const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&category=layer-1&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

export const getStaticProps = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Market Cap Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900">
          <h1 className="text-3xl font-bold mb-20 text-gray-300">
            Market Cap Portfolio
          </h1>
          <Table data={data} />
        </div>
      </main>
    </>
  );
}
