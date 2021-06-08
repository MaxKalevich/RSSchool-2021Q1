interface MyRecord {
  lastName: string;
  firstName: string;
  email: string;
  id: IDBValidKey;
}

export class Database {
  // @ts-ignore
  public db: IDBDatabase = null;

  constructor() {
  }

  init(name: string) {
    const iDB = window.indexedDB;
    const openRequest = iDB.open(name); // открываем базу данных
    openRequest.onupgradeneeded = () => { // инициализация и обновление базы данных
      let database = openRequest.result;
      let store = database.createObjectStore('machGame', {keyPath: 'id', autoIncrement: true}); // создание хранилища
      store.createIndex('name', 'name');
      store.createIndex('email', 'email', {unique: true});
      this.db = database;
    }
    openRequest.onsuccess = () => {
      this.db = openRequest.result;
    }
  }

  write(firstName: string, lastName: string, email: string) {

    let transaction = this.db.transaction('machGame', 'readwrite');
    let store = transaction.objectStore('machGame');
    let res = store.add({});
    transaction.oncomplete = () => {
      console.log('complete');
    }

    res.onsuccess = () => {
      res.result;
      let newRecord = { lastName: lastName, firstName: firstName, email: email, id: res.result};
      let result = store.put(newRecord);
      result.onsuccess = () => {
        console.log('complete', result.result);
      }
    }
    transaction.oncomplete = () => {
      console.log('complete');
    }
    transaction.onerror = () => {
      console.log('error');
    }
    transaction.onabort = () => {
      console.log('abort');
    }
  }

  readAll() {
    let transaction = this.db.transaction('machGame', 'readonly');
    let store = transaction.objectStore('machGame');
    let result = store.getAll();

    transaction.oncomplete = () => {
      console.log(result.result);
    }
  }

  readFiltered() {
    let transaction = this.db.transaction('machGame', 'readonly');
    let store = transaction.objectStore('machGame');
    let result = store.index('email').openCursor(null, 'prev');
    let resData: Array<any> = [];
    result.onsuccess = () => {
      let cursor = result.result;
      if (cursor) {
        if (cursor.value.email[0] === 'a') {
          resData.push(cursor.value);
        }
        cursor.continue();
      }
    }
    transaction.oncomplete = () => {
      return resData;
    }
  }
}



