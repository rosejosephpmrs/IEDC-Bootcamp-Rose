let balance= document.getElementById("balance");
console.log(balance);
localStorage.setItem("totalBalance",balance.textContent.replace(/[^0-9]/g,''));
console.log(localStorage.getItem("totalBalance"));

