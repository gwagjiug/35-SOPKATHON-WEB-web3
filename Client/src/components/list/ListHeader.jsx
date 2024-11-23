import styled from 'styled-components';
import { IcnRoutineBack } from '../../assets/svg';

/* eslint-disable react/prop-types */
const ListHeader = ({ title, onBack }) => {
  return (
    <HeaderContainer>
      <StyledIcnRoutineBack onClick={onBack}/>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
`;

const Title = styled.h1`
  ${({ theme }) => theme.font.title_sb_14}
  color: ${({ theme }) => theme.color.gray08};
  margin-left: 0.4rem;
`;

const StyledIcnRoutineBack = styled(IcnRoutineBack)`
  width: 2rem;
  height: 2rem;
`;

export default ListHeader;
