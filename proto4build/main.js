
var savings = 0;
var carbon = 0;
var water = 0;
var land = 0;

var isStuck = document.getElementById('isStuck')

//begin
//by pressing Start Here on begin_page, which reveals directions
 var enter_game = document.getElementById("start");
 	enter_game.addEventListener("click", function(event){
 	document.getElementById("begin_page").style.display="none";
 	document.getElementById("directions").style.display = "initial";
 });

//how to play
var directions=document.getElementById("directions_read");
directions.addEventListener("click", function(event){
	document.getElementById("directions").style.display="none";
	document.getElementById("dashboard").style.display="initial";
	document.getElementById("animalBox").style.display="initial";
	document.getElementById("openingimage").style.display="none";
	document.getElementById("q1").style.display="initial";
});

//first question
//first answer (just doing one of these bc i'm going to click U.S.)
var q1_a1 = document.getElementById("q1_a1");
q1_a1.addEventListener("click", function(event){
	document.getElementById("openingimage").style.display="none";
	document.getElementById("q1").style.display = "none";
	document.getElementById("r1").style.display="initial";
	document.getElementById("q1_result").innerHTML = "The U.S., along with most industrialized Western countries, is by and large one of the worst perpetrators of global warming. So, sadly, simply living here puts you at a few steps behind in your carbon score. Answer the rest of the questions to see how you can offset some of the environmentally irresponsible behavior of your country!";
	document.getElementById("q2_start").style.display="initial";
	carbon = carbon + 15;
	water = water + 15;
	land = land + 15;
	savings=savings;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("carbon").innerHTML=carbon;
});

//second question
var q2_start = document.getElementById("q2_start");
q2_start.addEventListener("click", function(event){
	document.getElementById("r1").style.display="none";
	document.getElementById("q2").style.display="initial";
});

