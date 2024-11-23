import styled from 'styled-components';
import theme from '../../styles/theme';
import { IcRoutinePlus, ImgRoutineBoldSmile } from '../../assets/svg';

const PostRoutine = () => {
  return (
    <RoutineContainer>
      <TopContainer>
        <Title>
          당신의 풍성 루틴을
          <br /> 작성해주세요!
        </Title>
        <ImgWrap>
          <ImgRoutineBoldSmile />
        </ImgWrap>
      </TopContainer>
      <InputContainer placeholder="루틴 입력하기" />
      <RoutinePlusWrap>
        <IcRoutinePlus />
      </RoutinePlusWrap>
      <SubmitButton>제출하기</SubmitButton>
    </RoutineContainer>
  );
};

export default PostRoutine;

const RoutineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 4.2rem 2rem 5.4rem 2rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.black};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Title = styled.div`
  color: ${theme.color.gray10};

  padding: 2.5rem 2.4rem 4.5rem 1rem;
`;

const ImgWrap = styled.div`
  display: flex;
  width: 14.8rem;
  height: 12.9rem;
`;

const InputContainer = styled.input`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1.8rem 1.5rem;
  margin-top: 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: none;
  background: ${theme.color.gray02};
  ::placeholder {
    color: ${theme.color.gray06};
  }
`;

const RoutinePlusWrap = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  padding: 5px 4.681px 4.681px 5px;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const SubmitButton = styled.button`
  display: flex;
  width: 100%;
  height: 5.2rem;
  padding: 1.2rem 11.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.6rem;
  background: ${theme.color.gray05};
  color: ${theme.color.black};
`;
