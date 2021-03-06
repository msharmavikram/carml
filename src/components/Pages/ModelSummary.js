import React from "react";
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Container, Grid, Card } from "semantic-ui-react";
import visableModel from "../../computed/visableModels";
import Summary from "../Model/Summary";

export default connect(
  {
    models: visableModel,
    useragentMedia: state`useragent.media`
  },
  function ModelSummaryPage({ models, useragentMedia }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    let ii = 0;
    const body = models.map(m => {
      ii++;
      return <Summary key={"modelinfo-" + ii} model={m} />;
    });
    return (
      <Container>
        <Grid.Row centered columns={1}>
          <Card.Group itemsPerRow={useragentMedia.mobile ? 1 : 3}>
            {body}
          </Card.Group>
        </Grid.Row>
      </Container>
    );
  }
);
