import { useEffect, useState } from 'react';
import Article from '../../components/article'
import * as S from './style'
import { Board } from '../../types/board/board.type';
import useGetBoard from '../../hooks/board/useGetBoard';
import NotificationService from '../../libs/toastify/notificationService';
import Upload from '../../components/upload';
import { cachingStore } from '../../store/cachingStore';
import { userStore } from '../../store/userStore';

const Main = () => {
  const [list,setList] = useState<Board[]>([])
  const [filteredList, setFilteredList] = useState<Board[]>([]);
  const cachingState = cachingStore(state=>state.cachingState);
  const setCachingState = cachingStore((state) => state.setCachingState);
  const user = userStore(state=>state.user);

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
          <S.SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            onChange={handleSearch}
          />
          <S.SearchBtn>🔍</S.SearchBtn>
        </S.SearchInputWrap>
      </S.SearchConatiner>
      <S.BannerWrap>
        <S.Notice to="/post/1">공지사항</S.Notice>
        <S.Notice
          to="https://bolder-lemon-5f0.notion.site/6c8c7f8ca9da439a8fbfcce0663ee3c2"
          target="blank"
        >
          사용설명서
        </S.Notice>
        <S.Notice to="https://www.youtube.com/@go_diving" target="blank">
          다이빙갈래?
        </S.Notice>
      </S.BannerWrap>
      {user.role === "MEMBER" && <Upload />}
      <S.Main>
        {filteredList.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </S.Main>
      <S.Footer>
        <p>제작자: cher1shRXD(김태우)<br/><br /><a href="tel:01048901466">Tel. 010-4890-1466</a></p>
        <p style={{alignSelf:'flex-end'}}>&copy; 2024. A.Q.U(아꾸) all rights reserved</p>
      </S.Footer>
    </S.Container>
  );
}

export default Main