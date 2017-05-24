var expect    = require("chai").expect;
var conversor = require("../app/conversor");

describe("Conversor do código de cores", function() {
  describe("Conversão RGB para Hexa", function() {
    it("converte as cores básicas", function() {
      var redHex   = conversor.rgbToHex(255, 0, 0);
      var greenHex = conversor.rgbToHex(0, 255, 0);
      var blueHex  = conversor.rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Conversão Hexa para RGB", function() {
    it("converte as cores básicas", function() {
      var red   = conversor.hexToRgb("ff0000");
      var green = conversor.hexToRgb("00ff00");
      var blue  = conversor.hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
});