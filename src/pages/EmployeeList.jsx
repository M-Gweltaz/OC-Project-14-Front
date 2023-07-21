import '../styles/EmployeeList.css';

export default function EmployeeList() {
	return (
		<>
			<div id='employee-div' className='container'>
				<h1>Current Employees</h1>
				<table id='employee-table' className='display'></table>
				<a href='index.html'>Home</a>
			</div>
		</>
	);
}
