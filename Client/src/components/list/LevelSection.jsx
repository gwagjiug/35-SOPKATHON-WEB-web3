import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLevelData } from '../../apis/list/fetchLevelData';
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

const LevelSection = () => {
  const [level, setLevel] = useState(0); // 초기값 설정
  const maxLevel = 8; // 만렙은 8

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const fetchedLevel = await getLevelData(); // API 호출
        setLevel(fetchedLevel);
      } catch (error) {
        console.error('레벨 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchLevel();
  }, []);

  const levelsLeft = maxLevel - level; // 남은 레벨 계산

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

export default LevelSection;
