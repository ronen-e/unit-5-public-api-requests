import PropTypes from 'prop-types';

export const ProfileModal = PropTypes.shape({
	picture: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string,
	city: PropTypes.string,
	state: PropTypes.string,
	street: PropTypes.shape({
		name: PropTypes.string,
		number: PropTypes.number
	}),
	postcode: PropTypes.number,
	birthday: PropTypes.string,
	cell: PropTypes.string
})

export const ProfileCard = PropTypes.shape({
	picture: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string,
	city: PropTypes.string,
	state: PropTypes.string
})