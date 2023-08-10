import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function DropDownMenu({
	listItems,
	listName,
	selectedValue,
	eventListener,
}) {
	return (
		<select
			name={listName}
			id={listName}
			value={selectedValue}
			onChange={eventListener}
		>
			{listItems.map((item) => (
				<option key={uuidv4()} value={item}>
					{item}
				</option>
			))}
		</select>
	);
}

DropDownMenu.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	listName: PropTypes.string.isRequired,
	selectedValue: PropTypes.string.isRequired,
	eventListener: PropTypes.func.isRequired,
};
