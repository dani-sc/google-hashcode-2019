export default function calcResult(input) {
  // Do fancy stuff
  // 4 tags: "cat", "dog", "tree", "house"

  // "convert" v's to h's?

  const numberOfTagsArray = [];
  input.h.forEach((image) => {
    const numberOfTags = image.tags.length;
    if (numberOfTagsArray[numberOfTags] === undefined) {
      numberOfTagsArray[numberOfTags] = [image];
    } else {
      numberOfTagsArray[numberOfTags].push(image);
    }
  });

  const slideShow = [];
  const firstImage = numberOfTagsArray[numberOfTagsArray.length - 1].pop();
  slideShow.push([firstImage.id]);

  let imageA = firstImage;
  while (numberOfTagsArray.length !== 0) {
    let imageB = undefined;
    const optimalNumberOfCommonTags = imageA.tags.length / 2;
    let curDistanceFromOptimum = Infinity;
    const distanceThreshold = 1000; // TODO

    let curNumberOfTagsForComparison = imageA.tags.length;
    while (imageB === undefined && curNumberOfTagsForComparison > -1 && curDistanceFromOptimum > distanceThreshold) {
      if (numberOfTagsArray[curNumberOfTagsForComparison] === undefined || numberOfTagsArray[curNumberOfTagsForComparison].length === 0) {
        curNumberOfTagsForComparison -= 1;
        continue;
      }
      for (let [index, curImage] of numberOfTagsArray[curNumberOfTagsForComparison].entries()) {
        const numberOfCommonTags = getNumberOfCommonTags(imageA, curImage);
        const newDistanceFromOptimum = Math.abs(optimalNumberOfCommonTags - numberOfCommonTags);
        if (newDistanceFromOptimum < curDistanceFromOptimum) {
          imageB = curImage;
          numberOfTagsArray[curNumberOfTagsForComparison].splice(index, 1);
          curDistanceFromOptimum = newDistanceFromOptimum;
          if (curDistanceFromOptimum <= distanceThreshold) {
            break;
          }
        }
      }
      curNumberOfTagsForComparison -= 1;
    }
    
    // Wenn imageB da -> done, sonst weitersuchen

    if (imageB === undefined) {
      break;
    }
    slideShow.push([imageB.id]);
    imageA = imageB;
  }
 
  return slideShow;
}

function getNumberOfCommonTags(imageA, imageB) {
  const tagOccurenceCount = [];
  imageA.tags.forEach(tagId => {
    if (tagOccurenceCount[tagId] === undefined) {
      tagOccurenceCount[tagId] = 1;
    } else {
      tagOccurenceCount[tagId] += 1;
    }
  });
  imageB.tags.forEach(tagId => {
    if (tagOccurenceCount[tagId] === undefined) {
      tagOccurenceCount[tagId] = 1;
    } else {
      tagOccurenceCount[tagId] += 1;
    }
  });
  return tagOccurenceCount.filter(tagOccurence => tagOccurence === 2).length;
}
