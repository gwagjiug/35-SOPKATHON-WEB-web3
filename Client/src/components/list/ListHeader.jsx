import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid red;
  width: 100%;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const BackIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ListHeader = ({ title, onBack }) => {
  return (
    <HeaderContainer>
      <BackButton onClick={onBack}>
        <BackIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Replace this with your actual SVG */}
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </BackIcon>
      </BackButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ListHeader;
