import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
	const location = useLocation();

	const [navData, setNavData] = useState({
		navPath: '',
		navText: '',
	});

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setNavData({
					navPath: '/employee-list',
					navText: 'View Current Employees',
				});
				break;

			case '/employee-list':
				setNavData({
					navPath: '/',
					navText: 'Home',
				});
				break;
		}
	}, [location.pathname]);

	return (
		<header className='header'>
			<h2 className='header__title'>HRnet</h2>
			<Link to={navData.navPath} className='header__nav hover-2'>
				<nav className='header__nav--text'>{navData.navText}</nav>
			</Link>
		</header>
	);
}
