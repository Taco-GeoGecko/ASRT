import React from 'react';
import '../App.css';
import Instagram from '../Images/Instagram.png'
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FaceBook from '../Images/FaceBook.png';
import Gmail from '../Images/Gmail.svg';
//import FeedbackIcon from '@material-ui/icons/Feedback';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
// import { makeStyles } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  horizontalSpacing: {
    marginLeft: 5,
  },
  navigation: {
    height: 20,
    width: 25,
    marginLeft: '5%',
    },
}));

function MatIcons() {
  const classes = useStyles();
  return (
    <div className='Icons'>
      <a href='https://www.geogecko.com/'><span className={classes.horizontalSpacing}>FAQS</span></a>

      <a href='https://www.geogecko.com/'><span className={classes.horizontalSpacing}>Feedback</span></a>

      <a href='https://twitter.com/geogecko'><TwitterIcon className={classes.horizontalSpacing} style={{ color: blue[500] }} /></a>

      <a href='https://www.instagram.com/geogecko1/'><img src={Instagram} target="_blank" alt="geo gecko logo" className={classes.navigation} /></a>

      <a href='https://www.facebook.com/geogecko/'><img src={FaceBook} target="_blank" alt="geo gecko logo" className={classes.navigation} /></a>

      <a href='https://www.facebook.com/geogecko/'><img src={Gmail} target="_blank" alt="geo gecko logo" className={classes.navigation} /></a>
    

    </div>
  )



};
export default MatIcons;