import React from "react";
import PropTypes from "prop-types";
import rehypeReact from "rehype-react";

/* Register components for using in markdown */

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    /*example:
     * 'comp-pattern-journey': PatternJourney,
    'comp-changelog': Changelog,*/
  },
}).Compiler;

const Bodytext = props => {
  const { html } = props;

  return (
    <div>
      {renderAst(html)}
    </div>
  );
};

Bodytext.propTypes = {
  html: PropTypes.object.isRequired,
};

export default Bodytext;
