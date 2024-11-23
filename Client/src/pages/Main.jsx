import MobileLayout from '../components/common/MobileLayout';
import {
  ImgSymbol,
  ImgSymbolLb,
  ImgSymbolLt,
  ImgSymbolRb,
  ImgSymbolRt,
} from '../assets/svg';
import styled from 'styled-components';

const Main = () => {
  return (
    <MobileLayout>
      <S.Wrapper>
        <S.Container>
          <S.TitleBox>
            <h1>나는야 빡빡이</h1>
            <h2>볼디의 머리를 채워주세요!</h2>
          </S.TitleBox>
          <ImgSymbol width="21.1rem" heigth="24.2rem" />
        </S.Container>
        <S.Button>시작하기</S.Button>
      </S.Wrapper>
      <S.Iconlt>
        <ImgSymbolLt width=" 458.266px" height="399.563px" />
      </S.Iconlt>
      <S.Iconrt>
        <ImgSymbolRt width="156px" height="136px" />
      </S.Iconrt>
      <S.Iconlb>
        <ImgSymbolLb width="240px" heigth="191px" />
      </S.Iconlb>
      <S.Iconrb>
        <ImgSymbolRb width="219px" height="191px" />
      </S.Iconrb>
    </MobileLayout>
  );
};

export default Main;

const S = {
  Wrapper: styled.main`
    position: relative;
    display: flex;
    height: 100dvh;
    align-items: center;
    padding-top: 40%;
    gap: 16rem;
    flex-direction: column;

    & h1 {
      font-size: 3.2rem;
    }

    & h2 {
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
    width: 80%;
    padding: 1.2rem 11.6rem;
    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.main.main02};
    color: ${({ theme }) => theme.color.black};
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
