export default function calcResult(input) {
  // Do fancy stuff
  // 4 tags: "cat", "dog", "tree", "house"

  // "convert" v's to h's?

  const numberOfTagsArray = [];
  console.log(input);
  input.h.forEach((image) => {
    const numberOfTags = image.tags.length;
    if (numberOfTagsArray[numberOfTags] === undefined) {
      numberOfTagsArray[numberOfTags] = [image];
    } else {
      numberOfTagsArray[numberOfTags].push(image);
    }
  });


  const slides = [];
  const slide1 = [1, 4];
  const slide2 = [3];
  const slide3 = [2];
  slides.push(slide1);
  slides.push(slide2);
  slides.push(slide3);
  
  // Return result object
  const result = {
    slides
  };
  return result;
}
