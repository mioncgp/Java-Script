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
      // { id: 0, name: "Steak Dinner", calories: 1200 },
      // { id: 1, name: "Cookie", calories: 400 },
      // { id: 2, name: "Eggs", calories: 300 },
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

      return newItem;
    },
    getItemById: function (id) {
      let found = null;
      // loop trough items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    getTotalCalories: function () {
      let total = 0;
      // loop through all the items
      data.items.forEach(function (item) {
        total += item.calories;
      });
      // set the calories
      data.totalCalories = total;

      return data.totalCalories;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateItem: function (name, calories) {
      // calories to num
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      const ids = data.items.map(function (item) {
        return item.id;
      });

      const index = ids.indexOf(id);

      data.items.splice(index, 1);
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    inputName: "#item-name",
    inputCalories: "#item-calories",
    totalCaloriesEl: ".total-calories",
    listItems: "#item-list li",
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
    addListItem: function (item) {
      // show the ul element
      document.querySelector(UISelectors.itemList).style.display = "block";
      // create li element
      const li = document.createElement("li");
      // add a class to the li
      li.className = "collection-item";
      // add ID
      li.id = `item-${item.id}`;
      // add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.inputName).value = "";
      document.querySelector(UISelectors.inputCalories).value = "";
    },
    hidelist: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCaloriesEl
      ).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    addItemToForm: function () {
      document.querySelector(
        UISelectors.inputName
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.inputCalories
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    updateListItem: function (updatedItem) {
      // grab all the li items
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // convert them them from a nodeList to an array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        // get the id of the item
        const itemID = listItem.getAttribute("id");

        if (itemID === `item-${updatedItem.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${updatedItem.name}: </strong> <em>${updatedItem.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function (id) {
      // grab all the li items
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // convert them them from a nodeList to an array
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        // get the id of the item
        let itemID = parseInt(listItem.getAttribute("id").split("-")[1]);
        if (id === itemID) {
          listItem.remove();
        }
      });
    },
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // load event listeners
  const loadEventLisneners = function () {
    //  Get UI selectors
    const UIselectors = UICtrl.getSelectors();
    // disable submit on enter
    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    // Add item event
    document
      .querySelector(UIselectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    // edit icon click event
    document
      .querySelector(UIselectors.itemList)
      .addEventListener("click", itemEditClick);
    // update button
    document
      .querySelector(UIselectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);
    // back button
    document
      .querySelector(UIselectors.backBtn)
      .addEventListener("click", UICtrl.clearEditState);
    // delete button
    document
      .querySelector(UIselectors.deleteBtn)
      .addEventListener("click", deleteSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get input which is located in UI controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add new item to the UI
      UICtrl.addListItem(newItem);
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // inset total calories into the UI
      UICtrl.showTotalCalories(totalCalories);
      // clear inputs
      UICtrl.clearInput();
    }

    e.preventDefault();
  };
  // update item
  const itemUpdateSubmit = function (e) {
    // get inputs
    const input = UICtrl.getItemInput();
    // update the item and return it
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // update the UI with the new item
    UICtrl.updateListItem(updatedItem);
    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total caloreis to UI
    UICtrl.showTotalCalories(totalCalories);
    // clear inputs
    UICtrl.clearEditState();
    e.preventDefault();
  };

  // Update item submit
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // get id on the item
      const listId = e.target.parentNode.parentNode.id;
      // split in into array
      const listIdArr = listId.split("-");
      // get the actual id
      const id = parseInt(listIdArr[1]);
      // get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // sett current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  // delete button event
  const deleteSubmit = function (e) {
    // get current item
    const currentItem = ItemCtrl.getCurrentItem();
    // delete from DS
    ItemCtrl.deleteItem(currentItem.id);
    // delete from UI
    UICtrl.deleteListItem(currentItem.id);
    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total caloreis to UI
    UICtrl.showTotalCalories(totalCalories);
    e.preventDefault();
  };

  // Public methods
  return {
    init: function () {
      // set init set
      UICtrl.clearEditState();
      // Fetch items from data structure
      const items = ItemCtrl.getItems();
      // check items if none disable the list
      if (items.length === 0) {
        UICtrl.hidelist();
      } else {
        // Pupulate list with items
        UICtrl.populateItemList(items);
      }
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // inset total calories into the UI
      UICtrl.showTotalCalories(totalCalories);
      //   load events
      loadEventLisneners();
    },
  };
})(ItemCtrl, UICtrl);

App.init();
