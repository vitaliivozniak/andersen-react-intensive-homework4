import TodoItem from '../TodoItem/TodoItem';

export default function TodoList(props) {
	const todoList = props.todoList
	const filtered = props.filtered

	return (
		<>
			<h3>{props.title}</h3>
			<ul className='todowrapper__list'>
				{filtered.map(todo => (
					<li className="todowrapper__item">
						<TodoItem id={todo.id} isDone={todo.isDone} title={todo.title} key={todo.id} />
					</li>
				))}
			</ul>
		</>
	)
}
