import React, { Component } from "react";
import { render } from "react-dom";

import { Content } from "carbon-components-react/lib/components/UIShell";
import Grid from "carbon-components-react/lib/components/Grid/Grid";
import Row from "carbon-components-react/lib/components/Grid/Row";
import Column from "carbon-components-react/lib/components/Grid/Column";
import {
  Button,
  Form,
  Select,
  SelectItem,
  TextArea,
  Tile,
} from "carbon-components-react";
import Link from "carbon-components-react/lib/components/Link/Link";
import { Section } from "carbon-components-react/lib/components/Heading";
import { TextInput } from "carbon-components-react";
import Ergebnis from "./Ergebnis";
import readability from "text-readability";

interface Props {}
interface State {
  text: String;
}

export default class Lesbarkeit extends React.Component<Props, State> {
  state = {
    text: "Die Konsulin Buddenbrook, neben ihrer Schwiegermutter auf dem geradlinigen, weiß lackierten und mit einem goldenen Löwenkopf verzierten Sofa, dessen Polster hellgelb überzogen waren, warf einen Blick auf ihren Gatten, der in einem Armsessel bei ihr saß, und kam ihrer kleinen Tochter zu Hilfe, die der Großvater am Fenster auf den Knien hielt.",
  };

  calculateReadability = (textInput: string) => {
    const output = this.formatText(textInput);
    const sentenceCount = output.split(/[.!?:]+\s/).filter(Boolean).length;
    const lexiconCount = readability.lexiconCount(output);
    const syllableCount = readability.syllableCount(output);
    // output = readability.fleschReadingEase(output)
    const fleschIndex = Math.round(
      180 - lexiconCount / sentenceCount - 58.5 * (syllableCount / lexiconCount)
    );
    const characterCount = output.length;
    return [
      fleschIndex,
      sentenceCount,
      lexiconCount,
      syllableCount,
      characterCount,
    ];
  };

  formatText = (textInput: string) => {
    // The \s metacharacter is used to find a whitespace character.
    let output = textInput;
    output = JSON.stringify(output);
    output = output.replace(/\\n/g, ". ");
    output = output.replace(/\s\s/g, " ");
    output = JSON.parse(output);
    return output;
  };

  outputFlesch = (textInput: string) => {
    const output = this.calculateReadability(textInput)[0];
    return output;
  };

  // hier wäre ein React hook möglich
  handleChange = (event: { target: { value: any } }) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    console.log(this.state.text);
    event.preventDefault();
  };

  render() {
    return (
      <Content id="main-content">
        <Grid>
          <Row>
            <Column sm={3} md={6} lg={{ span: 6, offset: 3 }}>
              <h1>Lesbarkeitsindex</h1>
              <h2
                style={{
                  margin: "30px 0 30px 0",
                  fontSize: "20px",
                }}
              >
                Überprüfen Sie Ihren Text
              </h2>
              <TextArea
                cols={50}
                helperText="Geben Sie hier Ihren Text ein"
                id="test2"
                labelText="Ihr Text"
                invalidText="Dieser Text ist nicht erlaubt."
                placeholder="Die Konsulin Buddenbrook, neben ihrer Schwiegermutter auf dem geradlinigen, weiß lackierten und mit einem goldenen Löwenkopf verzierten Sofa, dessen Polster hellgelb überzogen waren, warf einen Blick auf ihren Gatten, der in einem Armsessel bei ihr saß, und kam ihrer kleinen Tochter zu Hilfe, die der Großvater am Fenster auf den Knien hielt."
                rows={4}
                light
                onChange={this.handleChange}
              />

              <Button
                style={{ marginBottom: "2rem", marginTop: "2rem" }}
                onClick={this.handleSubmit}
              >
                Jetzt analysieren
              </Button>

              <Form>
                <div style={{ marginBottom: "2rem" }}>
                  <TextArea
                    cols={50}
                    helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                    id="test5"
                    invalidText="Invalid error message."
                    labelText="Text area label"
                    placeholder="Placeholder text"
                    rows={4}
                  />
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <Select
                    defaultValue="placeholder-item"
                    id="select-1"
                    invalidText="This is an invalid error message."
                    labelText="Select"
                  >
                    <SelectItem text="Option 1" value="option-1" />
                    <SelectItem text="Option 2" value="option-2" />
                    <SelectItem text="Option 3" value="option-3" />
                  </Select>
                </div>
                <Button
                  kind="primary"
                  tabIndex={0}
                  type="submit"
                  style={{ marginBottom: "2rem" }}
                >
                  Submit
                </Button>
              </Form>

              <Button style={{ marginTop: "2rem" }}>Text analysieren</Button>
              <h2
                style={{
                  margin: "30px 0 30px 0",
                  fontSize: "20px",
                }}
              >
                Überprüfen Sie Ihren Text
              </h2>
              <p>
                Textabschnitte ohne Punkt, aber mit einem Zeilenumbruch werden
                als Sätze ausgewertet. Beispielsweise zählt jeder Stichpunkt bei
                einer Stichpunktliste als ein Satz.
              </p>
              <h2
                style={{
                  margin: "30px 0 30px 0",
                  fontSize: "20px",
                }}
              >
                Überprüfen Sie Ihren Text
              </h2>
              <p>
                Die meisten Leute sagen, wenn Sie Online-Inhalte schreiben,
                sollten Sie Ihre Sätze auf 25 Wörter oder weniger beschränken.
                Sogar die britische Regierung hat Richtlinien dazu, aber Studien
                zeigen, dass sogar 25 Wörter wahrscheinlich viel zu lang sind.
                Eine Studie ergab, dass 11 Wörter in einem Satz leicht zu lesen
                sind, während 21 Wörter oder mehr ziemlich schwer anders
                auszudrücken sind, wenn die durchschnittliche Satzlänge nur 14
                Wörter beträgt. Leser verstehen 90 Prozent oder mehr als 90
                Prozent von dem, was sie lesen. Und das sinkt exponentiell. Je
                mehr Wörter Sie verwenden, desto idealer ist es, Sätze mit
                durchschnittlich 14 Wörtern und absolut nicht mehr als 25
                Wörtern zu verwenden. Es gibt zahlreiche wissenschaftliche
                Studien, die belegen, dass kürzer besser ist.
              </p>
              <Tile className="space" light></Tile>
            </Column>
            <Column sm={1} md={2} lg={3}>
              <Ergebnis
                flesch={this.calculateReadability(this.state.text)[0]}
                sentences={this.calculateReadability(this.state.text)[1]}
                words={this.calculateReadability(this.state.text)[2]}
                syllables={this.calculateReadability(this.state.text)[3]}
                characters={this.calculateReadability(this.state.text)[4]}
              ></Ergebnis>
            </Column>
          </Row>
        </Grid>
      </Content>
    );
  }
}
