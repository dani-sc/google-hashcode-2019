export default function calcResult(input) {
  // Do fancy stuff
  // 4 tags: "cat", "dog", "tree", "house"
  const input2 = {
    h: [
      {
        id: 1,
       tags: [1, 5, 4],
      },
      {
        id: 2,
       tags: [1, 2, 4, 8],
      },
      {
        id: 4,
       tags: [3],
      }
    ],
    v: [
      {
        id: 1,
       tags: [1, 5, 4],
      },
      {
        id: 2,
       tags: [1, 2, 4, 8],
      },
      {
        id: 4,
       tags: [3],
      }
    ],
  };

  // "convert" v's to h's?

  const numberOfTagsArray = [];
  input2.h.forEach(image => {
    const numberOfTags = image.tags.length;
    if (numberOfTagsArray[numberOfTags] === undefined) {
      numberOfTagsArray[numberOfTags] = [image];
    } else {
      numberOfTagsArray[numberOfTags].push(image);
    }
  });


  const slides = [];
  const slide1 = [1,4,5];
  const slide2 = [4,5,7];
  const slide3 = [7,2];
  slides.push(slide1);
  slides.push(slide2);
  slides.push(slide3);
  
  // Return result object
  const result = {
    slides
  };
  return result;
}
