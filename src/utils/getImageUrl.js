const getImageUrl = (path, imageName) => {
  return new URL(`${path}/${imageName}`, import.meta.url).href;
}

export default getImageUrl;
