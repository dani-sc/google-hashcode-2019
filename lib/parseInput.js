import fs from 'fs';

export default function parseInput(fileName) {
  fs.readFile(`input/${fileName}.txt`, 'utf8', (err, contents) => {
    console.log(`Reading file ${fileName}...`);
    if (err) throw err;
    const lines = contents.split('\n');
    let offset = 0;

    // Read parameters
    const tokensLine0 = lines[offset].split(' ');
    offset += 1;
    const collectionSize = tokensLine0[0];
    console.log(`Photos: ${collectionSize}`);

    // Read collection
    const tagsMap = new Map();
    const vCollection = [];
    const hCollection = [];

    let nextId = 0;

    for (let row = 0; row < collectionSize; row += 1) {
      const curLine = lines[row + offset].split(' ');
      const photo = {
        id: row,
        tags: [],
      };

      // for all tags
      for (let i = 2; i < curLine.length; i += 1) {
        let curTagId;
        if (tagsMap.has(curLine[i])) {
          curTagId = tagsMap.get(curLine[i]);
        } else {
          tagsMap.set(curLine[i], nextId);
          curTagId = nextId;
          nextId += 1;
        }
        photo.tags.push(curTagId);
      }

      if (curLine[0] === 'H') {
        hCollection.push(photo);
      } else {
        vCollection.push(photo);
      }
    }

    const collection = {
      v: vCollection,
      h: hCollection,
    };

    // Return result
    return collection;
  });
}
