import PropTypes from "prop-types";
import React from "react";

import Artefacts from "../components/Artefacts";

import config from "../../content/meta/config";

class IndexPage extends React.Component {

  render() {

    return (
      <div>
        <Artefacts items={config.artefacts} />

      </div>
    );
  }
}

export default IndexPage;
