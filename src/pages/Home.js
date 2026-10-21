const Home = ({ events }) => {
  const totalEvents = events.length;
  const totalRegistered = events.reduce((sum, e) => sum + e.registered, 0);
  const fullCount = events.filter((e) => e.registered === e.capacity).length;

  return (
    <div>
      <h1>Sự kiện CLB</h1>
      <p>Tổng số sự kiện: {totalEvents}</p>
      <p>Tổng số lượt đăng ký: {totalRegistered}</p>
      <p>Số sự kiện đã đầy: {fullCount}</p>
    </div>
  );
};

export default Home;