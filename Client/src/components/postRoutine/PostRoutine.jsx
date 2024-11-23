import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';
import {
  IcRoutineDelete,
  IcRoutinePlus,
  ImgRoutineBoldSmile,
} from '../../assets/svg';

const PostRoutine = ({ initialRoutines = [], isEditMode = false }) => {
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (routineList.length >= 1) {
      navigate('/check');
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
        onKeyDown={handleKeyPress}
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
        <SubmitButton
          hasroutines={routineList.length > 0}
          onClick={handleSubmit}
        >
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
  min-height: 100dvh;
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

const DeleteIconWrap = styled.div`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SubmitButtonWrap = styled.div`
  margin-top: auto;
  width: 100%;
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
  background-color: ${({ hasroutines }) =>
    hasroutines ? theme.main.main02 : theme.color.gray05};
  &:hover {
    background-color: ${({ hasroutines }) =>
      hasroutines ? theme.main.main01 : theme.color.gray05};
  }
  color: ${theme.color.white};
  ${theme.font.title_sb_20}
`;

const RoutineList = styled.ul`
  width: 100%;
  height: auto;
  max-height: 45.4rem; /* 높이 고정 */
  list-style: none;
  overflow-y: scroll; /* 스크롤 가능 */
  padding: 0;
  margin: 0;

  /* 스크롤바 스타일 (선택 사항) */
  &::-webkit-scrollbar {
    width: 0; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.gray04}; /* 스크롤바 색상 */
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.white}; /* 스크롤바 트랙 색상 */
  }
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
