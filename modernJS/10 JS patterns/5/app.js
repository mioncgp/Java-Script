// Observer Pattern
function EventObserver() {
  this.obversers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.obversers.push(fn);
    console.log(`You are now subsctibe to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.obversers = this.obversers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You unsub from ${fn.name}`);
  },
  fire: function () {
    this.obversers.forEach(function (item) {
      item.call();
    });
  },
};

const click = new EventObserver();

document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

const getCurMilliseconds = function () {
  console.log(`Current MS: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current MS: ${new Date().getSeconds()}`);
};
