'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = {
    location: "Seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    customers: [],
    avgCustomers: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
        }
    },
    cookies: [],
    cookiesPurchased: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customers[j] * this.avg));
        }
    },
    sum: 0,
    cookiesSum: function () {
        var sumation = 0 ;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i]

        }
        this.sum = sumation
    },
    render: function () {
        var divE1 = document.createElement('div');
        console.log(divE1);
        document.body.appendChild(divE1);
        divE1.setAttribute('id','SeattleStore')
        var container =  document.getElementById('SeattleStore');
        var h2E1 = document.createElement('h2');
        container.appendChild(h2E1);
        h2E1.textContent = this.location;
       var ulE1 = document.createElement('ul');
       container.appendChild(ulE1);
       for(var i =0; i<this.cookies.length ; i++) {
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
           liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
       }
       
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = `Total: ${this.sum} cookies`;


         console.log(container);
    }



}

seattle.avgCustomers();
seattle.cookiesPurchased();
seattle.cookiesSum();
seattle.render();
console.log(seattle);

var tokyo = {
    location: "Tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    customers: [],
    avgCustomers: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
        }
    },
    cookies: [],
    cookiesPurchased: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customers[j] * this.avg));
        }
    },
    sum: 0,
    cookiesSum: function () {
        var sumation = 0 ;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i]

        }
        this.sum = sumation
    },
    render: function () {
        var divE1 = document.createElement('div');
        console.log(divE1);
        document.body.appendChild(divE1);
        divE1.setAttribute('id','TokyoStore')
        var container =  document.getElementById('TokyoStore');
        var h2E1 = document.createElement('h2');
        container.appendChild(h2E1);
        h2E1.textContent = this.location;
       var ulE1 = document.createElement('ul');
       container.appendChild(ulE1);
       for(var i =0; i<this.cookies.length ; i++) {
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
           liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
       }
       
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = `Total: ${this.sum} cookies`;


         console.log(container);
    }




}
tokyo.avgCustomers();
tokyo.cookiesPurchased();
tokyo.cookiesSum();
tokyo.render();
console.log(tokyo);


var dubai = {
    location: "Dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    customers: [],
    avgCustomers: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
        }
    },
    cookies: [],
    cookiesPurchased: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customers[j] * this.avg));
        }
    },
    sum: 0,
    cookiesSum: function () {
        var sumation = 0 ;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i]

        }
        this.sum = sumation
    },
    render: function () {
        var divE1 = document.createElement('div');
        console.log(divE1);
        document.body.appendChild(divE1);
        divE1.setAttribute('id','dubaiStore')
        var container =  document.getElementById('dubaiStore');
        var h2E1 = document.createElement('h2');
        container.appendChild(h2E1);
        h2E1.textContent = this.location;
       var ulE1 = document.createElement('ul');
       container.appendChild(ulE1);
       for(var i =0; i<this.cookies.length ; i++) {
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
           liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
       }
       
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = `Total: ${this.sum} cookies`;


         console.log(container);
    }




}
dubai.avgCustomers();
dubai.cookiesPurchased();
dubai.cookiesSum();
dubai.render();
console.log(dubai);

var paris = {
    location: "Paris",
    min: 20,
    max: 38,
    avg: 2.3,
    customers: 0,
    customers: [],
    avgCustomers: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
        }
    },
    cookies: [],
    cookiesPurchased: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customers[j] * this.avg));
        }
    },
    sum: 0,
    cookiesSum: function () {
        var sumation = 0 ;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i]

        }
        this.sum = sumation
    },
    render: function () {
        var divE1 = document.createElement('div');
        console.log(divE1);
        document.body.appendChild(divE1);
        divE1.setAttribute('id','parisStore')
        var container =  document.getElementById('parisStore');
        var h2E1 = document.createElement('h2');
        container.appendChild(h2E1);
        h2E1.textContent = this.location;
       var ulE1 = document.createElement('ul');
       container.appendChild(ulE1);
       for(var i =0; i<this.cookies.length ; i++) {
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
           liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
       }
       
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = `Total: ${this.sum} cookies`;


         console.log(container);
    }




}
paris.avgCustomers();
paris.cookiesPurchased();
paris.cookiesSum();
paris.render();
console.log(paris);

var lima = {
    location: "Lima",
    min: 2,
    max: 16,
    avg: 4.6,
    customers: [],
    avgCustomers: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customers.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
        }
    },
    cookies: [],
    cookiesPurchased: function () {
        for (var j = 0; j < hours.length; j++) {
            this.cookies.push(Math.floor(this.customers[j] * this.avg));
        }
    },
    sum: 0,
    cookiesSum: function () {
        var sumation = 0 ;
        for (var i = 0; i < this.cookies.length; i++) {
            sumation = sumation + this.cookies[i]

        }
        this.sum = sumation
    },
    render: function () {
        var divE1 = document.createElement('div');
        console.log(divE1);
        document.body.appendChild(divE1);
        divE1.setAttribute('id','limaStore')
        var container =  document.getElementById('limaStore');
        var h2E1 = document.createElement('h2');
        container.appendChild(h2E1);
        h2E1.textContent = this.location;
       var ulE1 = document.createElement('ul');
       container.appendChild(ulE1);
       for(var i =0; i<this.cookies.length ; i++) {
           var liE1 = document.createElement('li');
           ulE1.appendChild(liE1);
           liE1.textContent = `${hours[i]}: ${this.cookies[i]} cookies`;
       }
       
       var liE1 = document.createElement('li');
       ulE1.appendChild(liE1);
       liE1.textContent = `Total: ${this.sum} cookies`;


         console.log(container);
    }
 



}
lima.avgCustomers();
lima.cookiesPurchased();
lima.cookiesSum();
lima.render();
console.log(lima);