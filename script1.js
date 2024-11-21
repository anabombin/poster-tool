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

    /// Thailand
    $("#thailand").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/thailand-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/thailand.png")');
        $(".masked").css("mask-image", 'url("png-traced/thailand.png")');
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

    /// amsterdam
    $("#amsterdam").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/amsterdam.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/amsterdam.png")');
        $(".masked").css("mask-image", 'url("png-traced/amsterdam.png")');
    });

    /// san juan
    $("#sanjuan").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/san_juan.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/san_juan.png")');
        $(".masked").css("mask-image", 'url("png-traced/san_juan.png")');
    });

    /// painted ladies
    $("#paintedladies").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/painted_ladies.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/painted_ladies.png")');
        $(".masked").css("mask-image", 'url("png-traced/painted_ladies.png")');
    });

    /// guincho
    $("#guincho").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/guincho.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/guinxo.png")');
        $(".masked").css("mask-image", 'url("png-traced/guinxo.png")');
    });


    /// Phuket
    $("#phuket").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/phuket-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/phuket.png")');
        $(".masked").css("mask-image", 'url("png-traced/phuket.png")');
    });


    /// courchevel
    $("#courchevel").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/courchevel-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Courchevel.png")');
        $(".masked").css("mask-image", 'url("png-traced/Courchevel.png")');
    });

    /// courchevel2
    $("#courchevel2").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/courchevel2-photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Courchevel2.png")');
        $(".masked").css("mask-image", 'url("png-traced/Courchevel2.png")');
    });


    /// Georgetown
    $("#georgetown").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/georgetown-photo-.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Georgetown.png")');
        $(".masked").css("mask-image", 'url("png-traced/Georgetown.png")');
    });

    /// lisboa
    $("#lisboa").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/lisboa-photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Lisboa.png")');
        $(".masked").css("mask-image", 'url("png-traced/Lisboa.png")');
    });

    /// matterhon
    $("#matterhorn").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/matterhorn-photo.JPEG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Matterhorn.png")');
        $(".masked").css("mask-image", 'url("png-traced/Matterhorn.png")');
    });


    /// miami
    $("#miami").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/miami-photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Miami.png")');
        $(".masked").css("mask-image", 'url("png-traced/Miami.png")');
    });

    /// new york
    $("#new-york").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/new-york-photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/New_York.png")');
        $(".masked").css("mask-image", 'url("png-traced/New_York.png")');
    });

    /// newport
    $("#newport").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/newport-photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Newport.png")');
        $(".masked").css("mask-image", 'url("png-traced/Newport.png")');
    });


    /// zurich
    $("#zurich").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/zurich-photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Zurich.png")');
        $(".masked").css("mask-image", 'url("png-traced/Zurich.png")');
    });

    /// mykonos
    $("#mykonos").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/mykonos_photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Mykonos.png")');
        $(".masked").css("mask-image", 'url("png-traced/Mykonos.png")');
    });

    /// parthenon
    $("#parthenon").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/parthenon_photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Parthenon.png")');
        $(".masked").css("mask-image", 'url("png-traced/Parthenon.png")');
    });

    /// retiro
    $("#retiro").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/el_retiro_photo.JPG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/El_Retiro.png")');
        $(".masked").css("mask-image", 'url("png-traced/El_Retiro.png")');
    });

    /// vigo
    $("#vigo").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/vigo_photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Vigo.png")');
        $(".masked").css("mask-image", 'url("png-traced/Vigo.png")');
    });

    /// bilbao
    $("#bilbao").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/bilbao_photo.jpeg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Bilbao.png")');
        $(".masked").css("mask-image", 'url("png-traced/Bilbao.png")');
    });

    /// sognefjord
    $("#sognefjord").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/sognefjord_photo.JPEG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Sognefjord.png")');
        $(".masked").css("mask-image", 'url("png-traced/Sognefjord.png")');
    });

    /// copenhagen
    $("#copenhagen").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/copenhagen_photo.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Copenhagen.png")');
        $(".masked").css("mask-image", 'url("png-traced/Copenhagen.png")');
    });

    /// little mermaid
    $("#little-mermaid").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/little_mermaid_photo.JPEG")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Little_Mermaid.png")');
        $(".masked").css("mask-image", 'url("png-traced/Little_Mermaid.png")');
    });

    /// millenium park
    $("#millenium-park").click(function() {
        // change reference image
        $(".image-poster").css("background-image", 'url("images/millenium_park.jpg")');
    
        // change masked image
        $(".masked").css("-webkit-mask-image", 'url("png-traced/Millenium_Park.png")');
        $(".masked").css("mask-image", 'url("png-traced/Millenium_Park.png")');
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
