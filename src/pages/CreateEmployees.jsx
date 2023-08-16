import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from '../utils/DataContext';
import DropDownMenu from 'react-dropdownmenu-lib';
import Header from '../components/Header';
import BackgroundEffect from '../components/BackgroudEffect';
import { Employee } from '../models/Employee';

import '../styles/CreateEmployees.css';

export default function CreateEmployees() {
	const { employeesDataList, setEmployeesDataList, state, department } =
		useContext(DataContext);

	const [inputValues, setInputValues] = useState({
		firstName: '',
		lastName: '',
		startDate: null,
		department: department[0],
		dateOfBirth: null,
		street: '',
		city: '',
		state: state[0].name,
		zipCode: '',
	});
	console.log(inputValues.state);

	const stateName = state.map((item) => item.name);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputValues((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	function formatDateToString(date) {
		console.log(date);
		const day = String(date.$D).padStart(2, '0');
		const month = String(date.$M + 1).padStart(2, '0');
		const year = String(date.$y);

		return `${month}/${day}/${year}`;
	}

	const handleDatePickerChange = (date, fieldName) => {
		setInputValues((prevData) => ({
			...prevData,
			[fieldName]: formatDateToString(date),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(inputValues.state);

		const newEmployee = new Employee(
			inputValues.firstName,
			inputValues.lastName,
			inputValues.startDate,
			inputValues.department,
			inputValues.dateOfBirth,
			inputValues.street,
			inputValues.city,
			inputValues.state,
			inputValues.zipCode
		);

		setEmployeesDataList([...employeesDataList, newEmployee]);

		// Call toast to display a success message
		toast.success('Employee created successfully!', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});

		// reseting the formData
		setInputValues({
			firstName: '',
			lastName: '',
			startDate: null,
			department: department[0],
			dateOfBirth: null,
			street: '',
			city: '',
			state: state[0].name,
			zipCode: '',
		});
	};

	return (
		<>
			<Header />
			<div className='createEmployeesContainer'>
				<h1 className='createEmployeesContainer__Title'>Create Employee</h1>
				<form action='#' className='createEmployeesForm' id='create-employee'>
					<label htmlFor='firstName'>First Name</label>
					<input
						className='createEmployeesInput'
						type='text'
						id='firstName'
						name='firstName'
						onChange={handleChange}
						value={inputValues.firstName}
					/>
					<label htmlFor='lastName'>Last Name</label>
					<input
						className='createEmployeesInput'
						type='text'
						id='lastName'
						name='lastName'
						onChange={handleChange}
						value={inputValues.lastName}
					/>
					<label htmlFor='dateOfBirth'>Date of Birth</label>
					<DatePicker
						id='dateOfBirth'
						className='createEmployeesInput'
						value={inputValues.dateOfBirth}
						onChange={(date) => handleDatePickerChange(date, 'dateOfBirth')}
						format='DD/MM/YYYY'
					/>
					<label htmlFor='startDate'>Start Date</label>
					<DatePicker
						id='startDate'
						className='createEmployeesInput'
						value={inputValues.startDate}
						onChange={(date) => handleDatePickerChange(date, 'startDate')}
						format='DD/MM/YYYY'
					/>
					<fieldset className='address createEmployeesFieldset'>
						<legend className='createEmployeesFieldset__title'>Address</legend>

						<label htmlFor='street'>Street</label>
						<input
							className='createEmployeesInput'
							id='street'
							type='text'
							name='street'
							onChange={handleChange}
							value={inputValues.street}
						/>

						<label htmlFor='city'>City</label>
						<input
							className='createEmployeesInput'
							id='city'
							type='text'
							name='city'
							onChange={handleChange}
							value={inputValues.city}
						/>

						<label htmlFor='state'>State</label>
						<DropDownMenu
							listItems={stateName}
							listName='state'
							selectedValue={inputValues.state}
							eventListener={handleChange}
							className='createEmployeesInput'
						/>
						<label htmlFor='zip-code'>Zip Code</label>
						<input
							className='createEmployeesInput'
							id='zipCode'
							type='number'
							name='zipCode'
							onChange={handleChange}
							value={inputValues.zipCode}
						/>
					</fieldset>
					<label htmlFor='department'>Department</label>
					<DropDownMenu
						listItems={department}
						listName='department'
						selectedValue={inputValues.department}
						eventListener={handleChange}
						className='createEmployeesInput'
					/>
				</form>

				<button onClick={handleSubmit} className='createEmployeesBtn'>
					Save
				</button>
			</div>
			<BackgroundEffect />
		</>
	);
}
