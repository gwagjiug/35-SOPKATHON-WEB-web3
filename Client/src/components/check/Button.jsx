import styled from 'styled-components';
function Button() {
  return (
    <>
      <S.ButtonContainer>
        <p>안녕하세요</p>
      </S.ButtonContainer>
    </>
  );
}

const S = {
  ButtonContainer: styled.div`
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
