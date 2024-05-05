$( document ).ready(function() {
    
    $("#less-grid").click(function(){
        $(".grid").toggle()
    });

    $("#less-tool").click(function(){
        $(".custom-buttons").toggle()
        $(".tool-buttons").toggle()
    });

    $("#less-reference").click(function(){
        $(".image-poster").toggle()
    });


    //border around chosen image 
    $(".grid img").click(function() {
        // Remove border from all images within .grid
        $(".grid img").css("border", "none");
    
        // Add border to the clicked image
        $(this).css("border", "2px solid yellow");
    });

    /// Venice
    $("#venice").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/venice-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/venezia.png")');
        $(".masked").css("mask-image", 'url("png-traced/venezia.png")');
    });

    /// Phuket
    $("#thailand").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/thailand-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/phuket.png")');
        $(".masked").css("mask-image", 'url("png-traced/phuket.png")');
    });

    /// Tenerife
    $("#tenerife").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/tenerife-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/tenerife.png")');
        $(".masked").css("mask-image", 'url("png-traced/tenerife.png")');
    });

    /// St moritz
    $("#stmoritz").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/stmoritz-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/stmoritz.png")');
        $(".masked").css("mask-image", 'url("png-traced/stmoritz.png")');
    });

    /// Pula
    $("#pula").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/pula-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/pula.png")');
        $(".masked").css("mask-image", 'url("png-traced/pula.png")');
    });

    /// Paris
    $("#paris").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/paris-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/paris.png")');
        $(".masked").css("mask-image", 'url("png-traced/paris.png")');
    });

    /// Les Gets
    $("#lesgets").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/lesgets-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/les-gets.png")');
        $(".masked").css("mask-image", 'url("png-traced/les-gets.png")');
    });

    /// Hoch Ybrig
    $("#hochybrig").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/hochYbrig-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/hochYbrig.png")');
        $(".masked").css("mask-image", 'url("png-traced/hochYbrig.png")');
    });

    /// Golden Gate
    $("#goldengate").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/SF-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/golden_gate.png")');
        $(".masked").css("mask-image", 'url("png-traced/golden_gate.png")');
    });

    /// Dumbo
    $("#dumbo").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/dumbo-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/dumbo.png")');
        $(".masked").css("mask-image", 'url("png-traced/dumbo.png")');
    });

    /// Cascais
    $("#cascais").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/cas-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/cascais.png")');
        $(".masked").css("mask-image", 'url("png-traced/cascais.png")');
    });

    ///Cartagena
    $("#cartagena").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/cartagena-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/cartagena.png")');
        $(".masked").css("mask-image", 'url("png-traced/cartagena.png")');
    });

    /// Atenas
    $("#atenas").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/atenas-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/atenas.png")');
        $(".masked").css("mask-image", 'url("png-traced/atenas.png")');
    });

    /// asturias
    $("#asturias").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/asturias-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/asturias.png")');
        $(".masked").css("mask-image", 'url("png-traced/asturias.png")');
    });

    // randomize button
    $("#randomize").click(function(){
        let x = Math.floor(Math.random()*255);
        let y = Math.floor(Math.random()*255);
        let z = Math.floor(Math.random()*255);

        let x1 = Math.floor(Math.random()*255);
        let y1 = Math.floor(Math.random()*255);
        let z1 = Math.floor(Math.random()*255);


        $(".masked").animate({"background-color":"rgb("+z+","+x+","+y+")"})
        $(".poster-background").animate({"background-color":"rgb("+x1+","+y1+","+x1+")"})
    });

    // chage color input color fields 
    $("#imgcolor").change(function() {
        var colorValue = $(this).val();
        $(".masked").css("background-color", colorValue);
    });
    // chage color input color fields 
    $("#backcolor").change(function() {
        var colorValue = $(this).val();
        $(".poster-background").css("background-color", colorValue);
    });

    
    
    function takeshot() {
        let div = document.getElementById('poster-photo');
    
        // Use the html2canvas function to take a screenshot
        html2canvas(div).then(function(canvas) {
            // Convert canvas to data URL
            var dataURL = canvas.toDataURL('image/png');
    
            // Create a temporary link element
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'screenshot.png'; // set the download attribute to specify filename
            document.body.appendChild(link);
    
            // Trigger the click event on the link
            link.click();
    
            // Clean up
            document.body.removeChild(link);
        });
    }

    $("#save").click(function(){
        // save image
        takeshot();
    });



    //Resize 
    var aspectRatio; 
    var windowWidth;
    var windowHeight;
    
    $(window).resize(function(){
        windowHeight = $(window).height()
        windowWidth = $(window).width()
        aspectRatio = windowWidth/windowHeight
        console.log(aspectRatio)

        if (aspectRatio > 1.57){
            console.log("change CSS")
            var dotsheight = $(".dots").height()
            $(".dots").css({"width":`${dotsheight*1.57}px`})
        }

        if (aspectRatio < 1.57){
            $(".dots").css({"width":`100vw`})
        }

      });





});