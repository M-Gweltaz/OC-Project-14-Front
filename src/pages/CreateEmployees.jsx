import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../utils/DataContext';
import DropDownMenu from '../components/DropDownMenu';
import { Employee } from '../models/Employee';
import '../styles/CreateEmployees.css';

export default function CreateEmployees() {
	const { createEmployeeFormData, setCreateEmployeeFormData } =
		useContext(DataContext);

	const { state } = useContext(DataContext);
	const stateName = state.map((item) => item.name);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCreateEmployeeFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(createEmployeeFormData);
	};

	const handleDatePickerChange = (date, fieldName) => {
		setCreateEmployeeFormData((prevData) => ({
			...prevData,
			[fieldName]: date.toDate(),
		}));
		console.log(createEmployeeFormData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('SUBMIT LANDED');

		const newEmployee = new Employee(
			createEmployeeFormData.firstName,
			createEmployeeFormData.lastName,
			createEmployeeFormData.startDate,
			createEmployeeFormData.department,
			createEmployeeFormData.dateOfBirth,
			createEmployeeFormData.street,
			createEmployeeFormData.city,
			createEmployeeFormData.state,
			createEmployeeFormData.zipCode
		);

		const newEmployeeJSON = JSON.stringify(newEmployee);

		localStorage.setItem('newEmployeeData', newEmployeeJSON);

		setCreateEmployeeFormData({
			firstName: '',
			lastName: '',
			startDate: null,
			department: '',
			dateOfBirth: null,
			street: '',
			city: '',
			state: '',
			zipCode: '',
		});
	};

	return (
		<>
			<div className='title'>
				<h1>HRnet</h1>
			</div>
			<div className='container'>
				<Link to='/employee-list'>View Current Employees</Link>
				<h2>Create Employee</h2>
				<form action='#' id='create-employee'>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						onChange={handleChange}
						value={createEmployeeFormData.firstName}
					/>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						onChange={handleChange}
						value={createEmployeeFormData.lastName}
					/>
					<label htmlFor='dateOfBirth'>Date of Birth</label>
					<DatePicker
						id='dateOfBirth'
						value={createEmployeeFormData.dateOfBirth}
						onChange={(date) => handleDatePickerChange(date, 'dateOfBirth')} // Use the new function for DatePicker
					/>
					<label htmlFor='startDate'>Start Date</label>
					<DatePicker
						id='startDate'
						value={createEmployeeFormData.startDate}
						onChange={(date) => handleDatePickerChange(date, 'startDate')} // Use the new function for DatePicker
					/>
					<fieldset className='address'>
						<legend>Address</legend>

						<label htmlFor='street'>Street</label>
						<input
							id='street'
							type='text'
							name='street'
							onChange={handleChange}
							value={createEmployeeFormData.street}
						/>

						<label htmlFor='city'>City</label>
						<input
							id='city'
							type='text'
							name='city'
							onChange={handleChange}
							value={createEmployeeFormData.city}
						/>

						<label htmlFor='state'>State</label>
						<DropDownMenu
							listItems={stateName}
							listName='state'
							selectedValue={createEmployeeFormData.state}
							eventListener={handleChange}
						/>
						<label htmlFor='zip-code'>Zip Code</label>
						<input
							id='zipCode'
							type='number'
							name='zipCode'
							onChange={handleChange}
							value={createEmployeeFormData.zipCode}
						/>
					</fieldset>
					<label htmlFor='department'>Department</label>
					<DropDownMenu
						listItems={[
							'Sales',
							'Marketing',
							'Engineering',
							'Human Ressources',
							'Legal',
						]}
						listName='department'
						selectedValue={createEmployeeFormData.department}
						eventListener={handleChange}
					/>
				</form>

				<button onClick={handleSubmit}>Save</button>
			</div>
		</>
	);
}
