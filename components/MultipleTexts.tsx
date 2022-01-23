import React from "react";
import { render } from "react-dom";

import { Content } from "carbon-components-react/lib/components/UIShell";
import Grid from "carbon-components-react/lib/components/Grid/Grid";
import Row from "carbon-components-react/lib/components/Grid/Row";
import Column from "carbon-components-react/lib/components/Grid/Column";

import Link from "carbon-components-react/lib/components/Link/Link";
import Filereader from "./Lesbarkeit/Filereader";

export interface IAppProps {}

export default function StoryContent(props: IAppProps) {
  return (
    <Content id="main-content">
      <Grid>
        <Row>
          <Column sm={2} md={4} lg={6}></Column>
          <Column sm={2} md={2} lg={3}></Column>
          <Column sm={0} md={2} lg={3}></Column>
        </Row>
      </Grid>
      <div className="bx--grid">
        <div className="bx--row">
          <section className="bx--offset-lg-2 bx--col-lg-14">
            <h2
              style={{
                margin: "48px 0 30px 0",
                fontSize: "20px",
              }}
            >
              Purpose and function
            </h2>
            <p style={{ lineHeight: "20px" }}>
              The shell is perhaps the most crucial piece of any UI built with
              Carbon. It contains the shared navigation framework for the entire
              design system and ties the products in IBM’s portfolio together in
              a cohesive and elegant way. The shell is the home of the topmost
              navigation, where users can quickly and dependably gain their
              bearings and move between pages.
              <br />
              <br />
              The shell was designed with maximum flexibility built in, to serve
              the needs of a broad range of products and users. Adopting the
              shell ensures compliance with IBM design standards, simplifies
              development efforts, and provides great user experiences. All IBM
              products built with Carbon are required to use the shell’s header.
              <br />
              <br />
              To better understand the purpose and function of the UI shell,
              consider the “shell” of MacOS, which contains the Apple menu,
              top-level navigation, and universal, OS-level controls at the top
              of the screen, as well as a universal dock along the bottom or
              side of the screen. The Carbon UI shell is roughly analogous in
              function to these parts of the Mac UI. For example, the app
              switcher portion of the shell can be compared to the dock in
              MacOS.
            </p>
            <Filereader></Filereader>
          </section>
        </div>
      </div>
    </Content>
  );
}
