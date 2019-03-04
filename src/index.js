/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (i = 0; i<preferences.length; i++){
    targetSecond = preferences[preferences[i]-1];
    preferences[i] = undefined;
    targetThird = preferences[targetSecond-1];
    if (targetThird == i+1)
      {count++;};
  }
  return count;
};
