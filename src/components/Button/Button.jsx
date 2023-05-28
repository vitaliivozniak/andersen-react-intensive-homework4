import './Button.css';

export default function Button({ id, type = 'button', name, buttonClickHandler, content }) {
	return (
		<button
			id={id}
			type={type}
			name={name}
			onClick={buttonClickHandler}
		>
			{content}
		</button>
	)
}
