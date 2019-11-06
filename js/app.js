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
    // new tr/td set of location and cookies sold

    // for every city in city array, make a table row 
    var tr = document.createElement('tr');

    // for every city in city array, print its location property to HTML
    var tdLocation = document.createElement('th');
    tdLocation.textContent = this.location;
    tr.append(tdLocation);

    // for every city, access its array of cookies sold over the day to print to HTML
    for (var cityData = 0; cityData < this.arrayPurchasedCookiesInADay.length; cityData++) {
      var tdCookies = document.createElement('td');

      tdCookies.textContent = this.arrayPurchasedCookiesInADay[cityData];
      tr.append(tdCookies);
    }

    domReference.append(tr);
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

// functions for rendering header, body, footer in an HTML table

// function to create header for column labels
var renderTableHeader = function (domReference) {

  // start row of hours and total/city
  var tr = document.createElement('tr');
  var tdSummary = document.createElement('th');
  tdSummary.textContent = 'Cookies sold per hour per city';
  tr.append(tdSummary);

  // start time of stores is 6 am
  var j = 6;

  /* put times into cells and concatenate am/pm based on time */
  for (var i = 0; i < numberHoursStoreOpen; i++) {

    var tdTime = document.createElement('th');

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
  var tdTotalCity = document.createElement('th');
  tdTotalCity.textContent = 'Daily Location Total';
  tr.append(tdTotalCity);

  /* append first row into table */
  domReference.append(tr);
}

// function to create footer of hourly totals + total of totals
var renderTableFooter = function (domReference) {

  // add new table row for vertical totals
  var tr = document.createElement('tr');

  // counter for total of totals
  var sumHourTotal = 0;

  /* td for classifying vertical totals row */
  var tdVertical = document.createElement('th');
  tdVertical.textContent = 'Vertical totals';
  tr.append(tdVertical);

  /* looping 14 times to add td's horizontally */
  for (var i = 0; i < 14; i++) {
    var tdVerticalTotals = document.createElement('td');
    var sumHour = 0;

    for (var j = 0; j < cities.length; j++) {

      // only vertical sum
      sumHour = sumHour + cities[j].arrayPurchasedCookiesInADay[i];

      // total of totals
      sumHourTotal = sumHourTotal + cities[j].arrayPurchasedCookiesInADay[i];
    }

    tdVerticalTotals.textContent = sumHour;
    tr.append(tdVerticalTotals);
  }

  /* render sum of total of totals */
  var tdTotalTotals = document.createElement('td');
  tdTotalTotals.textContent = sumHourTotal + ' total cookies sold';
  tr.append(tdTotalTotals);

  domReference.append(tr);
}

// render whole table function: header, body, footer
var renderTable = function () {
  // anchor to HTML and start a div for a table
  var divForTable = document.getElementById('div-for-table');
  var tableCreate = document.createElement('table');

  // set table element to have id of table to append tr/tds to and also CSS reference
  tableCreate.setAttribute("id", "table"); // ?

  // add table to reference HTML
  divForTable.append(tableCreate);

  // anchor JS to this table
  var table = document.getElementById('table');

  // render header, body, footer of table
  renderTableHeader(table);

  for (var cityCounter = 0; cityCounter < cities.length; cityCounter++) {
    var currentCity = cities[cityCounter];

    currentCity.render(table);
  }

  var divider = document.createElement('br');
  table.append(divider);

  renderTableFooter(table);
}

renderTable();