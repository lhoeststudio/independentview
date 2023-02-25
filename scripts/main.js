
let runner = setInterval(function() {

    // Remove Subscriber Numbers

    var myElements = [
        document.getElementById("subscriber-count"),
        document.getElementById("subscribers"),
        document.getElementById("owner-sub-count"),
        document.getElementById("dot"),
        document.getElementById("thumbnail-attribution")
    ]

    for(var i = 0, size = myElements.length; i < size ; i++){
        var myElement = myElements[i];
        if(myElement != null){
           myElement.style.display = "none";
        } 
     }

    // Fix Style Problems

    if (document.getElementsByClassName("subscribe") != null){
        let items = document.querySelectorAll("#subscribe.ytd-grid-channel-renderer");

        items.forEach(element => element.style.marginTop = "6px");
    }
    


}, 100);