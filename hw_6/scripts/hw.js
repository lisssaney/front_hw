// const product={name:"Milk", price: 1.20, amount:240}; - object 
// const products=[{name:"Milk", price: 1.20, amount:240}, {name:"Bread", price: 2.30, amount:350},

// alert("The total value of " + product.name + " : " + (product.price * product.amount) ); - properties

const product = {
    
    initValues: function(name, price, amount, ex_date){

    this.name=name;
    this.price=price;
    this.amount=amount;
    this.ex_date = ex_date;
    },
    
    totalValue: () => product.price * product.amount,

    checkPrice: (refPrice) => (product.price<=refPrice) ? "Reasonable" : "Expensive",
    
    expiry_Check: function()
    {
        let check_Date = new Date;
        if (check_Date.getFullYear() > year)
            alert("The product is expired!");
        else if ((check_Date.getMonth() + 1) > month && check_Date.getFullYear() == year)
            alert("The product is expired!");
        else if (check_Date.getDate() > day && (check_Date.getMonth() + 1) == month && check_Date.getFullYear() == year)
            alert("The product is expired!");
        else
            alert("The product is NOT expired ;))" + check_Date.getDate() + check_Date.getMonth() + check_Date.getFullYear());
    }

    };
    
    
    let productName=prompt("Enter product name", "Milk");
    let productPrice=prompt("Enter product price", 1.20);
    let productAmount = prompt("Enter product amount", 50);

    var day = 28;
    var month = 11;
    var year = 2022;

    let ex_Date = day + "." + month + "." + year;
    
    product.initValues(productName, productPrice, productAmount, ex_Date);
    
    
    //Here we define a reference price
    let referencePrice=1.5;
    
    //Here we call the object method and pass an argument to it
    alert(`The price of ${product["name"]} is ${product["price"]}, which is: ${product.checkPrice(referencePrice)}. Its total value is ${product.totalValue()}. `);
    
    alert("The expiry date is " + product.ex_date);
    product.expiry_Check();