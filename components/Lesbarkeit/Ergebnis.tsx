import React from "react";
import { render } from "react-dom";

import { Content } from "carbon-components-react/lib/components/UIShell";
import Grid from "carbon-components-react/lib/components/Grid/Grid";
import Row from "carbon-components-react/lib/components/Grid/Row";
import Column from "carbon-components-react/lib/components/Grid/Column";
import {
  ExpandableTile,
  TextArea,
  Tile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from "carbon-components-react";
import Link from "carbon-components-react/lib/components/Link/Link";
import { Section } from "carbon-components-react/lib/components/Heading";
import { TextInput } from "carbon-components-react";
import {
  Add24,
  Chemistry24,
  Data_124,
  Data_224,
  Data_232,
  StringInteger24,
  StringText24,
} from "@carbon/icons-react";

export interface IAppProps {
  flesch: number;
  sentences: number;
  words: number;
  syllables: number;
  characters: number;
}

export default function Ergebnis({
  flesch,
  sentences,
  words,
  syllables,
  characters,
}: IAppProps) {
  return (
    <ExpandableTile
      tabIndex={0}
      tileCollapsedIconText="Interact to Expand tile"
      tileExpandedIconText="Interact to Collapse tile"
      tileMaxHeight={0}
      tilePadding={0}
      light
    >
      <TileAboveTheFoldContent>
        <div>
          <h4>Ihr Ergebnis</h4>
          <br />
          <p>Der Flesch-Lesbarkeits-Index berechnet sich wie folgt:</p>
          <br />
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Chemistry24 aria-label="Chemistry" className="my-custom-class" />
              Score: {flesch}
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <StringText24
                aria-label="Sentences"
                className="my-custom-class"
              />
              Sätze: {sentences}
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Data_224 aria-label="Data" className="my-custom-class" />
              Wörter: {words}{" "}
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Data_124 aria-label="Data" className="my-custom-class" />
              Silben: {syllables}
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <StringInteger24 aria-label="Add" className="my-custom-class" />
              Zeichen: {characters}
            </li>
          </ul>
          <br />
        </div>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>
        <div>
          Der Test bestimmt den Flesch-Reading-Ease-Score nach der deutschen
          Formel: Flesch-Wert = 180 - ASL - (58,5 * ASW) Die durchschnittliche
          Satzlänge (ASL - Average Sentence Length) ist die Anzahl der Worte im
          Text geteilt durch die Anzahl der Sätze des Textes. Die
          durchschnittliche Silbenanzahl pro Wort (ASW - Average Number of durch
          die Anzahl der Worte im Text. Syllables per Word) ist die Silbenanzahl
          des gesamten Textes geteilt.
        </div>
      </TileBelowTheFoldContent>
    </ExpandableTile>
  );
}
