const FilterBar = ({ keyword, status, onKeywordChange, onStatusChange }) => {
  return (
    <div>
      <label htmlFor="search">Tìm kiếm</label>
      <input
        id="search"
        type="text"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      {" "}
      <label htmlFor="status">Tình trạng</label>
      <select
        id="status"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">Tất cả</option>
        <option value="available">Còn chỗ</option>
        <option value="full">Đã đầy</option>
      </select>
    </div>
  );
};

export default FilterBar;