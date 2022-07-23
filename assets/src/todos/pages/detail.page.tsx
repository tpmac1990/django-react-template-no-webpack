import React, {memo} from "react";
import {usePageContext} from "../../utils/usePageContext";

interface Todo {
    id: number
    title: string
    content: string
    name: string
}

const TodosDetailPage = memo(() => {
    let pageContext = usePageContext<{ todo: Todo }>()
    let todo = pageContext?.todo;

    return <>
        <h1>React detail todos page</h1>
        <h2>{todo?.title} - {todo?.name}</h2>
        <p>{ todo?.content }</p>
    </>
})

export default TodosDetailPage