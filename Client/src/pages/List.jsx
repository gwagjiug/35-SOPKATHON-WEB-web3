import styled from 'styled-components';
import MobileLayout from '../components/common/MobileLayout';
import ListHeader from '../components/list/ListHeader';
import SuccessRateSection from '../components/list/SuccessRateSection';
import CardsSection from '../components/list/CardsSection';
import LevelSection from '../components/list/LevelSection';

const PageContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;

const ListPage = () => {
  return (
    <MobileLayout>
      <ListHeader title="돌아가기" onBack={() => console.log('뒤로가기')} />
      <PageContainer>
        <SuccessRateSection />
        <CardsSection />
        <LevelSection level={1} levelsLeft={9} />
      </PageContainer>
    </MobileLayout>
  );
};

export default ListPage;
