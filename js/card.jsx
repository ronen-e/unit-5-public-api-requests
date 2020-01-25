import PropTypes from 'prop-types';

class Card extends React.Component {
	render() {
		const { picture, firstName, lastName, email, city, state} = this.props.profile;
		
		return (
			<div className="card" onClick={this.props.onClick}>
				<div className="card-img-container">
					<img className="card-img" src={picture} alt="profile picture" />
				</div>
				<div className="card-info-container">
					<h3 id="name" className="card-name cap">{firstName} {lastName}</h3>
					<p className="card-text">{email}</p>
					<p className="card-text cap">{city}, {state}</p>
				</div>
			</div>
		)
	}
}

Card.defaultProps = {
	profile: {},
	onClick: () => {}
}

Card.propTypes = {
	profile: PropTypes.shape({
		picture: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		email: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
	}).isRequired,
	onClick: PropTypes.func
};

export default Card;
