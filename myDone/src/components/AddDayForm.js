import { Component } from 'react';
import { PropTypes } from 'prop-types';

const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Piak",
	"Donner Ski Ranch",
	"Heavenly",
	"Homewood",
	"Kirkwood",
	"Mt. Rose",
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
];

class AutoComplete extends Component {
	get value() {
		return this.refs.inputResort.value;
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue;
	}

	render() {
		return (
			<div>
				<input ref="inputResort" type="text" list="tahoe-resorts" />

				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) =>
							<option key={i}>{opt}</option> )}
				</datalist>
			</div>
		)
	}
}

export const AddDayForm = ({ resort,
														 date,
														 powder,
														 backountry,
														 onNewDay }) => {

	let _resort, _date, _powder, _backcountry;

	const submit = (e) => {
		e.preventDefault();

		onNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		});

			_resort.value = '';
			_date.value = '';
			_powder.checked = false;
			_backcountry.checked = false;
	};

	return (
		<form onSubmit={submit} action="" className="add-day-form">
			<label htmlFor="resort">Resort Name</label>
			<AutoComplete options={tahoeResorts}
						 ref={input => _resort = input}
			/>
			<br />

			<label htmlFor="date">Date</label>
			<input id="date"
						 type="date"
						 required
						 defaultValue={date}
						 ref={input => _date = input}
			/>

			<div className="">
				<label htmlFor="powder">Powder Day</label>
				<input id="powder"
							 type="checkbox"
							 defaultChecked={powder}
							 ref={input => _powder = input}
				/>
			</div>

			<div className="">
				<label htmlFor="backcountry">Backcountry Day</label>
				<input id="backcountry"
							 type="checkbox"
							 defaultChecked={backountry}
							 ref={input => _backcountry = input}
				/>
			</div>
			<button>Add Aay</button>
		</form>
	)
};

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
};

AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool,
};