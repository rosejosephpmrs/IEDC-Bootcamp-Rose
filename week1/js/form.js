let form = document.forms[0];
let record = document.getElementById("records");
let bal=localStorage.getItem("totalBalance");
form.addEventListener("submit",function(event){
    event.preventDefault()
    //bal= form.className=="earning-form" ? (bal+parseFloat(form.elements[3].value)) : (bal-parseFloat(form.elements[3].value)); 
    let row=document.createElement('tr');
    if(form.className=="earning-form"){
        bal=parseFloat(bal)+parseFloat(form.elements[3].value);
        row.innerHTML="<tr><td>"+form.elements[1].value+"</td><td>"+form.elements[2].value+"</td><td>+ ₹ "+form.elements[3].value+"</td><td>"+form.elements[4].value+"</td></tr>";
    }
    else{
        bal-=parseFloat(form.elements[3].value);
        row.innerHTML="<tr><td>"+form.elements[1].value+"</td><td>"+form.elements[2].value+"</td><td>- ₹ "+form.elements[3].value+"</td><td>"+form.elements[4].value+"</td></tr>";
    }
    //row.innerHTML="<tr><td>"+form.elements[1].value+"</td><td>"+form.elements[2].value+"</td><td>+ ₹ "+form.elements[3].value+"</td><td>"+form.elements[4].value+"</td></tr>";
    record.append(row);
    localStorage.setItem("totalBalance",bal);
    form.reset();
    console.log(bal);
})
