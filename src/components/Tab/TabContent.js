import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { TabContext } from "../../store/tab-context";

function TabContent(props) {
  const { id, children } = props;

  const tabCtx = useContext(TabContext);

  if (id === tabCtx.tab) {
    return <Fragment>{children}</Fragment>;
  }
}

TabContent.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TabContent;
