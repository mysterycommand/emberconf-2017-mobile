import Ember from 'ember';

const { get } = Ember;

export function arrayChunk([arr, chunkSize = 5]) {
  let grid = [];
  let arrayLength = get(arr, 'length');
  for (let i = 0; i < arrayLength; i += chunkSize) {
    let row = arr.slice(i, Math.min(arrayLength - 1, i + chunkSize));
    grid.push(row);
  }
  return grid;
}

export default Ember.Helper.helper(arrayChunk);
