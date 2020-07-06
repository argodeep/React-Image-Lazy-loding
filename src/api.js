// Return images after one seconds
export function getImagesAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let images = [];

      for (let i = 0; i < 50; i++) {
        const width = 200;
        const height = 300;
        const src = `https://picsum.photos/id/${i}/${width}/${height}`;

        images.push(src);
      }

      resolve(images);
    }, 1000);
  });
}
