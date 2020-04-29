import React from "react";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

function Switches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const handleChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: !state.checkedA,
    });
  };
  const showContent = state.checkedA;

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      {showContent === true ? props.chartData : props.agricTitle}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Switches);
