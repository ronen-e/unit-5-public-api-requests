import PropTypes from 'prop-types';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-inner-container">
					<div className="header-text-container">
						<h1>{this.props.text}</h1>
					</div>

					<div className="search-container"></div>
				</div>
			</header>
		)
	}
}

Header.defaultProps = {
	text: 'Title'
}

Header.propTypes = {
	text: PropTypes.string
};

export default Header;
