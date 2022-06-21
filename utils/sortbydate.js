function SortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

export default SortByDate;


