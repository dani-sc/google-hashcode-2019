import fs from 'fs';

export default function parseInput(fileName) {
  fs.readFile(`input/${fileName}.in`, 'utf8', (err, contents) => {
    console.log(`Reading file ${fileName}...`);
    if (err) throw err;
    const lines = contents.split('\n');
    let offset = 0;

    // Read parameters
    const tokensLine0 = lines[offset].split(' ');
    offset += 1;
    const R = tokensLine0[0];
    const C = tokensLine0[1];
    const L = tokensLine0[2];
    const H = tokensLine0[3];
    console.log(`Tokens read: R: ${R}, C: ${C}, L: ${L}, H: ${H}`);

    // Read pizza
    let pizza = [];
    for (let row = 0; row < R; row += 1) {
      const tokensCurRow = [...lines[row + offset]];
      pizza[row] = tokensCurRow;
    }

    // Return result
    const result = {
      params: {
        R,
        C,
        L,
        H,
      },
      pizza,
    };
    console.log(`File ${fileName} read.`);
    return result;
  });
}
