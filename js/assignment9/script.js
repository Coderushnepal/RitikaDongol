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
heading.innerHTML = "Expense Tracker";
document.body.appendChild(heading);

//creating container
var container = document.createElement("div");
document.body.appendChild(container);

container.style = `
    margin:10px auto;
    width:350px;
`;

//
var yourBalance = document.createElement("h4");
yourBalance.innerHTML = "Your Balance";
container.appendChild(yourBalance);

yourBalance.style=`
    margin:0;
    text-tranform:uppercase;
`

var showBalance = document.createElement("h1");
var balance = 0.00;
showBalance.innerHTML = `$${balance.toFixed(2)}`;
container.appendChild(showBalance);
showBalance.style.fontSize = "32px";
showBalance.style.margin = "0";

var incExp = document.createElement("div");
incExp.classList.add("inc-exp-container");
container.appendChild(incExp);

incExp.style = `
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

var incomeDiv = document.createElement("div");
incExp.appendChild(incomeDiv);

var incomeHeading = document.createElement("h4");
incomeHeading.innerHTML="Income";
incomeDiv.appendChild(incomeHeading);


var incomeAmount = document.createElement("p");
var income = 0.00;
incomeAmount.innerHTML = `$${income.toFixed(2)}`;
incomeDiv.appendChild(incomeAmount); 
incomeAmount.style = `
    color: #2ecc71;
    font-size: 20px;
    varter-spacing: 1px;
    margin: 5px 0;
`;

var expenseDiv = document.createElement("div");
incExp.appendChild(expenseDiv);

var expenseHeading = document.createElement("h4");
expenseHeading.innerHTML="Expense";
expenseDiv.appendChild(expenseHeading);

var expenseAmount = document.createElement("p");
var expense = 0.00;
expenseAmount.innerHTML = `$${expense.toFixed(2)}`;
expenseDiv.appendChild(expenseAmount); 

expenseAmount.style = `
    color: #c0392b;
    font-size: 20px;
    varter-spacing: 1px;
    margin: 5px 0;
`;

var historyHeading = document.createElement("h3");
historyHeading.innerHTML="History";
container.appendChild(historyHeading);


var list = document.createElement("ul");
list.setAttribute("id","list");
list.classList.add("list");
container.appendChild(list);

list.style=`
    list-style: none;
    padding: 0;
`

var add = document.createElement("h3");
add.innerHTML="Add new Transaction";
container.appendChild(add);

var commonStyling = [historyHeading, add];
commonStyling.forEach(function (item) {
    item.style.borderBottom= "1px solid #c2c2c2";
    item.style.paddingBottom= "10px"; 
    item.style.margin= "30px 0 10px";
    item.style.fontWeight= "bolder";
    item.style.fontSize= "22px";
     
 });

var form = document.createElement("div");
container.appendChild(form);

var text = document.createElement("label");
text.innerHTML = "Text";
form.appendChild(text);
text.style = `
    display: inline-block;
    margin: 10px 0;
`;

var textInput = document.createElement("input");
form.appendChild(textInput);
textInput.setAttribute("type", "text");
textInput.setAttribute("placeholder", "Enter text...");
textInput.style = `
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 94%;
`;

var amountText = document.createElement("label");
form.appendChild(amountText);
amountText.innerHTML = "Amount <br> (negative - expense, positive - income)";
amountText.style = `
    display: inline-block;
    margin: 10px 0;
`;

var amountInput = document.createElement("input");
form.appendChild(amountInput);
amountInput.setAttribute("type", "number");
amountInput.setAttribute("placeholder", "Enter amount...");
amountInput.style = `
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 94%;
`;


var submitBtn = document.createElement("button");
submitBtn.innerHTML = "Add transaction";
form.appendChild(submitBtn);

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

function updateBalance() {
    var balance = income + expense;
    showBalance.innerHTML = `$${balance.toFixed(2)}`;
}

var transactions = [];
var id = 0;

function removeTransaction(amountRemove) {
    if (amountRemove > 0) {
        income -= amountRemove;
        incomeAmount.innerHTML = `$${income.toFixed(2)}`;
    }
    else {
        expense -= amountRemove;
        expenseAmount.innerHTML = `$${expense.toFixed(2) * (-1)}`;
    }
    updateBalance();

    transactions = transactions.filter(
        (transaction) => transaction.id != id
    );
};

function addTransaction(id, textInput, amountInput) {
    const transaction = {
        id: id,
        text: textInput,
        amount: amountInput,
    };
    transactions.push(transaction);

    var listItem = document.createElement("li");
    listItem.innerHTML = `
        ${transaction.text}
    `;

    list.appendChild(listItem);
    listItem.style = `
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        color: #333;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin: 10px 0;
    `;

    var sign = '';
    if(transaction.amount > 0) {
        sign = '+';
        listItem.style.borderRight = "5px solid #2ecc71";
    }
    else  {listItem.style.borderRight = "5px solid #e74c3c"};

    var amountHistory = document.createElement("span");
    amountHistory.innerHTML = `${sign}${transaction.amount}`;
    amountHistory.style = `
        position: absolute;
        right: 12px;
    `;
    listItem.appendChild(amountHistory);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style = `
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    listItem.appendChild(deleteButton);

    listItem.addEventListener("mouseover", function(event) {
        deleteButton.style = `
            cursor: pointer;
            background-color: #e74c3c;
            border: 0;
            color: #fff;
            font-size: 20px;
            line-height: 20px;
            padding: 2px 5px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-100%, -50%);
        `;
    });

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        console.log("to remove: ",transaction);
        removeTransaction(transaction.amount);
    });

    listItem.addEventListener("mouseout", function(event) {
        deleteButton.style = `
            display: none;
        `;
    });
}

submitBtn.addEventListener('click', function() {
    if (textInput.value == "" ||  amountInput.value == "") {
        window.alert("Please enter both fields");
    }
   
    else {
        
        if (amountInput.value > 0) {
            id++;
            income += parseFloat(amountInput.value);
            incomeAmount.innerHTML = `$${income.toFixed(2)}`;
            updateBalance();
            addTransaction(id, textInput.value, parseFloat(amountInput.value));
        }
        else {
            id++;
            expense += parseFloat(amountInput.value);
            expenseAmount.innerHTML = `$${expense.toFixed(2) * (-1)}`;
            updateBalance();
            addTransaction(id, textInput.value, parseFloat(amountInput.value));
        }
        amountInput.value = "";
        textInput.value = "";
    }
});