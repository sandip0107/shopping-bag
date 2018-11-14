const renderCartItem = item => {
	const markup = `
    <ul class="product">
    <li class="product-image">
			<a href="javascript:void(0)" data-button="show" data-id=${item.id} />
				<img alt="${item.title}" data-button="show" data-id=${item.id} src="img/${item.image}">
			</a>
    </li>
	<li class="product_details_wrapper">
    <div class="product-details">
      <div class="product-title">${item.title}</div>
      <div class="product-description">
		<div>Style : ${item.style}</div>
		<div>Color : ${item.color}</div>
	  </div>
	  
    </div>
    <div class="product-size" aria-label="Size : ${item.size}">${item.size}</div>
    <div class="product-quantity" aria-label="Quantity : ${item.qty}">
      <div>${item.qty}</div>
    </div>   
    <div class="product-line-price">
    <div class="actual-price"><sup>${item.actualPrice?"$":""}</sup><del>${item.actualPrice?item.actualPrice:""}</del></div>
    <div aria-label="Price : $ ${item.price*item.qty}"><sup>$</sup>${item.price*item.qty}</div> 
		</div>
		<div class="product-action">
		  <a href="javascript:void(0)" class="edit-product" id=${item.id} data-button="edit">
			Edit
		  </a>
		  <a href="javascript:void(0)" class="remove-product" id=${item.id} data-button="remove">
			Remove
		  </a>
		  <a href="javascript:void(0)" class="save-product">
			Save For Later
		  </a>
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