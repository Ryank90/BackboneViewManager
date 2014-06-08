backbone-view-manager
=====================

A View Manager to help remove those sodding zombie views, found in the darkest parts of your SPA.

How to use
=====================

A typical rendering of a view would look like this:

    var demoView = new DemoView({...});
    this.$el.append(demoView.render().el);

How to initiate the view manager

    var demoView = ViewManager.ViewCreate('demoView', function () {
        return new DemoView({...});
    });
    this.$el.append(demoView.render().el);
    
Or re-use existing view

    var demoView = ViewManager.ViewReuse('demoView', function () {
        return new DemoView({...});
    });
    this.$el.append(demoView.render().el);
    
Kill a view

    ViewManager.ViewClose('demoView');

View your initialized view in the DOM

    ViewManager.Views();
