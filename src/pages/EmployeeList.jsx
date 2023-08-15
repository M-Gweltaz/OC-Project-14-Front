import CurrentEmployeesDataGrid from '../components/CurrentEmployeesDataGrid';
import Header from '../components/Header';
import BackgroundEffect from '../components/BackgroudEffect';
import '../styles/EmployeeList.css';

export default function EmployeeList() {
	return (
		<>
			<Header />
			<main id='employee-div' className='employeesListContainer'>
				<h1 className='employeesListContainer__title'>Current Employees</h1>
				<CurrentEmployeesDataGrid pageSizeOptions={[5, 10, 25]} />
			</main>
			<BackgroundEffect />
		</>
	);
}
