'use strict'
class Game{
  constructor(){


    let workersparsejson = JSON.parse(localStorage.getItem("workers") || '[{"name":"salesman","amount":0,"cost":50},{"name":"lemonadestand","amount":0,"cost":250},{"name":"greengrocers","amount":0,"cost":1000},{"name":"shop","amount":0,"cost":5000},{"name":"supermarket","amount":0,"cost":25000},{"name":"corporation","amount":0,"cost":100000}]');

    this.coins = parseInt(localStorage.getItem("coins"));
    this.workers = [workersparsejson[0].amount,workersparsejson[1].amount,workersparsejson[2].amount,workersparsejson[3].amount,workersparsejson[4].amount,workersparsejson[5].amount];

    setInterval(()=>{this.tick();}, 1000);

    console.log(workersparsejson);
    console.log(this.coins);

  }

  tick(){
    document.getElementById('coinsAmount').innerHTML = '$' +Math.floor(this.coins);

    let coinspersec = Math.floor(
      this.workers[0]*shop.avaiable[0].production+
      this.workers[1]*shop.avaiable[1].production+
      this.workers[2]*shop.avaiable[2].production+
      this.workers[3]*shop.avaiable[3].production+
      this.workers[4]*shop.avaiable[4].production+
      this.workers[5]*shop.avaiable[5].production
    );

    document.getElementById('coinspersec').innerHTML = '$'+coinspersec+'/sec';

    localStorage.setItem("coins", this.coins);
    this.coins += coinspersec;


    let workerstosave = [
      {
        name: 'salesman',
        amount: this.workers[0],
        cost: shop.avaiable[0].price
      },
      {
        name: 'lemonadestand',
        amount: this.workers[1],
        cost: shop.avaiable[1].price
      },
      {
        name: 'greengrocers',
        amount: this.workers[2],
        cost: shop.avaiable[2].price
      },
      {
        name: 'shop',
        amount: this.workers[3],
        cost: shop.avaiable[3].price
      },
      {
        name: 'supermarket',
        amount: this.workers[4],
        cost: shop.avaiable[4].price
      },
      {
        name: 'corporation',
        amount: this.workers[5],
        cost: shop.avaiable[5].price
      }
    ];


    let workersjson = JSON.stringify(workerstosave);
    localStorage.setItem("workers", workersjson);

  }//tick()


  addCoin(clickPower) {

    let addcoinBtn = document.getElementById('addCoin');

    addcoinBtn.addEventListener('click', () => {
      this.coins++;


  });

  }
} //class Game

class Shop {
  constructor() {
    this.avaiable = [
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
  }

  buy(itemId){
    if(this.avaiable[itemId].price <= game.coins){
      game.workers[itemId]++;
      game.coins-=this.avaiable[itemId].price;
      this.avaiable[itemId].price = this.avaiable[itemId].price + this.avaiable[itemId].price*0.6;
      return true;
    }else{
      document.getElementById('coinsAmount').classList.add('error');
      setInterval(function () {
        document.getElementById('coinsAmount').classList.remove('error');
      }, 1000);
    }
  }

  buyWorkers() {

    //btns

    let shopnames = ['salesman', 'lemonadestand', 'greengrocers', 'shop', 'supermarket', 'corporation'],
        buyingbtn = [],
        amounts = [],
        costs = [];


    for ( let i = 0; i<shopnames.length; i++ ) {

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
      let workersparsejson = JSON.parse(localStorage.getItem("workers"));
      amounts[i].innerText = '#'+ workersparsejson[i].amount;
      costs[i].innerText = workersparsejson[i].cost;
    }

  }
} // class Shop





let game = new Game(),
    shop = new Shop();


game.addCoin(1);

shop.buyWorkers();

