import { Link } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
	return (
		<div className='container'>
			<div className='errorpage'>
				<p>Oops... Something went wrong.</p>
				<p>Go to <Link to='/'>Login page</Link>.</p>
			</div>
		</div>
	)
}
