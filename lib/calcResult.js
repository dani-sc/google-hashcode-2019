export default function calcResult(input) {
  // Do fancy stuff
  const numberOfSlices = 3;
  const slice1 = {
    r1: 0,
    c1: 0,
    r2: 2,
    c2: 1,
  };
  const slice2 = {
    r1: 0,
    c1: 2,
    r2: 2,
    c2: 2,
  };
  const slice3 = {
    r1: 0,
    c1: 3,
    r2: 2,
    c2: 4,
  };
  const slices = [
    slice1,
    slice2,
    slice3,
  ];

  // Return result object
  const result = {
    numberOfSlices,
    slices,
  };
  return result;
}
