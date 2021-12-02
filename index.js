// ex01
// console.log('Srishti gautam');

// ex02
// var readlineSync=require('readline-sync');
// var username=readlineSync.question("May I have your name: ");
// console.log(username);

// ex03 & ex04
/*var username=readlineSync.question("May I have your name: ");
console.log('Welcome '+ username + '!');

// ex05
var useranswer=readlineSync.question('Is my age greater than 25? ');
if(useranswer==='yes')
{
  console.log('right!');

}
else{
  console.log('wrong!');
}
//ex06

var usercity=readlineSync.question('Is my hometown patna? ');
var score=0;
if(usercity==='yes')
{
  console.log('right!');
  score+=1;

}
else
{
  console.log('wrong!');
}
console.log("Your score is : ",score);

// ex07
function usersum(num1,num2)
{
  var sum=num1+num2;
  return sum;
}
var result=usersum(5,6);
console.log("the sum is : " ,result);

// ex08
function family(question,answer)
{
  var useranswer=readlineSync.question(question);
  if(useranswer===answer)
  {
    console.log("You are right!");
    score+=1
  }
  else{
    console.log("You are wrong!");
    score-=1;
  }
  return score;
}
console.log("Updated score : ",family("Do I have a sister? ","yes"));*/
// var new_score=family(userfamily,"yes");
// console.log("Updated score : ",new_score);
/*for(var i=0;i<5;i++)
{
  console.log('Srishti Gautam,'+ i);
}
// homework
var string= "";
for(var k=0;k<5;k++){
  for(var j=0;j<=k;j++){
    string+= "*"
  }
  string+= "\n";
}
// ex10

console.log(string);
var groceryList=["Milk","Bread","Mangoes","Cheese"];*/
//console.log(groceryList[0]);
//console.log(groceryList[2])
//console.log(groceryList[groceryList.length-1]);

// ex11
/*for(var m=0;m<groceryList.length;m++)
{
  console.log(groceryList[m]);
}*/

// ex12
/*var superman=
{
  name:"Superman"
  strength:1000
  color:'Blue'

}
console.log(superman.color);*/
// ex14

/*var readlineSync=require('readline-sync');
var username=readlineSync.question('May I have your name : ');
console.log('Welcome '+ username, 'to DO KNOW ME GAME!!' );
console.log('--------------------------------');
var score=0;
function play(question,answer,highscore)
{
  var useranswer=readlineSync.question(question);
  if(useranswer===answer)
  {
    console.log('Right!!:)');
    score=score+1;
  }
  else{
    console.log('Wrong!!:(');

  }
  console.log("Current score : ",score);
  if(score===highscore)
  {
    console.log('Yayy!! You have beaten the highscore!!');
  }
  console.log('--------------------------------');
  

}
var q1=
{
  question:"What is my birth city? ",
  answer:'patna' 
}
var q2=
{
  question:"What's my favourite outdoor game? ",
  answer: 'basketball'
}
var questionlist=[q1,q2];
for(var i=0;i<questionlist.length;i++)
{
  play(questionlist[i].question,questionlist[i].answer,2);
}*/
const chalk = require('chalk');
var readlineSync=require('readline-sync');
var username=readlineSync.question('May I have your name: ');
console.log(chalk.green('Welcome '+ username.toUpperCase() + ' to FUN QUIZ!!'));
console.log("Rules: " 
+ chalk.blue(" For every correct answer +1 points will be given and for every wrong answer -1 will be deducted.") 
+ chalk.magenta(" \nWrite only the correct option number and press enter."));
console.log('-----------------------------------------------------');
var score=0;
function game(question,option,answer)
{
  console.log(question);
  var useranswer=readlineSync.question(option);
  if(useranswer==answer)
  {
    score+=1;
    console.log(chalk.yellow("You are right:)!!"));
  }
  else{
    score_=1;
    console.log(chalk.red("Oops Wrong:("));
  }
console.log("Current score : ",score);
  if(score===5)
  {
    console.log(chalk.magenta('Yayy!! You have beaten the highscore!!'));
  }
  
  console.log('----------------------------------------------');
  
}

var q1=
{
  question:"What is the capital of jharkhand? ",
  options:"1.Gandhi nagar  \n2.Patna  \n3.Ranchi \n4.Bhopal\n ",
  answer: '3'
}
var q2=
{
  question:"Is hindi the official language of India",
  options:"1.Yes \n2.No \n ",
  answer: '2'
}
var q3=
{
  question:"Who was the first president of free India ?",
  options:"1.Jawahar lal nehru  \n2.Rajendra prasad  \n3.Lal bahadur shastri \n4.Mahatma Gandhi\n ",
  answer: '2'
}
var q4=
{
  question:"What is the longest river in India? ",
  options:"1.Indus  \n2.Brahmaputra  \n3.Ganges  \n4.Yamuna\n ",
  answer: '1'
}
var q5=
{
  question:"What is the capital city of Chattisgarh?  ",
  options:"1.Raipur  \n2.Mumbai  \n3.Itanagar \n4.Patna\n  ",
  answer: '1'
}
var q6=
{
  question:"What is the highest mountain in the world? ",
  options:"1.K2  \n2.Kanchunjanga  \n3.Mount Kilimanjaro \n4.Mount Everest\n  ",
  answer: '4'

}
var questions=[q1,q2,q3,q4,q5,q6];
for(var i=0;i<questions.length;i++)
{
  game(questions[i].question,questions[i].options,questions[i].answer);
}

console.log(chalk.red('                         END                               '));







