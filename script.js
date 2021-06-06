
// var username;
// username = "Abdallah";
// var myId = "hammoury";
// var test = true;
// var test = false;

//  var lastnamee;
// lastname = "hamomoury";



// console.log(username);
// console.log(lastname);

// if (usrename = "Abdallah") {alert("hello")
// }
// else if (username != "Abdallah") {alert("again")
// }






// console.log(y == x);

// console.log(y == x);



// console.log(y != x);

// console.log(y !== x);


// var age = 18;



// if (user <= 18) {
//   alert("hello")
// } else {
//   alert("Hi")
// }

// if (age <= 18) {
//   alert("not allowed")
// } else if (age > 18) {
//   alert("your welcome")
// } else {
//   alert("Hi again")
// }
// var user = prompt("what kind of work?");
// document.write("<h2 style='text-align: right;' >Out with the old," + user +" in with the new!</h2>");



// var user = prompt("What is your field of work?");
// document.write("<p style='text-align: center;'; >," + user +" </p>");



// var user1 = prompt("do you want see photo for Digital or SEO ?");
// if (user1 == "Digital") {
//   document.write("<img src=\"https://interfacedm.com/images/digital.jpg\">");
// }
// else if (user1 == "SEO") {
//   document.write("<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq53IFUEG-aFpiVaBzuaHBpmeDjzwd1SMYw-rHwS8k7Mw_3nmVt44w4Xs7T9h8KYCLbzM&usqp=CAU\">");
// }

// var a = false;
// var b = false;



var kindWork = prompt("whats your Kind of work : Marketing, Development, Business strategy");



function kindWorkFun() {

  while (kindWork !== " Marketing" && kindWork !== "Development" && kindWork !== "Business strategy") {

    kindWork = prompt("please enter on of : Marketing, Development, Business strategy");
  }

  document.write("<img src='https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png'/>")

  if (kindWork == "Marketing" || kindWork == "Developmen" || kindWork == "Business strategy") {
    console.log(kindWork);

  } else {
    kindWork = prompt("please enter on of : Marketing, Development, Business strategy");
    console.log(kindWork);

  }


}

kindWorkFun();





var catCuteFun = function () {
  var catNum = prompt("how many cute cat do you want to see?")
  var outPut = '';

  for (var i = 0; i < catNum; i++) {

    // outPut = outPut + "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1WHcGygpUN6w0Vz0eU6mZ3Ud1fspBMpQYQ&usqp=CAU'/>"
    document.write(outPut + "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1WHcGygpUN6w0Vz0eU6mZ3Ud1fspBMpQYQ&usqp=CAU'/>");

    console.log(i, outPut);



  }

  return outPut;
}
var output2 = catCuteFun();



// function catCuteFun () {
// var catNum = prompt("how many cute cat do you want to see?")
//   var outPut = '';

//   for (var i = 0; i < catNum ; i++)  {

//     outPut = outPut + "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1WHcGygpUN6w0Vz0eU6mZ3Ud1fspBMpQYQ&usqp=CAU'/>"

//     console.log(i, outPut)



//   }

//   return outPut;
// }

// var output2= catCuteFun();

