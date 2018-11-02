const renderCartItem = item => {
	const markup = `
    <ul class="product">
    <li class="product-image">
      <img tabindex="0" alt="${item.title}" src="img/${item.image}">
    </li>
	<li class="product_details_wrapper">
    <div class="product-details">
      <div class="product-title" data-button="show" tabindex="0" data-id=${item.id} >${item.title}</div>
      <div class="product-description">
		<div tabindex="0">Style : ${item.style}</div>
		<div tabindex="0">Color : ${item.color}</div>
	  </div>
	  
    </div>
    <div tabindex="0" class="product-size" aria-label="Size : ${item.size}">${item.size}</div>
    <div tabindex="0" class="product-quantity" aria-label="Quantity : ${item.qty}">
      <div>${item.qty}</div>
    </div>   
    <div class="product-line-price">
    <div class="actual-price"><sup>${item.actualPrice?"$":""}</sup><del>${item.actualPrice?item.actualPrice:""}</del></div>
    <div tabindex="0" aria-label="Price : $ ${item.price*item.qty}"><sup>$</sup>${item.price*item.qty}</div> 
		</div>
		<div class="product-action">
		  <button class="edit-product" id=${item.id} data-button="edit" tabindex="0">
			Edit
		  </button>
		  <button class="remove-product" tabindex="0">
			Remove
		  </button>
		  <button class="save-product" tabindex="0">
			Save For Later
		  </button>
      </div>
	</li> 
  </ul>
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