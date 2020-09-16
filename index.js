function main () {

  //add new li with user input 
    $('#js-shopping-list-form').on('submit',  (e) => { 
      e.preventDefault();
      let input = $(this).find('input[name="shopping-list-entry"]').val();
      const shoppingList = $('.shopping-list');

      //place new list item at the top
      shoppingList.prepend($(
`<li>
    <span class="shopping-item">${input}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
</li>`
      ));
    });

    //make li item striked
    $('.shopping-list').on('click', '.shopping-item-toggle', (e) => {
      let itemSpan = $(e.currentTarget).parent('.shopping-item-controls').siblings('span');
      itemSpan.toggleClass('shopping-item__checked');
    });

    //delete li on click
    $('.shopping-list').on('click', '.shopping-item-delete', (e) => {
      let itemSpan = $(e.currentTarget).closest('li');
      itemSpan.remove();
    });
}

$(main);