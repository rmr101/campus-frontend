import React from "react";
import { connect } from "react-redux";
import AddHeader from "./../../../../../../store/campus/actions/AddHeader";
import {
  IndexItem,
  Row,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";


const sortInRenderOrder = (unordered) => {
  const ordered = {};
  Object.keys(unordered)
    .sort()
    .forEach((key) => (ordered[key] = unordered[key]));
  return ordered;
};
const renderRest = (rest) => {
  let result = [];
  for (let props in rest) {
    result.push(renderColumn(rest[props]));
  }
  return result;
};

const renderColumn = (detail) => {
  return (
    <TableItem key={detail + Math.random()} >
      {detail}
    </TableItem>
  );
};

const RenderContentLink = ({ onClick, RenderObj, toPageID }) => {
  let { disable, name, id, secondID,index, ...rest } = RenderObj;
  rest = sortInRenderOrder(rest);
  return (
    <Row
      key={"name_" + Math.random()}
      disable={disable}
      onClick={(e) => {
        e.preventDefault();
        return !disable ? onClick(name, toPageID, id, secondID) : null;
      }}
    >
      <IndexItem>{index + 1}</IndexItem>
      <TableItem>{name}</TableItem>
      {renderRest(rest)}
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (headingTitle, contentType, id, secondID) => {
    dispatch(AddHeader(headingTitle, contentType, id, secondID));
  },
});

const RenderContentLinkContainer = connect(
  null,
  mapDispatchToProps
)(RenderContentLink);

export default RenderContentLinkContainer;
