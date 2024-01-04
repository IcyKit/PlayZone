import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPost } from "../types/Post";

class Posts {
  isLoading: boolean = true;
  posts: IPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts() {
    this.isLoading = true;
    try {
      const { data } = await axios.get("http://localhost:4000/api/post");
      this.posts = data;
      this.isLoading = false;
    } catch (e) {}
  }
}

export default new Posts();
