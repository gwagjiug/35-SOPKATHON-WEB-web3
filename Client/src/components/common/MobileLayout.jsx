import styled from 'styled-components';

const MobileLayout = ({ children }) => {
  return (
    <S.Wrpper>
      <S.Layout>{children}</S.Layout>
    </S.Wrpper>
  );
};

export default MobileLayout;

const S = {
  Wrpper: styled.div`
    display: flex;
    justify-content: center;
    background-color: #dddddd;
  `,

  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 360px;
    max-width: 430px;
    min-height: 100vh;

    background-color: white;

    & > main {
      width: 100%;
    }
  `,
};
