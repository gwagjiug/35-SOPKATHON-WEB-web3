import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  ImgSymbol,
  ImgSymbolLb,
  ImgSymbolLt,
  ImgSymbolRb,
  ImgSymbolRt,
} from '../../assets/svg';
const MainContent = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <h1>나는야 빡빡이</h1>
          <h2>볼디의 머리를 채워주세요!</h2>
        </S.TitleBox>
        <ImgSymbol width="21.1rem" heigth="24.2rem" />
      </S.Container>
      <S.Button onClick={() => navigate('/post')}>시작하기</S.Button>
      <S.Iconlt>
        <ImgSymbolLt width=" 458.266px" height="39.9rem" />
      </S.Iconlt>
      <S.Iconrt>
        <ImgSymbolRt width="15.6rem" height="13.6rem" />
      </S.Iconrt>
      <S.Iconlb>
        <ImgSymbolLb width="24rem" heigth="19.1rem" />
      </S.Iconlb>
      <S.Iconrb>
        <ImgSymbolRb width="21.9rem" height="19.1rem" />
      </S.Iconrb>
    </S.Wrapper>
  );
};

export default MainContent;

const S = {
  Wrapper: styled.main`
    position: relative;
    display: flex;
    height: 100dvh;
    align-items: center;
    padding-top: 35%;
    gap: 16rem;
    flex-direction: column;
    overflow: hidden;

    & h1 {
      ${({ theme }) => theme.font.title_sb_32}
      margin-bottom: 1rem;
    }

    & h2 {
      ${({ theme }) => theme.font.title_sb_16}
      color: ${({ theme }) => theme.color.gray05};
    }
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.button`
    width: 90%;
    padding: 1.2rem 11.6rem;
    border-radius: 1.6rem;
    ${({ theme }) => theme.font.title_sb_20}
    background-color: ${({ theme }) => theme.main.main02};
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
  `,

  Iconlt: styled.div`
    position: absolute;
    top: 0;
    left: -12rem;
  `,

  Iconlb: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
  `,

  Iconrt: styled.div`
    position: absolute;
    top: 0;
    right: -1.6rem;
  `,

  Iconrb: styled.div`
    position: absolute;
    bottom: 0;
    right: -4rem;
  `,
};
