'use strict';

// var getCookiesSold = function() {

// }

// var getCustomersPerHour = function() {}

// declare object literals for each city; each object contains minimum customers, maximum costumers, average cookies sold per sale, customers per hour, cookies purchased per hour
var Seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  storeOpenTime: 6,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = this.storeOpenTime;
    var totalCookiesSoldDay = 0;

    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
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

    this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(this.arrayPurchasedCookiesInADay);
    return this.arrayPurchasedCookiesInADay;
  }

}
console.log(Seattle);
Seattle.randomCustomersPerHour();
Seattle.simulatedCookiesPurchasedPerHour();



var Tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  storeOpenTime: 6,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = this.storeOpenTime;
    var totalCookiesSoldDay = 0;

    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
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

    this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(this.arrayPurchasedCookiesInADay);
    return this.arrayPurchasedCookiesInADay;
  }

}
console.log(Tokyo);
Tokyo.randomCustomersPerHour();
Tokyo.simulatedCookiesPurchasedPerHour();



var Dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  storeOpenTime: 6,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = this.storeOpenTime;
    var totalCookiesSoldDay = 0;

    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
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

    this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(this.arrayPurchasedCookiesInADay);
    return this.arrayPurchasedCookiesInADay;
  }

}
console.log(Dubai);
Dubai.randomCustomersPerHour();
Dubai.simulatedCookiesPurchasedPerHour();



var Paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  storeOpenTime: 6,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = this.storeOpenTime;
    var totalCookiesSoldDay = 0;

    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
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

    this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(this.arrayPurchasedCookiesInADay);
    return this.arrayPurchasedCookiesInADay;
  }

}
console.log(Paris);
Paris.randomCustomersPerHour();
Paris.simulatedCookiesPurchasedPerHour();



var Lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  storeOpenTime: 6,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = this.storeOpenTime;
    var totalCookiesSoldDay = 0;

    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
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

    this.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(this.arrayPurchasedCookiesInADay);
    return this.arrayPurchasedCookiesInADay;
  }

}
console.log(Lima);
Lima.randomCustomersPerHour();
Lima.simulatedCookiesPurchasedPerHour();




// add to sales.html 
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

// create array of cities as objects
var cities = [Seattle, Tokyo, Dubai, Paris, Lima];

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




