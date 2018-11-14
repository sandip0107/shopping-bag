export const renderEditCartItem = (item,action)=> {
  const markup = `
    <div  id="dialog" >
    <div class="productEditOverLay" >
    <div class="product">
    <div class="product-image">
      <img alt="${item.title}" src="img/${item.image}">
      <button class="remove-product" data-button="close"></button>
    </div>
	  <div class="product_details_wrapper">
    <div class="product-details">
      <div class="product-title">${item.title}</div>
      <div class="product-line-price"><sup>$</sup>${item.price}</div>
      <div class="product-color">	
        
      <input type="radio" aria-label="Grey Color Selected" name="color" id="grey" value="Gray" ${item.color == 'Gray' ? 'Checked' : 'test'}/>
      <label for="grey"><span class="grey"></span></label>
      
      <input type="radio" aria-label="Blue Color Selected" name="color" id="blue" value="Blue" ${item.color == 'Blue' ? 'Checked' : 'test'}/>
      <label for="blue" ><span class="blue"></span></label>
      
      <input type="radio" aria-label="Yellow Color Selected" name="color" id="yellow" value="Yellow" ${item.color == 'Yellow' ? 'Checked' : 'test'}/>
      <label for="yellow" ><span class="yellow"></span></label>
        
	  </div>

    <div class="product-size">
    <select class="size" aria-label="Size">
        <option ${item.size == 'S' ? 'Selected' : 'test'}>S</option>
        <option ${item.size == 'M' ? 'Selected' : 'test'}>M</option>
        <option ${item.size == 'L' ? 'Selected' : 'test'}>L</option>
    </select>
    <input class="qty" type="number" aria-label="Quantity" value="${item.qty}" min="1" >
    </div>
        
    <div class="product-action">
    <a href="javascript:void(0)" class="update-product" data-button="update" id=${item.id} >
    ${action} 
    </a>
    
   
    </div>
  </div>
  </div> 
 
  </div>
  <div class="overlay"></div>
  </div>
 </div>
    `
  $("#dialog").remove();
  const productContainer = document.querySelector('body');
  productContainer.insertAdjacentHTML('beforeend', markup);
  $( "#dialog" ).dialog({
    closeOnEscape: false,
    open: function(event, ui) {
        $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
    }
  });
  $('input[type=radio][name=color]').change(function() {
    $(".productEditOverLay img").attr("src","img/t-"+this.value+".jpg");
  });
}

export const getItemId = () => parseInt(document.querySelector('.update-product').id);
export const getSize = () => document.querySelector('.size').value;
export const getQty = () => parseInt(document.querySelector('.qty').value);
export const getColor = () => document.querySelector('input[name="color"]:checked').value;