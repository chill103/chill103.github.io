$(document).ready(function() {
    
    // Build the url of the json file
    let url = "vent_pattern.json";
    let chosen = "bonnet";
    
    // Clear out the speaker info area from any previous information.
    $("#bonnet_pattern").html("");

    // Retrieve the json data
    $.getJSON(url, function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                
                let imgArray = value.image;
                alert("here");
                // Determine if the pattern has more than one element in the image pair
                if(imgArray.length == 2){
                    
                    // This area was attempting to add a BX slider for any pattern that had more than one image but I could not get it to work after spending 10 hours on it. Instead I am switching over all but one
                    // page to use jsons to get the information while the smock page will stay hard coded to display the use of the BX slider.
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
                    $("#bonnet_pattern").append(
                        "<h1>" + value.title + "</h1>" + 
                        "<h2>" + value.from + "</h2>" +
                        "<img src=\"images\/" + value.image[0] + "\" alt=\"" + chosen + "_picture_a\">" +
                        "<h3>Materials:</h3><p>" + value.materials + "</p>" +                        
                        "<h3>Instructions:</h3><p>" + value.instructions + "</p>" +
                        "<img src=\"images\/" + value.image[1] + "\" alt=\"" + chosen + "_picture_b\">"
                    )

                }else if(imgArray.length == 3){
                 
                    // Append the information from the json file to the div element and style the output.
                    $("#bonnet_pattern").append(
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
                    $("#bonnet_pattern").append(
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
