function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createWindow({
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.label = Ti.UI.createLabel({
        text: "about",
        id: "label"
    });
    $.__views.about.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;