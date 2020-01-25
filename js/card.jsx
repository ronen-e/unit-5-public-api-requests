import PropTypes from 'prop-types';
import {ProfileCard as Profile} from './prop-types.jsx'

class Card extends React.Component {
	render() {
		const { onClick, profile } = this.props;
		const { picture, firstName, lastName, email, city, state} = profile;
		
		return (
			<div className="card" onClick={() => onClick(profile)}>
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
	profile: Profile.isRequired,
	onClick: PropTypes.func
};

export default Card;
