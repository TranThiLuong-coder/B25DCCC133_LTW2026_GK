import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEvent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !location.trim() || !date || !capacity) {
      setMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    onAdd({
      name: name.trim(),
      location: location.trim(),
      date,
      capacity: Number(capacity),
    });
    navigate("/events", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Tên sự kiện</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Địa điểm</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Ngày diễn ra</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="capacity">Sức chứa</label>
        <input
          id="capacity"
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
      <button type="submit">Thêm</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default AddEvent;