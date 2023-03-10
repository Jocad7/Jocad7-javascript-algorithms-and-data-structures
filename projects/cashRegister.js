const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
    let changeSum = (cash - price) * 100;
    let changeCheck = changeSum;
    let change = [];
    let status = '';
    
    let cidSum = cid
    .flatMap(e=> e[1])
    .reduce((x,y)=>x+y)
    .toFixed(2) * 100;
   
    let cidRev = cid.filter(elem => elem[1] !== 0).reverse();
  
    cidRev.forEach(elem => {
      let curr = elem[0];
      let currSum = elem[1] * 100;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0){
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
    
      }
      if(amount !== 0){
        change.push([curr, amount / 100]);
      }
    });
    if(changeSum > 0){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else if(changeSum == 0 && changeCheck == cidSum){
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';  
    }
    
    return {'status': status, 'change': change}
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 0]]);