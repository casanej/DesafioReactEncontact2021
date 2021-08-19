import React, { ReactElement, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { TodosStore } from '../../stores';
import { InputTodo, TodoItemContent } from './components';
import { HomePageStyled, TodoListContent, TodoListController, TodoListItems, TodoListManager } from './index.style';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';

interface Props { }

const todoStore = new TodosStore();
export const HomePage = observer((props: Props) => {
    const queryParams = useParams<{ filter: 'all' | 'active' | 'completed'}>();

    return (
        <HomePageStyled>
            <h1>TO DO's</h1>
            <TodoListContent>
                <TodoListController>
                    <div>
                        <FontAwesomeIcon icon={faAngleDown} size={'4x'} />
                    </div>
                    <InputTodo
                        onAddTodo={todoStore.addTodo}
                    />
                </TodoListController>
                {
                    true === true && <>
                        <TodoListItems>
                            {todoStore.getTodos().map((todo) => (<TodoItemContent
                                key={todo.id}
                                todo={todo}
                                onTodoCompleted={todoStore.toggleTodo}
                                onTodoDeleted={todoStore.removeTodo}
                                onTodoUpdated={todoStore.editTodo}
                            />)) }
                        </TodoListItems>
                        <TodoListManager>
                            <div>apsaudhgapsohd</div>
                        </TodoListManager>
                    </>
                }
            </TodoListContent>
        </HomePageStyled>
    );
});
