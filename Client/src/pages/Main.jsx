import MobileLayout from '../components/common/MobileLayout';
import MainContent from '../components/main/MainContent';

const Main = () => {
  return (
    <MobileLayout>
      <MainContent />
    </MobileLayout>
  );
};

export default Main;

const S = {
  Wrapper: styled.main`
    position: relative;
    display: flex;
    height: 100dvh;
    align-items: center;
    padding-top: 35%;
    gap: 16rem;
    flex-direction: column;
    overflow: hidden;

    & h1 {
      ${({ theme }) => theme.font.title_sb_32}
      margin-bottom: 1rem;
    }

    & h2 {
      ${({ theme }) => theme.font.title_sb_16}
      color: ${({ theme }) => theme.color.gray05};
    }
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.button`
    width: 90%;
    padding: 1.2rem 11.6rem;
    border-radius: 1.6rem;
    ${({ theme }) => theme.font.title_sb_20}
    background-color: ${({ theme }) => theme.main.main02};
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
  `,

  Iconlt: styled.div`
    position: absolute;
    top: 0;
    left: -12rem;
  `,

  Iconlb: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
  `,

  Iconrt: styled.div`
    position: absolute;
    top: 0;
    right: -1.6rem;
  `,

  Iconrb: styled.div`
    position: absolute;
    bottom: 0;
    right: -4rem;
  `,
};
