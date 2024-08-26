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

names.forEach((name, index) => {
    console.log("The length of" + name + " is: " + name.length )
    if (name.length > longest_name.length) {
        longest_name = name;

    }
});

console.log("The longest name is:", longest_name);
