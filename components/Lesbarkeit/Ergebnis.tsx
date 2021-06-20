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
import { Add24 } from "@carbon/icons-react";

export interface IAppProps {}

export default function Ergebnis(props: IAppProps) {
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
            <li style={{ display: "inline-flex", alignItems: "center" }}>
              <Add24 aria-label="Add" className="my-custom-class" />
              Sätze: 4
            </li>
            <li>Wörter: 34 </li>
            <li>Silben:</li>
            <li>Zeichen: </li>
          </ul>
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
