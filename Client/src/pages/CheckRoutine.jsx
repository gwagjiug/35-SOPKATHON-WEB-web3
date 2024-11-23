import MobileLayout from '../components/common/MobileLayout';
import Header from '../components/check/Header';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ImgHairLess02, ImgHairMany } from '../assets/svg';

const CheckRoutine = () => {
  useEffect(() => {
    const nowDate = new Date();
    const dateOnly = nowDate.toISOString().split('T')[0];
    console.log(dateOnly);
    localStorage.setItem('currentTime', dateOnly);
  }, []);

  const date = localStorage.getItem('currentTime');

  return (
    <MobileLayout>
      <S.Main>
        <Header />
        <S.ImgSection>
          <StyledIcnBoldy />
        </S.ImgSection>
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
    ${({ theme }) => theme.font.title_sb_16}
  `,
};

const StyledIcnBoldy = styled(ImgHairLess02)`
  max-width: 24.5rem;
  height: 25rem;
`;

export default CheckRoutine;
