import { useContext, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import DataContext from '../utils/DataContext';

export default function CurrentEmployeesDataGrid() {
	const { employeesDataList } = useContext(DataContext);

	const columns = [
		{ field: 'firstName', headerName: 'First Name', width: 150 },
		{ field: 'lastName', headerName: 'Last Name', width: 150 },
		{ field: 'startDate', headerName: 'Start Date', width: 150 },
		{ field: 'department', headerName: 'Department', width: 150 },
		{ field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
		{ field: 'street', headerName: 'Street', width: 150 },
		{ field: 'city', headerName: 'City', width: 150 },
		{ field: 'state', headerName: 'State', width: 150 },
		{ field: 'zipCode', headerName: 'Zip Code', width: 150 },
	];

	const formatedEmployeesData = employeesDataList.map((employee, index) => {
		return {
			id: index,
			firstName: employee.firstName,
			lastName: employee.lastName,
			startDate: employee.startDate,
			department: employee.department,
			dateOfBirth: employee.dateOfBirth,
			street: employee.street,
			city: employee.city,
			state: employee.state,
			zipCode: employee.zipCode,
		};
	});

	const [searchText, setSearchText] = useState('');

	const handleSearchChange = (event) => {
		setSearchText(event.target.value);
	};

	const filteredRows = formatedEmployeesData.filter((row) =>
		columns.some((column) => {
			const value = row[column.field].toString().toLowerCase();
			return value.includes(searchText.toLowerCase());
		})
	);

	return (
		<div>
			<TextField
				className='employeesListContainer__searchBar'
				label='Search'
				value={searchText}
				onChange={handleSearchChange}
				style={{ marginBottom: 16 }}
			/>
			<div
				className='employeesListContainer__chart'
				style={{ height: 600, width: '100%' }}
			>
				<DataGrid rows={filteredRows} columns={columns} />
			</div>
		</div>
	);
}
