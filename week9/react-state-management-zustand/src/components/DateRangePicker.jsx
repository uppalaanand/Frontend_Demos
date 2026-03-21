import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  roomId,
  api,
}) => {
  const [bookedDates, setBookedDates] = useState([]);
  const [loadingDates, setLoadingDates] = useState(false);

  // ✅ Fetch booked dates from backend
  const fetchBookedDates = async () => {
    if (!roomId) return;

    setLoadingDates(true);
    try {
      const res = await api.getBookedDates(roomId);

      // convert string → Date
      const dates = res.map((d) => new Date(d));
      setBookedDates(dates);
    } catch (err) {
      console.error("Error fetching booked dates", err);
    } finally {
      setLoadingDates(false);
    }
  };

  useEffect(() => {
    fetchBookedDates();
  }, [roomId]);

  // ✅ Calculate nights
  const getNights = () => {
    if (!fromDate || !toDate) return 0;

    return Math.ceil(
      (new Date(toDate).getTime() - new Date(fromDate).getTime()) /
        (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div className="group">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
        Select Dates
      </label>

      <div className="relative">
        {/* Icon */}
        <Calendar className="absolute top-3.5 left-3 text-gray-400" size={18} />

        {/* Date Picker */}
        <DatePicker
          selected={fromDate ? new Date(fromDate) : null}
          onChange={(dates) => {
            const [start, end] = dates;

            setFromDate(start ? start.toISOString().split("T")[0] : "");
            setToDate(end ? end.toISOString().split("T")[0] : "");
          }}
          startDate={fromDate ? new Date(fromDate) : null}
          endDate={toDate ? new Date(toDate) : null}
          selectsRange
          minDate={new Date()} // ❌ block past dates
          excludeDates={bookedDates} // ❌ block booked dates
          isClearable
          placeholderText={
            loadingDates
              ? "Loading availability..."
              : "Select check-in and check-out"
          }
          className="w-full bg-gray-50 border border-gray-200 pl-10 p-3 rounded-lg focus:outline-none focus:border-vp-gold focus:ring-1 focus:ring-vp-gold"
        />
      </div>

      {/* Error */}
      {fromDate && toDate && new Date(toDate) <= new Date(fromDate) && (
        <p className="text-red-500 text-sm mt-2">
          Check-out must be after check-in
        </p>
      )}
    </div>
  );
};

export default DateRangePicker;