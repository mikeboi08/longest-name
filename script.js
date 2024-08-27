let names = []; 

for (let step = 0; step < 3; step++) {
    let name1 = prompt("ENTER A NAME");
    console.log(name1);
    let result = name1.split(' ').join('');
    console.log(result);
    names.push(result);
}

console.log(names);

let longest_name = "";
let longest_names=[]

names.forEach((name) => {
    console.log("The length of " + name + " is: " + name.length )
   
 if (name.length > longest_name.length) {
        longest_name = name 
        longest_names = [name];

    }
    else if (name.length === longest_name.length){

        longest_names.push(name)
        // add each to its own list and print both ?
        
    }
});
if (longest_names.length >1 && longest_names.length<3){
    console.log("Both "+ longest_names[0] + " and "+ longest_names[1] + " are the longest names ")
}else if (longest_names.length === 3){
    console.log("All of the names are the same length")
}else{
    console.log("The longest name is:", longest_name);
}


