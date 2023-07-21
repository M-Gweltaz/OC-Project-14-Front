import { Routes, Route } from 'react-router-dom';
import CreateEmployees from './pages/CreateEmployees';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<CreateEmployees />}></Route>
				<Route></Route>
				<Route></Route>
			</Routes>
		</>
	);
}

export default App;
