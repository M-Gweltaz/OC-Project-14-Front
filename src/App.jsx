import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { DataProvider } from './utils/DataContext';
import CreateEmployees from './pages/CreateEmployees';
import EmployeeList from './pages/EmployeeList';
import DateLocalisationProvider from './components/DateLocalisationProvider';

function App() {
	return (
		<>
			<DataProvider>
				<DateLocalisationProvider>
					<Routes>
						<Route path='/' element={<CreateEmployees />}></Route>
						<Route path='/employee-list' element={<EmployeeList />}></Route>
					</Routes>
					<ToastContainer />
				</DateLocalisationProvider>
			</DataProvider>
		</>
	);
}

export default App;
