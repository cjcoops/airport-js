describe("Plane", function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying to begin with", function() {
    expect(plane.isFlying).toBeTruthy();
  });

  it ("should be able to land", function() {
    plane.land();
    expect(plane.isFlying).toBeFalsy();
  });








});
