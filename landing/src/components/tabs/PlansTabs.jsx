import React, { useState } from "react";
import Services from "../pages/Services";
import Dynamicservices from "../pages/Dynamicservices"; // <-- import dynamic plans

const PlansTabs = () => {
  const [selectedTab, setSelectedTab] = useState("static"); // default tab

  return (
    <div className="py-10 px-4" id="Service">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>

      {/* Tab selector */}
      <div className="flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-full text-sm justify-center mb-8 max-w-[200px] mx-auto">

        {["static", "dynamic"].map((tab) => (
          <label key={tab} className="flex items-center">
            <input
              type="radio"
              name="planTab"
              value={tab}
              className="hidden peer"
              checked={selectedTab === tab}
              onChange={() => setSelectedTab(tab)}
            />
            <span className="cursor-pointer rounded-full py-2 px-6 text-gray-500 transition-colors duration-200 peer-checked:bg-indigo-600 peer-checked:text-white capitalize">
              {tab}
            </span>
          </label>
        ))}
      </div>

      {/* Render services based on selected tab */}
      {selectedTab === "static" ? <Services /> : <Dynamicservices />}
    </div>
  );
};

export default PlansTabs;
