/********************************
 ** FILE: base.js
 ********************************/

var $j = jQuery;

bubbly.filename = function (index) {
    var tabs = [
        "total",
        "mandatory",
        "discretionary",
        "department"
    ];
    return tabs[index];
}


bubbly.ready = function () {
    var that = this;
    bubbly.c = new bubbly.Chart();
    bubbly.c.init();
    bubbly.c.start();

    this.highlightedItems = [];


    var currentOverlay = undefined;
    bubbly.mainNav = new bubbly.ChooseList($j(".bubbly-navigation"), onMainChange);

    function onMainChange(evt) {
        var tabIndex = evt.currentIndex
        if (this.currentOverlay !== undefined) {
            this.currentOverlay.hide();
        }
        ;
        if (tabIndex === 0) {
            bubbly.c.totalLayout();
            this.currentOverlay = $j("#bubbly-totalOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#bubbly-chartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 1) {
            bubbly.c.mandatoryLayout();
            this.currentOverlay = $j("#bubbly-mandatoryOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#bubbly-chartFrame").css({
                'height': 550
            });
        } else if (tabIndex === 2) {
            bubbly.c.discretionaryLayout();
            this.currentOverlay = $j("#bubbly-discretionaryOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#bubbly-chartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 4) {
            bubbly.c.comparisonLayout();
            this.currentOverlay = $j("#bubbly-comparisonOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#bubbly-chartFrame").css({
                'height': 650
            });
        } else if (tabIndex === 3) {
            bubbly.c.departmentLayout();
            this.currentOverlay = $j("#bubbly-departmentOverlay");
            this.currentOverlay.delay(300).fadeIn(500);
            $j("#bubbly-chartFrame").css({
                'height': 850
            });
        }

    }


}

if (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect) {
    $j(document).ready($j.proxy(bubbly.ready, this));
} else {
    $j("#bubbly-chartFrame").hide();
    $j("#bubbly-error").show();
}