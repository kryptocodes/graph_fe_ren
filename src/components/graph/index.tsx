import React from "react";
import { formatData, FormatRound } from "../utils/util";

import { Tab } from "@headlessui/react";

import Graph from "./Graph";
import Summary from "./Summary";
import Statistics from "./Statistics";
import Analystics from "./Analystics";
import Settings from "./Settings";

interface indexProps {
  chart: any;
  price: any;
}

const PriceIndex: React.FC<indexProps> = ({ price, chart }) => {
  const ButtonTab = ({ content }) => (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={`text-gray-400 font-medium py-4 px-6 block  focus:outline-none  ${
            selected ? "border-b-4 border-indigo-500 text-gray-900" : ""
          } `}
        >
          {content}
        </button>
      )}
    </Tab>
  );

  return (
    <div className="p-4">
      <div className="flex sm:p-4">
        <h1 className="text-6xl font-bold">
          {price?.usd
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            .replace(/\$/g, "")}
        </h1>
        <p className="ml-1 text-lg font-bold text-gray-400">USD</p>
      </div>
      <p
        className={`${
          price?.usd_24h_change > 0 ? "text-green-500" : "text-red-500"
        } text-2xl sm:p-4  pt-2 sm:pt-0`}
      >
        {price?.usd_24h_change > 0 ? "+ " : ""}
        {(Math.round((price?.usd_24h_change / 100) * price?.usd) * 100) / 100}(
        {FormatRound(price?.usd_24h_change, 2)}%)
      </p>

      <Tab.Group defaultIndex={1}>
        <Tab.List className="flex overflow-x-auto sm:flex-row pt-10">
          <ButtonTab content="Summary" />
          <ButtonTab content="Chart" />
          <ButtonTab content="Statistics" />
          <ButtonTab content="Analystics" />
          <ButtonTab content="Settings" />
        </Tab.List>

        <Tab.Panel>
          <Summary price={price} />
        </Tab.Panel>

        <Tab.Panel>{chart && <Graph chart={chart} />}</Tab.Panel>

        <Tab.Panel>
          <div className="sm:p-5 p-0">
            <Statistics chart={chart} />
          </div>
        </Tab.Panel>

        <Tab.Panel>
          <div className="sm:p-5 p-0">
            <Analystics chart={chart} />
          </div>
        </Tab.Panel>

        
        <Tab.Panel>
            <Settings />
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
};
export default PriceIndex;
