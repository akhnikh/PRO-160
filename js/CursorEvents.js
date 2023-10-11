AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },

    handlePlacesListState: function () {
        const id = this.getAttribute("id");
        const placesId = ["captain-aero","outer-space","spider-man","superman"];
        if (placesId.includes(id)){
            const posterContainer = document.querySelector("#posters-container")
            posterContainer.setAttribute("cursor", listener){
                
            }
        }
    },

    handleMouseEnterEvents: function () {

    },

    handleMouseLeaveEvents: function () {

    },


});