import React from 'react';
import '../App.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
//import FeedbackIcon from '@material-ui/icons/Feedback';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    horizontalSpacing: {
      marginLeft: '2%',
    }
  }));
  
function MatIcons() {
    const classes = useStyles();
    return (
        <div className='Icons'>
            <a><span className={classes.horizontalSpacing}>FAQS</span></a>

            <a><span className={classes.horizontalSpacing}>Feedback</span></a>

            <TwitterIcon className={classes.horizontalSpacing}style={{ color: blue[500] }} />

            <InstagramIcon className={classes.horizontalSpacing}/>
            
            <FacebookIcon className={classes.horizontalSpacing} className="fa fa " style={{ color: [500] }}/>
            <EmailIcon className={classes.horizontalSpacing}/>


        </div>
    )



};
export default MatIcons;