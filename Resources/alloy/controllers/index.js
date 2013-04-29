function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.rssTab = Alloy.createController("rss", {
        id: "rssTab"
    });
    $.__views.leftTab = Ti.UI.createTab({
        window: $.__views.rssTab.getViewEx({
            recurse: true
        }),
        id: "leftTab"
    });
    $.__views.index.addTab($.__views.leftTab);
    $.__views.aboutTab = Alloy.createController("about", {
        id: "aboutTab"
    });
    $.__views.rightTab = Ti.UI.createTab({
        window: $.__views.aboutTab.getViewEx({
            recurse: true
        }),
        id: "rightTab"
    });
    $.__views.index.addTab($.__views.rightTab);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;