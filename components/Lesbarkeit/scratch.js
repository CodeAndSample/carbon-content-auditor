// https://www.npmjs.com/package/text-readability
import readability from "text-readability";
// import fleschDe from 'fleschDe' https://www.npmjs.com/package/text-readability
// https://github.com/wooorm/readability
// https://wooorm.com/readability/
// https://alexjs.com/#demo
// https://unifiedjs.com/
export default {
  data() {
    return {
      show: false,
      textInput:
        "Die Konsulin Buddenbrook, neben ihrer Schwiegermutter auf dem geradlinigen, weiß lackierten und mit einem goldenen Löwenkopf verzierten Sofa, dessen Polster hellgelb überzogen waren, warf einen Blick auf ihren Gatten, der in einem Armsessel bei ihr saß, und kam ihrer kleinen Tochter zu Hilfe, die der Großvater am Fenster auf den Knien hielt.",
    };
  },
  computed: {
    outputFlesch() {
      const output = this.calculateReadability(this.textInput)[0];
      return output;
    },
    outputRecognizedText() {
      const output = this.formatText(this.textInput);
      return output;
    },
    outputSentenceCount() {
      const output = this.calculateReadability(this.textInput)[1];
      return output;
    },
    outputLexiconCount() {
      const output = this.calculateReadability(this.textInput)[2];
      return output;
    },
    outputSyllableCount() {
      const output = this.calculateReadability(this.textInput)[3];
      return output;
    },
  },
  methods: {
    formatText(textInput) {
      // The \s metacharacter is used to find a whitespace character.
      let output = textInput;
      output = JSON.stringify(output);
      output = output.replace(/\\n/g, ". ");
      output = output.replace(/\s\s/g, " ");
      output = JSON.parse(output);
      return output;
    },
    calculateReadability(textInput) {
      const output = this.formatText(textInput);
      const sentenceCount = output.split(/[.!?:]+\s/).filter(Boolean).length;
      const lexiconCount = readability.lexiconCount(output);
      const syllableCount = readability.syllableCount(output);
      // output = readability.fleschReadingEase(output)
      const fleschIndex = Math.round(
        180 -
          lexiconCount / sentenceCount -
          58.5 * (syllableCount / lexiconCount)
      );
      return [fleschIndex, sentenceCount, lexiconCount, syllableCount];
    },
  },
};
