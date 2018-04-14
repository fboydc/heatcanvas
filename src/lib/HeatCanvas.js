import L from "mapbox.js";
import "./overlayheat.js";

L.HeatCanvas = L.GridLayer.extend({

	onAdd: function(map){
		L.GridLayer.prototype.onAdd.call(this, map);
		const canvas = L.DomUtil.create('canvas', 'grid-canvas');
		canvas.width = map._size.x;
		canvas.height = map._size.y;

		this.drawItemsInCanvas(canvas);

		map.createPane("heatlayer");
		map.getPane("heatlayer").style.index = 650;
		map.getPane("heatlayer").appendChild(canvas);


	},

	drawItemsInCanvas: function(canvas){

	},


	createTile: function(){
		console.log("calling this");
		let div = L.DomUtil.create('div', 'grid-canvas-div');
		div.title = "this is mee!";

		return div;
	}
});


L.heatcanvas = function(){
	return new L.HeatCanvas();
}
