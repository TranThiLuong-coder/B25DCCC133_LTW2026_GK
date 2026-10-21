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
  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/new" element={<AddEvent />} />
        <Route path="events/:id" element={<EventDetail />} />
      </Route>
    </Routes>
  );
};

export default App;