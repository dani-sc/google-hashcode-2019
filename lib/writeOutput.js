import fs from 'fs';

function resultToString(result) {
  const { slides } = result;
  const numberOfSlides = slides.length;
  let string = `${numberOfSlides}\n`;
  string += slides
    .map(slide => (
      slide.join(' ')
    ))
    .reduce((prevValue, curValue) => prevValue + curValue);
  return string;
}

export default function writeOutput(fileName, result) {
  console.log(`Writing file ${fileName}...`);
  const contents = resultToString(result);
  fs.writeFile(
    `output/${fileName}.out`,
    contents,
    (err) => {
      if (err) throw err;
      console.log(`File ${fileName} written.`);
    },
  );
}
