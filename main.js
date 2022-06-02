
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_v5NiSgLS/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}


function gotResults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("Rlabel").innerHTML='I Can Hear-'+results[0].label;
        document.getElementById("Rcount").innerHTML ='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("Rlabel").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("Rcount").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        img=document.getElementById("imgmain");
        if (results[0].label == "Cat meowing")
         {
            img.src = "https://c.tenor.com/G5D7S7QlfoQAAAAM/meow-kitty.gif";
            cat = cat+1;
          } 
          else if (results[0].label == "cow mooing")
          {
            img.src = "https://bestanimations.com/media/bulls-cows/1015141592cow-grazing-animation-gif.gif";
            cow = cow + 1;
          } 
          else if (results[0].label == "dog barking")
          {
            img.src = "https://c.tenor.com/A17aJ1ZniiUAAAAM/dog-walking.gif";
            dog=dog + 1;
          } 
          else if (results[0].label == "sheep bleating")
          {
            img.src = "https://c.tenor.com/48vExySnooUAAAAM/sheep-eating.gif";
            sheep = sheep + 1;
          } 
          else{
            img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjWGF03Cp_H1SmCdmpNx3xzOWe9ICbbv8FJXi4AmqB2LQnVXZk33qXNBy7MgMrd24siw&usqp=CAU";
          }
        }

    }
