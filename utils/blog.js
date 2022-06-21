export const filterDat = (posts, router) => {
  let cat = router.query.cat;
  let data = Object.entries(posts);
  console.log(data);
  let page = parseInt(router.query.page);
  let perPage = page ? page * 6 : 6;
  if (page) {
    return posts.slice(perPage - 6, perPage);
  }
  return posts.slice(0, 6);
};
