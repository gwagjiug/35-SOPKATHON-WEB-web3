import MobileLayout from '../components/common/MobileLayout';
import Header from '../components/check/Header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImgCheckboxHairArray } from '../const/imgCheckboxHairArray';
import Input from '../components/check/Input';
import axios from 'axios';

const CheckRoutine = () => {
  const [level, setLevel] = useState(1);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    const nowDate = new Date();
    const dateOnly = nowDate.toISOString().split('T')[0];
    localStorage.setItem('currentTime', dateOnly);
  }, []);

  const date = localStorage.getItem('currentTime');

  const handleLevelIncrease = () => {
    setLevel((prevLevel) =>
      Math.min(prevLevel + 1, ImgCheckboxHairArray.length),
    );
    setResetTrigger((prev) => !prev);
  };

  const getImageByLevel = () => {
    const index = Math.max(
      0,
      Math.min(level - 1, ImgCheckboxHairArray.length - 1),
    );
    const SelectedImage = ImgCheckboxHairArray[index];
    return <SelectedImage width="250px" height="250px" />;
  };

  return (
    <MobileLayout>
      <S.Main>
        <Header />
        <S.ImgSection>{getImageByLevel()}</S.ImgSection>
        <S.TimeSection>
          <p>{date}</p>
        </S.TimeSection>
        <Input onAllChecked={handleLevelIncrease} resetTrigger={resetTrigger} />
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
