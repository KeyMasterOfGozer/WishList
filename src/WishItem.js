import React, { Component, Fragment } from 'react';
/* Display a Wish, to edit if needed.
 */
class WishItem extends Component {
	/* Helper to display a particular property of a Wish */
	WishItemProp (props) {
		var propName = props.propName
		if (props.propName) {
			propName = propName + ":"
		}
		return (
			<Fragment>
				<div className="wishItemProp">
					<div className="wishItemPropName">
						{propName}
					</div>
					<div className="wishItemPropVal">
						{props.propVal}
					</div>
				</div><br/>
			</Fragment>
		)
	}

	render() {
		const wish = this.props.wish;
		const login = this.props.condition.login;
		const wisher = this.props.condition.wisher;

		/* If the user can't make any edits, then display as information only */
		if (wish.purchaser && wish.purchaser !== login) {
			return (
				<div className="wishItemArea">
					<this.WishItemProp propName="Item"      propVal=<a href={wish.url}>{wish.item}</a> />
					<this.WishItemProp propName="Detail"    propVal={wish.details} />
					<this.WishItemProp propName="Granter"   propVal={wish.purchaser} />
					<this.WishItemProp propName="Comments"  propVal={wish.purchaseComments} />
					<this.WishItemProp propName="Event"     propVal={wish.event} />
					<this.WishItemProp propName="List Date" propVal={wish.listDate} />
				</div>
			)
		/* Allow the user to make edits on this Wish */
		} else {
			var ButtonText = "Grant Wish";
			var ButtonFunc = "handlerWish()";
			if (wish.purchaser === login) {
				ButtonText = "Update"
			}
			return (
				<div className="wishItemArea">
					<this.WishItemProp propName="Item"      propVal=<a href={wish.url}>{wish.item}</a> />
					<this.WishItemProp propName="Detail"    propVal={wish.details} />
					<this.WishItemProp propName="Comments"  propVal=<textarea name="purchaseComments" value={wish.purchaseComments}/> />
					<this.WishItemProp propName="Event"     propVal={wish.event} />
					<this.WishItemProp propName="" propVal=<button>{ButtonText}</button> />
					<this.WishItemProp propName="List Date" propVal={wish.listDate} />
				</div>
			)
		}
	}
}

export default WishItem;
