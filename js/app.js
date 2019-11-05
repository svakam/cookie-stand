'use strict';

// function for getting random number of customers per hour 
var getCustomersPerHour = function () {
  var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

  return random;
}

// function for getting cookies sold per hour
var getCookiesSoldPerHour = function () {
  var j = this.storeOpenTime;
  var totalCookiesSoldDay = 0;

  for (var i = 0; i < this.numberHoursStoreOpen; i++) {
    var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();

    randomCookiesPerHour = Math.round(randomCookiesPerHour);
    totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;

    // am/pm modifier
    if (j < 12) {
      this.arrayPurchasedCookiesInADay[i] = `${j}am: ${randomCookiesPerHour} cookies`;
      j++;
      continue;
    }
    if (j === 12) {
      this.arrayPurchasedCookiesInADay[i] = `12pm: ${randomCookiesPerHour} cookies`;
      j++;
      continue;
    }
    if (j > 12) {
      this.arrayPurchasedCookiesInADay[i] = `${j - 12}pm: ${randomCookiesPerHour} cookies`;
      j++;
      continue;
    }
  }

  // push total cookies sold per day into array 
  this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

  console.log(this.arrayPurchasedCookiesInADay);
  return this.arrayPurchasedCookiesInADay;
}

// city constructor
function City(location, minCustomers, maxCustomers, avgCookiePerSale, storeOpenTime, numberHoursStoreOpen, arrayPurchasedCookiesInADay, randomCustomersPerHour, simulatedCookiesPurchasedPerHour) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.storeOpenTime = storeOpenTime;
  this.numberHoursStoreOpen = numberHoursStoreOpen;
  this.arrayPurchasedCookiesInADay = arrayPurchasedCookiesInADay;
  this.randomCustomersPerHour = randomCustomersPerHour;
  this.simulatedCookiesPurchasedPerHour = simulatedCookiesPurchasedPerHour;
}

// creating each city as object
var Seattle = new City('Seattle', 23, 65, 6.3, 6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Tokyo = new City('Tokyo', 3, 24, 1.2, 6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Dubai = new City('Dubai', 11, 38, 3.7, 6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Paris = new City('Paris', 20, 38, 2.3, 6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Lima = new City('Lima', 2, 16, 4.6, 6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

// create array of cities
var cities = [Seattle, Tokyo, Dubai, Paris, Lima];

// testing city data output
console.log(Seattle);
Seattle.simulatedCookiesPurchasedPerHour();

console.log(Tokyo);
Tokyo.simulatedCookiesPurchasedPerHour();

console.log(Dubai);
Dubai.simulatedCookiesPurchasedPerHour();

console.log(Paris);
Paris.simulatedCookiesPurchasedPerHour();

console.log(Lima);
Lima.simulatedCookiesPurchasedPerHour();




// add city data to sales.html 
var tableCityData = document.getElementById('tableCityData');
var table = document.createElement('table');

tableCityData.append(table);

// create classifier row
var classifiers = ['Location', 'Min / Cust', 'Max / Cust', 'Avg Cookie / Sale'];

// loop over classifier array and print to a table row
var tr = document.createElement('tr');

table.append(tr);

for (var i = 0; i < 4; i++) {
  var tdClassifier = document.createElement('td');
  tdClassifier.textContent = classifiers[i];
  tr.append(tdClassifier);
}

// display location, min, max, avg in table 
for (var i = 0; i < cities.length; i++) {
  tr = document.createElement('tr');

  table.append(tr);

  var tdLocation = document.createElement('td');
  var tdMin = document.createElement('td');
  var tdMax = document.createElement('td');
  var tdAvg = document.createElement('td');

  tdLocation.textContent = cities[i].location;
  tr.append(tdLocation);

  tdMin.textContent = cities[i].minCustomers;
  tr.append(tdMin);

  tdMax.textContent = cities[i].maxCustomers;
  tr.append(tdMax);

  tdAvg.textContent = cities[i].avgCookiePerSale;
  tr.append(tdAvg);
}

// display city name and ul of array of cookies sold per hour
var unorderedList = document.getElementById('ulCity');

for (var i = 0; i < cities.length; i++) {
  var cityName = document.createElement('p');

  cityName.textContent = cities[i].location;

  ulCity.append(cityName);

  var ulList = document.createElement('ul');

  cityName.append(ulList);

  for (var j = 0; j < cities[i].arrayPurchasedCookiesInADay.length; j++) {
    var listItem = document.createElement('li');

    listItem.textContent = cities[i].arrayPurchasedCookiesInADay[j];
    cityName.append(listItem);
  }
}




