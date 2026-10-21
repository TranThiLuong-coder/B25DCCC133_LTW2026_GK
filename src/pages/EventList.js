import { useState } from "react";
import FilterBar from "../components/FilterBar";
import EventTable from "../components/EventTable";

const EventList = ({ events, onRegister, onDelete }) => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("all");

  const filteredEvents = events
    .filter((e) => e.name.toLowerCase().includes(keyword.toLowerCase()))
    .filter((e) => {
      if (status === "full") return e.registered === e.capacity;
      if (status === "available") return e.registered < e.capacity;
      return true;
    });

  return (
    <div>
      <FilterBar
        keyword={keyword}
        status={status}
        onKeywordChange={setKeyword}
        onStatusChange={setStatus}
      />
      <p>Tìm thấy {filteredEvents.length} sự kiện</p>
      <EventTable
        events={filteredEvents}
        onRegister={onRegister}
        onDelete={onDelete}
      />
    </div>
  );
};

export default EventList;