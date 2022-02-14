/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

var facebookProfile = {
  name: "Ethan Connan" ,
  friends: 5,
  messages: ["Hello world!", "I like space jam!", "I like jam."],
  postMessage: function newMessage(message) {
      facebookProfile.messages.unshift(message);
      console.log(message);
  },
  deleteMessage: function eraseMessage(index) {
      facebookProfile.messages.splice(index,1);
  },
  addFriend: function increaseFriendCount() {
      facebookProfile.friends += 1;
  },
  removeFriend: function reduceFriendCount() {
     facebookProfile.friends >= 1 ? facebookProfile.friends -= 1: console.log("You have no friends to remove.");
  }
};

facebookProfile.postMessage("Wanna hear my jam?");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
