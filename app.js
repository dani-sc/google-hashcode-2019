import zipdir from 'zip-dir';

import parseInput from './lib/parseInput';
import calcResult from './lib/calcResult';
import writeOutput from './lib/writeOutput';

const fileNames = [
  'a_example',
  // 'b_lovely_landscapes',
  // 'c_memorable_moments',
  // 'd_pet_pictures',
  // 'e_shiny_selfies',
];

function writeSourcesZipFile() {
  const exclude = /^(?!.*(node_modules|output)).*/i;
  zipdir(
    './',
    {
      saveTo: './output/sources.zip',
      filter: path => path.match(exclude),
    },
    () => { },
  );
}

function main() {
  console.log('Starting...');
  fileNames.forEach((fileName) => {
    console.log(`Processing file ${fileName}`);
    const input = parseInput(fileName);
    const result = calcResult(input);
    writeOutput(fileName, result);
    console.log(`File ${fileName} processed.`);
  });
  console.log('Creating ZIP file with sources');
  writeSourcesZipFile();
  console.log('Finished.');
}

main();
