export interface IPost {
  id: string;
  username: string;
  title: string;
  body: string | null;
  attachment: string | null;
  createdAt: string;
  user: {
    id: string;
    username: string;
    avatar: string | null;
  };
}
