import { User } from "../user/user.type";

export interface Board {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  url: string;
  author:User;
}