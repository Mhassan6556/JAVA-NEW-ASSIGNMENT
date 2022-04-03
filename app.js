//////////// Assignment #13-15 ///////////
     /////// JAVASCRIPT  ////////

///////  Q:1
//  var arr = []

///////  Q:2
//  var arr = new Array()

///////  Q:3
//  var stringArr = [ " " , " " ]

///////  Q:4
//  var numArr = [ 0 , 1 ]

///////  Q:5
//  var booleanArr = [ true , false ]

///////  Q:6
//  var mixedArr = [ " " , 1 , false ]

///////  Q:7
//  var arr = [ " SSC " , " HSC " , " BCS " , " BS " , " B.COM " , " M.S " , " M.Phil ", " PhD " ]
//  document.write(" <h1> Qualifications: <h1/> <br /> ")
//  for(var i = 0 ; i < arr.length ; i++){
//      document.write( (i+1) + ": " + arr[i] + "<br/>")
//  }

///////  Q:8
//  var students = [ "Hassan Ali Jamali " , " Abrar Ali" , " Sohail Ali " , " Sabir Ali "]
//  var totalMark = [ 480 , 325 , 330 , 380 ]
//  var Per1 = ( totalMark[0]/500 ) *100
//  var Per2 = ( totalMark[1]/500 ) *100
//  var Per3 = ( totalMark[2]/500 ) *100
//  var Per4 = ( totalMark[3]/500 ) *100
//  var Per = [Per1 , Per2 , Per3 , Per4]

//  for(var i = 0 ; i < students.length ; i++ ){
//     document.write( "<h1>" + " Score of " + students[i] + " Is " + totalMark[i] + " . " + " Percentage is: " + Per[i] + "<br />" +"</h1>")
//  }


///////  Q:9
//  var colors =[ " Red " , " Green ", " Blue " ];
//  document.write( colors + " </br>");
  
  ////// a)
//   var userColor = prompt( " What Color You WantS To Add Beginning ");
//   colors.unshift(userColor);
//   document.write( colors ); 
  
  ////// b)
//   var colors =[ " Red " , " Green ", " Blue " ];
//   document.write( colors + " </br>" );
  
 /////// c)
//   var userColor = prompt ( " Add Two More Colors In The Begininnig " );
//   var userColor = prompt ( " Add Two More Colors In The Begininnig " );
//   colors.unshift(userColor , userColor);
//   document.write(colors);
  
 /////// d)  
//   var colors =[ " Red " , " Green ", " Blue " , " Pink " ];
//   colors.shift(colors);
//   document.write( colors + " </br>" );


 /////// e)  
//   var colors =[ " Red " , " Green ", " Blue " , " Pink " ];
//   colors.pop(colors);
//   document.write( colors + " </br>" );


///////  Q:10
//  var scoreStudents = [ " Score Of Students: 320 , 230 , 480 ,120" ];
//  var points = [ 320 , 230 , 480 , 120 ];
//  var  arr = points.sort(function( a,b ){return a-b});
//  document.write( scoreStudents + "<br />" + points );



///////  Q:11
//  var cities = [ " Karachi " , " Sehwan " , " Dadu " , " Islamabad " , " Lahore " ];
//  document.write(" <h1>Cities List   </br></h1>");
//  document.write(cities + " </br>"); 
//  document.write(" <h1>Selected cities List   </br></h1>");

//  var arrCopy = cities.slice(2,4);
//  document.write(arrCopy);


///////  Q:12
//  var arr = [ " This " ,  " Is ",   " My ", " Cat " ];
//  document.write( "<h2> Array </br></h2> " + arr.join());
//  document.write("<h2> String </br></h2> " + arr.join(""));




//////////// Assignment #17-20 ///////////
     /////// JAVASCRIPT  ////////


   ///////  Q:1
// var arr = [
//   [ , ] ,
//   [ , , ] ,
//   [, , ,  ]
//  ];
// console.log(arr);


  ///////  Q:2
//  var arr = [
//   [ 0 , 1 , 2 , 3 + "<br />" 
//   + 1 , 0 , 1 , 2 + "<br />" 
//   + 2 , 1 , 0 , 1 + "<br />"]
// ];
//  document.write(arr );
  

  ///////  Q:3
// for(var i=1 ; i<=10; i++){
//     document.write(i +"</br>");
// }


  ///////  Q:4
//  var num = +prompt( " Enter Table Number ");
//  var length = +prompt( " Enter Length Of Table " );
//  for(var len=1 ; len<=length ;len++){
//     document.write(num + " * "  + len + " = " + num * len + "</br>"  );
//  }


  ///////  Q:5
//   var fruits =  [ " Apple " , " Orange " , " Mango " , " Banana " , " Strawberry " ];
//   for(var i=0 ; i<fruits.length ; i++)
//   {
//      document.write(fruits[i] + "</br>");
//   }

//  for(var i=0 ; i<fruits.length ; i++)
//  {
//      document.write( " Element At Index "  + i + " Is " +   fruits[i] + "</br>");
//  }


   ////////  Q:6   
       //////  Counting  //////
//     document.write( " <h1> Counting: </h1> " );
//     for(var i=1 ; i <=15 ; i++){
//      document.write( i + " , " );
//  }
 

      ///// Reverse Counting /////
//   document.write( " <h1> Reverse Counting: </h1> " );
//   for(var i=10 ; i >=1 ; i--){
//      document.write( i + " , " );
//  }

       ////// Even ////
  //  document.write( " <h1> Even: </h1> " );
  //  for(var i=0 ; i<=20 ; i = i+2){
  //  document.write( i + " , " );
  //  }

       //// ODD: /////
  //  document.write( " <h1> ODD: </h1> " );
  //  for(var i=1 ; i<=19 ; i = i+2){
  //    document.write( i + " , " );
  //  }

       //// Series: ////
  // document.write( " <h1> Series: </h1> " );
  // for(var i=2 ; i<=20 ;i= i+2){
  //  document.write( i+"k" + " , " );
  // }



  ///////  Q:7
//    var  a = [ "mango" , "apple" , "banana" , "cake" , "orange" ];
//    var user =prompt( " Enter Your Fruit , Welcome To New Mart" );
//    var isMatch = false;

// for (var i = 0; i < a.length; i++) {
//   if (user === a[i]) {
//     alert(user +"  Avaialble At index  " + i + "  In Our Mart");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert( "We Are Sorry " + user + "  Is Not Available In Our Mart  ");
// }



  ////////  Q:8
// var arr = [24, 53, 78, 91, 12];
// var lar= 0;

// for (i=0; i<=lar ; i++ ){
//     if (arr[i]> lar) {
//         var lar=arr[i];
//     }
// }
// document.write( " ARRAY Items: " + arr + "</br>");
// document.write( " The Largest Number Is " + lar);



  //////// Q:9
//  var arr = [24, 53, 78, 91, 12];
//  var smallest= 1000000;

//  for (i=0 ; i<=smallest ; i++){
//     if (arr[i] <smallest) {
//         var smallest=arr[i];
//     }
//   }
//  document.write( " ARRAY items: " + arr + "</br>");
//  document.write( " The Smallest Number Is " + smallest);


// //////  Q:10
//  for(var i=5 ; i<=100 ; i= i+5){
//     document.write(i + " , " );
//  }






