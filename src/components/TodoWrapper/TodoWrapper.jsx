import { useState } from 'react'
import { useSelector } from 'react-redux'
import './TodoWrapper.css'
import Button from '../Button/Button';
import TodoList from '../TodoList/TodoList'


export default function TodoWrapper() {
	const todoList = useSelector(state => state.todo.todoList)
	const done = todoList.filter(item => item.isDone === true)
	const undone = todoList.filter(item => item.isDone !== true)

	const [tabName, setTabName] = useState('undone')

	const buttonClickHandler = (event) => setTabName(event.target.name)

	if (todoList.length > 0) {
		return (
			<div className='todowrapper'>
				<ul className='todotab__list'>
					<li className='todotab__item'>
						<Button
							name="undone"
							content='Left To Do'
							buttonClickHandler={buttonClickHandler}
						/>
					</li>
					<li className='todotab__item'>
						<Button
							name="done"
							content='Done Todos'
							buttonClickHandler={buttonClickHandler}
						/>
					</li>
				</ul>
				{tabName === 'undone'
					? (<TodoList todoList={todoList} filtered={undone} title='Left To Do' />)
					: (<TodoList todoList={todoList} filtered={done} title='Done Todos' />)}
			</div>
		)
	} else {
		return (
			<p className='empty'>There is nothing to do. Add something to do, please.</p>
		)
	}
}
