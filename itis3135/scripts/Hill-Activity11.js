/* jQuery call to the accordion() method. */
$(document).ready(function() {
    //$("#tabs").tabs();
    $("#accordion").accordion({
        event: "click",
        heightStle: "content",
        collapsible: true,
        active: false
    })
});