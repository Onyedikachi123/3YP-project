"use client";

import React, { useState } from "react";
import LiveMap from "./Map"; // Adjust path accordingly

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<"Overview" | "Admin Logs">("Overview");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "Overview"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("Overview")}
        >
          Overview
        </button>
        <button
          className={`ml-4 px-4 py-2 font-medium ${
            activeTab === "Admin Logs"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("Admin Logs")}
        >
          Admin Logs
        </button>
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === "Overview" && <LiveMap />}
        {activeTab === "Admin Logs" && (
          <div className="bg-white rounded-lg shadow p-4 text-gray-700">
            <h3 className="text-base font-semibold mb-2">Details Content</h3>
            <p>This is the details tab content. Replace with your actual details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
