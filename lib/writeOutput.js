import fs from 'fs';

function resultToString(slideShow) {
  const numberOfSlides = slideShow.length;
  let string = `${numberOfSlides}\n`;
  string += slideShow
    .map(slide => slide.join(' '))
    .reduce((prevValue, curValue) => `${prevValue}\n${curValue}`);
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
