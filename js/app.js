
'use strict'

var Locations = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totalCookies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function Location1(location, min, max, avg) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = [];
    this.cookies = [];
    this.sum = 0;
    Locations.push(this);
    console.log('Locations array', Locations);
}
Location1.prototype.avgCustomers = function () {
    for (var i = 0; i < hours.length; i++) {
        this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    }
}

Location1.prototype.cookiesPurchased = function () {
    for (var j = 0; j < hours.length; j++) {
        this.cookies.push(Math.floor(this.customers[j] * this.avg));
    }

}
Location1.prototype.cookiesSum = function () {
    var sumation = 0;
    for (var i = 0; i < hours.length; i++) {
        sumation = sumation + this.cookies[i];
    }
    this.sum = sumation;
}

Location1.prototype.total = function () {
    for (var i = 0; i < hours.length; i++) {
        totalCookies[i] = totalCookies[i] + this.cookies[i];

    }
    totalCookies[hours.length] += this.sum;
}
Location1.prototype.renderHeader = function () {
    var divE1 = document.createElement('div');
    console.log(divE1);
    document.body.appendChild(divE1);
    divE1.setAttribute('id', 'stores')
    var container = document.getElementById('stores');
    var tableE1 = document.createElement('table');
    container.appendChild(tableE1);
    tableE1.setAttribute('id', 'Table')
    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    for (var i = 0; i < hours.length + 2; i++) {
        var thE = document.createElement('th');
        trE1.appendChild(thE);
        if (i == 0) {
            thE.textContent = ``;
        } else if (i == hours.length + 1) {
            thE.textContent = `Daily Location Total`;
        } else {
            thE.textContent = hours[i - 1];
        }
    }



}
Location1.prototype.renderFooter = function () {
    var table = document.getElementById('Table');
    var trE1 = document.createElement('tr');
    table.appendChild(trE1);
    var tdE1 = document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent = 'Totals';
    for (var i = 0; i < totalCookies.length; i++) {
        var tdE2 = document.createElement('td');
        trE1.appendChild(tdE2);
        tdE2.textContent = `${totalCookies[i]}`;

    }






}
Location1.prototype.render = function () {
    var table = document.getElementById('Table');
    var trE1 = document.createElement('tr');
    table.appendChild(trE1);
    var tdE1 = document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent = this.location;
    for (var i = 0; i < this.cookies.length; i++) {
        var tdE2 = document.createElement('td');
        trE1.appendChild(tdE2);
        tdE2.textContent = `${this.cookies[i]}`;

    }

    var tdE3 = document.createElement('td');
    trE1.appendChild(tdE3);
    tdE3.textContent = `${this.sum}`;



}
var seattle = new Location1('Seattle', 23, 65, 6.3);
var tokyo = new Location1('Tokyo', 3, 24, 1.2);
var dubai = new Location1('Dubai', 11, 38, 3.7);
var paris = new Location1('Paris', 20, 38, 2.3);
var lima = new Location1('Lima', 2, 16, 4.6);

var myform = document.getElementById('place');
console.log(myform);
myform.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var loc = event.target.loc.value;
    console.log(loc);
    var min = event.target.min.value;
    console.log(min);
    var max = event.target.max.value;
    console.log(max);
    var avg = event.target.avg.value;
    if (max < min){
        alert('Please Enter Maximum no of cookies greater than Minumam no')
    }else{
        console.log(avg);
        var placeObj = new Location1(loc, Number(min), Number(max), Number(avg));
    document.getElementById("Table").deleteRow(Locations.length);
    placeObj.avgCustomers();
    placeObj.cookiesPurchased();
    placeObj.cookiesSum();
    placeObj.total();
    placeObj.render();
    placeObj.renderFooter(); alert('the max must be bigger than min')
    }

})




