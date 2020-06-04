// export const fetchImages = async () => {
//   const imagesResponse = await (
//     await fetch(
//       "https://pixabay.com/api?key=16837556-c2ce5f9d56364d11818c86ab3"
//     )
//   ).json();
//   return imagesResponse.hits;
// };

export const fetchImages = async (page) => {
  const imagesResponse = await (
    await fetch(
      `https://pixabay.com/api?key=16837556-c2ce5f9d56364d11818c86ab3&page=${page}&per_page=20`
    )
  ).json();
  return imagesResponse.hits;
};

export const searchForImages = async (keyword) => {
  const imagesResponse = await (
    await fetch(
      `https://pixabay.com/api/?key=16837556-c2ce5f9d56364d11818c86ab3&q=${keyword}`
    )
  ).json();
  return imagesResponse.hits;
};

export const saveFavorites = (favs) => {
  localStorage.setItem("fav", JSON.stringify(favs));
};
