"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textReadability = _interopRequireDefault(require("text-readability"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://www.npmjs.com/package/text-readability
// import fleschDe from 'fleschDe' https://www.npmjs.com/package/text-readability
// https://github.com/wooorm/readability
// https://wooorm.com/readability/
// https://alexjs.com/#demo
// https://unifiedjs.com/
var _default = {
  data: function data() {
    return {
      show: false,
      textInput: "Die Konsulin Buddenbrook, neben ihrer Schwiegermutter auf dem geradlinigen, weiß lackierten und mit einem goldenen Löwenkopf verzierten Sofa, dessen Polster hellgelb überzogen waren, warf einen Blick auf ihren Gatten, der in einem Armsessel bei ihr saß, und kam ihrer kleinen Tochter zu Hilfe, die der Großvater am Fenster auf den Knien hielt."
    };
  },
  computed: {
    outputFlesch: function outputFlesch() {
      var output = this.calculateReadability(this.textInput)[0];
      return output;
    },
    outputRecognizedText: function outputRecognizedText() {
      var output = this.formatText(this.textInput);
      return output;
    },
    outputSentenceCount: function outputSentenceCount() {
      var output = this.calculateReadability(this.textInput)[1];
      return output;
    },
    outputLexiconCount: function outputLexiconCount() {
      var output = this.calculateReadability(this.textInput)[2];
      return output;
    },
    outputSyllableCount: function outputSyllableCount() {
      var output = this.calculateReadability(this.textInput)[3];
      return output;
    }
  },
  methods: {
    formatText: function formatText(textInput) {
      // The \s metacharacter is used to find a whitespace character.
      var output = textInput;
      output = JSON.stringify(output);
      output = output.replace(/\\n/g, ". ");
      output = output.replace(/\s\s/g, " ");
      output = JSON.parse(output);
      return output;
    },
    calculateReadability: function calculateReadability(textInput) {
      var output = this.formatText(textInput);
      var sentenceCount = output.split(/[.!?:]+\s/).filter(Boolean).length;

      var lexiconCount = _textReadability["default"].lexiconCount(output);

      var syllableCount = _textReadability["default"].syllableCount(output); // output = readability.fleschReadingEase(output)


      var fleschIndex = Math.round(180 - lexiconCount / sentenceCount - 58.5 * (syllableCount / lexiconCount));
      return [fleschIndex, sentenceCount, lexiconCount, syllableCount];
    }
  }
};
exports["default"] = _default;