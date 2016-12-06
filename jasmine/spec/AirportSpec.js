describe("Airport", function() {
var airport;
var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });


    it("should have no planes in the airport", function() {
      expect(airport.planes).toEqual([])
    });

    it("has a default capacity of 20", function() {
      expect(airport.capacity).toEqual(20)
    });

    it("should be able to land a plane", function() {
      spyOn(plane, 'land');
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

});
