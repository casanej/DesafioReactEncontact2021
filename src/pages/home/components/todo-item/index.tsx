import { faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useEffect, useState } from 'react'
import { InputCheckbox } from '../../../../components';
import { TodoItem } from '../../../../models';
import { TodoItemEdit } from './components';
import { TodoItemContentStyled, TodoItemRemove, TodoItemSave, TodoItemText } from './index.style';

interface Props {
    todo: TodoItem;
    onTodoCompleted: (id: number) => void;
    onTodoDeleted: (id: number) => void;
    onTodoUpdated: (id: number, todo: TodoItem) => void;
}

export const TodoItemContent = (props: Props): ReactElement => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleFinishEdit = (newText: string) => {
        setIsEditing(false);
        props.onTodoUpdated(props.todo.id, {
            ...props.todo,
            text: newText,
        });
    }

    const handleMarkComplete = (value: boolean) => {
        props.onTodoUpdated(props.todo.id, {
            ...props.todo,
            completed: value,
        });
    }

    const handleRemove = () => {
        props.onTodoDeleted(props.todo.id);
    }
    
    return (
        <TodoItemContentStyled>
            <InputCheckbox checked={props.todo.completed} onClick={(_, value) => handleMarkComplete(value)}/>
            {
                isEditing
                ? <TodoItemEdit
                    value={props.todo.text}
                    onFinishEdit={handleFinishEdit}
                />
                : <TodoItemText completed={props.todo.completed} onDoubleClick={() => setIsEditing(true)}>{props.todo.text}</TodoItemText>
            }
            {
                !isEditing && <TodoItemRemove onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTrashAlt} size={'2x'} />
                </TodoItemRemove>
            }
        </TodoItemContentStyled>
    );
};
