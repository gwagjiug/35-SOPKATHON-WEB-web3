import { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import {
  IcRoutineDelete,
  IcRoutinePlus,
  ImgRoutineBoldSmile,
} from '../../assets/svg';

const PostRoutine = ({ initialRoutines = [], isEditMode = false }) => {
  const [inputValue, setInputValue] = useState('');
  const [routineList, setRoutineList] = useState(initialRoutines);

  const buttonText = isEditMode ? '수정하기' : '제출하기';

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addRoutine = () => {
    if (inputValue.trim()) {
      setRoutineList([...routineList, inputValue]);
      setInputValue('');
    }
  };

  const removeRoutine = (index) => {
    const updatedRoutines = routineList.filter((_, i) => i !== index);
    setRoutineList(updatedRoutines);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addRoutine();
    }
  };

  return (
    <RoutineContainer>
      <TopContainer>
        <Title>
          당신의 풍성 루틴을
          <br /> {isEditMode ? '수정하새요!' : '작성해주세요!'}
        </Title>
        <ImgWrap>
          <ImgRoutineBoldSmile />
        </ImgWrap>
      </TopContainer>
      <InputContainer
        placeholder="루틴 입력하기"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <RoutineList>
        {routineList.map((routine, index) => (
          <RoutineItem key={index}>
            <RoutineWrap>{routine}</RoutineWrap>
            <DeleteIconWrap>
              <IcRoutineDelete onClick={() => removeRoutine(index)} />
            </DeleteIconWrap>
          </RoutineItem>
        ))}
      </RoutineList>
      <RoutinePlusWrap>
        <IcRoutinePlus onClick={addRoutine} />
      </RoutinePlusWrap>
      <SubmitButtonWrap>
        <SubmitButton hasRoutines={routineList.length > 0}>
          {buttonText}
        </SubmitButton>
      </SubmitButtonWrap>
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
  background-color: ${theme.color.white};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: ${theme.color.gray10};
  ${theme.font.title_sb_20}

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
  ${theme.font.title_sb_14}
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
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const RoutineWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const DeleteIconWrap = styled.button`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const SubmitButtonWrap = styled.button`
  position: fixed;
  bottom: 0;
  width: 37.5rem;
  height: 15.1rem;
  padding: 4.6rem 0 5.3rem 0;
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
  background-color: ${({ hasRoutines }) =>
    hasRoutines ? theme.main.main02 : theme.color.gray05};
  &:hover {
    background-color: ${({ hasRoutines }) =>
      hasRoutines ? theme.main.main01 : theme.color.gray05};
  }
  color: ${theme.color.white};
  ${theme.font.title_sb_20}
`;

const RoutineList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

const RoutineItem = styled.li`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1.8rem 1.5rem;
  margin-top: 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: none;
  background: ${theme.color.gray02};
  ${theme.font.title_sb_14}
  color: ${theme.color.gray10};
`;
