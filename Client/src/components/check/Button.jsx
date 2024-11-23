import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ prop, onClick }) {
  const buttonTxt = ['내일은 풍성할래', '자라나라 머리머리✨'];

  return (
    <S.ButtonContainer onClick={onClick}>
      <p>{buttonTxt[prop]}</p>
    </S.ButtonContainer>
  );
}

Button.propTypes = {
  prop: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

const S = {
  ButtonContainer: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.2rem;
    border-radius: 16px;
    background: ${({ theme }) => theme.main.main02};
    margin: 2rem 0rem;
    color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.title_sb_20};
  `,
};

export default Button;
