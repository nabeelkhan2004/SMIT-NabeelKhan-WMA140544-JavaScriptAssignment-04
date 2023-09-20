// Chapter 17 - 20

                            //1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var multiArr = [[],[]];

                            //2. Declare and initialize a multidimensional array, representing the following matrix:

// var multiArr = [[0,1,2,3],
//                 [1,0,1,2],
//                 [2,1,0,1]];

                            //3. Write a program to print numeric counting from 1 to 10.

// var multiArr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10]
// ]

// for (var i = 0; i <= multiArr[multiArr.length - 1].length; i++) {
//     for (var j = 0; j <= (multiArr[i].length - 1); j++) {
//         document.write(multiArr[i][j] + "<br>")
//     }
// }

                            //4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var tableNum = prompt("Write a number for multiplication table");
// var tableLength = prompt("Length for multiplication table");

// document.write("Multiplication table of " + tableNum + "<br>" + "Length " + tableLength  + "<br><br>");

// for(var i = 1; i <= tableLength; i++) {
//     document.write(("<h3>" + tableNum + " x " + i + " = " + (i * tableNum) + "<br>" + "</h3>"));
// }

                            //5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

// var arrFruit = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i < arrFruit.length; i++) {
//     document.write("Element at index " + i + "  is " + arrFruit[i] + "<br>")
// }

                            //6. Generate the following series in your browser. See
                            // example output.
                            // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
                            // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
                            // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
                            // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
                            // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h3>Counting:</h3>")
// for(var i = 1; i <= 15; i++) {
//     document.write(i + ",")
// }

// document.write("<h3>Reverse Counting:</h3>")
// for(var i = 10; i > 0 ; i--) {
//     document.write(i + ",")
// }

// document.write("<h3>Even:</h3>")
// for(var i = 0; i <= 10 ; i++) {
//     document.write(i * 2 + ", ")
// }

// document.write("<h3>Odd:</h3>")
// for(var i = 0; i < 10 ; i++) {
//     document.write(i + (i + 1) + ", ")
// }

// document.write("<h3>Odd:</h3>")
// for(var i = 1; i <= 10 ; i++) {
//     if (i * 2000 > 999 && i * 2000< 99999){
//     document.write(i * 2 + "k" + ", ")
//     } else {
//         document.write(i * 2000 + ", ")
//     }
// }

                            // 7. You have an array
                            // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
                            // Write a program to enable “search by user input” in an
                            // array.
                            // After searching, prompt the user whether the given item is
                            // found in the list or not.

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

// var promptUser = prompt("Please input your entry");

// promptUserLowerCase = promptUser.toLowerCase()

