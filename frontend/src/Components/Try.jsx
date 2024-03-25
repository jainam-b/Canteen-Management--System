import { useEffect } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { IoBagHandle, IoPeople, IoCart } from 'react-icons/io5'
const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-pevxc",
  showAttribution: false
});
const salesChart = sdk.createChart({
  chartId: "6600f6d5-8143-41f9-8b7c-e3d3085a62b4"
});

export default function App() {
  useEffect(() => {
    salesChart.render(document.getElementById("chart-data"));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
        <IoCart className="text-2xl text-white" />
      </div>
      <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Today's Orders</span>
        <div className="flex items-center">
          <strong className="text-xl text-gray-700 font-semibold">43</strong>
        </div>
      </div>
      <div id="chart-data" className="ml-8" style={{ height: 500 }}></div>
    </div>
  );
}
