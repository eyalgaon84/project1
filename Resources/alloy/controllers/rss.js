function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function btn1_Click() {
        $.label.text = "test";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.rss = Ti.UI.createWindow({
        id: "rss"
    });
    $.__views.rss && $.addTopLevelView($.__views.rss);
    $.__views.label = Ti.UI.createLabel({
        text: "Hello, World3",
        id: "label"
    });
    $.__views.rss.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.btn1 = Ti.UI.createButton({
        id: "btn1"
    });
    $.__views.rss.add($.__views.btn1);
    btn1_Click ? $.__views.btn1.addEventListener("click", btn1_Click) : __defers["$.__views.btn1!click!btn1_Click"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.btn1!click!btn1_Click"] && $.__views.btn1.addEventListener("click", btn1_Click);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;