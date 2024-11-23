import MobileLayout from '../components/common/MobileLayout';
import Header from '../components/check/Header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImgHairLess02, ImgHairMany, ImgSymbol } from '../assets/svg';

const CheckRoutine = () => {
  const [level, setLevel] = useState(2);

  useEffect(() => {
    const nowDate = new Date();
    const dateOnly = nowDate.toISOString().split('T')[0];
    console.log(dateOnly);
    localStorage.setItem('currentTime', dateOnly);
  }, []);

  const date = localStorage.getItem('currentTime');

  const getImageByLevel = () => {
    switch (level) {
      case 1:
        return <ImgHairLess02 width="250px" height="250px" />;
      case 2:
        return <ImgHairMany width="250px" height="250px" />;
      case 3:
        return <ImgSymbol width="250px" height="250px" />;
      default:
        return <ImgHairLess02 width="250px" height="250px" />;
    }
  };

  return (
    <MobileLayout>
      <S.Main>
        <Header />
        <S.ImgSection>{getImageByLevel()}</S.ImgSection>
        <S.TimeSection>
          <p>{date}</p>
        </S.TimeSection>
      </S.Main>
    </MobileLayout>
  );
};

const S = {
  Main: styled.main`
    width: 100%;
    height: 100%;
    padding: 1.2rem 2rem;
  `,
  ImgSection: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1.4rem 4.5rem;
  `,
  TimeSection: styled.section`
    margin-left: 1.4rem;
    width: 100%;
    height: 7.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.color.gray08};
    ${({ theme }) => theme.font.title_sb_16};
  `,
};

export default CheckRoutine;
