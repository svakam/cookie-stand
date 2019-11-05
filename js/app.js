'use strict';

// declare object literals for each city; each object contains minimum customers, maximum costumers, average cookies sold per sale, customers per hour, cookies purchased per hour
var Seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  numberHoursStoreOpen: 14,
  arrayPurchasedCookiesInADay: [],

  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    return random;
  },

  simulatedCookiesPurchasedPerHour: function () {
    var j = 6;
    var totalCookiesSoldDay = 0;
    for (var i = 0; i < this.numberHoursStoreOpen; i++) {
      var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();
      randomCookiesPerHour = Math.round(randomCookiesPerHour);
      totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;
      if (j < 12) {
        Seattle.arrayPurchasedCookiesInADay[i] = `${j}am: ${randomCookiesPerHour} cookies`;
        j++;
        continue;
      }
      if (j === 12) {
        Seattle.arrayPurchasedCookiesInADay[i] = `12pm: ${randomCookiesPerHour} cookies`;
        j++;
        continue;
      }
      if (j > 12) {
        Seattle.arrayPurchasedCookiesInADay[i] = `${j - 12}pm: ${randomCookiesPerHour} cookies`;
        j++;
        continue;
      }
    }
    Seattle.arrayPurchasedCookiesInADay.push(`Total: ${totalCookiesSoldDay} cookies`);

    console.log(Seattle.arrayPurchasedCookiesInADay);
    return Seattle.arrayPurchasedCookiesInADay;
  }

}
console.log(Seattle);
Seattle.randomCustomersPerHour();
Seattle.simulatedCookiesPurchasedPerHour();


// var Tokyo = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiePerSale: 1.2,
//   randomCustomersPerHour: function () {
//     var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     console.log(random);
//     return random;
//   }
// }
// console.log(Tokyo);
// Tokyo.randomCustomersPerHour();

// var Dubai = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiePerSale: 3.7,
//   randomCustomersPerHour: function () {
//     var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     console.log(random);
//     return random;
//   }
// }
// console.log(Dubai);
// Dubai.randomCustomersPerHour();

// var Paris = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiePerSale: 2.3,
//   randomCustomersPerHour: function () {
//     var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     console.log(random);
//     return random;
//   }
// }
// console.log(Paris);
// Paris.randomCustomersPerHour();

// var Lima = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiePerSale: 4.6,
//   randomCustomersPerHour: function () {
//     var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//     console.log(random);
//     return random;
//   }
// }
// console.log(Lima);
// Lima.randomCustomersPerHour();