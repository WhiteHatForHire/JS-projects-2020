const sounds = document.querySelectorAll(".sound");
for(let i = 0; i < sounds.length; i++) {
    sounds[i].addEventListener("click", function(){
        let sound = this.innerHTML;
        let lowerSound = sound.toLowerCase
        console.log(sounds[i])  
    });
}