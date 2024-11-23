import styled from 'styled-components';
import MobileLayout from '../components/common/MobileLayout';
import ListHeader from '../components/list/ListHeader'; 
import PercentageDisplay from '../components/list/PercentageDisplay'; 

const PageContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;

const SuccessRateSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const Title = styled.h2`
  ${({ theme }) => theme.font.title_sb_20}
  color: ${({ theme }) => theme.color.black};
`;

const CharacterImage = styled.img`
  width: 80px;
  height: auto;
`;

const ListPage = () => {
  return (
    <MobileLayout>
      <ListHeader title="돌아가기" onBack={() => console.log('뒤로가기')} />
      <PageContainer>
        <SuccessRateSection>
          <TextContainer>
            <Title>볼디를 얼마나 풍성하게<br /> 해주었을까요?</Title>
            {/* PercentageDisplay 내부에서 더미 데이터를 사용하므로 props 전달 불필요 */}
            <PercentageDisplay />
          </TextContainer>
          <CharacterImage
            src="/path-to-your-character-image.png"
            alt="캐릭터 이미지"
          />
        </SuccessRateSection>
      </PageContainer>
    </MobileLayout>
  );
};

export default ListPage;
