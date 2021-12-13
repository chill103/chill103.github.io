$(document).ready(function() {
	
    // Event handler for a selectors
    $("a").click(evt => {
        // Test of retrieving the title associated with the button clicked on: alert("Clicked " + evt.currentTarget.title);
        
        // Store the selected button's title so that it can be used to retrieve the appropriate json file
        var choosen = evt.currentTarget.title;

        // Build the url of the json file
        let url = "json_files/" + choosen + ".json";

        //alert(url);

        // Clear out the speaker info area from any previous information.
        $("#speaker_info").html("");

        // Retrieve the json data
        $.getJSON(url, function(data) {alert("here");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#speaker_info").append(
                        "<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        "<img src=\"" + value.image + "\" alt=\"" + choosen + "_picture\">" +
                        "<p>" + value.text + "</p>"
                    )
                })
            })
        })
    });

}); // end ready