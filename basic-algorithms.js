// Names and Input
var hacker1 = 'Gloria';
console.log ('The driver\'s name is ' + hacker1);
var hacker2 = prompt ('What\'s your name?');
console.log('The navigator\'s name is ' + hacker2);

//Conditionals
//Saber la longitud del nomber del conductor//
//Saber la longitud del nombre del copilo//
//comparación de ambos nombres//
//Si ambos tienen la misma longitud el nombre//
if (hacker1.length > hacker2.length){
    console.log ('The Driver has the longest name, it has ' + hacker1.length + ' characters')
}else if (hacker2.length > hacker1.length){
    console.log ('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')
}else{
    console.log ('wow, you both got equally long names, ' + hacker1.length + ' characters!!')
}
//separar nombre conductor//
var conductor = hacker1.split('');    
console.log (conductor.join(" ").toUpperCase());

//invertir el nombre copiloto//
var copi = hacker2.split('');

var copiloto = copi.reverse();
console.log (copiloto.join(""));

//ordenar alfabeticamente el copiloto y el conductor y si son iguales..//
if( hacker1.toLowerCase() < hacker2.toLowerCase()){
    console.log ('The driver\'s name goes first')
}else if(hacker1.toLowerCase() > hacker2.toLowerCase()){
    console.log ('Yo, the navigator goes first definitely')
}else{
    console.log('What?! You both got the same name?')
}

// Lorem ipsum generator
