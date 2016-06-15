'use strict'
class Game{
  constructor(){
    this.coins = 250;
    this.workers = [0,0];
    setInterval(()=>{this.tick();}, 1000);

  }



  tick(){
    //console.log('coins: ' +this.coins + ' workers: ' +this.workers[0] + ' machines: ' + this.workers[1]);
    document.getElementById('coinsAmount').innerHTML = '$' +Math.floor(this.coins);

    let coinspersec = Math.floor(this.workers[0]+this.workers[1]*3);
    document.getElementById('coinspersec').innerHTML = '$'+Math.floor(this.workers[0]+this.workers[1]*3)+'/sec';

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

    {name: 'worker', production: 1, price: 25},
    {name: 'machine', production: 3, price: 100}

    ];
  }

  buy(itemId){
    if(this.avaiable[itemId].price <= game.coins){
      game.workers[itemId]++;
      game.coins-=this.avaiable[itemId].price;
      this.avaiable[itemId].price = this.avaiable[itemId].price + this.avaiable[itemId].price*0.3;
      return true;
    }else{
      document.getElementById('coinsAmount').classList.add('error');
      setInterval(function () {
        document.getElementById('coinsAmount').classList.remove('error');
      }, 1000);
    }
  }

  buyWorkers() {

    //buying btns
    let buyworkerBtn = document.getElementById('buyworkerBtn'),
        buymachineBtn = document.getElementById('buymachineBtn');


    //displaying amounts
    let workerAmount = document.getElementById('workeramount'),
        machineAmount = document.getElementById('machineamount');


    //displaying costs
    let workercost = document.getElementById('workercost'),
        machinecost = document.getElementById('machinecost');


    //initial
    workerAmount.innerText = 0;
    machineAmount.innerText = 0;

    workercost.innerText = this.avaiable[0].price;
    machinecost.innerText = this.avaiable[1].price;




    buyworkerBtn.addEventListener('click', ()=> {
      shop.buy(0);
      workerAmount.innerText = '#' +game.workers[0];
      workercost.innerText = Math.floor(this.avaiable[0].price);
    });

    buymachineBtn.addEventListener('click', ()=> {

      shop.buy(1);
      machineAmount.innerText = '#' +game.workers[1];
      machinecost.innerText = Math.floor(this.avaiable[1].price);
    });
  }


}





let game = new Game(),
    shop = new Shop();


game.addCoin(1);
shop.buyWorkers();



