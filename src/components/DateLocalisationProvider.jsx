import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';

export default function DateLocalisationProvider({ children }) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			{children}
		</LocalizationProvider>
	);
}

// Expect 'children' to be a valid React node and it is required
DateLocalisationProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
