class LocalStore {
  constructor() {
    this.localStorageKeyName = 'todos';
  }

  setLocalStorageData(arrayObject) {
    localStorage.setItem(this.localStorageKeyName, JSON.stringify(arrayObject));
  }

  getLocalStorageData() {
    let localStorageData = localStorage.getItem(this.localStorageKeyName);
    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData);
    } else {
      localStorageData = [];
    }

    return localStorageData;
  }
}

export default LocalStore;