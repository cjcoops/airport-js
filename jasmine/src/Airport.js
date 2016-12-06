var DEFAULT_CAPACITY = 20

function Airport() {
  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
};

Airport.prototype.land = function(plane) {
  plane.land();
};
