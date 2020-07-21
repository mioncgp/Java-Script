// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  //  Privite

  //   Item Contructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //  data structure / state
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  //   Return and make it public
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
    addItem: function (name, calories) {
      // init ID
      let ID;
      // increment id by selecting the last item's id and adding 1
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Parse calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // push the item to the data
      data.items.push(newItem);
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    inputName: "#item-name",
    inputCalories: "#item-calories",
  };

  // Public methods
  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `<li class="collection-item" id="${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      //   Insert li's into the ul
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function () {
      return UISelectors;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.inputName).value,
        calories: document.querySelector(UISelectors.inputCalories).value,
      };
    },
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // load event listeners
  const loadEventLisneners = function () {
    //  Get UI selectors
    const UIselectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UIselectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get input which is located in UI controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }

    e.preventDefault();
  };

  // Public methods
  return {
    init: function () {
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Pupulate list with items
      UICtrl.populateItemList(items);

      //   load events
      loadEventLisneners();
    },
  };
})(ItemCtrl, UICtrl);

App.init();
