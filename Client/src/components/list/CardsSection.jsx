import styled from 'styled-components';
import InfoCard from './cardsection/InfoCard';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 3.9rem;
`;

const CardsSection = () => {
  return (
    <CardsWrapper>
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
    </CardsWrapper>
  );
};

export default CardsSection;
