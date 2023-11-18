/* Filename: RandomNumberGenerator.js */

// This code generates random numbers and performs statistical analysis on a dataset
// The dataset is obtained by generating random numbers and storing them in an array

// Generate a random number between a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a dataset of random numbers
function generateDataset(size) {
  var dataset = [];
  for (var i = 0; i < size; i++) {
    dataset.push(generateRandomNumber(1, 100));
  }
  return dataset;
}

// Calculate the mean of a dataset
function calculateMean(dataset) {
  var sum = dataset.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return sum / dataset.length;
}

// Calculate the median of a dataset
function calculateMedian(dataset) {
  var sortedDataset = dataset.sort();
  var middleIndex = Math.floor(sortedDataset.length / 2);
  if (sortedDataset.length % 2 === 0) {
    return (sortedDataset[middleIndex - 1] + sortedDataset[middleIndex]) / 2;
  } else {
    return sortedDataset[middleIndex];
  }
}

// Calculate the mode of a dataset
function calculateMode(dataset) {
  var frequencyMap = {};
  dataset.forEach(function (num) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });
  var maxFrequency = Math.max.apply(null, Object.values(frequencyMap));
  var mode = [];
  for (var key in frequencyMap) {
    if (frequencyMap.hasOwnProperty(key) && frequencyMap[key] === maxFrequency) {
      mode.push(parseFloat(key));
    }
  }
  return mode;
}

// Calculate the standard deviation of a dataset
function calculateStandardDeviation(dataset) {
  var mean = calculateMean(dataset);
  var squaredDifferences = dataset.map(function (val) {
    return Math.pow(val - mean, 2);
  });
  var variance = squaredDifferences.reduce(function (acc, val) {
    return acc + val;
  }, 0) / dataset.length;
  return Math.sqrt(variance);
}

// Generate a dataset of 500 random numbers
var dataset = generateDataset(500);

// Calculate statistics on the dataset
var mean = calculateMean(dataset);
var median = calculateMedian(dataset);
var mode = calculateMode(dataset);
var standardDeviation = calculateStandardDeviation(dataset);

console.log('Dataset:', dataset);
console.log('Mean:', mean);
console.log('Median:', median);
console.log('Mode:', mode);
console.log('Standard Deviation:', standardDeviation);