//make functions for each option
var q2_a1 = document.getElementById("q2_a1");
q2_a1.addEventListener("click", function(event){
	document.getElementById("q2").style.display = "none";
	document.getElementById("r2").style.display = "initial";
	document.getElementById("q2_result").innerHTML = "Vegetarians can save at least $750 more each year than their omniverous friends. Your bear isn't into that whole scene really, but he gets it. Watch those savings climb, friend.";
	carbon = carbon - 1;
	water = water +0.5;
	land = land +0;
	savings=savings + 750;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q2_a2 = document.getElementById("q2_a2");
q2_a2.addEventListener("click", function(event){
	document.getElementById("q2").style.display = "none";
	document.getElementById("r2").style.display = "initial";
	document.getElementById("q2_result").innerHTML = "6.	It takes about 60, 108, 168, and 229 pounds of water to produce one pound of potatoes, wheat, maize and rice respectively. But a pound of beef needs around 9000 liters; which is more than 20,000 pounds of water. It also takes about 1,000 liters of water to produce one liter of milk";
	carbon = carbon -0.5;
	water = water +1;
	land = land +0.5;
	savings=savings +0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q2_a3 = document.getElementById("q2_a3");
q2_a3.addEventListener("click", function(event){
	document.getElementById("q2").style.display = "none";
	document.getElementById("r2").style.display = "initial";
	document.getElementById("q2_result").innerHTML = "1.	Animal-based products infamously use an impressive amount of natural resources. About 40% of the world’s land area is used for agriculture and farming. 30% of the world’s (ice-free) surface area is used to raise livestock. These animals are mostly fed grain, which additionally requires more land area and water. ";
	carbon = carbon + 0;
	water = water + 1.5;
	land = land + 1;
	savings=savings + 0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q2_a4 = document.getElementById("q2_a4");
q2_a4.addEventListener("click", function(event){
	document.getElementById("q2").style.display = "none";
	document.getElementById("r2").style.display = "initial";
	document.getElementById("q2_result").innerHTML = "1.	Animal-based products infamously use an impressive amount of natural resources. About 40% of the world’s land area is used for agriculture and farming. 30% of the world’s (ice-free) surface area is used to raise livestock. These animals are mostly fed grain, which additionally requires more land area and water. ";
	carbon = carbon +0.5;
	water = water +2;
	land = land +1.5;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q2_a5 = document.getElementById("q2_a5");
q2_a5.addEventListener("click", function(event){
	document.getElementById("q2").style.display = "none";
	document.getElementById("r2").style.display = "initial";
	document.getElementById("q2_result").innerHTML = "While the highest total of livestock-related greenhouse-gas emissions come from the developing world, Americans tend to eat more meat on average per year than people in other countries, 270 pounds per year to be exact, which requires 20 times the land needed to feed a typical Bangladeshi family, living off of rice, beans, vegetables and fruit, which can only require an acre or less.";
	carbon = carbon +1;
	water = water +2.5;
	land = land +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 3 from r2
var q3_start = document.getElementById("q3_start");
q3_start.addEventListener("click", function(event){
	document.getElementById("r2").style.display="none";
	document.getElementById("q3").style.display="initial";
});

//optinons
var q3_a1 = document.getElementById("q3_a1");
q3_a1.addEventListener("click", function(event){
	document.getElementById("q3").style.display = "none";
	document.getElementById("r3").style.display = "initial";
	document.getElementById("q3_result").innerHTML = "Detached units tend to use more energy in the home, but they also correlate with greater energy used for transportation, as apartments tend to be located in more mixed-use areas, which requires less transportation overall to get around.";
	carbon = carbon +2;
	water = water +3.5;
	land = land +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q3_a2 = document.getElementById("q3_a2");
q3_a2.addEventListener("click", function(event){
	document.getElementById("q3").style.display = "none";
	document.getElementById("r3").style.display = "initial";
	document.getElementById("q3_result").innerHTML = "f.	Detached units tend to use more energy in the home, but they also correlate with greater energy used for transportation, as apartments tend to be located in more mixed-use areas, which requires less transportation overall to get around.";
	carbon = carbon +1;
	water = water +2.5;
	land = land +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q3_a3 = document.getElementById("q3_a3");
q3_a3.addEventListener("click", function(event){
	document.getElementById("q3").style.display = "none";
	document.getElementById("r3").style.display = "initial";
	document.getElementById("q3_result").innerHTML = "f.	Detached units tend to use more energy in the home, but they also correlate with greater energy used for transportation, as apartments tend to be located in more mixed-use areas, which requires less transportation overall to get around.";
	carbon = carbon +1.5;
	land = land +2.5;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q3_a4 = document.getElementById("q3_a4");
q3_a4.addEventListener("click", function(event){
	document.getElementById("q3").style.display = "none";
	document.getElementById("r3").style.display = "initial";
	document.getElementById("q3_result").innerHTML = "f.	Detached units tend to use more energy in the home, but they also correlate with greater energy used for transportation, as apartments tend to be located in more mixed-use areas, which requires less transportation overall to get around.";
	carbon = carbon +1.5;
	land = land +2.5;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q3_a5 = document.getElementById("q3_a5");
q3_a5.addEventListener("click", function(event){
	document.getElementById("q3").style.display = "none";
	document.getElementById("r3").style.display = "initial";
	document.getElementById("q3_result").innerHTML = "f.	Detached units tend to use more energy in the home, but they also correlate with greater energy used for transportation, as apartments tend to be located in more mixed-use areas, which requires less transportation overall to get around.";
	carbon = carbon -1;
	land = land +1;
	water = water -1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 4 from r3
var q4_start = document.getElementById("q4_start");
q4_start.addEventListener("click", function(event){
	document.getElementById("r3").style.display="none";
	document.getElementById("q4").style.display="initial";
});

//optinons
var q4_a1 = document.getElementById("q4_a1");
q4_a1.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon +2;
	land = land +2;
	water = water +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q4_a2 = document.getElementById("q4_a2");
q4_a2.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon +1.5;
	land = land +1.5;
	water = water +1.5;
	savings=savings+50;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q4_a3 = document.getElementById("q4_a3");
q4_a3.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon +1;
	land = land +1;
	water = water+1;
	savings=savings+100;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q4_a4 = document.getElementById("q4_a4");
q4_a4.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon +0.5;
	land = land +0.5;
	water = water +0.5;
	savings=savings+150;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q4_a5 = document.getElementById("q4_a5");
q4_a5.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+200;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});
var q4_a6 = document.getElementById("q4_a6");
q4_a6.addEventListener("click", function(event){
	document.getElementById("q4").style.display = "none";
	document.getElementById("r4").style.display = "initial";
	document.getElementById("q4_result").innerHTML = "While living alone, especially in a city like New York, is often a luxury, those flying solo actually tend to consume more electricity, products, and resources than their shacked-up counterparts. They also tend to shell out more in general, lacking roommates to share financial burden with. If you’re faced with the decision to live cheaply and environmentally, the more the merrier.";
	carbon = carbon -2;
	land = land -2;
	water = water -2;
	savings=savings+300;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 5 from r4
var q5_start = document.getElementById("q5_start");
q5_start.addEventListener("click", function(event){
	document.getElementById("r4").style.display="none";
	document.getElementById("q5").style.display="initial";
});

//optinons
var q5_a1 = document.getElementById("q5_a1");
q5_a1.addEventListener("click", function(event){
	document.getElementById("q5").style.display = "none";
	document.getElementById("r5").style.display = "initial";
	document.getElementById("q5_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +0.5;
	land = land +0;
	water = water +0;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q5_a2 = document.getElementById("q5_a2");
q5_a2.addEventListener("click", function(event){
	document.getElementById("q5").style.display = "none";
	document.getElementById("r5").style.display = "initial";
	document.getElementById("q5_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +1;
	land = land +0.5;
	water = water +0;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q5_a3 = document.getElementById("q5_a3");
q5_a3.addEventListener("click", function(event){
	document.getElementById("q5").style.display = "none";
	document.getElementById("r5").style.display = "initial";
	document.getElementById("q5_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +1.5;
	land = land +1;
	water = water +0;
	savings=savings+ 0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 6 from r5
var q6_start = document.getElementById("q6_start");
q6_start.addEventListener("click", function(event){
	document.getElementById("r5").style.display="none";
	document.getElementById("q6").style.display="initial";
});

//optinons
var q6_a1 = document.getElementById("q6_a1");
q6_a1.addEventListener("click", function(event){
	document.getElementById("q6").style.display = "none";
	document.getElementById("r6").style.display = "initial";
	document.getElementById("q6_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +0.5;
	land = land +0;
	water = water +0.5;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q6_a2 = document.getElementById("q6_a2");
q6_a2.addEventListener("click", function(event){
	document.getElementById("q6").style.display = "none";
	document.getElementById("r6").style.display = "initial";
	document.getElementById("q6_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +1;
	land = land +0.5;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q6_a3 = document.getElementById("q6_a3");
q6_a3.addEventListener("click", function(event){
	document.getElementById("q6").style.display = "none";
	document.getElementById("r6").style.display = "initial";
	document.getElementById("q6_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon +1.5;
	land = land +1;
	water = water +1.5;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 7 from r6
var q7_start = document.getElementById("q7_start");
q7_start.addEventListener("click", function(event){
	document.getElementById("r6").style.display="none";
	document.getElementById("q7").style.display="initial";
});

//options
var q7_a1 = document.getElementById("q7_a1");
q7_a1.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "For every 2500 miles driven in a medium-sized car, 1 ton of CO2 is released. While carpooling is better, we again meet our age-old message of “the more the merrier” when it comes to commuting. Unless! You own a bike! Or if you walk! I don’t know if anyone’s ever told you this before, but walking is completely free";
	carbon = carbon +3;
	land = land +2.5;
	water = water +1.5;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});


var q7_a2 = document.getElementById("q7_a2");
q7_a2.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "For every 2500 miles driven in a medium-sized car, 1 ton of CO2 is released. While carpooling is better, we again meet our age-old message of “the more the merrier” when it comes to commuting. Unless! You own a bike! Or if you walk! I don’t know if anyone’s ever told you this before, but walking is completely free";
	carbon = carbon +2;
	land = land +2;
	water = water +1;
	savings=savings+300;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q7_a3 = document.getElementById("q7_a3");
q7_a3.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "APTA (American Public Transportation association) reported that the average person in 16 to 20 large US cities would save over $10,000/year by using public transpo rather than a car; $15,041 in NYC.";
	carbon = carbon +1.5;
	land = land +1.5;
	water = water +0.5;
	savings=savings+1500;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q7_a4 = document.getElementById("q7_a4");
q7_a4.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "APTA (American Public Transportation association) reported that the average person in 16 to 20 large US cities would save over $10,000/year by using public transpo rather than a car; $15,041 in NYC.";
	carbon = carbon +1;
	land = land +1;
	water = water +0;
	savings=savings+1500;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q7_a5 = document.getElementById("q7_a5");
q7_a5.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "The money saved from riding a bike is almost as much as walking, so it's clear that after the money invested in the bike itself, it more than pays off.";
	carbon = carbon -0.5;
	land = land +0;
	water = water +0;
	savings=savings+2200;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q7_a6 = document.getElementById("q7_a6");
q7_a6.addEventListener("click", function(event){
	document.getElementById("q7").style.display = "none";
	document.getElementById("r7").style.display = "initial";
	document.getElementById("q7_result").innerHTML = "For every 2500 miles driven in a medium-sized car, 1 ton of CO2 is released. While carpooling is better, we again meet our age-old message of “the more the merrier” when it comes to commuting. Unless! You own a bike! Or if you walk! I don’t know if anyone’s ever told you this before, but walking is completely free";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+2300;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 8 from r7
var q8_start = document.getElementById("q8_start");
q8_start.addEventListener("click", function(event){
	document.getElementById("r7").style.display="none";
	document.getElementById("q8").style.display="initial";
});

//optinons
var q8_a1 = document.getElementById("q8_a1");
q8_a1.addEventListener("click", function(event){
	document.getElementById("q8").style.display = "none";
	document.getElementById("r8").style.display = "initial";
	document.getElementById("q8_result").innerHTML = "Aviation is one of the largest contributors to atmospheric CO2. For every 5000 miles (think NYC to LA and back), 1 ton of CO2 is released. ";
	carbon = carbon -1;
	land = land -2;
	water = water -2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q8_a2 = document.getElementById("q8_a2");
q8_a2.addEventListener("click", function(event){
	document.getElementById("q8").style.display = "none";
	document.getElementById("r8").style.display = "initial";
	document.getElementById("q8_result").innerHTML = "Aviation is one of the largest contributors to atmospheric CO2. For every 5000 miles (think NYC to LA and back), 1 ton of CO2 is released. ";
	carbon = carbon -3;
	land = land -2;
	water = water -2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});


//onto question 9 from r8
var q9_start = document.getElementById("q9_start");
q9_start.addEventListener("click", function(event){
	document.getElementById("r8").style.display="none";
	document.getElementById("q9").style.display="initial";
});

//optinons
var q9_a1 = document.getElementById("q9_a1");
q9_a1.addEventListener("click", function(event){
	document.getElementById("q9").style.display = "none";
	document.getElementById("r9").style.display = "initial";
	document.getElementById("q9_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon -3;
	land = land -2;
	water = water -4;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q9_a2 = document.getElementById("q9_a2");
q9_a2.addEventListener("click", function(event){
	document.getElementById("q9").style.display = "none";
	document.getElementById("r9").style.display = "initial";
	document.getElementById("q9_result").innerHTML = "Here are some facts about this topic";
	carbon = carbon -1;
	land = land -1;
	water = water -2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q9_a3 = document.getElementById("q9_a3");
q9_a3.addEventListener("click", function(event){
	document.getElementById("q9").style.display = "none";
	document.getElementById("r9").style.display = "initial";
	document.getElementById("q9_result").innerHTML = "The average family spends $1700/year on clothing. While a bigger price tag on clothing may be difficult to stomach, you get a lot more wear out of something that costs a little more to make, because it’s higher quality. The more you buy low-quality clothing, the more often you have to replace it, and you spend more in the long-run";
	carbon = carbon -1;
	land = land +0;
	water = water +0;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q9_a4 = document.getElementById("q9_a4");
q9_a4.addEventListener("click", function(event){
	document.getElementById("q9").style.display = "none";
	document.getElementById("r9").style.display = "initial";
	document.getElementById("q9_result").innerHTML = "The average family spends $1700/year on clothing. While a bigger price tag on clothing may be difficult to stomach, you get a lot more wear out of something that costs a little more to make, because it’s higher quality. The more you buy low-quality clothing, the more often you have to replace it, and you spend more in the long-run";
	carbon = carbon +2;
	land = land +0;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q9_a5 = document.getElementById("q9_a5");
q9_a5.addEventListener("click", function(event){
	document.getElementById("q9").style.display = "none";
	document.getElementById("r9").style.display = "initial";
	document.getElementById("q9_result").innerHTML = "The average family spends $1700/year on clothing. While a bigger price tag on clothing may be difficult to stomach, you get a lot more wear out of something that costs a little more to make, because it’s higher quality. The more you buy low-quality clothing, the more often you have to replace it, and you spend more in the long-run";
	carbon = carbon +3;
	land = land +1;
	water = water +1;
	savings=savings+1700;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 10 from r9
var q10_start = document.getElementById("q10_start");
q10_start.addEventListener("click", function(event){
	document.getElementById("r9").style.display="none";
	document.getElementById("q10").style.display="initial";
});
//optinons
var q10_a1 = document.getElementById("q10_a1");
q10_a1.addEventListener("click", function(event){
	document.getElementById("q10").style.display = "none";
	document.getElementById("r10").style.display = "initial";
	document.getElementById("q10_result").innerHTML = "Average US household spends about $1900/year on energy costs, about 10% of which is sapped by devices that are plugged in all the time but not always used";
	carbon = carbon +3;
	land = land +1;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q10_a2 = document.getElementById("q10_a2");
q10_a2.addEventListener("click", function(event){
	document.getElementById("q10").style.display = "none";
	document.getElementById("r10").style.display = "initial";
	document.getElementById("q10_result").innerHTML = "Average US household spends about $1900/year on energy costs, about 10% of which is sapped by devices that are plugged in all the time but not always used";	
	carbon = carbon +2.5;
	land = land +0.5;
	water = water +0.5;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q10_a3 = document.getElementById("q10_a3");
q10_a3.addEventListener("click", function(event){
	document.getElementById("q10").style.display = "none";
	document.getElementById("r10").style.display = "initial";
	document.getElementById("q10_result").innerHTML = "Average US household spends about $1900/year on energy costs, about 10% of which is sapped by devices that are plugged in all the time but not always used";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+190;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});


//onto question 11 from r10
var q11_start = document.getElementById("q11_start");
q11_start.addEventListener("click", function(event){
	document.getElementById("r10").style.display="none";
	document.getElementById("q11").style.display="initial";
});


//optinons
var q11_a1 = document.getElementById("q11_a1");
q11_a1.addEventListener("click", function(event){
	document.getElementById("q11").style.display = "none";
	document.getElementById("r11").style.display = "initial";
	document.getElementById("q11_result").innerHTML = "A normal incandescent bulb costs 0.75 cents per hour, LEDs and CFLs about 1/6 of that.";
	carbon = carbon +3;
	land = land +2;
	water = water +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q11_a2 = document.getElementById("q11_a2");
q11_a2.addEventListener("click", function(event){
	document.getElementById("q11").style.display = "none";
	document.getElementById("r11").style.display = "initial";
	document.getElementById("q11_result").innerHTML = "A normal incandescent bulb costs 0.75 cents per hour, LEDs and CFLs about 1/6 of that.";
	carbon = carbon +2;
	land = land +1;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q11_a3 = document.getElementById("q11_a3");
q11_a3.addEventListener("click", function(event){
	document.getElementById("q11").style.display = "none";
	document.getElementById("r11").style.display = "initial";
	document.getElementById("q11_result").innerHTML = "A normal incandescent bulb costs 0.75 cents per hour, LEDs and CFLs about 1/6 of that.";
	carbon = carbon -2;
	land = land -1;
	water = water -1;
	savings=savings+50;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});


//onto question 12 from r11
var q12_start = document.getElementById("q12_start");
q12_start.addEventListener("click", function(event){
	document.getElementById("r11").style.display="none";
	document.getElementById("q12").style.display="initial";
});

//optinons
var q12_a1 = document.getElementById("q12_a1");
q12_a1.addEventListener("click", function(event){
	document.getElementById("q12").style.display = "none";
	document.getElementById("r12").style.display = "initial";
	document.getElementById("q12_result").innerHTML = "The daily Starbucks for someone who drinks one cup a day costs about $766 per year. That’s not to mention those extra stressful days where you need another boost after noon. Making coffee at home only costs about $29 per year. Bringing your own thermos gets you a 10% discount, so you save a little bit, though you manage to reduce your waste by a significant amount.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+737;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q12_a2 = document.getElementById("q12_a2");
q12_a2.addEventListener("click", function(event){
	document.getElementById("q12").style.display = "none";
	document.getElementById("r12").style.display = "initial";
	document.getElementById("q12_result").innerHTML = "The daily Starbucks for someone who drinks one cup a day costs about $766 per year. That’s not to mention those extra stressful days where you need another boost after noon. Making coffee at home only costs about $29 per year. Bringing your own thermos gets you a 10% discount, so you save a little bit, though you manage to reduce your waste by a significant amount.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+30;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q12_a3 = document.getElementById("q12_a3");
q12_a3.addEventListener("click", function(event){
	document.getElementById("q12").style.display = "none";
	document.getElementById("r12").style.display = "initial";
	document.getElementById("q12_result").innerHTML = "The daily Starbucks for someone who drinks one cup a day costs about $766 per year. That’s not to mention those extra stressful days where you need another boost after noon. Making coffee at home only costs about $29 per year. Bringing your own thermos gets you a 10% discount, so you save a little bit, though you manage to reduce your waste by a significant amount.";
	carbon = carbon +3;
	land = land +2;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q12_a4 = document.getElementById("q12_a4");
q12_a4.addEventListener("click", function(event){
	document.getElementById("q12").style.display = "none";
	document.getElementById("r12").style.display = "initial";
	document.getElementById("q12_result").innerHTML = "Ugh great good for you";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+766;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 13 from r12
var q13_start = document.getElementById("q13_start");
q13_start.addEventListener("click", function(event){
	document.getElementById("r12").style.display="none";
	document.getElementById("q13").style.display="initial";
	carbon = carbon +3;
	land = land +3;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//optinons
var q13_a1 = document.getElementById("q13_a1");
q13_a1.addEventListener("click", function(event){
	document.getElementById("q13").style.display = "none";
	document.getElementById("r13").style.display = "initial";
	document.getElementById("q13_result").innerHTML = "While the personal savings are minimal, the greatest economic benefit of recycling is that natural resources and energy are conserved in the form of the raw material that is not produced to make a new product. For example,manufacturing with aluminum cans uses 95% less energy than creating the same amount of aluminum with bauxite. It also provides jobs.";
	carbon = carbon +2;
	land = land +2;
	water = water +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q13_a2 = document.getElementById("q13_a2");
q13_a2.addEventListener("click", function(event){
	document.getElementById("q13").style.display = "none";
	document.getElementById("r13").style.display = "initial";
	document.getElementById("q13_result").innerHTML = "While the personal savings are minimal, the greatest economic benefit of recycling is that natural resources and energy are conserved in the form of the raw material that is not produced to make a new product. For example,manufacturing with aluminum cans uses 95% less energy than creating the same amount of aluminum with bauxite. It also provides jobs.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q13_a3 = document.getElementById("q13_a3");
q13_a3.addEventListener("click", function(event){
	document.getElementById("q13").style.display = "none";
	document.getElementById("r13").style.display = "initial";
	document.getElementById("q13_result").innerHTML = "While the personal savings are minimal, the greatest economic benefit of recycling is that natural resources and energy are conserved in the form of the raw material that is not produced to make a new product. For example,manufacturing with aluminum cans uses 95% less energy than creating the same amount of aluminum with bauxite. It also provides jobs.";
	carbon = carbon -2;
	land = land -2;
	water = water -2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q13_a4 = document.getElementById("q13_a4");
q13_a4.addEventListener("click", function(event){
	document.getElementById("q13").style.display = "none";
	document.getElementById("r13").style.display = "initial";
	document.getElementById("q13_result").innerHTML = "While the personal savings are minimal, the greatest economic benefit of recycling is that natural resources and energy are conserved in the form of the raw material that is not produced to make a new product. For example,manufacturing with aluminum cans uses 95% less energy than creating the same amount of aluminum with bauxite. It also provides jobs.";
	carbon = carbon -2;
	land = land -2;
	water = water -2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 14 from r13
var q14_start = document.getElementById("q14_start");
q14_start.addEventListener("click", function(event){
	document.getElementById("r13").style.display="none";
	document.getElementById("q14").style.display="initial";
});

//optinons
var q14_a1 = document.getElementById("q14_a1");
q14_a1.addEventListener("click", function(event){
	document.getElementById("q14").style.display = "none";
	document.getElementById("r14").style.display = "initial";
	document.getElementById("q14_result").innerHTML = "While organic can seem to cost a lot up front, buying online or buying in bulk can make it more affordable and environmentally friendly. Otherwise, vinegar kills everything you need it to when disinfecting, and baking soda tackles grease and smells.";
	carbon = carbon +3;
	land = land +1;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q14_a2 = document.getElementById("q14_a2");
q14_a2.addEventListener("click", function(event){
	document.getElementById("q14").style.display = "none";
	document.getElementById("r14").style.display = "initial";
	document.getElementById("q14_result").innerHTML = "While organic can seem to cost a lot up front, buying online or buying in bulk can make it more affordable and environmentally friendly. Otherwise, vinegar kills everything you need it to when disinfecting, and baking soda tackles grease and smells.";
	carbon = carbon -1;
	land = land +0;
	water = water +0;
	savings=savings+100;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q14_a3 = document.getElementById("q14_a3");
q14_a3.addEventListener("click", function(event){
	document.getElementById("q14").style.display = "none";
	document.getElementById("r14").style.display = "initial";
	document.getElementById("q14_result").innerHTML = "While organic can seem to cost a lot up front, buying online or buying in bulk can make it more affordable and environmentally friendly. Otherwise, vinegar kills everything you need it to when disinfecting, and baking soda tackles grease and smells.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+300;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 15 from r14
var q15_start = document.getElementById("q15_start");
q15_start.addEventListener("click", function(event){
	document.getElementById("r14").style.display="none";
	document.getElementById("q15").style.display="initial";
});

//optinons
var q15_a1 = document.getElementById("q15_a1");
q15_a1.addEventListener("click", function(event){
	document.getElementById("q15").style.display = "none";
	document.getElementById("r15").style.display = "initial";
	document.getElementById("q15_result").innerHTML = "Compact fluorescents use only about 25% of electricity as traditional bulbs and provide the same light. Save 80% on the next bill, and also watch that thing last longer than your lease – they are built to shine 8X longer than traditional bulbs, LED’s even longer.";
	carbon = carbon +3;
	land = land +2;
	water = water +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q15_a2 = document.getElementById("q15_a2");
q15_a2.addEventListener("click", function(event){
	document.getElementById("q15").style.display = "none";
	document.getElementById("r15").style.display = "initial";
	document.getElementById("q15_result").innerHTML = "Compact fluorescents use only about 25% of electricity as traditional bulbs and provide the same light. Save 80% on the next bill, and also watch that thing last longer than your lease – they are built to shine 8X longer than traditional bulbs, LED’s even longer.";
	carbon = carbon +0;
	land = land +1;
	water = water +1;
	savings=savings+296;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q15_a3 = document.getElementById("q15_a3");
q15_a3.addEventListener("click", function(event){
	document.getElementById("q15").style.display = "none";
	document.getElementById("r15").style.display = "initial";
	document.getElementById("q15_result").innerHTML = "Compact fluorescents use only about 25% of electricity as traditional bulbs and provide the same light. Save 80% on the next bill, and also watch that thing last longer than your lease – they are built to shine 8X longer than traditional bulbs, LED’s even longer.";
	carbon = carbon -1;
	land = land +1;
	water = water +1;
	savings=savings+252;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 16 from r15
var q16_start = document.getElementById("q16_start");
q16_start.addEventListener("click", function(event){
	document.getElementById("r15").style.display="none";
	document.getElementById("q16").style.display="initial";
});

//optinons
var q16_a1 = document.getElementById("q16_a1");
q16_a1.addEventListener("click", function(event){
	document.getElementById("q16").style.display = "none";
	document.getElementById("r16").style.display = "initial";
	document.getElementById("q16_result").innerHTML = "Turning the thermostat down just 1 degree Celsius in the winter can save you up to 10% per year on your heating bills. Ditto for the summer. (1% per degree)";
	carbon = carbon +3;
	land = land +3;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q16_a2 = document.getElementById("q16_a2");
q16_a2.addEventListener("click", function(event){
	document.getElementById("q16").style.display = "none";
	document.getElementById("r16").style.display = "initial";
	document.getElementById("q16_result").innerHTML = "Turning the thermostat down just 1 degree Celsius in the winter can save you up to 10% per year on your heating bills. Ditto for the summer. (1% per degree)";
	carbon = carbon -2;
	land = land -2;
	water = water -2;
	savings=savings+200;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});


//onto question 17 from r16
var q17_start = document.getElementById("q17_start");
q17_start.addEventListener("click", function(event){
	document.getElementById("r16").style.display="none";
	document.getElementById("q17").style.display="initial";
});

//optinons
var q17_a1 = document.getElementById("q17_a1");
q17_a1.addEventListener("click", function(event){
	document.getElementById("q17").style.display = "none";
	document.getElementById("r17").style.display = "initial";
	document.getElementById("q17_result").innerHTML = "Get a hobby. Ahem I mean taking a five minute shower uses just 10-25 gallons of water, versus up to 70 gallons for a large bathtubs, and turning off water when you brush your teeth saves 8 gallons of water.";
	carbon = carbon +3;
	land = land +2;
	water = water +4;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q17_a2 = document.getElementById("q17_a2");
q17_a2.addEventListener("click", function(event){
	document.getElementById("q17").style.display = "none";
	document.getElementById("r17").style.display = "initial";
	document.getElementById("q17_result").innerHTML = "Taking a five minute shower uses just 10-25 gallons of water, versus up to 70 gallons for a large bathtubs, and turning off water when you brush your teeth saves 8 gallons of water.";
	carbon = carbon +3;
	land = land +2;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q17_a3 = document.getElementById("q17_a3");
q17_a3.addEventListener("click", function(event){
	document.getElementById("q17").style.display = "none";
	document.getElementById("r17").style.display = "initial";
	document.getElementById("q17_result").innerHTML = "Multitasker extraodinaire: you set a good example. Taking a five minute shower uses just 10-25 gallons of water, versus up to 70 gallons for a large bathtubs, and turning off water when you brush your teeth saves 8 gallons of water.";
	carbon = carbon -1;
	land = land -1;
	water = water +0;
	savings=savings+5;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q17_a4 = document.getElementById("q17_a4");
q17_a4.addEventListener("click", function(event){
	document.getElementById("q17").style.display = "none";
	document.getElementById("r17").style.display = "initial";
	document.getElementById("q17_result").innerHTML = "Impressive. Look how happy the bear is now.";
	carbon = carbon -2;
	land = land -2;
	water = water -1;
	savings=savings+10;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 18 from r17
var q18_start = document.getElementById("q18_start");
q18_start.addEventListener("click", function(event){
	document.getElementById("r17").style.display="none";
	document.getElementById("q18").style.display="initial";
});

//optinons
var q18_a1 = document.getElementById("q18_a1");
q18_a1.addEventListener("click", function(event){
	document.getElementById("q18").style.display = "none";
	document.getElementById("r18").style.display = "initial";
	document.getElementById("q18_result").innerHTML = "When you wait for more clothes to get dirty, you wash fuller loads, and thus save water and electricity. Most clothes don’t even need to be washed or dry cleaned that often, and there are plenty of tricks to keep clothes feeling and smelling fresh without washing – for example, putting denim into a plastic bag and then into the freezer will help kill bacteria and get smells out.";
	carbon = carbon +2;
	land = land +2;
	water = water +4;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q18_a2 = document.getElementById("q18_a2");
q18_a2.addEventListener("click", function(event){
	document.getElementById("q18").style.display = "none";
	document.getElementById("r18").style.display = "initial";
	document.getElementById("q18_result").innerHTML = "When you wait for more clothes to get dirty, you wash fuller loads, and thus save water and electricity. Most clothes don’t even need to be washed or dry cleaned that often, and there are plenty of tricks to keep clothes feeling and smelling fresh without washing – for example, putting denim into a plastic bag and then into the freezer will help kill bacteria and get smells out.";
	carbon = carbon +1;
	land = land +1;
	water = water +4;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q18_a3 = document.getElementById("q18_a3");
q18_a3.addEventListener("click", function(event){
	document.getElementById("q18").style.display = "none";
	document.getElementById("r18").style.display = "initial";
	document.getElementById("q18_result").innerHTML = "When you wait for more clothes to get dirty, you wash fuller loads, and thus save water and electricity. Most clothes don’t even need to be washed or dry cleaned that often, and there are plenty of tricks to keep clothes feeling and smelling fresh without washing – for example, putting denim into a plastic bag and then into the freezer will help kill bacteria and get smells out.";
	carbon = carbon +1;
	land = land +1;
	water = water +3;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q18_a4 = document.getElementById("q18_a4");
q18_a4.addEventListener("click", function(event){
	document.getElementById("q18").style.display = "none";
	document.getElementById("r18").style.display = "initial";
	document.getElementById("q18_result").innerHTML = "Nicely done. If you want to take it the next mile, wash clothes at 86 degrees F rather than 104 degrees F. It'll reduce electricity consumption by ~40% on average. And, if you set it to spin, it dries significantly faster, both air-drying and in a machine.";
	carbon = carbon -3;
	land = land +1;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 19 from r18
var q19_start = document.getElementById("q19_start");
q19_start.addEventListener("click", function(event){
	document.getElementById("r18").style.display="none";
	document.getElementById("q19").style.display="initial";
});

//optinons
var q19_a1 = document.getElementById("q19_a1");
q19_a1.addEventListener("click", function(event){
	document.getElementById("q19").style.display = "none";
	document.getElementById("r19").style.display = "initial";
	document.getElementById("q19_result").innerHTML = "If you want to make sure your fridge isn’t leaking any cool air, put a piece of paper halfway in and shut the door – if you can easily pull the whole thing out, you may want to check your hinges or door seal.";
	carbon = carbon +3;
	land = land +2;
	water = water +2;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q19_a2 = document.getElementById("q19_a2");
q19_a2.addEventListener("click", function(event){
	document.getElementById("q19").style.display = "none";
	document.getElementById("r19").style.display = "initial";
	document.getElementById("q19_result").innerHTML = "If you want to make sure your fridge isn’t leaking any cool air, put a piece of paper halfway in and shut the door – if you can easily pull the whole thing out, you may want to check your hinges or door seal.";
	carbon = carbon +2;
	land = land +1;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q19_a3 = document.getElementById("q19_a3");
q19_a3.addEventListener("click", function(event){
	document.getElementById("q19").style.display = "none";
	document.getElementById("r19").style.display = "initial";
	document.getElementById("q19_result").innerHTML = "If you want to make sure your fridge isn’t leaking any cool air, put a piece of paper halfway in and shut the door – if you can easily pull the whole thing out, you may want to check your hinges or door seal.";
	carbon = carbon -1;
	land = land +0;
	water = water +1;
	savings=savings+75;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q19_a4 = document.getElementById("q19_a4");
q19_a4.addEventListener("click", function(event){
	document.getElementById("q19").style.display = "none";
	document.getElementById("r19").style.display = "initial";
	document.getElementById("q19_result").innerHTML = "If you want to make sure your fridge isn’t leaking any cool air, put a piece of paper halfway in and shut the door – if you can easily pull the whole thing out, you may want to check your hinges or door seal.";
	carbon = carbon -2;
	land = land +0;
	water = water -2;
	savings=savings+125;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//onto question 20 from r19
var q20_start = document.getElementById("q20_start");
q20_start.addEventListener("click", function(event){
	document.getElementById("r19").style.display="none";
	document.getElementById("q20").style.display="initial";
});

//optinons
var q20_a1 = document.getElementById("q20_a1");
q20_a1.addEventListener("click", function(event){
	document.getElementById("q20").style.display = "none";
	document.getElementById("r20").style.display = "initial";
	document.getElementById("q20_result").innerHTML = "In 2001, the EPA estimated that somewhere between 500 billion and a trillion plastic bags are consumed worldwide every year. Most of which end up in litter streams outside landfills. Most of the time plastic is used to make flimsy, unreusable material like these bags, which end up stuck in the environment, taking months to years to hundreds of years to break down. Even as they decompose, toxic bits seep into soils, lakes, rivers and oceans. They are ubiquitous because of such a low production cost, economically and energetically – it costs one cent to create the standard plastic grocery bag, compared to a four-cent paper bag, and 40% less energy, 80% less solid waste, produce 70% fewer atmospheric emissions, and release up to 94% fewer waterborne wastes. But these bags often end up directly in the natural habitats of many different wildlife species.";
	carbon = carbon +3;
	land = land +3;
	water = water +4;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q20_a2 = document.getElementById("q20_a2");
q20_a2.addEventListener("click", function(event){
	document.getElementById("q20").style.display = "none";
	document.getElementById("r20").style.display = "initial";
	document.getElementById("q20_result").innerHTML = "In 2001, the EPA estimated that somewhere between 500 billion and a trillion plastic bags are consumed worldwide every year. Most of which end up in litter streams outside landfills. Most of the time plastic is used to make flimsy, unreusable material like these bags, which end up stuck in the environment, taking months to years to hundreds of years to break down. Even as they decompose, toxic bits seep into soils, lakes, rivers and oceans. They are ubiquitous because of such a low production cost, economically and energetically – it costs one cent to create the standard plastic grocery bag, compared to a four-cent paper bag, and 40% less energy, 80% less solid waste, produce 70% fewer atmospheric emissions, and release up to 94% fewer waterborne wastes. But these bags often end up directly in the natural habitats of many different wildlife species.";
	carbon = carbon +1;
	land = land +2;
	water = water +1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

var q20_a3 = document.getElementById("q20_a3");
q20_a3.addEventListener("click", function(event){
	document.getElementById("q20").style.display = "none";
	document.getElementById("r20").style.display = "initial";
	document.getElementById("q20_result").innerHTML = "In 2001, the EPA estimated that somewhere between 500 billion and a trillion plastic bags are consumed worldwide every year. Most of which end up in litter streams outside landfills. Most of the time plastic is used to make flimsy, unreusable material like these bags, which end up stuck in the environment, taking months to years to hundreds of years to break down. Even as they decompose, toxic bits seep into soils, lakes, rivers and oceans. They are ubiquitous because of such a low production cost, economically and energetically – it costs one cent to create the standard plastic grocery bag, compared to a four-cent paper bag, and 40% less energy, 80% less solid waste, produce 70% fewer atmospheric emissions, and release up to 94% fewer waterborne wastes. But these bags often end up directly in the natural habitats of many different wildlife species.";
	carbon = carbon -1;
	land = land -1;
	water = water -1;
	savings=savings+0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
});

//go from r20 to final page
var what_now = document.getElementById("what_now");
what_now.addEventListener("click", function(event){
	document.getElementById("r20").style.display="none";
	document.getElementById("final").style.display="initial";
})
//go from q20 result back to beginning
var go_back = document.getElementById("go_back");
go_back.addEventListener("click", function(event){
	document.getElementById("final").style.display = "none";
	document.getElementById("q1").style.display="initial";
	carbon = 0;
	land = 0;
	water = 0;
	savings= 0;
	document.getElementById("carbon").innerHTML=carbon;
	document.getElementById("water").innerHTML=water;
	document.getElementById("land").innerHTML=land;
	document.getElementById("savings").innerHTML=savings;
})


