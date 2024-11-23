import styled from 'styled-components';
import { IcCheckboxDisabled, IcCheckboxDefault } from '../../assets/svg';
import { useState } from 'react';

function Input() {
  const [todos, setTodos] = useState([
    { id: 1, text: '안녕하세요👌', isChecked: false },
    { id: 2, text: '리스트 항목 2', isChecked: false },
    { id: 3, text: '리스트 항목 3', isChecked: false },
    { id: 4, text: '리스트 항목 4', isChecked: false },
    { id: 5, text: '리스트 항목 5', isChecked: false },
    { id: 6, text: '리스트 항목 5', isChecked: false },
  ]);

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
