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
  wish_input : document.getElementById("wish_input"),
  wish_submit : document.getElementById("wish_submit"),
  wish_input_form : document.getElementById("form"),
  wishlist_div : document.getElementById("wishlist"),
  workbook_div : document.getElementById("workbook")
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
        // need to finish the init fuction         
  }
};

controller.init();