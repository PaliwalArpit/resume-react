import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Hobbies = ({ hobby }) => (
    <section style={style.main}>
    <SidebarHeading align="right">Hobbies</SidebarHeading>
    {/* <div style={{
      ...style.text,
    }}>{hobby}</div> */}
    <div style={style.text}>{hobby}</div>
  </section>
);

const style = {
  main: {
    margin: '1rem 0 0 0',
  },
  text: {
    textAlign: 'right',
  },
};

Hobbies.propTypes = {
  hobby: PropTypes.string.isRequired,
};

export default Hobbies;
