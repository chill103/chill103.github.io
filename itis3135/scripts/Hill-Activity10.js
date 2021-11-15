"use strict"
$(document).ready(function() {

    
        // preload the image for each link
        $("#image_list a").each( (index, link) => {
            const image = new Image();
            image.src = link.href;
        });
     
        // set up the event handlers for each link
        $("#image_list a").click( evt => {

    		// get the image URL and caption for each image and animate the caption
            const link = evt.currentTarget;
            let mainImage = $("#image").attr("src", link.href);
            let mainCaption = $("#caption").text(link.title);
            
            /* Original fade out and fade in statements 
            mainImage.fadeOut(3000);
            mainCaption.fadeOut(3000);
            
            mainImage.fadeIn(3000);
            mainCaption.fadeIn(3000);
            */

            // Callback of the fade out and fade in for image and caption
            mainImage.fadeTo(3000, 0, evt => 
              $(evt.currentTarget).fadeTo(3000, 1)  
            ); 

            mainCaption.fadeTo(3000, 0, evt =>
                $(evt.currentTarget.next()).fadeTo(3000, 1)
            );

            mainCaption.animate(
                {fontSize: "2.0em", opacity: 1}, 3000
            );
            

            // cancel the default action of each link
            evt.preventDefault();
        });

    // move the focus to the first link
        $("li:first-child a").focus();

}); // end ready