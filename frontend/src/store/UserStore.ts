import { makeAutoObservable } from "mobx";

class User {
  user = {
    id: "",
    avatar: "https://mooscle.com/app/uploads/2022/03/lofi.jpeg",
    username: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser() { }
}

export default new User();
