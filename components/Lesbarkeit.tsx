import React from "react";
import { render } from "react-dom";

import { Content } from "carbon-components-react/lib/components/UIShell";
import Grid from "carbon-components-react/lib/components/Grid/Grid";
import Row from "carbon-components-react/lib/components/Grid/Row";
import Column from "carbon-components-react/lib/components/Grid/Column";
import { Tile } from "carbon-components-react";
import Link from "carbon-components-react/lib/components/Link/Link";
import { Section } from "carbon-components-react/lib/components/Heading";
import { TextInput } from "carbon-components-react";

export interface IAppProps {}

export default function Lesbarkeit(props: IAppProps) {
  return (
    <Content id="main-content">
      <Grid>
        <Row>
          <Column sm={2} md={4} lg={6}></Column>
          <Column sm={2} md={2} lg={3}>
            <TextInput
              helperText="Optional helper text"
              id="test2"
              invalidText="A valid value is required"
              labelText="Text input label"
              placeholder="Placeholder text"
              light
            />
            <Tile light>
              <p>Text</p>
            </Tile>
          </Column>
          <Column sm={0} md={2} lg={3}>
            <Tile light>
              <p>Text</p>
            </Tile>
          </Column>
        </Row>
      </Grid>
    </Content>
  );
}
