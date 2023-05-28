import "./Input.css";

export default function Input({ type = "text", ...props }) {
	return (
		<input
			className='input'
			id={props.id}
			type={type}
			value={props.value}
			name={props.name}
			placeholder={props.title}
			checked={props.checked}
			readOnly={props.readOnly}
			onChange={props.inputChangeHandler}
		/>
	)
}
