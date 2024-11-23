import styled from 'styled-components';
import { IcnRoutineBack } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleNavigateToList = () => {
    navigate('/list');
  };
  const handldNavigateToEdit = () => {
    navigate('/edit');
  };

  return (
    <>
      <S.HeaderContainer>
        <div className="header__left" onClick={handldNavigateToEdit}>
          <StyledIcnRoutineBack />
          <p>루틴 수정하기</p>
        </div>
        <div className="header__right" onClick={handleNavigateToList}>
          <p>나의 기록</p>
        </div>
      </S.HeaderContainer>
    </>
  );
}

const S = {
  HeaderContainer: styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.color.gray08};
    ${({ theme }) => theme.font.title_sb_14}
    .header__left {
      display: flex;
      height: 4.4rem;
      padding: 0rem 1.6rem 0rem 0.8rem;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
    }
    .header__right {
      display: flex;
      height: 4.4rem;
      padding: 1rem 1.6rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
  `,
};

const StyledIcnRoutineBack = styled(IcnRoutineBack)`
  width: 2rem;
  height: 2rem;
`;

export default Header;
