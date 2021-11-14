Webcam.set({
    width: 350,
    height:300,
image_format:"png",
png_quality:90

}
)
camera=document.getElementById("image");
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("captured_image").innerHTML= '<img id="result" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cr_osE6C-/model.json',modelloaded);
function modelloaded(){
console.log("model loaded");
}
function check(){
img= document.getElementById("result");
classifier.classify(img, imageresult);
}
function imageresult(error,result){
    if(error){
        console.error("error");
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML= result[0].label;
        document.getElementById("accuracy").innerHTML= result[0].confidence.toFixed(5);
    }
}