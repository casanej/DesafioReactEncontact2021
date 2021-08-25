/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { LanguageStore, TodosStore } from '../../stores';
import { InputTodo, TodoItemContent } from './components';
import { HomePageStyled, TextButton, TodoListContent, TodoListController, TodoListFilter, TodoListFilterButton, TodoListItems, TodoListManager, TodoListToggler } from './index.style';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { LanguageParams, TodoAvailable } from '../../models';

const todoStore = new TodosStore();
const languageStore = new LanguageStore();

export const HomePage = observer(() => {
    const language: LanguageParams['home'] = languageStore.getLanguage().home
    const queryParams = useParams<{ filter: TodoAvailable}>();

    useEffect(() => {
        todoStore.getAllTodos();
    }, []);

    return (
        <HomePageStyled>
            <h1>{language.toDo}</h1>
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
                            {
                                todoStore.getActiveCount() === 1
                                ? <div>{todoStore.getActiveCount()} {language.itemLeft}</div>
                                : <div>{todoStore.getActiveCount()} {language.itemsLeft}</div>
                            }
                            <TodoListFilter>
                                <TodoListFilterButton to="/all" selected={queryParams.filter === 'all' || !queryParams.filter} >{language.filterAll}</TodoListFilterButton>
                                <TodoListFilterButton to="/active" selected={queryParams.filter === 'active'} >{language.filterActive}</TodoListFilterButton>
                                <TodoListFilterButton to="/completed" selected={queryParams.filter === 'completed'} >{language.filterCompleted}</TodoListFilterButton>
                            </TodoListFilter>
                            <div>
                                <TextButton onClick={todoStore.clearCompleted}>{language.clearCompleted}</TextButton>
                            </div>
                        </TodoListManager>
                    </>
                }
            </TodoListContent>
        </HomePageStyled>
    );
});
