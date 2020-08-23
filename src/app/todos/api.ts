export interface Todo {
    id: number;
    content: string; // 할일 내용
    isDone: boolean; // 끝났는지 여부
    isEdit?: boolean; // 수정중인지 여부
}