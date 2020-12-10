function aggregateArray(values) {
  let nArr = []
  for (let i = 0; i < values.length; i++) {
    nArr.push(parseFloat(values[i].users_rating))
  }
  return nArr;

}

async function median(values) {



  if (values.length === 0) return 0;

  let nArr = aggregateArray(values);

  nArr.sort(function (a, b) {
    return a - b;
  });
  var half = Math.floor(nArr.length / 2);
  if (nArr.length % 2)
    return nArr[half];
  return (nArr[half - 1] + nArr[half]) / 2.0;
}
async function getStandardDeviation(array) {

  let nArr = aggregateArray(array);
  const n = nArr.length
  const mean = nArr.reduce((a, b) => a + b) / n
  return Math.sqrt(nArr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

async function getMean(array) {
  let nArr = aggregateArray(array)
  let total = 0;
  for (let i = 0; i < nArr.length; i++) {
    total += nArr[i];
  }
  let avg = total / nArr.length;
  return avg;
}
async function sortData(a, b) {
  return new Date(a.year).getTime() - new Date(b.year).getTime();
}
async function ratedMovie(a, b) {
  return parseFloat(b.users_rating) - parseFloat(a.users_rating);
}
module.exports = {
  median,
  getStandardDeviation,
  getMean,
  sortData,
  ratedMovie
}