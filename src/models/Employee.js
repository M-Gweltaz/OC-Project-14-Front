class Employee {
	constructor(
		firstName,
		lastName,
		startDate,
		departement,
		dateOfBirth,
		street,
		city,
		state,
		zipCode
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.startDate = startDate;
		this.departement = departement;
		this.dateOfBirth = dateOfBirth;
		this.street = street;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
	}
}

export { Employee };
