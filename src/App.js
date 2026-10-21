import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EventList from "./pages/EventList";
import AddEvent from "./pages/AddEvent";
import EventDetail from "./pages/EventDetail";

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("/data/events.json", { signal: controller.signal })
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError("Không tải được dữ liệu");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const handleRegister = (id) => {         
    setEvents(
      events.map((e) =>
        e.id === id && e.registered < e.capacity
          ? { ...e, registered: e.registered + 1 }
          : e
      )
    );
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const handleAdd = (data) => {
  const newId = events.reduce((max, e) => Math.max(max, e.id), 0) + 1;
  setEvents([...events, { id: newId, ...data, registered: 0 }]);
  };

  return (                                 
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home events={events} />} />
        <Route
          path="events"
          element={
            <EventList
              events={events}
              onRegister={handleRegister}
              onDelete={handleDelete}
            />
          }
        />
        <Route path="events/new" element={<AddEvent onAdd={handleAdd} />} />
        <Route path="events/:id" element={<EventDetail events={events} />} />
      </Route>
    </Routes>
  );
};

export default App;