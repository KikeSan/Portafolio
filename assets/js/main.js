// 0: Interbank
// 1: JGJ
// 2: Promperu
// 3: Nosotras
// 4: San Fernando
// 5: GlobalNet
// 6: Miller 
// 7: Cristal 
// 8: Obrainsa 
// 9: PBLima 
// 10: Alicorp 
var colorsWork1 = ['#153370','#133F59','#DA1F0F','#F12F88','#233C95','#205CAD','#DB0500','#010E58','#184D83','#931428','#B71313'];
var colorsWork2 = ['#009b3a','#419D46','#FFFFFF','#152D6F','#EC433B','#233C95','#75370C','#000000','#000000','#1e3b67','#B71313'];
//r colorsWork2 = [Interbank, JGJProye, PromPeru, Nosotras, San Fern, GlobalNe, Miller  , Cristal , Obrainsa, PBLima  , Alicorp ];

$(document).ready(function() {
    
    function Foto(contenido,target,ID){
        var img = document.createElement('img');
        img.setAttribute('src', contenido);
        img.addEventListener('load', function() {
            var vibrant = new Vibrant(img);
            var swatches = vibrant.swatches();
            for (var swatch in swatches){
                if (swatches.hasOwnProperty(swatch) && swatches[swatch]){/*console.log(swatch, swatches[swatch].getHex())*/}
            }
            console.log(swatches['Vibrant'].getRgb());
//            $(target).css('background',swatches['DarkVibrant'].getHex());
//            $(target).css('background','rgba('+swatches['DarkVibrant'].getRgb()+',.8)');
//            $(".mfp-fade.mfp-bg.mfp-ready").css('background','rgba('+swatches['DarkVibrant'].getRgb()+',.8) !important');
//            $(target+">a>.work-item-info>h3").css('color',swatches['LightVibrant'].getHex());
            /*$(target+">.colores>ul>.Vibrant").css('background',swatches['Vibrant'].getHex());
            $(target+">.colores>ul>.Muted").css('background',swatches['Muted'].getHex());
            $(target+">.colores>ul>.DarkVibrant").css('background',swatches['DarkVibrant'].getHex());
            $(target+">.colores>ul>.DarkMuted").css('background',swatches['DarkMuted'].getHex());
            $(target+">.colores>ul>.LightVibrant").css('background',swatches['LightVibrant'].getHex());*/
            $(target).css('background','rgba('+HexToRgb(colorsWork1[ID])+',.9)');
//            $(target+">a>.work-item-info>h3").css('color',colorsWork1[ID]);
        });
    }
    for(var i=0;i<$(".work-item-list>li").length;i++){
//        var foto = new Foto($(".work-item-list>#"+i+" img").attr("src"),".work-item-list>#"+i+">.image-overlay",$(".work-item-list>#"+i+" img").attr("class"));
    }
    
    
});

function FondoLB(contenido){
    var img = document.createElement('img');
    img.setAttribute('src', contenido);
    img.addEventListener('load', function() {
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches();
        for (var swatch in swatches){
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]){/*console.log(swatch, swatches[swatch].getHex())*/}
        }
        console.log(swatches['Vibrant'].getRgb());

        $(".mfp-bottom-bar").css('background','rgba('+swatches['DarkVibrant'].getRgb()+',.8)');
        $(".mfp-bottom-bar h3").css('color',swatches['Vibrant'].getHex());
    });
}



function PintaWork(item,contenido){
    var img = document.createElement('img');
    img.setAttribute('src', contenido);
    img.addEventListener('load', function() {
        $('.mfp-bottom-bar').css('background','rgba(' + HexToRgb(colorsWork1[item]) + ',.95)');
        $('.mfp-bottom-bar .btnVerWeb').css('background','rgb(' + HexToRgb(colorsWork2[item]) + ')');
        
        /*$('.mfp-bottom-bar .btnVerWeb').hover(function(){
            TweenMax.to($(this).find('p'), 0.7, {marginLeft:-10});
            console.log('Link Ver más');
        })*/
        
        $( ".mfp-bottom-bar .btnVerWeb" )
            .mouseenter(function() {
            TweenMax.to($(this).find('p'), 0.3, {marginLeft:-20, ease:Power3.easeInOut});
            TweenMax.to($(this).find('i'), 0.3, {opacity:1, marginLeft:15, ease:Power3.easeInOut});
            console.log('Link Ver más');
        })
            .mouseleave(function() {
            TweenMax.to($(this).find('p'), 0.5, {marginLeft:-13, ease:Power3.easeInOut});
            TweenMax.to($(this).find('i'), 0.3, {opacity:0, marginLeft:0, ease:Power3.easeInOut});
        });
    });
}


function HexToRgb(color){
    console.log('color elegido: '+color);
    var R = hexToR(color);
    var G = hexToG(color);
    var B = hexToB(color);
    return R+','+G+','+B;
}


function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}