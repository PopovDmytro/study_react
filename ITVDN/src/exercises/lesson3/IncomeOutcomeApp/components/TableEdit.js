import {Component} from 'react';
//
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
//import icons
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';
//

const styles = {
	radioGroup: {
		display: 'inline-block',
		marginLeft: 40
	},
	radioBtn: {marginBottom: 5},
	lastRadioBtn: {marginBottom: -12},
	labelRadio: {color: '#c0c0c0'}
};

export class TableEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inOutValue: '',
			plusMinus: '+',
			date: null
		};

		this.handleTextInput = this.handleTextInput.bind(this);
		this.handleDateInput = this.handleDateInput.bind(this);
		this.handlePlusMinusRadio = this.handlePlusMinusRadio.bind(this);
		this.handleAddInOut = this.handleAddInOut.bind(this);
	}

	handleTextInput (e) {
		this.setState({inOutValue: e.target.value});
	}

	handleDateInput (empty ,e) {
		this.setState({date: e});
	}

	handlePlusMinusRadio (e, value) {
		this.setState({plusMinus: value });
	}

	handleAddInOut () {
		if(isFinite(this.state.inOutValue) && this.state.inOutValue && this.state.date) {
			const dateFormatted = this.state.date.toString().split(" ");
			dateFormatted.length = 4;

			const newInOut = {
				id: Date.now(),
				val: (~this.state.inOutValue.indexOf('-')) ?
					parseFloat(this.state.inOutValue) :
					parseFloat(this.state.plusMinus + this.state.inOutValue),
				date: dateFormatted.join("/ ")
			};

			this.props.onInOutAdd(newInOut);
			this.setState({
				inOutValue: '',
				plusMinus : '+',
				date: null
			});
		}
	}

	render() {

		return(
			<div className="edit-block">

				<TextField
					type="number"
					hintText="Write amount (number with + or -)"
					// defaultValue={}
					floatingLabelText="Write Income | Outcome"
					onChange={this.handleTextInput}
					value={this.state.inOutValue}
				/>
				<RadioButtonGroup name="shipSpeed"
													defaultSelected={this.state.plusMinus}
													valueSelected={this.state.plusMinus}
													style={styles.radioGroup}
													onChange={this.handlePlusMinusRadio}
				>
					<RadioButton
						value="+"
						label="income"
						checkedIcon={<AddCircleOutline style={{fill: '#2aaa1f'}} />}
						uncheckedIcon={<AddCircleOutline style={{fill: '#c0c0c0'}} />}
						style={styles.radioBtn}
						labelStyle={styles.labelRadio}
					/>
					<RadioButton
						value="-"
						label="outcome"
						checkedIcon={<RemoveCircleOutline style={{fill: '#2aaa1f'}} />}
						uncheckedIcon={<RemoveCircleOutline style={{fill: '#c0c0c0'}} />}
						style={styles.lastRadioBtn}
						labelStyle={styles.labelRadio}
					/>
				</RadioButtonGroup>

				<DatePicker
					hintText="Year/Month/Day"
					container="inline"
					onChange={this.handleDateInput}
					value={this.state.date}
				/>

				<RaisedButton
					label="add amount"
					primary={true}
					style={{}}
					onClick={this.handleAddInOut}
				/>
			</div>
		);
	}

}

//---------
//
//svg custom icon ---
// import SvgIcon from 'material-ui/SvgIcon';

// const IcAddCircleOutlineBlack = (props) => (
// 	<SvgIcon {...props} >
// 		<path d="M0 0h24v24H0z" fill="none"/>
// 		<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
// 	</SvgIcon>
// );
//---