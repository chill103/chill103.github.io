$(document).ready(function() {
    
    // Build the url of the json file
    let url = "knots_pattern.json";
    let chosen = "knots_blankie";
    
    // Clear out the speaker info area from any previous information.
    $("#knots_pattern").html("");

    // Retrieve the json data
    $.getJSON("knots_pattern.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                
                let imgArray = value.image;
                
                // Determine if the pattern has more than one element in the image pair
                if(imgArray.length == 2){
                    
                    /*let imgBuild = "";

                    // Build the li for the slider
                    for(let i = 0; i < imgArray.length; i++){
                        imgBuild += "<img src=\"images\/" + value.image[i] + "\" alt=\"knots_blankie_picture_" + i + "\">"
                    }

                    $("#slider").bxSlider({
                        auto: true,
                        minSlides: 1, 
                        maxSlides: 1,
                        slideWidth: 250,
                        slideMargin:10
                    })*/
                    // Append the information from the json file to the div element and style the output.
                    $("#knots_pattern").append(
                        "<h1>" + value.title + "</h1>" + 
                        "<h2>" + value.from + "</h2>" +
                        "<img src=\"images\/" + value.image[0] + "\" alt=\"" + chosen + "_picture_a\">" +
                        "<h3>Materials:</h3><p>" + value.materials + "</p>" +                        
                        "<h3>Instructions:</h3><p>" + value.instructions + "</p>" +
                        "<img src=\"images\/" + value.image[1] + "\" alt=\"" + chosen + "_picture_b\">"
                    )

                }else if(imgArray.length == 3){
                 
                    // Append the information from the json file to the div element and style the output.
                    $("#knots_pattern").append(
                        "<h1>" + value.title + "</h1>" + 
                        "<h2>" + value.from + "</h2>" +
                        "<img src=\"images\/" + value.image[0] + "\" alt=\"" + chosen + "_picture_a\">" +
                        "<h3>Materials:</h3><p>" + value.materials + "</p>" +    
                        "<img src=\"images\/" + value.image[1] + "\" alt=\"" + chosen + "_picture_b\">" +                   
                        "<h3>Instructions:</h3><p>" + value.instructions + "</p>" +
                        "<img src=\"images\/" + value.image[2] + "\" alt=\"" + chosen + "_picture_c\">"
                    )
                    
                }else{

                    // Append the information from the json file to the div element and style the output.
                    $("#knots_pattern").append(
                        "<h1>" + value.title + "</h1>" + 
                        "<h2>" + value.from + "</h2>" +
                        "<img src=\"images\/" + value.image + "\" alt=\"" + chosen + "_picture\">" +
                        "<h3>Materials:</h3><p>" + value.materials + "</p>" +                        
                        "<h3>Instructions:</h3><p>" + value.instructions + "</p>"
                    )
                
                }
                
            })
        })
    })

});
