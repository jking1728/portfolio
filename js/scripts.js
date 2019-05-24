$(document).ready(function() {
    $("button").click(function() {
        $("button#dark-mode").toggle();
        $("button#light-mode").toggle();
    })
    $("button#dark-mode").click(function() {
        $("body").removeClass();
        $("body").addClass("darkmode");
    });
    $("button#light-mode").click(function() {
        $("body").removeClass();    
    });
});