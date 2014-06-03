backbone-view-manager
=====================

A View Manager to help remove those sodding zombie views, found in the darkest parts of your SPA.

How to use
=====================

A typical rendering of a view would look like this:

    demoView = new DemoView({...});
    this.$el.append(demoView.render().el);

How to initiate the view manager

    demoView = ViewsManager.ViewCreate('demoView', function () {
        return new DemoView({...});
    });
    this.$el.append(demoView.render().el);
    
Or re-use existing view

    demoView = ViewsManager.ViewReuse('demoView', function () {
        return new DemoView({...});
    });
    this.$el.append(demoView.render().el);
    
Kill a view

    ViewsManager.ViewClose('demoView');
