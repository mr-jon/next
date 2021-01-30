import { useState } from 'react'

function Home(){
	return (
		<div>
			<h1>Hello World! Let's Go!</h1>
			<Count />
		</div>
	)
}

function Count(){
	const [counter, setCounter] = useState(1)

	function addCounter(){
		setCounter(counter+1)
	}
	return (
		<div>
			<div>{counter}</div>
			<button onClick={addCounter}>Adicionar</button>
		</div>
	)
}

export default Home