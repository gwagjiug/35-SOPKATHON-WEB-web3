import styled from 'styled-components';
import { ImgHairLess02 } from '../../assets/svg';
import PercentageDisplay from './successsection/PercentageDisplay';

const SuccessRateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  ${({ theme }) => theme.font.title_sb_20}
  color: ${({ theme }) => theme.color.black};
`;

const SuccessRateSection = () => {
  return (
    <SuccessRateWrapper>
      <TextContainer>
        <Title>볼디를 얼마나 풍성하게<br /> 해주었을까요?</Title>
        <PercentageDisplay />
      </TextContainer>
      <ImgHairLess02 alt="캐릭터 이미지" width="123px" height="107px" />
    </SuccessRateWrapper>
  );
};

export default SuccessRateSection;
