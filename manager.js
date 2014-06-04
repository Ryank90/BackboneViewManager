// require set
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
   
   // define the manager to manage view states
    window.ViewManager = window.ViewManager || {};
    
    // holds all references to exisiting views
    ViewManager.Views = ViewManager.Views || {};
    
    // close existing views
    ViewManager.ViewClose = function (name) {
        
        // do we have an object
        if (typeof ViewManager.Views[name] !== 'undefined') {
            
            // undelegate the views events
            ViewManager.Views[name].undelegateEvents();
            
            // remove the view from the DOM
            ViewManager.Views[name].remove();
            
            // remove all callbacks
            ViewManager.Views[name].off();
            
            // close view
            if (typeof ViewManager.Views[name].close === 'function') {
                ViewManager.Views[name].close();
            }
        }
    
    };
    
    // create a view
    ViewManager.ViewCreate = function (name, callback) {
        
        // close the view
        ViewManager.ViewClose(name);
        
        // set the callback
        ViewManager.Views[name] = callback();
        
        // return the view
        return ViewManager.Views[name];
        
    };
    
    // reuse a view
    ViewManager.ViewReuse = function (name, callback) {
        
        // do we have an instance already
        if (typeof ViewManager.Views[name] !== 'undefined') {
            return ViewManager.Views[name];
        }
        
        // set the callback
        ViewManager.Views[name] = callback();
        
        // return the view in array
        return ViewManager.Views[name];
        
    };
    
});
