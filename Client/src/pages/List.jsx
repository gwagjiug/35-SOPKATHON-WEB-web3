import styled from 'styled-components';
import MobileLayout from '../components/common/MobileLayout';
import ListHeader from '../components/list/ListHeader';
import SuccessRateSection from '../components/list/SuccessRateSection';
import CardsSection from '../components/list/CardsSection';
import LevelSection from '../components/list/LevelSection';
import CardItem from '../components/list/CardItem';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  width: 100%;
  padding: 3rem;
`;

const ListPage = () => {
  const navigate = useNavigate();
  return (
    <MobileLayout>
      <ListHeader title="돌아가기" onBack={() => navigate(-1)} />
      <PageContainer>
        <SuccessRateSection />
        <CardsSection />
        <LevelSection level={1} levelsLeft={9} />
        <S.Container>
          <h1>지금까지 볼디의 모습</h1>
          <S.CardsContainer>
            <CardItem />
            <CardItem />
            <CardItem />
          </S.CardsContainer>
        </S.Container>
      </PageContainer>
    </MobileLayout>
  );
};

export default ListPage;

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    & h1 {
      ${({ theme }) => theme.font.title_sb_20}
      margin-bottom: 1.7rem;
    }
  `,

  CardsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
};
