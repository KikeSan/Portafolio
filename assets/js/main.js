//  0: Interbank
//  1: JGJ
//  2: Promperu
//  3: Nosotras
//  4: San Fernando
var colorsWork1 = ['#153370','#133F59','#DA1F0F','#F12F88','#233C95'];
var colorsWork2 = ['#009b3a','#419D46','#FFFFFF','#152D6F','#EC433B'];
//r colorsWork2 = [Interbank, JGJProye, PromPeru, Nosotras, San Fern];

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