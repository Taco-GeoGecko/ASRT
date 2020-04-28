import React from "react";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import { updateTitle } from "../redux/actions/actionTypes/actionTypes";

function Switches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    // message: props.componentData,
  });
  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: !state.checkedA,
      // message: props.data,
    });
  };
  const showContent = state.checkedA;
  // let title = props.indicatorTitle;
  // if (showContent == true) {
  //   title = "CHARTS";
  // } else title = "AGRICULTURE INDICATORS";
  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* {props.componentData} */}
      {showContent === true ? props.componentData : props.data}
      {/* {props.dispatch({ type: updateTitle, payload: title })} */}

      {/* {showContent === true ? props.chartData : props.agricTitle} */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    toglebtn: state.map.toglebtn,
    indicatorTitle: state.map.indicatorTitle,
  };
};

export default connect(mapStateToProps)(Switches);
