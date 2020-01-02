import React, { Component } from 'react';
import WishItem from './WishItem';


class WisherList extends Component {
	render() {
		return (
			<center>
				<h1>{this.props.condition.wisher}'s Wishlist</h1>
				<div className="WisherList">
					{
						this.props.wishes.map( (itm, i) => {
							return <WishItem wish={itm} key={i} condition={this.props.condition}/>
						})
					}
				</div>
			</center>
		)
	}
}

export default WisherList;
