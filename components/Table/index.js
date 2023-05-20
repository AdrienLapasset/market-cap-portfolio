import React, { useState, useEffect } from "react";

const Table = ({ data }) => {
  const [ammount, setAmmount] = useState(400);

  const marketCapsSum = data.reduce((accumulator, coin) => {
    accumulator += coin.market_cap;
    return accumulator;
  }, 0);

  const coinsMarketCapsPercents = data.map((coin) => ({
    name: coin.name,
    marketCapPercent: coin.market_cap / marketCapsSum,
  }));

  const renderData = coinsMarketCapsPercents.map((coin) => ({
    ...coin,
    roundedMarketCapPercent:
      Math.round(coin.marketCapPercent * 100 * 10) / 10 + " %",
    ammount: Math.round(coin.marketCapPercent * ammount),
  }));

  return (
    <>
      <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Coins</th>
            <th className="px-6 py-3">Market cap percent</th>
            <th className="px-6 py-3">Ammount to invest ({ammount}€)</th>
          </tr>
        </thead>
        <tbody>
          {renderData?.map((data) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={data.name}
              >
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.name}
                </th>
                <td className="px-6 py-3 text-center">
                  {data.roundedMarketCapPercent}
                </td>
                <td className="px-6 py-3 text-center">{data.ammount} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <input
        type="text"
        value={ammount}
        onChange={(e) => setAmmount(e.target.value)}
      />
    </>
  );
};

export default Table;
