console.log("testing");

const model = {
  firstUse : true,
  listUpdated : [],
  
  init : function(){
    for (let i=0; i < model.items.length; i++){model.listUpdated[i]=0;}
  }

};

const view = {
  listCreated : false,
  wbPs : [],
  wbArchiveBttns : [],
  wbDDButtons : [],
  newWishBtn : document.getElementById("newWishBtn"),
  viewlistBtn : document.getElementById("viewlistBtn"),
  wish_input : document.getElementById("wish_input"),
  wish_submit : document.getElementById("wish_submit"),
  wish_input_form : document.getElementById("form"),
  wishlist_div : document.getElementById("wishlistDiv"),
  wishList : document.getElementById("wishList"),
  workbook_div : document.getElementById("workbook"),
  updateWishDiv : document.getElementById("updateWish"),
  listBackButton : document.getElementById("back"),
  workbookWishlistDiv : document.getElementById("workbookWishList"

  )
};

const controller = {
    // will also need to add functions for event listeners
  listView : function(){
    // need to check the view if list was created
    // if so, just need to unhide
    // remember will also need to update anything new
    // so need something in the model to say list updated
    // if not, need to update the listview ui for the first time
    
  },
  formSubmitted : function(){

  },  
  init : function(){
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().then((persistent) => {
      if (persistent) {
        console.log("Storage will not be cleared except by explicit user action");
      } else {
        console.log("Storage may be cleared by the UA under storage pressure.");
      }
      });
    }

    if (localStorage.getItem("wbwLowestLevel"))
      {
        model.firstUse = false;
        model.items = JSON.parse(localStorage.getItem("wbwItems"));
        model.archived = JSON.parse(localStorage.getItem("wbwarchives"));
        model.init();
      }

      // need to add all event listeners
      
      if(model.firstUse){
          // need to unhide the appropriate form
          view.wish_input_form.classList.remove("hidden")
      }
      else {

      }
             
  }
};

controller.init();