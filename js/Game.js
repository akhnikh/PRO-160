AFRAME.registerComponent('game', {
    schema: {
        elementID: {type:"string", default:"#treasure"}
    },
    init: function(){

    },
    isCollided: function(elementID){
        const element = document.querySelector(elementID);
        element.addEventListener('collide',(e)=>{
            if(elementID.includes("#treasure")){
                console.log("reached treasure")
            }
            else if(elementID.includes("#xyz")){
                console.log("hit the fish")
            }
        })
    }
})