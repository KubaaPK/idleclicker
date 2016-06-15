'use strict'
class Game{
  constructor(){
    this.coins = 250000;
    this.workers = [0,0,0,0,0,0];
    setInterval(()=>{this.tick();}, 1000);

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

    this.coins += coinspersec;
  }

  addCoin(clickPower) {

    let addcoinBtn = document.getElementById('addCoin');

    addcoinBtn.addEventListener('click', () => {
      this.coins++;
  });

  }
}

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
      amounts[i].innerText = '#'+0;
      costs[i].innerText = this.avaiable[i].price;
    }

  }
}





let game = new Game(),
    shop = new Shop();


game.addCoin(1);
shop.buyWorkers();

