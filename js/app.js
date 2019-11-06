'use strict';

// function for getting random number of customers per hour 
var getCustomersPerHour = function () {
  var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

  return random;
}

// function for getting cookies sold per hour
var getCookiesSoldPerHour = function () {
  // // commented out time-based hour counter for lab06 ul
  // var j = this.storeOpenTime;

  // initialize sum of cookies sold whole day
  var totalCookiesSoldDay = 0;

  // iterating over number of hours store is open to get to each hour
  for (var i = 0; i < this.numberHoursStoreOpen; i++) {
    // cookies per hour = avg sale * random customers/hour
    var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();

    // make integer value of random cookies per hour
    randomCookiesPerHour = Math.round(randomCookiesPerHour);

    // cookies sold whole day = add cookies per hour to the sum, per iteration 
    totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;

    this.arrayPurchasedCookiesInADay[i] = randomCookiesPerHour;

    // // commented out lab06 time-based cookies per hour entry into array: 
    // am/pm modifier
    // if (j < 12) {
    //   this.arrayPurchasedCookiesInADay[i] = `${j}:00am: ${randomCookiesPerHour} cookies`;
    //   j++;
    //   continue;
    // }
    // if (j === 12) {
    //   this.arrayPurchasedCookiesInADay[i] = `12:00pm: ${randomCookiesPerHour} cookies`;
    //   j++;
    //   continue;
    // }
    // if (j > 12) {
    //   this.arrayPurchasedCookiesInADay[i] = `${j - 12}:0pm: ${randomCookiesPerHour} cookies`;
    //   j++;
    //   continue;
    // }


  }

  // push total cookies sold per day into array 
  this.arrayPurchasedCookiesInADay.push(`${totalCookiesSoldDay} cookies`);

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




// add city data in a table to sales.html 

// anchor to HTML and start table
var tableCityData = document.getElementById('table-city-data');
var table = document.createElement('table');

tableCityData.append(table);

// start row of hours and total/city
var tr = document.createElement('tr');
var tdEmptyCorner = document.createElement('td');
tr.append(tdEmptyCorner);

// how to access inner-scoped property of an object from outside?
var j = 6;

// put times into cells
for (var i = 0; i < 14; i++) {
  var tdTime = document.createElement('td');
  if (j < 12) {
    tdTime.textContent = `${j}am`;
    tr.append(tdTime);
    j++;
    console.log(j);
    continue;
  }
  if (j === 12) {
    tdTime.textContent = `12pm`;
    tr.append(tdTime);
    j++;
    console.log(j);
    continue;
  }
  if (j > 12) {
    tdTime.textContent = `${j - 12}pm`;
    tr.append(tdTime);
    j++;
    console.log(j);
    continue;
  }
}

table.append(tr);

// 



