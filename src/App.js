import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import WisherList from './WisherList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			condition: {
				login: "Mike Greene",
				location: "WisherList",
				wisher: "Vic Greene",
				events:[
					"Christmas",
					"Birthday",
					"Anniversary",
					"Other"
				]
			},
			wishes: [
				{
					id:1,
					wisher: "Vic Greene",
					item: "Electric Kettle",
					url: "https://www.amazon.com/Cuisinart-CPK-17-PerfecTemp-1-7-Liter-Stainless/dp/B003KYSLNQ",
					details: "For multiple cups of hot beverages. This model is rated best but is slightly expensive.",
					purchaser: "Christi Greene",
					purchaseComments: "Got this stuff",
					event: "Christmas",
					listDate: "2019-11-25"
				},
				{
					id:2,
					wisher: "Vic Greene",
					item: "Keurig gift card",
					url: "http://www.keurig.com/beverages/c/GiftCards/Gift-Card/p/GiftCard?text=gift%20cards",
					details: "Gift card for the teas I drink.",
					purchaser: "Christi Greene",
					purchaseComments: "Got this stuff",
					event: "Christmas",
					listDate: "2019-11-25"
				},
				{
					id:3,
					wisher: "Vic Greene",
					item: "Kindling splitter",
					url: "https://www.amazon.com/dp/B07NQJ8PKG/ref=psdc_1091946_t1_B07B3S9C3L",
					details: "",
					purchaser: "Mike Greene",
					purchaseComments: "Got this stuff",
					event: "Christmas",
					listDate: "2019-11-25"
				},
				{
					id:4,
					wisher: "Vic Greene",
					item: "Biolight camp stove",
					url: "https://www.bioliteenergy.com/products/campstove-2",
					details: "Emergency cooking and power",
					listDate: "2019-11-25"
				},
				{
					id:5,
					wisher: "Mike Greene",
					item: "Kindling splitter",
					url: "https://www.amazon.com/dp/B07NQJ8PKG/ref=psdc_1091946_t1_B07B3S9C3L",
					details: "",
					purchaser: "Mike Greene",
					purchaseComments: "Got this stuff",
					event: "Christmas",
					listDate: "2019-11-25"
				},
				{
					id:6,
					wisher: "Mike Greene",
					item: "Kindling splitter",
					url: "https://www.amazon.com/dp/B07NQJ8PKG/ref=psdc_1091946_t1_B07B3S9C3L",
					details: "",
					purchaser: "Mike Greene",
					purchaseComments: "Got this stuff",
					event: "Christmas",
					listDate: "2019-11-25"
				},
			]
		}
	}
	render() {
		return (
			<div className="App">
				<main>
					<WisherList
						wishes={this.state.wishes}
						condition={this.state.condition}
					/>
				</main>
			</div>
		);
	}
}




export default App;
