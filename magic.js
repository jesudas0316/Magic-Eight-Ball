let username='jesudas';
username ?console.log(`hello, ${username}!`):console.log('Hello!');
let userQuestion="What is magic eight ball";
console.log(`${userQuestion} asked by ${username}`);
let randomNumber;
randomNumber=Math.floor(Math.random()*8);
console.log(randomNumber);
let eightBall=" ";
eightBall=randomNumber;

switch(eightBall)
{
  case 0:
     eightBall='It is certain';
     break;
  case 1:
    eightBall='It is decidedly so';
    break;
  case 2:
    eightBall='Reply hazy try again';
    break;
  case 3:
    eightBall='Cannot predict now';
    break;
    case 4:
    eightBall='Do not count on it';
    break;
    case 5:
    eightBall='My sources say no';
    break;
    case 6:
    eightBall='Outlook not so good';
    break;
    case 7:
    eightBall='Signs point to yes';
    break;
    default:
    console.log('invalid number');
    break;  
       
}
console.log(`The eight ball answered:${eightBall}`);

