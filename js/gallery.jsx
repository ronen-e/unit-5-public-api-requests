import PropTypes from 'prop-types';
import Card from './card.jsx';

class Gallery extends React.Component {
	get cards() {
		const profiles = this.props.items;

		return profiles.map((profile, i) => <Card key={i} profile={profile} /> )
	}
	render() {
		return (
			<div id="gallery" className="gallery">
				{this.cards}
			</div>
		)
	}
}

Gallery.defaultProps = {
	items: []
}

Gallery.propTypes = {
	items: PropTypes.array
};

export default Gallery;
