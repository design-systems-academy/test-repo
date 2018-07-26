import React from "react";
import PropTypes from "prop-types";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

const TextBlock = props => {
  const {
    page: {
      htmlAst,
      frontmatter: { title }
    }
  } = props;

  return (
    <div>
      <header>
        <Headline title={title}/>
      </header>
      <Bodytext html={htmlAst}/>
    </div>
  );
};

TextBlock.propTypes = {
  page: PropTypes.object.isRequired
};

export default TextBlock;
