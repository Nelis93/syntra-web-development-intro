/**
 * This class is used to store data in the browser's local storage.
 * @class LocalStorage
 *
 * @method get - Get a value from local storage
 * @method set - Set a value in local storage
 * @method remove - Remove a value from local storage
 * @method clear - Clear all values from local storage
 * @method getAll - Get all values from local storage
 *
 * Remember to use JSON.stringify() and JSON.parse() when storing and retrieving objects.
 *
 * @example use the LocalStorage class in our Vanilla Javascript/06 LocalStorage to see if it worked
 */
class LocalStorage {
  constructor() {
    if (!window.localStorage)
      throw new Error("Local storage is not supported in this browser");
    this.storage = window.localStorage;
  }
  #getFromLocalStorage(key) {
    const value = window.localStorage.getItem(key);
    try {
      return (value = JSON.parse(value));
    } catch (err) {}
    return value;
  }

  get(keys) {
    return Object.entries(keys).reduce((values, [key, defaultValue]) => {
      values[key] =
        this.#getFromLocalStorage(key) !== null
          ? this.#getFromLocalStorage(key)
          : defaultValue;
      return values;
    }, {});
  }
  set(newItem) {
    for (let [key, value] of Object.entries(keys)) {
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(key, value);
    }
    // items.push(newItem);
    // localStorage.setItem("items", JSON.stringify(items));
  }
  remove(key) {
    window.localStorage.removeItem(key);
    // localStorage.getItem("items");
    // items.filter((item) => item !== binItem);
    // localStorage.setItem("items", JSON.stringify(items));
  }
  clear() {
    window.localStorage.clear();
  }
  getAll() {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      values[key] = this.#getFromLocalStorage(key);
    }
    return values;
  }
}
