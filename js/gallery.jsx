import PropTypes from 'prop-types';
import Card from './card.jsx';

class Gallery extends React.Component {
	cards() {
		const { onClick, profiles } = this.props;

		return profiles.map((profile, i) => 
			<Card key={i} profile={profile} onClick={onClick} /> 
		)
	}
	render() {
		return (
			<div className="gallery">
				{this.cards()}
			</div>
		)
	}
}

Gallery.defaultProps = {
	profiles: []
}

Gallery.propTypes = {
	profiles: PropTypes.array,
	onClick: PropTypes.func
};

export default Gallery;
