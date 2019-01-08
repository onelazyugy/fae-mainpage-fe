import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AppointmentSlot from './AppointmentSlot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const props = {
    slots: [{
        "id": 0,
        "time": "9 am",
        "isSlotTaken": false,
        "name": "",
        "phone": ""
    },
    {
        "id": 1,
        "time": "10 am",
        "isSlotTaken": false,
        "name": "",
        "phone": ""
    }]
};

describe('AppointmentSlot', () => {
    it('renders a snapshot', () => {
        const tree = renderer.create(<MuiThemeProvider><AppointmentSlot {...props} /></MuiThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    let appointmentSlot = mount(<MuiThemeProvider><AppointmentSlot {...props} /></MuiThemeProvider>);
    it('has 2 slots', () => {
        // console.log('appointmentSlot:', appointmentSlot.debug());
        // console.log('div 1 under paper', appointmentSlot.find('Paper'));
        // console.log('div 1 under paper text', appointmentSlot.find('div').at(1).text());
        expect(appointmentSlot.find('Paper').length).toEqual(2);
    });

    it('render 9 am slot', () => {
        // console.log('appointmentSlot:', appointmentSlot.debug());
        // console.log('div 1 under paper', appointmentSlot.find('div').at(1).debug());
        // console.log('div 1 under paper text', appointmentSlot.find('div').at(1).text());
        expect(appointmentSlot.find('div').at(1).text()).toEqual('9 am');
    });

    it('render 10 am slot', () => {
        // console.log('appointmentSlot:', appointmentSlot.debug());
        // console.log('div 1 under paper', appointmentSlot.find('div').at(1).debug());
        // console.log('div 1 under paper text', appointmentSlot.find('div').at(1).text());
        expect(appointmentSlot.find('div').at(2).text()).toEqual('10 am');
    });
});