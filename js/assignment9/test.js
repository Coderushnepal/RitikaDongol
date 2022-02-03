document.body.style.background="#f7f7f7";
document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.alignItems="center";
document.body.style.justifyContent="center";
document.body.style.minHeight="100vh";
document.body.style.margin="0";
document.body.style.padding="0";



//creating heading
var heading = document.createElement("h2");
heading.innerHTML="Expense Tracker";
document.body.appendChild(heading);

//creating container
var wrapper = document.createElement("div");
wrapper.classList.add("container");
document.body.appendChild(wrapper);

wrapper.style=`
    margin:10px auto;
    width:350px;
`

var balance = document.createElement("h4");
balance.innerHTML="Your Balance";
wrapper.appendChild(balance);

balance.style=`
    margin:0;
    text-tranform:uppercase;
`

// var showBalance = document.createElement("h1");
// showBalance.innerHTML="$0.00";
// wrapper.appendChild(showBalance);

income = 0;
expense=0;
var amount = income - expense;
var showBalance = document.createElement("h1");
showBalance.innerHTML = "$" + amount + ".00";
showBalance.style.fontSize = "32px";
showBalance.style.margin = "0";
wrapper.appendChild(showBalance);


//div for inc-exp
var incExp = document.createElement("div");
incExp.classList.add("inc-exp-container");
wrapper.appendChild(incExp);

incExp.style=`
background-color: #fff;
box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
padding: 20px;
display: flex;
justify-content: space-between;
margin: 10px 0;
`

var incomeDiv = document.createElement("div");
incExp.appendChild(incomeDiv);

var incomeHeading = document.createElement("h4");
incomeHeading.innerHTML="Income";
incomeDiv.appendChild(incomeHeading);




var incomeAmount = document.createElement('span');
incomeAmount.innerHTML = "$" + income + ".00";
incomeAmount.style.fontSize = "18px";
incomeAmount.style.color = "#38cf8a";
incomeDiv.appendChild(incomeAmount);

var expenseDiv = document.createElement("div");
incExp.appendChild(expenseDiv);

var expenseHeading = document.createElement("h4");
expenseHeading.innerHTML="Expense";
expenseDiv.appendChild(expenseHeading);


var expenseAmount = document.createElement('span');
expenseAmount.innerHTML = "$" + expense + ".00";
expenseAmount.style.fontSize = "18px";
expenseAmount.style.color = "#c23f2b";
expenseDiv.appendChild(expenseAmount);

var historyHeading = document.createElement("h3");
historyHeading.innerHTML="History";
wrapper.appendChild(historyHeading);


var list = document.createElement("ul");
list.setAttribute("id","list");
list.classList.add("list");
wrapper.appendChild(list);

var add = document.createElement("h3");
add.innerHTML="Add new Transaction";
wrapper.appendChild(add);

var commonStyling = [historyHeading, add];
commonStyling.forEach(function (item) {
    item.style.borderBottom= "1px solid #c2c2c2";
    item.style.paddingBottom= "10px"; 
    item.style.margin= "30px 0 10px";
    item.style.fontWeight= "bolder";
    item.style.fontSize= "22px";
     
 });

 

 var formCon = document.createElement("form");
 formCon.setAttribute("id","form");
 wrapper.appendChild(formCon);

 
var formFields = [
    {
        label: "Text",
        type: "text",
        id: "text",
        placeholder: "Enter text..."
    },
    {
        label: "Amount <br/>(negative - expense, positive - income)",
        type: "number",
        id: "amount",
        placeholder: "Enter amount..."
    },
]

formFields.forEach(function (value) {
    var formField = document.createElement("div");
    formField.className = "form-control";
    formCon.appendChild(formField);

    var labelField = document.createElement("label");
    labelField.innerHTML = value.label;
    formField.appendChild(labelField);

    var inputField = document.createElement("input");
    inputField.type = value.type;
    inputField.id = value.id;
    inputField.placeholder = value.placeholder;
    formField.appendChild(inputField);
    

    formField.style = 
    `
        margin-bottom: 10px;
    `;

    labelField.style = 
    `
        display: inline-block;
        margin: 10px 0px;
    `;

    inputField.style = 
    `
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    `;
    
});

//button
var submitBtn = document.createElement("button");
submitBtn.innerHTML="Add Transaction";
submitBtn.classList.add("submitbtn");
submitBtn.setAttribute('type','button');
formCon.appendChild(submitBtn);

submitBtn.style=`
cursor: pointer;
background-color: #9c88ff;
color: #fff;
border: 0;
display: block;
font-size: 16px;
margin: 10px 0 30px;
padding: 10px 100px;
width: 100%;
`



//function to calculate

// submitBtn.addEventListener('click', function(e)
// {
//     text = document.getElementById('text');
//     console.log(text.value);
//     amount = document.getElementById('amount');
//     console.log(amount.value);

//     amountValue = amount.value;
//     amountValue = parseInt(amountValue);
 
//     var amountString = amountValue.toString();
//     var amountSplit = amountString.split('');
//     var amountSign = amountSplit[0];

//     if(text.value == "" || amount.value == ""){
//         window.alert("Please enter both fields");
//         income = 0;
//         expense = 0;
//     }
//     else{
        
//         if(amountSign === '-'){

//             expense = amountValue;
//             expenseAmount.innerHTML = "$" + expense + ".00";
//             console.log("Expense: " + expense);
//         }
//         else{
//             income = amountValue;
//             incomeAmount.innerHTML = "$" + income + ".00";
//             console.log("Income : " + income);
    
//         }
    
//         amount = income + expense;
//         showBalance.innerHTML = "$" + amount + ".00";
//         amount.value ="";
//         text.value ="";
        
//     }


    

// });
