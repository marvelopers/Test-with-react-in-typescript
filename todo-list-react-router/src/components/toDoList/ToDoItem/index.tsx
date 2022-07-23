import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface ToDoItemProps {
  text: string;
  onClick: () => void;
}

const ToDoItem = ({ text, onClick }: ToDoItemProps) => (
  <ToDo>
    <div>{text}</div>
    <Button text="x" onClick={onClick} />
  </ToDo>
);

export default ToDoItem;

const ToDo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  border-bottom: 1px solid gray;
`;
