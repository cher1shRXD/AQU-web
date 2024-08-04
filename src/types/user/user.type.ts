import { Board } from "../board/board.type";

export interface User {
  id: number;
  username: string;
  role: "MEMBER" | "DEFAULT";
  board?: Board[];
}
