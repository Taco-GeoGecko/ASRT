import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import '../App.css';
//import { StylesProvider } from '@material-ui/core/styles';

export default function Checkboxes(props) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    return (

        <div>
            <div style={{textAlign:"center", marginTop: 20 }}>
                {props.IndicatorSlider}

            </div>

            <Checkbox
                // checked={checked}
                onChange={handleChange}
                // value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                // checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />


        </div>



    );
}
