'use strict'
class Game{
  constructor(){
<<<<<<< HEAD


    let workersparsejson = JSON.parse(localStorage.getItem("workers") || '[{"name":"salesman","amount":0,"cost":50},{"name":"lemonadestand","amount":0,"cost":250},{"name":"greengrocers","amount":0,"cost":1000},{"name":"shop","amount":0,"cost":5000},{"name":"supermarket","amount":0,"cost":25000},{"name":"corporation","amount":0,"cost":100000}]');

    this.coins = parseInt(localStorage.getItem("coins") || 'coins: 0');
    this.workers = [workersparsejson[0].amount,workersparsejson[1].amount,workersparsejson[2].amount,workersparsejson[3].amount,workersparsejson[4].amount,workersparsejson[5].amount];

=======
    this.coins = 250000;
    this.workers = [0,0,0,0,0,0];
>>>>>>> master
    setInterval(()=>{this.tick();}, 1000);



  }

  tick(){
    document.getElementById('coinsAmount').innerHTML = '$' +Math.floor(this.coins);

    let coinspersec = Math.floor(
<<<<<<< HEAD
      this.workers[0]*shop.avaiableWorkers[0].production+
      this.workers[1]*shop.avaiableWorkers[1].production+
      this.workers[2]*shop.avaiableWorkers[2].production+
      this.workers[3]*shop.avaiableWorkers[3].production+
      this.workers[4]*shop.avaiableWorkers[4].production+
      this.workers[5]*shop.avaiableWorkers[5].production
=======
      this.workers[0]*shop.avaiable[0].production +
      this.workers[1]*shop.avaiable[1].production +
      this.workers[2]*shop.avaiable[2].production +
      this.workers[3]*shop.avaiable[3].production +
      this.workers[4]*shop.avaiable[4].production +
      this.workers[5]*shop.avaiable[5].production
>>>>>>> master
    );

    document.getElementById('coinspersec').innerHTML = '$'+coinspersec+'/sec';

    localStorage.setItem("coins", this.coins);
    this.coins += coinspersec;


    let workerstosave = [
      {
        name: 'salesman',
        amount: this.workers[0],
        cost: shop.avaiableWorkers[0].price
      },
      {
        name: 'lemonadestand',
        amount: this.workers[1],
        cost: shop.avaiableWorkers[1].price
      },
      {
        name: 'greengrocers',
        amount: this.workers[2],
        cost: shop.avaiableWorkers[2].price
      },
      {
        name: 'shop',
        amount: this.workers[3],
        cost: shop.avaiableWorkers[3].price
      },
      {
        name: 'supermarket',
        amount: this.workers[4],
        cost: shop.avaiableWorkers[4].price
      },
      {
        name: 'corporation',
        amount: this.workers[5],
        cost: shop.avaiableWorkers[5].price
      }
    ];

<<<<<<< HEAD

    let workersjson = JSON.stringify(workerstosave);
    localStorage.setItem("workers", workersjson);

  }//tick()


  addCoin(clickPower) {

    let addcoinBtn = document.getElementById('addCoin');
    this.clickPower = clickPower;

    addcoinBtn.addEventListener('click', () => {
      this.coins = this.coins + clickPower;


  });

  }
} //class Game

class Shop {
  constructor() {
    this.avaiableWorkers = [
      {
        name: 'salesman',
        production: 1,
        price: 50
      },
      {
        name: 'lemonadestand',
        production: 5,
        price: 250
      },
      {
        name: 'greengrocers',
        production: 20,
        price: 1000
      },
      {
        name: 'shop',
        production: 100,
        price: 5000
      },
      {
        name: 'supermarket',
        production: 250,
        price: 25000
      },
      {
        name: 'corporation',
        production: 500,
        price: 100000
      }
    ];

    this.avaiableUpgrades = [
      {
        name: 'doubleclick',
        price: 100,
        clickpower: 2
      },
      {
        name: 'tripleclick',
        price: 500,
        clickpower: 3
      }
=======
    addcoinBtn.addEventListener('click', () => {
      this.coins++;
    });
    
  }
}

class Shop {
  constructor() {
    this.avaiable = [

    {name: 'salesman', production: 1, price: 50},
    {name: 'lemonadestand', production: 5, price: 250},
    {name: 'greengrocers', production: 20, price: 1000},
    {name: 'shop', production: 100, price: 5000},
    {name: 'supermarket', production: 250, price: 25000},
    {name: 'corporation', production: 500, price: 100000}
>>>>>>> master
    ];


  }



