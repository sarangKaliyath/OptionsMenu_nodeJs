const { get } = require('http');
const readline = require('readline')


const getNumber = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arr = [];
function start() {

    let print = `Available options:
    1: View Inventory
    2: Add Book
    3: Exit
    `;
    console.log("");
    console.log(print)
    


    getNumber.question("Select an option: ", function (num) {
        

        let temp = Number(num);

        if (temp == 1) {
            fun1();
        }
        else if (temp==2){
            fun2();
        }
        else if (temp == 3) {
            fun3();
        }
        else {
            console.log("");
            let temp = `Please enter a valid option(1/2/3)!
            `
            console.log(temp);
            start();
            
        }
    })
}


function fun1() {

    if (arr.length != 0) {

        console.log("Book in Inventory:")

        arr.map((el, i) => {

            console.log("");
            console.log(`${i+1}: ${el}`);
        })
        console.log(" ");
    }
    else {
        
        let temp = `No book in Inventory!
        `;
        console.log(temp);
    }

    start();
}

function fun2() {
    
    

    getNumber.question("Enter Name of Book:", function (book) {
        
        arr.push(book);
        let temp = `
        Book Added successfully!
        `;
        console.log(temp);

        
        start();
        
    });
    
}

function fun3() {



    getNumber.question("Are you sure you want to quit? (Y/N) : ", function (item) {

        if (item === "Y" || item === "y") {
            getNumber.close();
        }
        else if (item === "N" || item === "n") {
            start();
        }
        else {
            let temp = `
            Enter a valid choice (Y/N)!
            `;
            console.log(temp)
            fun3();
        }

    })

}



start();





getNumber.on("close", function () {
    console.log("");

    console.log("Bye Bye!")
})