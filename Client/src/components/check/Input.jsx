import styled from 'styled-components';
import { IcCheckboxDisabled, IcCheckboxDefault } from '../../assets/svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Input() {
  const location = useLocation();
  const [todos, setTodos] = useState([]);

  // 루틴 데이터 수신 및 초기화
  useEffect(() => {
    if (location.state && location.state.routines) {
      const initialTodos = location.state.routines.map((text, index) => ({
        id: index + 1,
        text,
        isChecked: false,
      }));
      setTodos(initialTodos);
    }
  }, [location.state]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  };

  return (
    <S.TodoList>
      {todos.map((todo) => (
        <S.InputContainer key={todo.id} isChecked={todo.isChecked}>
          <StyledCheckbox onClick={() => handleToggle(todo.id)}>
            {todo.isChecked ? <IcCheckboxDefault /> : <IcCheckboxDisabled />}
          </StyledCheckbox>
          <p className="todo__title">{todo.text}</p>
        </S.InputContainer>
      ))}
    </S.TodoList>
  );
}

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
    background-color: ${({ theme, isChecked }) =>
      isChecked ? theme.main.main04 : theme.color.gray02};
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
