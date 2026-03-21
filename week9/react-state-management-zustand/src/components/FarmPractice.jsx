import React, { useState } from "react";
import DateRangePicker from "./DateRangePicker";

// ✅ Mock API (for testing)
const api = {
  getBookedDates: async (roomId) => {
    console.log("Fetching booked dates for room:", roomId);

    // simulate API delay
    await new Promise((res) => setTimeout(res, 500));

    // sample booked dates
    return ["2026-03-25", "2026-03-26", "2026-03-30"];
  },
};

function FarmPractice() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // mock room id
  const id = "room123";

  return (
    <div className="p-10">
      <DateRangePicker
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
        roomId={id}
        api={api}
      />
    </div>
  );
}

export default FarmPractice;