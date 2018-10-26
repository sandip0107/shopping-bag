export const renderEditCartItem = (item,action)=> {
  const markup = `
  
    <div class="productEditOverLay">
    <div class="product">
    <div class="product-image">
    <img alt="${item.title}" src="img/${item.image}">
      <button class="remove-product" data-button="close">
      
    </button>
      </div>
	  <div class="product_details_wrapper">
    <div class="product-details">
      <div class="product-title">${item.title}</div>
      <div class="product-line-price"><sup>$</sup>${item.price}</div>
      <div class="product-color">
		
        
      <input type="radio" name="color" id="grey" value="Gray" checked/>
      <label for="grey"><span class="grey"></span></label>
      
      <input type="radio" name="color" id="blue" value="Blue" />
      <label for="blue"><span class="blue"></span></label>
      
      <input type="radio" name="color" id="yellow" value="Yellow" />
      <label for="yellow"><span class="yellow"></span></label>
        
	  </div>

    <div class="product-size">
    <select class="size" tabindex="2" autofocus>
        <option>S</option>
        <option>M</option>
        <option>L</option>
    </select>
    <input class="qty" type="number" value="${item.qty}" min="1" tabindex="3">
    </div>
        
    <div class="product-action">
    <button class="update-product" data-button="update" id=${item.id} tabindex="4">
    ${action} 
    </button>
    
   
    </div>
  </div>
  </div> 
 
  </div>
  <div class="overlay"></div>
  
 </div>
    `
	const productContainer = document.querySelector('body');
	productContainer.insertAdjacentHTML('beforeend', markup);

}

export const getItemId = () => parseInt(document.querySelector('.update-product').id);
export const getSize = () => document.querySelector('.size').value;
export const getQty = () => parseInt(document.querySelector('.qty').value);
export const getColor = () => document.querySelector('input[name="color"]:checked').value;