// STUDENT OBJECTS
const mobile = [
    // OBJECT FOR STUDENT 1
    {
        brand : "vivo",
        price  : 20000,
        colour : "purple",
    },
    {
        brand : "Samsung",
        price : 2500000,
        colour : "Red",
    },
    {
        brand : "Apple",
        price : 670000,
        colour : "Blue",
    },
];

// ACESSING WAYS
// IF U NEED TO ACESS WE NEED TO SINGLE SINGLE OBJECTS THEN FOLLOW THIS LINE'S ACESSED USING INDEX NUMBERS
console.log(mobile[2])
 // IF U NEED TO ACESS WE NEED TO SINGLE OBJECTS AND ELEMENTS THEN FOLLOW THIS LINE'S ACESSED USING INDEX NUMBERS
console.log(mobile[1].brand,mobile[1].price,mobile[1].colour);
// IF U NEED TO ACESS ALL THE OBJECTS IN AN ARRAY .THEN U NEED TO USE MAP TECHNIQE
const output = mobile.map((out)=>{
    return console.log(out.brand);
});

