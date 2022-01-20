function SortByDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}

export default SortByDate;
