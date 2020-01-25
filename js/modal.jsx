import {ProfileModal as Profile} from './prop-types.jsx'

class Modal extends React.Component {
	get open() {
		return !!this.props.profile;
	}

	get containerStyle() {
		if (this.open) {
			return { visibility: 'visible', opacity: '1'};
		} else {
			return { visibility: 'hidden', opacity: '0'};
		}
	}

	get content() {
		if (!this.open) return null;

		const { picture, firstName, lastName, email, city, 
			state, street, cell, postcode, birthday } = this.props.profile;
		const { number, name } = street;

		return (
			<React.Fragment>
				<img className="modal-img" src={picture} alt="profile picture" />
				<h3 id="name" className="modal-name cap">{firstName} {lastName}</h3>
				<p className="modal-text">{email}</p>
				<p className="modal-text cap">{city}</p>
				<hr />
				<p className="modal-text">{formatPhoneNumber(cell)}</p>
				<p className="modal-text cap">
					{name} {number}, {city}, {state} ,{postcode}
				</p>
				<p className="modal-text">{formatBirthday(birthday)}</p>
			</React.Fragment>
		);
	}

	render() {
		const { onClose } = this.props;

		return (
			<div className="modal-container" style={this.containerStyle}>
				<div className="modal">
					<button onClick={onClose} type="button" id="modal-close-btn" className="modal-close-btn"><strong>X</strong></button>
					<div className="modal-info-container">
						{this.content}
					</div>
				</div>
			</div>
		)
	}
}

Modal.propTypes = {
	profile: Profile
};

export default Modal;
