import PropTypes from 'prop-types';
import styled from 'styled-components';

const LevelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LevelCount = styled.span`
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 64px;
  color: ${({ theme }) => theme.main.main01};
`;

const LevelSubtitle = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
  margin-top: 1.9rem;
`;

const LevelDisplay = ({ level, levelsLeft }) => {
  return (
    <LevelTextContainer>
      <LevelCount>{level} level</LevelCount>
      <LevelSubtitle>풍성풍성까지 {levelsLeft}레벨 남았어요!</LevelSubtitle>
    </LevelTextContainer>
  );
};

LevelDisplay.propTypes = {
  level: PropTypes.number.isRequired,
  levelsLeft: PropTypes.number.isRequired,
};

export default LevelDisplay;
