import { useState } from 'react'
import './TodoForm.css'
import { useDispatch } from 'react-redux';
import Input from '../Input/Input'
import Button from '../Button/Button'
import { addTodo } from '../../redux/actions';

export default function TodoForm() {
	const [todoTitle, setTodoTitle] = useState('');
	const dispatch = useDispatch();

	const newTodo = {
		title: todoTitle,
		id: Date.now().toString(),
		isDone: false
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!todoTitle) {
			return
		}

		dispatch(addTodo(newTodo))

		setTodoTitle('')
	}

	return (
		<form className='todoform' onSubmit={formSubmitHandler}>
			<h2>Add To Do</h2>
			<div className='todoform__row'>
				<label>
					<Input
						title='Place for your todo'
						value={todoTitle}
						name='todoTitle'
						inputChangeHandler={(event) => setTodoTitle(event.target.value)}
					/>
				</label>
				<Button
					type='submit'
					name='submit'
					content='Add Todo'
				/>
			</div>
		</form>
	)
}
