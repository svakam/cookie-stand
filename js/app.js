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

