import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf("/"));
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

    const todo: Todo = await response.json();

    if (!todo.id) return NextResponse.json({ message: "Todo not found" });

    return NextResponse.json(todo);
}