for (var i = 0; i < Locations.length; i++) {
    if (i == 0) {
        Locations[i].renderHeader();
    }
    Locations[i].avgCustomers();
    Locations[i].cookiesPurchased();
    Locations[i].cookiesSum();
    Locations[i].total();
    Locations[i].render();
    if (i == Locations.length - 1) {
        Locations[i].renderFooter();
    }

}
console.log(Locations);



    // var seattle = {
    //     location: "Seattle",
    //     min: 23,
    //     max: 65,
    //     avg: 6.3,
    //     customers: [],
    //     avgCustomers: function () {
    //         for (var i = 0; i < hours.length; i++) {
    //             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    //         }
    //     },
    //     cookies: [],
    //     cookiesPurchased: function () {
    //         for (var j = 0; j < hours.length; j++) {
    //             this.cookies.push(Math.floor(this.customers[j] * this.avg));
    //         }
    //     },
    //     sum: 0,
    //     cookiesSum: function () {
    //         var sumation = 0;
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             sumation = sumation + this.cookies[i]

    //         }
    //         this.sum = sumation
    //     },
    //     render: function () {
    //         var divE1 = document.createElement('div');
    //         console.log(divE1);
    //         document.body.appendChild(divE1);
    //         divE1.setAttribute('id', 'SeattleStore')
    //         var container = document.getElementById('SeattleStore');
    //         var h2E1 = document.createElement('h2');
    //         container.appendChild(h2E1);
    //         h2E1.textContent = this.location;
    //         var ulE1 = document.createElement('ul');
    //         container.appendChild(ulE1);
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             var liE1 = document.createElement('li');
    //             ulE1.appendChild(liE1);
    //             liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    //         }

    //         var liE1 = document.createElement('li');
    //         ulE1.appendChild(liE1);
    //         liE1.textContent = `Total: ${this.sum} cookies`;


    //         console.log(container);
    //     }



    // }

    // seattle.avgCustomers();
    // seattle.cookiesPurchased();
    // seattle.cookiesSum();
    // seattle.render();
    // console.log(seattle);

    // var tokyo = {
    //     location: "Tokyo",
    //     min: 3,
    //     max: 24,
    //     avg: 1.2,
    //     customers: [],
    //     avgCustomers: function () {
    //         for (var i = 0; i < hours.length; i++) {
    //             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    //         }
    //     },
    //     cookies: [],
    //     cookiesPurchased: function () {
    //         for (var j = 0; j < hours.length; j++) {
    //             this.cookies.push(Math.floor(this.customers[j] * this.avg));
    //         }
    //     },
    //     sum: 0,
    //     cookiesSum: function () {
    //         var sumation = 0;
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             sumation = sumation + this.cookies[i]

    //         }
    //         this.sum = sumation;
    //     },
    //     render: function () {
    //         var divE1 = document.createElement('div');
    //         console.log(divE1);













    //         document.body.appendChild(divE1);
    //         divE1.setAttribute('id', 'TokyoStore')
    //         var container = document.getElementById('TokyoStore');
    //         var h2E1 = document.createElement('h2');
    //         container.appendChild(h2E1);
    //         h2E1.textContent = this.location;
    //         var ulE1 = document.createElement('ul');
    //         container.appendChild(ulE1);
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             var liE1 = document.createElement('li');
    //             ulE1.appendChild(liE1);
    //             liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    //         }

    //         var liE1 = document.createElement('li');
    //         ulE1.appendChild(liE1);
    //         liE1.textContent = `Total: ${this.sum} cookies`;


    //         console.log(container);
    //     }




    // }
    // tokyo.avgCustomers();
    // tokyo.cookiesPurchased();
    // tokyo.cookiesSum();
    // tokyo.render();
    // console.log(tokyo);


    // var dubai = {
    //     location: "Dubai",
    //     min: 11,
    //     max: 38,
    //     avg: 3.7,
    //     customers: [],
    //     avgCustomers: function () {
    //         for (var i = 0; i < hours.length; i++) {
    //             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    //         }
    //     },
    //     cookies: [],
    //     cookiesPurchased: function () {
    //         for (var j = 0; j < hours.length; j++) {
    //             this.cookies.push(Math.floor(this.customers[j] * this.avg));
    //         }
    //     },
    //     sum: 0,
    //     cookiesSum: function () {
    //         var sumation = 0;
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             sumation = sumation + this.cookies[i]

    //         }
    //         this.sum = sumation
    //     },
    //     render: function () {
    //         var divE1 = document.createElement('div');
    //         console.log(divE1);
    //         document.body.appendChild(divE1);
    //         divE1.setAttribute('id', 'dubaiStore')
    //         var container = document.getElementById('dubaiStore');
    //         var h2E1 = document.createElement('h2');
    //         container.appendChild(h2E1);
    //         h2E1.textContent = this.location;
    //         var ulE1 = document.createElement('ul');
    //         container.appendChild(ulE1);
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             var liE1 = document.createElement('li');
    //             ulE1.appendChild(liE1);
    //             liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    //         }

    //         var liE1 = document.createElement('li');
    //         ulE1.appendChild(liE1);
    //         liE1.textContent = `Total: ${this.sum} cookies`;


    //         console.log(container);
    //     }




    // }
    // dubai.avgCustomers();
    // dubai.cookiesPurchased();
    // dubai.cookiesSum();
    // dubai.render();
    // console.log(dubai);

    // var paris = {
    //     location: "Paris",
    //     min: 20,
    //     max: 38,
    //     avg: 2.3,
    //     customers: 0,
    //     customers: [],
    //     avgCustomers: function () {
    //         for (var i = 0; i < hours.length; i++) {
    //             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    //         }
    //     },
    //     cookies: [],
    //     cookiesPurchased: function () {
    //         for (var j = 0; j < hours.length; j++) {
    //             this.cookies.push(Math.floor(this.customers[j] * this.avg));
    //         }
    //     },
    //     sum: 0,
    //     cookiesSum: function () {
    //         var sumation = 0;
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             sumation = sumation + this.cookies[i]

    //         }
    //         this.sum = sumation
    //     },
    //     render: function () {
    //         var divE1 = document.createElement('div');
    //         console.log(divE1);
    //         document.body.appendChild(divE1);
    //         divE1.setAttribute('id', 'parisStore')
    //         var container = document.getElementById('parisStore');
    //         var h2E1 = document.createElement('h2');
    //         container.appendChild(h2E1);
    //         h2E1.textContent = this.location;
    //         var ulE1 = document.createElement('ul');
    //         container.appendChild(ulE1);
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             var liE1 = document.createElement('li');
    //             ulE1.appendChild(liE1);
    //             liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    //         }

    //         var liE1 = document.createElement('li');
    //         ulE1.appendChild(liE1);
    //         liE1.textContent = `Total: ${this.sum} cookies`;


    //         console.log(container);
    //     }




    // }
    // paris.avgCustomers();
    // paris.cookiesPurchased();
    // paris.cookiesSum();
    // paris.render();
    // console.log(paris);

    // var lima = {
    //     location: "Lima",
    //     min: 2,
    //     max: 16,
    //     avg: 4.6,
    //     customers: [],
    //     avgCustomers: function () {
    //         for (var i = 0; i < hours.length; i++) {
    //             this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    //         }
    //     },
    //     cookies: [],
    //     cookiesPurchased: function () {
    //         for (var j = 0; j < hours.length; j++) {
    //             this.cookies.push(Math.floor(this.customers[j] * this.avg));
    //         }
    //     },
    //     sum: 0,
    //     cookiesSum: function () {
    //         var sumation = 0;
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             sumation = sumation + this.cookies[i]

    //         }
    //         this.sum = sumation
    //     },
    //     render: function () {
    //         var divE1 = document.createElement('div');
    //         console.log(divE1);
    //         document.body.appendChild(divE1);
    //         divE1.setAttribute('id', 'limaStore')
    //         var container = document.getElementById('limaStore');
    //         var h2E1 = document.createElement('h2');
    //         container.appendChild(h2E1);
    //         h2E1.textContent = this.location;
    //         var ulE1 = document.createElement('ul');
    //         container.appendChild(ulE1);
    //         for (var i = 0; i < this.cookies.length; i++) {
    //             var liE1 = document.createElement('li');
    //             ulE1.appendChild(liE1);
    //             liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
    //         }

    //         var liE1 = document.createElement('li');
    //         ulE1.appendChild(liE1);
    //         liE1.textContent = `Total: ${this.sum} cookies`;


    //         console.log(container);
    //     }




    // }
    // lima.avgCustomers();
    // lima.cookiesPurchased();
    // lima.cookiesSum();
    // lima.render();
    // console.log(lima);