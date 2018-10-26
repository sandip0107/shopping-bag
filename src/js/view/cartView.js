const renderCartItem = item => {
	const markup = `
    <div class="product">
    <div class="product-image">
      <img alt="${item.title}" src="img/${item.image}">
    </div>
	<div class="product_details_wrapper">
    <div class="product-details">
      <div class="product-title" data-button="show" data-id=${item.id} >${item.title}</div>
      <div class="product-description">
		<div>Style : ${item.style}</div>
		<div>Color : ${item.color}</div>
	  </div>
	  <div class="product-action">
		  <button class="edit-product" id=${item.id} data-button="edit" tabindex="1">
			Edit
		  </button>
		  <button class="remove-product" tabindex="1">
			Remove
		  </button>
		  <button class="save-product" tabindex="1">
			Save For Later
		  </button>
      </div>
    </div>
    <div class="product-size">${item.size}</div>
    <div class="product-quantity">
      <div>${item.qty}</div>
    </div>   
    <div class="product-line-price">
    <div class="actual-price"><sup>${item.actualPrice?"$":""}</sup><del>${item.actualPrice?item.actualPrice:""}</del></div>
    <div><sup>$</sup>${item.price*item.qty}</div> 
    </div>
	</div> 
  </div>
    `
	const productContainer = document.querySelector('.product-wrapper');
	productContainer.insertAdjacentHTML('beforeend', markup);
}

export const renderCart = items => {
	document.querySelector('.column-labels .product-image').innerHTML = `${items.items.length} ${items.items.length>1?'Items':'Item'}`;
  items.items.forEach(renderCartItem);

	//document.querySelector('.column-labels .product-image').innerHTML = `${items.items.length} ${items.items.length>1?'Items':'Item'}`;
}

let total = 0;
const getTotal = (item) => {
	total = total + item.price * item.qty;
}
export const calcCartAndRender = async items => {
	total = 0;
	await items.items.forEach(getTotal);
	document.querySelector('#cart-subtotal').innerHTML = `<sup>$</sup>${total}`;
	document.querySelector('#cart-total').innerHTML = `<sup>$</sup>${total}`;
}