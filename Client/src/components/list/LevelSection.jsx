import PropTypes from 'prop-types';
import styled from 'styled-components';
import LevelDisplay from './levelsection/LevelDisplay'; 
import { ImgHairLess02 } from '../../assets/svg'; 

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
`;

const SectionTitle = styled.h3`
  ${({ theme }) => theme.font.title_sb_20}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1.5rem;
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CharacterImage = styled(ImgHairLess02)`
  width: 123px;
  height: 107px;
`;

const LevelSection = ({ level, levelsLeft }) => {
  return (
    <SectionContainer>
      <SectionTitle>현재 볼디 레벨</SectionTitle>
      <SectionContent>
        <LevelDisplay level={level} levelsLeft={levelsLeft} />
        <CharacterImage alt="캐릭터 이미지" />
      </SectionContent>
    </SectionContainer>
  );
};

LevelSection.propTypes = {
  level: PropTypes.number.isRequired,
  levelsLeft: PropTypes.number.isRequired,
};

export default LevelSection;
