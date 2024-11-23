import styled from 'styled-components';
import MobileLayout from '../components/common/MobileLayout';
import ListHeader from '../components/list/ListHeader';
import PercentageDisplay from '../components/list/PercentageDisplay';
import InfoCard from '../components/list/InfoCard';
import LevelDisplay from '../components/list/LevelDisplay'; // Level 컴포넌트 추가
import { ImgHairLess02 } from '../assets/svg'; // 캐릭터 이미지 사용

const PageContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;

const SuccessRateSection = styled.div`
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

const CharacterImage = styled(ImgHairLess02)`
  width: 123px;
  height: 107px;
`;

const CardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 3.9rem;
`;

const LevelSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
`;

const LevelTitle = styled.h3`
  ${({ theme }) => theme.font.title_sb_20}
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1.5rem;
`;

const LevelContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ListPage = () => {
  return (
    <MobileLayout>
      <ListHeader title="돌아가기" onBack={() => console.log('뒤로가기')} />
      <PageContainer>
        <SuccessRateSection>
          <TextContainer>
            <Title>볼디를 얼마나 풍성하게<br /> 해주었을까요?</Title>
            <PercentageDisplay />
          </TextContainer>
          <CharacterImage alt="캐릭터 이미지" />
        </SuccessRateSection>

        <CardsSection>
          <InfoCard
            title={`볼디의 머리가 몇 번 \n자랐을까요?`}
            count="42회"
            subtitle="누적 완료 횟수"
          />
          <InfoCard
            title={`볼디가 탈모빔을 몇 번 \n맞았을까요?`}
            count="3회"
            subtitle="누적 완료 횟수"
          />
        </CardsSection>
        
        {/* LevelSection */}
        <LevelSection>
          <LevelTitle>현재 볼디 레벨</LevelTitle>
          <LevelContent>
            <LevelDisplay level={1} levelsLeft={9} />
            <CharacterImage alt="캐릭터 이미지" />
          </LevelContent>
        </LevelSection>

      </PageContainer>
    </MobileLayout>
  );
};

export default ListPage;
