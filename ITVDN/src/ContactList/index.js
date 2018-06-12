import {Component} from 'react';

import {Contact} from './components/Contact'

export class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{
					id: 1,
					name: 'Jhon',
					phoneNumber: '+111111',
					img: 'https://cs8.pikabu.ru/post_img/2017/10/08/9/1507474724110070998.jpg',
					address: "street 1",
					value: "asd755",
					isOpened: false
				},
				{
					id: 2,
					name: 'Chibacka',
					phoneNumber: '+111111',
					img: 'https://cs9.pikabu.ru/post_img/2017/10/08/8/1507465919199178378.jpg',
					address: "street 23",
					value: "7587",
					isOpened: false
				},
				{
					id: 3,
					name: 'Dart',
					phoneNumber: '+212121212312',
					img: 'https://cs6.pikabu.ru/post_img/2017/10/08/4/1507437257187711051.jpg',
					address: "street 777",
					value: "777",
					isOpened: false
				}
			],
			displayedContacts: [],
		};

		this.state.displayedContacts = this.state.contacts.slice();

		this.handleSearch = this.handleSearch.bind(this);

		this.showHideAdditions = this.showHideAdditions.bind(this);

	}

	handleSearch (e) {
		let searchQuery = e.target.value.toLowerCase();
		let displayedContacts = this.state.contacts.filter((el) => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		})
	}

	showHideAdditions (id) {
		let displayedContacts = this.state.contacts;
		this.state.displayedContacts.forEach((item, index) => {
			if(item.id === id){
				return item.isOpened = (item.isOpened)? false : true;
			}
		});

		this.setState({
			displayedContacts: displayedContacts
		});
	}

	render() {
		return (
			<div className="contact-block" >
				<input type="text" className="search" onChange={this.handleSearch} />
				<hr />
				<ul className="contact-list">
					{
						this.state.displayedContacts.map((contact, i) => (
							<Contact key={i} {...contact} showHideAdditions={this.showHideAdditions} />
						))
					}
				</ul>
			</div>
		)
	}
}