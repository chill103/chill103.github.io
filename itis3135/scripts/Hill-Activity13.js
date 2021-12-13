$(document).ready(function() {
    /*$.ajax({
        type: "get",
        url: "team.json",
        
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $(data).find("management").children().each(function() {
                var jsonDoc = $(this);
                $("#team").append
                ("<h3>" + jsonDoc.find("name").text() + "</h3>" +
                          jsonDoc.find("title").text() + "<br>" +
                          jsonDoc.find("bio").text() + "<br>");
            });
        }
        success: function(data){
            $("#team").html("");
            $.getJSON(url, function(data){
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#team").appendTo(
                            "<h3>" + value.name + "</h3><br>" +
                            "<p>" + value.title + "<br>" +
                            value.bio + "</p><br>"
                        );
                    });
                });
            })
        }

        success: function(data){
            $.getJSON(url, function(data){
                var html = "";
                $.each(data.items, function(key, value) {
                    html += "<h3>" + value.name + "</h3><br>" +
                        "<p>" + value.title + "<br>" +
                        value.bio + "</p><br>";
                });
                $("#team").html(html);
            }) 
        }
    
    
        success: function(data){
            $.getJSON("team.json", function(data) {
                $.each(data, function(){
                    $.each(this, function(key, value) {
                        $("team").append(
                            "<h3>" + value.name + "</h3><br>" +
                            "<p>" + value.title + "<br>" +
                            value.bio + "</p><br>"
                        );
                    });
                });
            });
        }
    });*/
    
    $.getJSON("team.json", function(data) {
        $.each(data, function(){
            $.each(this, function(key, value) {
                $("team").append(
                    "<h3>" + value.name + "</h3><br>" +
                    "<p>" + value.title + "<br>" +
                    value.bio + "</p><br>"
                );
            });
        });
    });

});