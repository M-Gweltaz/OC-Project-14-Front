import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../utils/DataContext';
import { Employee } from '../models/Employee';
import '../styles/CreateEmployees.css';

export default function CreateEmployees() {
	const { createEmployeeFormData, setCreateEmployeeFormData } =
		useContext(DataContext);
	console.log(createEmployeeFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCreateEmployeeFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleDatePickerChange = (date, fieldName) => {
		setCreateEmployeeFormData((prevData) => ({
			...prevData,
			[fieldName]: date.toDate(),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

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

		console.log(newEmployee);

		// Convert the newEmployee object to a JSON string
		const newEmployeeJSON = JSON.stringify(newEmployee);

		// Save the newEmployeeJSON in localStorage
		localStorage.setItem('newEmployeeData', newEmployeeJSON);

		// Reset the form after saving data
		setCreateEmployeeFormData({
			firstName: '',
			lastName: '',
			startDate: new Date(),
			department: '',
			dateOfBirth: new Date(),
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
						<select
							name='state'
							id='state'
							onChange={handleChange}
							value={createEmployeeFormData.state}
						></select>

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
					<select name='department' id='department'>
						<option>Sales</option>
						<option>Marketing</option>
						<option>Engineering</option>
						<option>Human Resources</option>
						<option>Legal</option>
					</select>
				</form>

				<button onClick={handleSubmit}>Save</button>
			</div>
		</>
	);
}
