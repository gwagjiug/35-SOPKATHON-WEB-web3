import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  padding: 0.8rem 1.1rem;
  background-color: ${({ theme }) => theme.color.gray03};
  border-radius: 6px;
`;

const CardTitle = styled.h3`
  ${({ theme }) => theme.font.caption_m_14}
  color: ${({ theme }) => theme.color.gray07};
  white-space: pre-wrap;
`;

const CardCount = styled.div`
  ${({ theme }) => theme.font.title_sb_24}
  color: ${({ theme }) => theme.color.black};
  margin-top: 1.4rem;
`;

const CardSubtitle = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
`;

const InfoCard = ({ title, count, subtitle }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardCount>{count}</CardCount>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardContainer>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default InfoCard;
