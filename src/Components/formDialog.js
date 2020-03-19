import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link color="primary" onClick={handleClickOpen}>
        Feedback
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Compose an email writing to us about this portal.
          Thank you!
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            <a href="mailto:info@geogecko.com">Contact</a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// import emailjs from "emailjs-com";
// import React from "react";

// export default class FormDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
//     this.state = {
//       reply_to: "reply_to_value",
//       from_name: "from_name_value",
//       to_name: "to_name_value",
//       message_html: "message_html_value"
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <form className="test-mailing">
//         <div>
//           <textarea
//             id="test-mailing"
//             name={this.state.from_name}
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.message_html}
//             style={{ width: "100%", height: "150px" }}
//           />
//         </div>
//         <input
//           type="button"
//           value="Submit"
//           className="btn btn--submit"
//           onClick={this.handleSubmit}
//         />
//       </form>
//     );
//   }

//   handleChange(event) {
//     this.setState({ message_html: event.target.value });
//   }

//   handleSubmit() {
//     emailjs.send('default_service','geo_gecko_template', {
//       reply_to: "reply_to_value",
//       from_name: "from_name_value",
//       to_name: "to_name_value",
//       message_html: "message_html_value"
//     }, 'user_6BB8XaHJkkHPtE1yXGbWl')
//     .then((response) => {
//        console.log('SUCCESS!', response.status, response.text);
//     }, (err) => {
//        console.log('FAILED...', err);
//     });

//   }
// }
