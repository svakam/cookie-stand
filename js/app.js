'use strict';

var numberHoursStoreOpen = 14;


// function for getting random number of customers per hour 
var getCustomersPerHour = function () {
  var random = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;

  return random;
}


// function for getting cookies sold per hour
var getCookiesSoldPerHour = function () {
  // time-based counter for open time
  // var j = this.storeOpenTime;

  // initialize sum of cookies sold whole day
  var totalCookiesSoldDay = 0;

  for (var i = 0; i < numberHoursStoreOpen; i++) {
    // cookies per hour = avg sale * random customers/hour
    var randomCookiesPerHour = this.avgCookiePerSale * this.randomCustomersPerHour();

    // make it an integer value
    randomCookiesPerHour = Math.round(randomCookiesPerHour);

    // input cookies per hour into array
    this.arrayPurchasedCookiesInADay[i] = randomCookiesPerHour;

    // cookies sold whole day = add cookies per hour to the sum, per iteration 
    totalCookiesSoldDay = totalCookiesSoldDay + randomCookiesPerHour;

    // // am/pm modifier commented out because rendering in HTML table
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

  // push total cookies sold per day into array; design decision
  this.arrayPurchasedCookiesInADay.push(`${totalCookiesSoldDay} cookies`);

  console.log(this.arrayPurchasedCookiesInADay);

  return this.arrayPurchasedCookiesInADay;
}


// city constructor
function City(location, minCustomers, maxCustomers, avgCookiePerSale, numberHoursStoreOpen, arrayPurchasedCookiesInADay, randomCustomersPerHour, simulatedCookiesPurchasedPerHour) {
  this.location = location; // 1
  this.minCustomers = minCustomers; // 2
  this.maxCustomers = maxCustomers; // 3
  this.avgCookiePerSale = avgCookiePerSale; // 4
  this.numberHoursStoreOpen = numberHoursStoreOpen; // 5
  this.arrayPurchasedCookiesInADay = arrayPurchasedCookiesInADay; // 6
  this.randomCustomersPerHour = randomCustomersPerHour; // 7
  this.simulatedCookiesPurchasedPerHour = simulatedCookiesPurchasedPerHour; // 8
  // render array of cookies/hour in HTML
  this.render = function (domReference) {

  }
}

// object declarations: 1 = location, 2 = min, 3 = max, 4 = average, 5 = hoursopen, 6 = empty array, 7 = customers, 8 = cookies sold function
var Seattle = new City('Seattle', 23, 65, 6.3, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Tokyo = new City('Tokyo', 3, 24, 1.2, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Dubai = new City('Dubai', 11, 38, 3.7, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Paris = new City('Paris', 20, 38, 2.3, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

var Lima = new City('Lima', 2, 16, 4.6, 14, [], getCustomersPerHour, getCookiesSoldPerHour);

// create array of city objects
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
var divForTable = document.getElementById('div-for-table');

var table = document.createElement('table');

// set table element to have id of table to reference from CSS
table.setAttribute("id", "table"); // ?

divForTable.append(table);

// start row of hours and total/city
var tr = document.createElement('tr');
var tdSummary = document.createElement('td');
tdSummary.textContent = 'Cookies sold per hour per city'
tr.append(tdSummary);

/* how to access inner-scoped property of an object from outside? */
var j = 6;

/* put times into cells */
for (var i = 0; i < numberHoursStoreOpen; i++) {
  var tdTime = document.createElement('td');
  if (j < 12) {
    tdTime.textContent = `${j}am`;
    tr.append(tdTime);
    j++;
    continue;
  }
  if (j === 12) {
    tdTime.textContent = `12pm`;
    tr.append(tdTime);
    j++;
    continue;
  }
  if (j > 12) {
    tdTime.textContent = `${j - 12}pm`;
    tr.append(tdTime);
    j++;
    continue;
  }
}

/* put daily total name into cell */
var tdTotalCity = document.createElement('td');
tdTotalCity.textContent = 'Daily Location Total';
tr.append(tdTotalCity);

/* append first row into table */
table.append(tr);

// start new tr/td set of location and cookies sold

for (var cityIndex = 0; cityIndex < cities.length; cityIndex++) {
  // for every city in city array, make a table row 
  tr = document.createElement('tr');

  // for every city in city array, print its location property to HTML
  var tdLocation = document.createElement('td');
  tdLocation.textContent = cities[cityIndex].location;
  tr.append(tdLocation);

  // for every city, access its array of cookies sold over the day to print to HTML
  for (var cityData = 0; cityData < cities[cityIndex].arrayPurchasedCookiesInADay.length; cityData++) {
    var tdCookies = document.createElement('td');

    tdCookies.textContent = cities[cityIndex].arrayPurchasedCookiesInADay[cityData];
    tr.append(tdCookies);
  }

  table.append(tr);
}

// add new table row for vertical totals
tr = document.createElement('tr');

/* td for classifying vertical totals row */
var tdVertical = document.createElement('td');
tdVertical.textContent = 'Vertical totals';
tr.append(tdVertical);

/* looping 14 times to add td's horizontally */

for (var i = 0; i < 14; i++) {
  var tdVerticalTotals = document.createElement('td');
  var sumHour = 0;
  for (var j = 0; j < cities.length; j++) {
    sumHour = sumHour + cities[j].arrayPurchasedCookiesInADay[i];
  }
  tdVerticalTotals.textContent = sumHour;
  tr.append(tdVerticalTotals);
}

table.append(tr);




// render function for each set of HTML inputs from JS
// combine render functions into one mega render function?
// domReference?