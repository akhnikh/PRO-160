AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "captain-aero",
          title: "Captain Aero",
          url: "./posters/captain-aero-poster.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./posters/outer-space-poster.jpg",
        },
  
        {
          id: "spiderman",
          title: "Spider Man",
          url: "./posters/spiderman-poster.jpg",
        },
        {
          id: "superman",
          title: "Super Man",
          url: "./posters/superman-poster.jpg",
        },
        
      ];
      let prevoiusXPosition = -60;

      for (var item of thumbNailsRef){
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderEl = this.createBorder(position, item.id);

        const titleEl = this.createPoster(item);
        borderEl.appendChild(titleEl); 

        this.placesContainer.appendChild(borderEl);
      }

    },
    createBorder: function (position, id){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 40
      });
  
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "#fff" });
  
      return entityEl;
    },
    createPoster: function (item){
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      });
  
      entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    }
});