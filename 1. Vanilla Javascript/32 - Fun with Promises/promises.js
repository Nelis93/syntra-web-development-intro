<<<<<<< HEAD
// /* *
//  * What is the output of the code snippet?
//  */
// {
//   const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("fail");
//     resolve("success2");
//   });

//   promise
//     .then((res) => {
//       console.log("then: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     });
// }

// /**
//  * What is the output of the code snippet?
//  */
// {
//   const promise = new Promise((resolve, reject) => {
//     reject("fail");
//     resolve("success2");
//   });
//   promise
//     .then((res) => {
//       console.log("then1: ", res);
//     })
//     .then((res) => {
//       console.log("then2: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     })
//     .then((res) => {
//       console.log("then3: ", res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   Promise.resolve(1)
//     .then((res) => {
//       console.log(res);
//       return 2;
//     })
//     .catch((err) => {
//       return 3;
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   Promise.reject(1)
//     .then((res) => {
//       console.log(res);
//       return 2;
//     })
//     .catch((err) => {
//       return 3;
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }

// /**
//  * What is the output of this code snippet?
//  */
// {
//   const promise = new Promise((resolve, reject) => {
//     resolve(1);
//   });

//   promise.then((res) => {
//     console.log("first then: ", res);
//     return 2;
//   });

//   promise.then((res) => {
//     console.log("second then: ", res);
//     return 3;
//   });

//   promise.then((res) => {
//     console.log("third then: ", res);
//   });
// }

// /**
//  * What is the output of this snippet?
//  */
// {
//   Promise.resolve()
//     .then(() => {
//       return new Error("error!!!");
//     })
//     .then((res) => {
//       console.log("then: ", res);
//     })
//     .catch((err) => {
//       console.log("catch: ", err);
//     });
// }

// /**
//  * What is the output of this snippet?
//  */
// {
//   Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// }

// /**
//  * Promisify the following function
//  */
// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// const waitForMove = (element, transform) => {
//   element.addEventListener("transitionend", () => console.log("done"), {
//     once: true,
//   });
//   element.style.transform = transform;
// };

// const ball = document.getElementById("ball");
// await waitForMove(ball, "translate(10px)");

/**
 * Let's do some practice with a simple exercice. You must modify the code below based on the following rules:
    1. The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
    2. The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
//  */
// function job() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   });
// }
// job().then((res) => console.log(res));
/**
//  * Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:

//     1. Your function must always return a promise
//     2. If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
//     3. If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
//     4. If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
//  */

// function job(data) {
//   return new Promise((resolve, reject) => {
//     if (typeof data !== "number") {
//       reject("error");
//     }
//     if (data % 2) {
//       setTimeout(() => {
//         resolve("odd");
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         reject("even");
//       }, 2000);
//     }
//   });
// }
// job(3)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

=======
>>>>>>> d831ff21722a6ea259bad666befaf0481b9a8ca2
/**
 * Build a guessing game:
 *  1. A user can enter a number
    2. The system picks a random number from 1 to 6
    3. If the user's number is equal to a random number, give the user 2 points
    4. If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
    5. The user can play the game as long as they want to
 */

<<<<<<< HEAD
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const rando = Math.floor(Math.random() * 6);
    const userGuess = Number(prompt("pick a number between 1 and 6"));
    if (isNaN(userGuess)) {
      reject("Incorrect input type");
      console.log("rejected");
    }
    if (userGuess === rando) {
      resolve({ points: 1, rando });
    } else if (userGuess === rando + 1 || userGuess === rando - 1) {
      resolve({ points: 1, rando });
    } else {
      resolve({ points: 0, rando });
    }
  });
};
const continueGame = () => {
  const continuity = confirm("Do you want to play again?");
  return new Promise((resolve, reject) => {
    if (continuity) {
      resolve(handleGuess());
    } else {
      reject("thanks for playing");
=======
let userScore = 0;

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userInput = parseInt(prompt("Enter a number (1 - 6)"));

    if (userInput > 6) {
      alert("Your number is too high.");
      return handleGuess();
    }

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (userInput === randomNumber) {
      userScore = userScore + 2;
    }
    if (userInput + 1 === randomNumber || userInput - 1 === randomNumber) {
      userScore = userScore + 1;
    }
    resolve(userScore);
  });
};
const continueGame = () => {
  return new Promise((resolve, reject) => {
    const c = confirm(`Your score is ${userScore}. Do you want to continue?`);
    if (c) {
      resolve();
    } else {
      reject();
>>>>>>> d831ff21722a6ea259bad666befaf0481b9a8ca2
    }
  });
};
const handleGuess = () => {
<<<<<<< HEAD
  //const rando = Math.floor(Math.random() * 6);
  enterNumber()
    .then((res) => {
      alert(`Your score is: ${res.points}, the number was: ${res.rando}`);
      continueGame();
    })
    .catch((err) => console.log(err));
};

const startUp = confirm("Do you want to play a game?");
if (startUp) {
  handleGuess();
}
// /* 1 create a prompt
//   2 get user input
//   3 generate random number
//   4 check if number is equal to random number -> 2 points
//   5 if not check if number is equal to random number
//   if not 0 points

//   1 create a promise
//   2 resolve if user wants to continue
//   3 reject if user does not want to continue

//   1 this function brings it all together
//   2 call the enternumber function
//   3 if we have a result display it
//   4 ask the user if they want to continue
//   5 if so call enternumber again*/
=======
  enterNumber()
    .then(() => continueGame())
    .then(() => handleGuess())
    .catch(() => alert("You are done."));
};

handleGuess();
>>>>>>> d831ff21722a6ea259bad666befaf0481b9a8ca2
