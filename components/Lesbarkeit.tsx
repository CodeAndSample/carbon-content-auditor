import React from "react";
import { render } from "react-dom";

import { Content } from "carbon-components-react/lib/components/UIShell";
import Grid from "carbon-components-react/lib/components/Grid/Grid";
import Row from "carbon-components-react/lib/components/Grid/Row";
import Column from "carbon-components-react/lib/components/Grid/Column";
import { Tile } from "carbon-components-react";
import Link from "carbon-components-react/lib/components/Link/Link";
import { Section } from "carbon-components-react/lib/components/Heading";

export interface IAppProps {}

export default function Lesbarkeit(props: IAppProps) {
  return (
    <Content id="main-content">
      <Grid>
        <Row>
          <Section className="bx--offset-lg-3 bx--col-lg-13">
            <Column sm={2} md={4} lg={6}>
              <p>Text</p>
            </Column>
            <Column sm={2} md={2} lg={3}></Column>
            <Column sm={0} md={2} lg={3}></Column>
          </Section>
        </Row>
      </Grid>
    </Content>
  );
}
