import styled from 'styled-components';
import { ImgSymbol } from '../../assets/svg';
import { ImgCheckboxHairArray } from '../../const/imgCheckboxHairArray';

const CardItem = ({ data }) => {
  console.log(data.level);
  const Img = ImgCheckboxHairArray[data.level - 3];

  return (
    <S.Card>
      {Img ? (
        <Img width="9.4rem" height="8.1rem" />
      ) : (
        <ImgSymbol width="9.4rem" height="8.1rem" />
      )}

      <div>
        <span>
          <span className="label">달성률</span>
          <span>{data.num_completed}</span>
          <span> / {data.num_all}</span>
        </span>
        <div className="label">{data.date}</div>
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
