import { useNavigate } from "react-router-dom";
import axios from "axios";

function useGetBoard() {

  const getBoard = async () => {
    try {
      const res = await axios.get('https://api-aqu.p-e.kr/boards');
      return res.data;
    } catch (err: any) {
      throw err;
    }
  };

  return {
    getBoard,
  };
}

export default useGetBoard;
