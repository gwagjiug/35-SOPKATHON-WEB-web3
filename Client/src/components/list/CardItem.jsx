import styled from 'styled-components';
import { ImgSymbol } from '../../assets/svg';

const CardItem = ({ e }) => {
  const name = '볼디';
  const date = '2024년 11월 21일';
  const total_routine = 10;
  const achived_routine = 7;

  return (
    <S.Card>
      <ImgSymbol width="9.4rem" height="8.1rem" />
      <div>
        <span>
          <span className="label">달성률</span>
          <span>{e.num_completed}</span>
          <span> / {e.num_all}</span>
        </span>
        <div className="label">{e.date}</div>
      </div>
    </S.Card>
  );
};

export default CardItem;

const S = {
  Card: styled.div`
    background-color: ${({ theme }) => theme.color.gray04};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.8rem 1rem;
    gap: 4.3rem;
    border-radius: 1.2rem;

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    & .label {
      margin: 1rem 1rem 0 0;
      color: ${({ theme }) => theme.color.gray07};
      ${({ theme }) => theme.font.title_r_16}
    }
  `,
};
