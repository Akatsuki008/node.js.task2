//for loops

/*for (let i = 0; i < 5; i++) {
    console.log('in loop:',i);
    
}
console.log('loop finished'); */

/*const names= ['shuan','mario','luigi'];
for (let i = 0; i < names.length; i++) 
{
    //console.log(i); 
    //console.log(names[i]); 
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
*/
//while loops

const names = ['shaun','mario','luigi'];
//let i = 0;
//while (i < 5) {
//    console.log('in loop:',i);
//    i++;
//}

/*let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++ ;
}*/

let i = 5;
do {
    console.log('val of i is : ',i);
    i++;
} while (i<5);

//if statement

const age = 25 ;
if (age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun','ryu','chun-li','yoshi'];
if (ninjas.length> 3) {
    console.log("thats' a lot of ninjas.")   
}


const password = 'p@ss12';

/*if(password.length >= 12){
    console.log('That password is might strong enough');
}
else if(password.length >= 8){
    console.log('That password is long enough');
}
else{
    console.log('That password is not long enough');
}*/

//logical operators- OR || and AND &&

if(password.length >= 12 && password.includes('@')){
    console.log('That password is might strong enough');
}

else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('That password is long enough');
}

else{
    console.log('That password is not long enough');
}
// logical not

let user = false;
if (!user) {
    console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);

const scores = [50,25,0,30,100,20,10]

for (let i = 0; i < scores.length; i++) {

    if (scores[i]===0) {
        continue;
    }
    console.log('your score: ',scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score');
        break ;
    }
}

const grade = 'D';

//using if statement

switch (grade){
    case 'A':
        console.log('You got an A!');
        break; 
    case 'B':
        console.log('You got an B!');
        break; 
    case 'C':
        console.log('You got an C!');
        break; 
    case 'D':
        console.log('You got an D!');
        break; 
    case 'E':
        console.log('You got an E!');
        break; 
    default:
        console.log('not a valid grade');
}

let age1 = 30;
age1 = 50;
if(true){
     let age1 = 40;
     let name = 'Shaun'
    console.log('inside code block: ',age1, name);
}
console.log('outside code block: ',age1,name);