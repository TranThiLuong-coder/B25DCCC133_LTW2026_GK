import { useState, useEffect } from "react";

const calcTimeLeft = (date) => {
  const diff = new Date(`${date}T00:00:00`) - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(date));

  useEffect(() => {
    setTimeLeft(calcTimeLeft(date));
    const timer = setInterval(() => setTimeLeft(calcTimeLeft(date)), 1000);
    return () => clearInterval(timer);
  }, [date]);

  if (!timeLeft) return <p>Sự kiện đã diễn ra</p>;

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <p>{`Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`}</p>
  );
};

export default Countdown;