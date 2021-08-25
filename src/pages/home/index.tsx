/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { TodosStore } from '../../stores';
import { InputTodo, TodoItemContent } from './components';
import { HomePageStyled, TextButton, TodoListContent, TodoListController, TodoListFilter, TodoListFilterButton, TodoListItems, TodoListManager, TodoListToggler } from './index.style';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { TodoAvailable, TodoList } from '../../models';

const todoStore = new TodosStore();
export const HomePage = observer(() => {
    const queryParams = useParams<{ filter: TodoAvailable}>();

    useEffect(() => {
        todoStore.getAllTodos();
    }, []);

    return (
        <HomePageStyled>
            <h1>TO DO's</h1>
            <TodoListContent>
                <TodoListController>
                    <TodoListToggler onClick={todoStore.completeAll}>
                        <FontAwesomeIcon icon={faAngleDown} size={'4x'} />
                    </TodoListToggler>
                    <InputTodo
                        onAddTodo={todoStore.addTodo}
                    />
                </TodoListController>
                {
                    todoStore.todos.length > 0 && <>
                        <TodoListItems>
                            {todoStore.getTodos(queryParams.filter).map((todo) => (<TodoItemContent
                                key={todo.id}
                                todo={todo}
                                onTodoCompleted={todoStore.toggleTodo}
                                onTodoDeleted={todoStore.removeTodo}
                                onTodoUpdated={todoStore.editTodo}
                            />)) }
                        </TodoListItems>
                        <TodoListManager>
                            <div>{todoStore.getActiveCount()} items left</div>
                            <TodoListFilter>
                                <TodoListFilterButton to="/all" selected={queryParams.filter === 'all' || !queryParams.filter} >All</TodoListFilterButton>
                                <TodoListFilterButton to="/active" selected={queryParams.filter === 'active'} >Active</TodoListFilterButton>
                                <TodoListFilterButton to="/completed" selected={queryParams.filter === 'completed'} >Completed</TodoListFilterButton>
                            </TodoListFilter>
                            <div>
                                <TextButton onClick={todoStore.clearCompleted}>Clear completed</TextButton>
                            </div>
                        </TodoListManager>
                    </>
                }
            </TodoListContent>
        </HomePageStyled>
    );
});
