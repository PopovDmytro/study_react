import '../scss/contact.scss'

export const Contact = ({ id,
													img,
													name,
													phoneNumber,
													address,
													value,
													isOpened,
													showHideAdditions}) => {

	return (
		<li className="item" onClick={() => { return showHideAdditions(id); }}>
			<div className="contact-img">
				<img src={img} alt="img"/>
			</div>
			<h3 className="contact-name">{name}</h3>
			<h4 className="contact-phone">{phoneNumber}</h4>
			<div className={(isOpened)? 'addition-info open': 'addition-info'}>
				<p>{address}</p>
				<p>{value}</p>
			</div>
		</li>
	)
};