  buyWorker(itemId){
    if(this.avaiableWorkers[itemId].price <= game.coins){
      game.workers[itemId]++;
<<<<<<< HEAD
      game.coins-=this.avaiableWorkers[itemId].price;
      this.avaiableWorkers[itemId].price = this.avaiableWorkers[itemId].price + this.avaiableWorkers[itemId].price*0.6;
=======
      game.coins-=this.avaiable[itemId].price;
      this.avaiable[itemId].price = this.avaiable[itemId].price + this.avaiable[itemId].price*0.6;
>>>>>>> master
      return true;
    }else{
      document.getElementById('coinsAmount').classList.add('error');
      setInterval(function () {
        document.getElementById('coinsAmount').classList.remove('error');
      }, 1000);
    }
  }

  buyUpgrade(upgradeId) {
    if(this.avaiableUpgrades[upgradeId].price <=game.coins) {
      game.coins = game.coins - this.avaiableUpgrades[upgradeId].price;

      console.log("upgrade bought");
      return true;
    } else {
      console.log("not enough money");
    }
  }

<<<<<<< HEAD

  buyWorkers() {

    //btns
=======
    //btns

    let shopnames = ['salesman', 'lemonadestand', 'greengrocers', 'shop', 'supermarket', 'corporation'],
        buyingbtn = [],
        amounts = [],
        costs = [];
>>>>>>> master

    let shopnames = ['salesman', 'lemonadestand', 'greengrocers', 'shop', 'supermarket', 'corporation'],
        buyingbtn = [],
        amounts = [],
        costs = [];

    for ( let i = 0; i<shopnames.length; i++ ) {
<<<<<<< HEAD

      buyingbtn[i] = document.getElementById('buy'+shopnames[i]+'Btn');
      amounts[i] = document.getElementById(shopnames[i]+'amount');
      costs[i] = document.getElementById(shopnames[i]+'cost');

      buyingbtn[i].addEventListener('click', () =>{
        shop.buyWorker(i);
        amounts[i].innerText = '#' +game.workers[i];
        costs[i].innerText = Math.floor(this.avaiableWorkers[i].price);
      });

    }
    for ( let i = 0; i<shopnames.length; i++ ) {
      let workersparsejson = JSON.parse(localStorage.getItem("workers"));
      amounts[i].innerText = '#'+ workersparsejson[i].amount;
      costs[i].innerText = workersparsejson[i].cost;
    }
  }

  buyUpgrades() {
    let doubleclickpowerBtn = document.getElementById('doubleclickpower');

    doubleclickpowerBtn.addEventListener('click', ()=>{

      shop.buyUpgrade(0);
      let upgradesjson = JSON.stringify(this.avaiableUpgrades);

      localStorage.setItem("upgrades", upgradesjson);


    });

  }



} // class Shop
=======

      buyingbtn[i] = document.getElementById('buy'+shopnames[i]+'Btn');
      amounts[i] = document.getElementById(shopnames[i]+'amount');
      costs[i] = document.getElementById(shopnames[i]+'cost');

      buyingbtn[i].addEventListener('click', () =>{
        shop.buy(i);
        amounts[i].innerText = '#' +game.workers[i];
        costs[i].innerText = Math.floor(this.avaiable[i].price);
      });
    }


    for ( let i = 0; i<shopnames.length; i++ ) {
      amounts[i].innerText = '#'+0;
      costs[i].innerText = this.avaiable[i].price;
    }

  }
}
>>>>>>> master





let game = new Game(),
    shop = new Shop();


let upgradeJson = JSON.parse(localStorage.getItem("upgrades"));

console.log(upgradeJson[0].clickpower);

game.addCoin(upgradeJson[0].clickpower);

shop.buyWorkers();
shop.buyUpgrades();

