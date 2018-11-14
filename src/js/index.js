import low from 'lowdb';
import FileSync from 'lowdb/adapters/LocalStorage';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/dialog.js';
import Cart from './models/Cart';
import EditCart from './models/EditCart';
import * as cartView from './view/cartView';
import * as editCartView from './view/editView';




const state = {};


const controlCart = async() => {
	state.cart = new Cart();

	await state.cart.getResults();
	if(window.localStorage.getItem("cartData") == null || window.localStorage.getItem("cartData") == undefined ||
	JSON.parse(window.localStorage.getItem("cartData")).items.length==0){
		window.localStorage.setItem("cartData", JSON.stringify(state.cart));
	}
	cartView.renderCart(JSON.parse(window.localStorage.getItem("cartData")));
	cartView.calcCartAndRender(JSON.parse(window.localStorage.getItem("cartData")));;
}


window.addEventListener('load', function () {
	controlCart();
});

const controlEditItem = async(id,action) => {
	state.editItem = new EditCart(id);
	await state.editItem.getItem();
	editCartView.renderEditCartItem(state.editItem.result,action);	
}

const controlRemoveItem = (id) => {
	const adapter = new FileSync('cartData');
	const db = low(adapter);
	db.get('items').remove({ id: parseInt(id) }).write()
	document.querySelector('.product-wrapper').innerHTML = "";	
	cartView.renderCart(JSON.parse(window.localStorage.getItem("cartData")));
	cartView.calcCartAndRender(JSON.parse(window.localStorage.getItem("cartData")));
}


document.querySelector('.product-wrapper').addEventListener('click', e => {
	if (e.target.dataset.button === 'edit') {
		controlEditItem(e.target.id,"EDIT");
	}else if (e.target.dataset.button === 'remove') {		
			if (confirm("Are you sure to delete this item from cart?")) {
				controlRemoveItem(e.target.id);
			}
			return false;        
	}else if (e.target.dataset.button === 'show') {
        controlEditItem(e.target.dataset.id,"ADD TO BAG");
	}
});

const controlUpdateItem = () => {

	const adapter = new FileSync('cartData');

	const db = low(adapter);

	db.get('items')
		.find({
			id: editCartView.getItemId()
		})
		.assign({
			size: editCartView.getSize(),
			qty: editCartView.getQty(),
			color: editCartView.getColor(),
			image: `t-${editCartView.getColor()}.jpg`
		})
		.write();


	const ele = document.querySelector('.productEditOverLay');
	ele.parentNode.removeChild(ele);
	document.querySelector('.product-wrapper').innerHTML = "";
	cartView.renderCart(JSON.parse(window.localStorage.getItem("cartData")));
	cartView.calcCartAndRender(JSON.parse(window.localStorage.getItem("cartData")));
}

document.querySelector('body').addEventListener('click', e => {
	if (e.target.dataset.button === 'update') {
		controlUpdateItem();
	} else if (e.target.dataset.button === 'close') {
		const ele = document.querySelector('.productEditOverLay');
		ele.parentNode.removeChild(ele);		
		$("#dialog").dialog("close");
	}
});

