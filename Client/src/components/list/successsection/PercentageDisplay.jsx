import PropTypes from 'prop-types';
import styled from 'styled-components';

const PercentageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.5rem;
`;

const Percentage = styled.span`
  ${({ theme }) => theme.font.title_sb_56}
  color: ${({ theme }) => theme.main.main01};
`;

const SubtitleContainer = styled.div`
  margin-top: 1rem;
`;

const SubtitleText = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
`;

const Highlight = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
  margin-left: 1.2rem;
`;

const PercentageDisplay = () => {
  // 더미 데이터
  const percentage = 90;
  const total = 50;
  const success = 45;

  return (
    <PercentageContainer>
      <Percentage>{percentage}%</Percentage>
      <SubtitleContainer>
        <SubtitleText>전체 성공률</SubtitleText>
        <Highlight>{total}개 중 {success}개</Highlight>
      </SubtitleContainer>
    </PercentageContainer>
  );
};

PercentageDisplay.propTypes = {
  percentage: PropTypes.number,
  total: PropTypes.number,
  success: PropTypes.number,
};

export default PercentageDisplay;
