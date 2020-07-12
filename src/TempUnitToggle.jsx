import React from 'react';

export default class TempUnitToggle extends React.Component {
    render() {
        return (
            <label className='switch'>
                <input type="checkbox" />
                <span className='slider'><div className='tempUnits'><span>C</span><span>F</span></div></span>
            </label>
        );
    }
}