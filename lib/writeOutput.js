import fs from 'fs';

function resultToString(result) {
  const { numberOfSlices, slices } = result;
  let string = `${numberOfSlices}\n`;
  string += slices
    .map(slice => (
      `${slice.r1} ${slice.c1} ${slice.r2} ${slice.c2}\n`
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
