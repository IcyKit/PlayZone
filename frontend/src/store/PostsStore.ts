import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IPost } from "../types/Post";

class Posts {
  posts: IPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  async fetchPosts() {
    const { data } = await axios.get("http://localhost:4000/api/post");
    console.log(data);
    this.posts = data;
  }
}

export default new Posts();
