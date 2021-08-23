export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoAvailable = 'all' | 'active' | 'completed';

export type TodoList = TodoItem[];