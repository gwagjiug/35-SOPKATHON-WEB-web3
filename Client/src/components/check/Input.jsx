import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IcCheckboxDisabled, IcCheckboxDefault } from '../../assets/svg';
import { useState, useEffect, useEffect } from 'react';
import Button from './Button';
import { useLocation } from 'react-router-dom';

function Input({ onAllChecked, resetTrigger }) {
  const [todos, setTodos] = useState([
    { id: 1, text: '탈모방지 샴푸 사용하기', isChecked: false },
    { id: 2, text: '머리 하루에 5번 이상 빗기', isChecked: false },
    { id: 3, text: '미온수로 1분 머리 적시기', isChecked: false },
  ]);

  useEffect(() => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isChecked: false })),
    );
  }, [resetTrigger]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  };

  const allChecked = todos.every((todo) => todo.isChecked);

  const handleButtonClick = () => {
    if (allChecked && onAllChecked) {
      onAllChecked();
    }
  };

  return (
    <>
      <S.TodoList>
        {todos.map((todo) => (
          <S.InputContainer key={todo.id} ischecked={todo.isChecked}>
            <StyledCheckbox onClick={() => handleToggle(todo.id)}>
              {todo.isChecked ? <IcCheckboxDefault /> : <IcCheckboxDisabled />}
            </StyledCheckbox>
            <p className="todo__title">{todo.text}</p>
          </S.InputContainer>
        ))}
      </S.TodoList>
      <Button prop={allChecked ? 1 : 0} onClick={handleButtonClick} />
    </>
  );
}

Input.propTypes = {
  onAllChecked: PropTypes.func.isRequired,
  resetTrigger: PropTypes.bool.isRequired,
};

const S = {
  TodoList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  InputContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 5rem;
    border-radius: 12px;
    background-color: ${({ theme, ischecked }) =>
      ischecked ? theme.main.main04 : theme.color.gray02};

    .todo__title {
      margin-left: 1.4rem;
      ${({ theme }) => theme.font.title_sb_16};
      color: ${({ theme }) => theme.color.gray10};
    }
  `,
};

const StyledCheckbox = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 1.5rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Input;
