// Basic structure

// // IIFE (Immediately Invoked Function Expression)
// (function () {
//   // declare !private variables and functions

//   return {
//     // declare !publics variables and functions
//   };
// })();

// Standard module pattern
const UICtrl = (function () {
  // private
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    //   public
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (function () {
  // private
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();
