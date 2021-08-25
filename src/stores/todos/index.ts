import axios from "axios";
import { makeAutoObservable } from "mobx";
import Swal from 'sweetalert2'
import { TodoAvailable, TodoItem, TodoList } from "../../models";

export class TodosStore {
    public todos: TodoList = [];

    constructor() {
        makeAutoObservable(this);
    }

    public getTodos = (filter?: TodoAvailable): TodoList => {
        if (filter) {
            switch (filter) {
                case 'all': return this.todos;
                case 'active': return this.getActiveTodos();
                case 'completed': return this.getCompletedTodos();
                default: return this.todos;
            }
        }

        return this.todos;
    }

    public getAllTodos = async () => {
        const apiTodos = await axios.get<Array<{
            id: string;
            title: string;
            isDone: boolean;
        }>>('http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021/todos', { validateStatus: (status) => status < 500 });

        if (apiTodos.status !== 200) {
            return Swal.fire(
                'Oops!',
                'Não foi possível recuperar a lista de tarefas!',
                'error'
            )
        }

        apiTodos.data.forEach((todo) => this.addTodo(todo.title, todo.isDone));
    }

    public addTodo = (todo: string, isCompleted?: boolean): void => {
        this.todos.push({
            id: this.todos.length,
            text: todo,
            completed: isCompleted || false
        });
    }

    public removeTodo = (id: number): void => {
        this.todos.splice(id, 1);
    }

    public toggleTodo = (id: number): void => {
        this.todos[id].completed = !this.todos[id].completed;
    }

    public editTodo = (id: number, newTodo: TodoItem): void => {
        this.todos[id] = newTodo;
    }

    public completeAll = (): void => {
        this.todos.forEach(todo => todo.completed = true);
    }

    public clearCompleted = (): void => {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    public toggleAll = (): void => {
        this.todos.forEach(todo => todo.completed = !todo.completed);
    }

    public clearAll = (): void => {
        this.todos = [];
    }

    public getCompletedCount = (): number => {
        return this.todos.filter(todo => todo.completed).length;
    }

    public getActiveCount = (): number => {
        return this.todos.filter(todo => !todo.completed).length;
    }

    public getCompletedTodos = (): TodoList => {
        return this.todos.filter(todo => todo.completed);
    }

    public getActiveTodos = (): TodoList => {
        return this.todos.filter(todo => !todo.completed);
    }
}