// import React from "react";
// import CheckIcon from "@material-ui/icons/Check";
// import {ToggleButton} from "@material-ui/lab";
// import SideBar from "./SideBar";
// import { makeStyles } from "@material-ui/core/styles";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import "../App.css";

// function ToggleButon() {
//   const [selected, setSelected] = React.useState(false);

//   return (
//     <ToggleButton
//       value="check"
//       selected={selected}
//       onChange={() => {
//         setSelected(!selected);
//       }}
//     >
//       <CheckIcon />
//     </ToggleButton>
//   );
// }
// export default ToggleButon;
import React from "react";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";

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
  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        // data= {data}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* {props.componentData} */}
      {showContent === true ? props.componentData : props.data}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    toglebtn: state.map.toglebtn,
  };
};

export default connect(mapStateToProps)(Switches);
