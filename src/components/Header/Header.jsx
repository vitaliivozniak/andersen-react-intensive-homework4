import './Header.css';
import { useSelector } from 'react-redux';

export default function Header() {
	const name = useSelector((state) => state.login.name)
	const todoQuantity = useSelector(state => state.todo.todoList).filter(item => item.isDone !== true)

	return (
		<div className='header'>
			<div className='container'>
				<div className='header__inner'>
					<h1 className='header__title'>Hello {name || 'there'}</h1>
					{todoQuantity.length > 0
						? todoQuantity.length === 1
							? (<p>You have {todoQuantity.length} task</p>)
							: (<p>You have {todoQuantity.length} tasks</p>)
						: ''}
				</div>
			</div>
		</div>
	)
}
