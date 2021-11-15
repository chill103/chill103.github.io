$(document).ready(function() {

    const $ = selector => document.querySelector(selector);
    const imageLinks = $("#image_list").querySelectorAll("a");
    const horseImage = $("#image");
    const captionImage = $("#caption");


    for(let link of imageLinks){
        // preload the image for each link
        const image = new Image();
        image.src = link.href;
        
        

        // set up the event handlers for each link
        link.addEventListener("click", evt => {

    		// get the image URL and caption for each image and animate the caption
            horseImage.src = link.href;
            horseImage.alt = link.title;
            captionImage.textContent = link.title;

            // cancel the default action of each link
            evt.preventDefault();
        })
    }
    
    // move the focus to the first link
    imageLinks[0].focus();

}); // end ready