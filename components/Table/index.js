import { useFormatter } from "next-intl";

const Table = ({ data }) => {
  const format = useFormatter();

  return (
    <>
      <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Coins</th>
            <th className="px-6 py-3">Market cap</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((coin) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={coin.id}
              >
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {coin.name}
                </th>
                <td className="px-6 py-3">
                  {format.number(coin.market_cap, {
                    maximumSignificantDigits: 10,
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
