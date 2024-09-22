console.log("testing");

/*
my idea for the model (not very good but I think a db model isn't needed)
is two arrays.  The first array contains the bottom level (the last thing 
added to the wish/goal or the wish/goal iself) and a nested array where
each sublist is the items in the wish/goal
there is also a boolean firstUse variable which is used by the controller
to determine how to set the view
*/

const model = {
    firstUse : true,
    init : function(){
        // I dont think an init is needed as the controller will do this
        // unless the controller just saves the strings and the model parses

    }

};


const view = {};
const controller = {
    // will also need to add functions for event listeners
    
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
        // need to check if the local storage has wish bottom level
        // or whatever.  If it does save all data to the model
        // and set model firstUse equal to false 
        // need to finish the init fuction         
    }
};

controller.init();