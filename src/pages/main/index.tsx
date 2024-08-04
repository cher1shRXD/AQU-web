import { useEffect, useState } from 'react';
import Article from '../../components/article'
import * as S from './style'
import { Board } from '../../types/board/board.type';
import useGetBoard from '../../hooks/board/useGetBoard';
import NotificationService from '../../libs/toastify/notificationService';
import Upload from '../../components/upload';
import { cachingStore } from '../../store/cachingStore';

const Main = () => {
  const [list,setList] = useState<Board[]>([])
  const [filteredList, setFilteredList] = useState<Board[]>([]);
  const cachingState = cachingStore(state=>state.cachingState);
  const setCachingState = cachingStore((state) => state.setCachingState);

  const { getBoard } = useGetBoard();

  const boardReq = async () => {
    try{
      const res = await getBoard();
      setList(res);
      setFilteredList(res);
    }catch(err){
      NotificationService.error('네트워크 에러');
    }
  }

  useEffect(()=>{
    boardReq();
    setCachingState(false);
  },[cachingState]);

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setFilteredList(list);
    } else {
      setFilteredList(
        list.filter(
          (item: Board) =>
            item.title.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText)
        )
      );
    }
  };

  return (
    <S.Container>
      <S.SearchConatiner>
        <S.SearchInputWrap>
          <S.SearchInput type="text" placeholder="검색어를 입력하세요." onChange={handleSearch}/>
          <S.SearchBtn>🔍</S.SearchBtn>
        </S.SearchInputWrap>
      </S.SearchConatiner>
      <Upload/>
      <S.Main>
        {
          filteredList.map((item)=>(
            <Article item={item} key={item.id}/>
          ))
        }
      </S.Main>
    </S.Container>
  );
}

export default Main