// var stringPrompt = "We are sorry. " + promptUser + " is <b>not available</b> in our bakery"

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (promptUserLowerCase == bakeryItems[i]) {
//         stringPrompt = promptUser + " is <b>availavle</b> at Index " + i;
//         break;
//     }
// }

// document.write(stringPrompt);

                            // 8. Write a program to identify the largest number in the
                            // given array.
                            // A = [24, 53, 78, 91, 12].

// var arrList = [24, 53, 78, 91, 12];
// var arrItems = arrList[0];

// for(var i = 0; i < arrList.length; i++) {
//     if(arrList[i] > arrItems) {
//         arrItems = arrList[i]
//     }
// }

// document.write("<h3>" + "Array items: " + arrList + "</h3>")
// document.write("<h3>" + "The largest number is: " + arrItems + "</h3>" )

                            //9.  Write a program to identify the smallest number in the
                            // given array.
                            // A = [24, 53, 78, 91, 12]

// var arrList = [24, 53, 78, 91, 12];
// var arrItems = arrList[0];

// for(var i = 0; i < arrList.length; i++) {
//     if(arrList[i] < arrItems) {
//         arrItems = arrList[i]
//     }
// }

// document.write("<h3>" + "Array items: " + arrList + "</h3>")
// document.write("<h3>" + "The largest number is: " + arrItems + "</h3>" )

                            // 10. Write a program to print multiples of 5 ranging 1 to 100.
                            // var multi5 = [];

// for(var i = 1; i <= 100; i++) {
//     if(i % 5 === 0)
//     multi5.push(i)
// }

// document.write(multi5);

// Chapter 21 - 25

                            //  1. Write a program that takes two user inputs for first and
                            //  last name using prompt and merge them in a new variable
                            //  titled fullName. Greet the user using his full name.

// var firstName = prompt("Your first name")
// var lastName = prompt("Your last name")

// var fullName = firstName + " " + lastName;

// alert("Welcome " + fullName)

                            // 2.Write a program to take a user input about his favorite
                            // mobile phone model. Find and display the length of user
                            // input in your browser

// var userFavtPhone = prompt("Your favourite phone?")

// document.write("Your favourite phone is: " + "<b>" + userFavtPhone + "</b>" + "<br>");
// document.write("Length of string: " + "<b>" + userFavtPhone.length + "</b>");

                            // 3. Write a program to find the index of letter “n” in the word
                            // “Pakistani” and display the result in your browser .

// var countryName = "Pakistani";
// document.write("String: " + "<b>" + countryName + "</b>" + "<br>" + "Index of 'n': " + "<b>" + countryName.indexOf("n") + "</b>");

                            // 4. Write a program to find the last index of letter “l” in the
                            // word “Hello World” and display the result in your browser.

// var StringVar = "Hello World";
// document.write("String: " + "<b>" + StringVar + "</b>" + "<br>" + "Index of 'l': " + "<b>" + StringVar.lastIndexOf("l") + "</b>");

                            // 5. Write a program to find the character at 3rd index in the
                            // word “Pakistani” and display the result in your browser.

// var countryName = "Pakistani";
// document.write("String: " + "<b>" + countryName + "</b>" + "<br>" + "Character at index 3: " + "<b>" + countryName.charAt(3) + "</b>");

                            // 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Your first name") + " ";
// var lastName = prompt("Your last name")

// var fullName = firstName.concat(lastName);

// alert(fullName)

                            // 7. Write a program to replace the “Hyder” to “Islam” in the
                            // word “Hyderabad” and display the result in your browser.

// var cityName = "Hyderabad";

// document.write("City: " + "<b>" + cityName + "</b>" + "<br>")

// document.write("After replacement: " + "<b>" + cityName.replace("Hyder", "Islam") + "</b>");

                            // 8. Write a program to replace all occurrences of “and” in the
                            // string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write(" <b> Message: " + "</b>" + "<br>"+ message + "<br>");
// document.write("<b> After replacement 'and' with '&': " + "</b>" + "<br>" + message.replace(/and/g, "&"));

                            //9. Write a program that converts a string “472” to a number
                            // 472. Display the values & types in your browser.

// var stringNum = "472";

// document.write("Value: " + "<b>" + stringNum + "</b>"+ "<br> Type: " + "<b>" + (typeof stringNum) + "</b> <br>");
// stringNum = Number(stringNum)
// document.write("Value: " + "<b>" + stringNum + "</b>"+ "<br> Type: " + "<b>" + (typeof stringNum) + "</b>");

                            // 10. Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Write a String in lowercase");

// document.write("User input: " + userInput + "<br>" + "Upper Case: " +  userInput.toUpperCase());

                            // 11. Write a program that takes user input. Convert and show the input in title case.

// var userInput = prompt("Write a String in lowercase");

// document.write("User input: " + userInput + "<br>" + "Upper Case: " +  userInput.replace(userInput.charAt(0), userInput.charAt(0).toUpperCase()));

                            // 12. Write a program that converts the variable num to string.

// var num = 35.36;

// document.write(typeof num + ": " + num + "<br>")

// num = num.toString()

// document.write("Result: " + num.replace(".", ""))

                            // 13. Write a program to take user input and store username
                            // in a variable. If the username contains any special symbol
                            // among [@ . , !], prompt the user to enter a valid username.
                            // For character codes of [@ .

// var userInput = prompt("Please enter a username")

// for(var i = 0; i < userInput.length; i++) {
//     if(userInput.charCodeAt(i) === 33 || userInput.charCodeAt(i) === 44 || userInput.charCodeAt(i) === 46 || userInput.charCodeAt(i) === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }

                            // 14. You have an array
                            // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
                            // Write a program to enable “search by user input” in an
                            // array. After searching, prompt the user whether the given
                            // item is found in the list or not.
                            // Note: Perform case insensitive search. Whether the user
                            // enters cookie, Cookie, COOKIE or coOkIE, program
                            // should inform about its availability. Example:

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

// var promptUser = prompt("Please input your entry");

// promptUserLowerCase = promptUser.toLowerCase()

// var stringPrompt = "We are sorry. " + promptUser + " is <b>not available</b> in our bakery"

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (promptUserLowerCase == bakeryItems[i]) {
//         stringPrompt = promptUser + " is <b>availavle</b> at Index " + i + " in our bakery";
//         break;
//     }
// }

// document.write(stringPrompt);

                            // 15. Write a program to take password as an input from
                            // user. The password must qualify these requirements:
                            // a. It should contain alphabets and numbers
                            // b. It should not start with a number
                            // c. It must at least 6 characters long
                            // If the password does not meet above requirements,
                            // prompt the user to enter a valid password.
                            // For character codes of a-z, A-Z & 0-9, refer to ASCII
                            // table at the end of this document.

// var userPassword = prompt("Please enter your password");

// document.write("Entered password: " + "<b>" + userPassword + "</b>" + "<br>")
// var flag = "";

// if (userPassword.length >= 6) {
//     if ((userPassword.charCodeAt(0) > 96 && userPassword.charCodeAt(0) < 123) || (userPassword.charCodeAt(0) > 64 && userPassword.charCodeAt(0) < 91)) {
//         for (var i = 0; i < userPassword.length; i++) {
//             if ((userPassword.charCodeAt(i) > 96 && userPassword.charCodeAt(i) < 123) || (userPassword.charCodeAt(i) > 64 && userPassword.charCodeAt(i) < 91) || (userPassword.charCodeAt(i) > 47 && userPassword.charCodeAt(i) < 58)) {
//             } else {
//                 flag += userPassword[i]
//             }
//         }
//         if(!flag) {
//             document.write("You have Entered a strong password")
//         } else {
//             document.write("Your password cannot include " +  "<b>" + flag + "</b>" + " character(s)" + "<br>" + "Please enter a valid password")
//         }
//     } else {
//         document.write("Password cannot begin with a number" + "<br>" + "Please enter a valid password");
//     }
// } else {
//     document.write("Password must be atlease 6 characters long"  + "<br>" + "Please enter a valid password");
// }


                            // 16. Write a program to convert the following string to an
                            // array using string split method.
                            // var university = “University of Karachi”;

// var university = "University of Karachi"
// university = university.split('')

// for(var i = 0; i < university.length; i++ ) {
//     document.write(university[i] + "<br>")
// }

                            // 17. Write a program to display the last character of a user
                            // input.

// var input = prompt("Type your input");

// document.write("User input: " + input + "<br>");
// document.write("Last character of input: " + input[input.length - 1]);

                            // 18. You have a string “The quick brown fox jumps over the
                            // lazy dog”. Write a program to count number of
                            // occurrences of word “the” in given string.

// var text = "The quick brown fox jumps over the lazy dog";

// var word = prompt("Search your word");

// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if(text.slice(i, (i+word.length)).toLowerCase() === word) {
//         count++
//     }
// };

// document.write("Text: " + text + "<br>" + "There are " + count + " occurance(s) of word " + "'" + word + "'");

