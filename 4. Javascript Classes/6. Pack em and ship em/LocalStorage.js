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
 *
 * @example new LocalStorage().get({ key1: "", key2: null })
 * @example new LocalStorage().set({ key1: "", key2: null })
 */
class LocalStorage {
  constructor() {
    if (!window.localStorage)
      throw new Error("Local storage is not supported in this browser");
    this.storage = window.localStorage;
  }
  #convertToBool(value){
    if(value === "true") return true
    if(value === "false") return false
    return null
  }
  #getFromLocalStorage(key){
    const value = window.localStorage.getItem(key)
    try {
      return value = JSON.parse(value)
      
    } catch (err){}
    return value
  }

  get(keys) {
    return Object.entries(keys).reduce((values,[key, defaultValue])=>{
      values[key] = this.#getFromLocalStorage(key) !== null ? this.#getFromLocalStorage(key) : defaultValue
      return values
    },{} )
  }
  set(newItem) {
    if(typeof value === "object" || )
    // items.push(newItem);
    // localStorage.setItem("items", JSON.stringify(items));
  }
  remove(key) {
    this.storage.removeItem(key)
    // localStorage.getItem("items");
    // items.filter((item) => item !== binItem);
    // localStorage.setItem("items", JSON.stringify(items));
  }
  clear() {
    this.storage.clear();
  }
}
