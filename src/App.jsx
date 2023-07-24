import { Routes, Route } from 'react-router-dom';
import CreateEmployees from './pages/CreateEmployees';
import EmployeeList from './pages/EmployeeList';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<CreateEmployees />}></Route>
				<Route path='/employee-list' element={<EmployeeList />}></Route>
				<Route></Route>
			</Routes>
		</>
	);
}

export default App;
