'use strict';

// declare object literals for each city; each object contains minimum customers, maximum costumers, average cookies sold per sale
var Seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    console.log(random);
    return random;
  }
}
console.log(Seattle);
Seattle.randomCustomersPerHour();

var Tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    console.log(random);
    return random;
  }
}
console.log(Tokyo);
Tokyo.randomCustomersPerHour();

var Dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    console.log(random);
    return random;
  }
}
console.log(Dubai);
Dubai.randomCustomersPerHour();

var Paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    console.log(random);
    return random;
  }
}
console.log(Paris);
Paris.randomCustomersPerHour();

var Lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  randomCustomersPerHour: function () {
    var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    console.log(random);
    return random;
  }
}
console.log(Lima);
Lima.randomCustomersPerHour();