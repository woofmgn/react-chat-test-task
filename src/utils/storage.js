class Storage {
  constructor(data, user) {
    this._dataStorage = data;
    this._userStorage = user;
  }

  getData() {
    this._storage = JSON.parse(localStorage.getItem(this._dataStorage));
    if (this._storage) {
      return this._storage;
    }
  }

  setData(newMessage) {
    this._storage = JSON.parse(localStorage.getItem(this._dataStorage)) || [];
    this._cloneArr = structuredClone(this._storage);
    this._newStorage = [...this._cloneArr, newMessage];

    localStorage.setItem(this._dataStorage, JSON.stringify(this._newStorage));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem(this._userStorage));
  }

  setUser(newUser) {
    return sessionStorage.setItem(this._userStorage, JSON.stringify(newUser));
  }
}

const storage = new Storage('messages', 'user');

export default storage;
