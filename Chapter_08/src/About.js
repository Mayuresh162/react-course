// const About = () => {
//     return (
//       <div>
//         <h1>This is the about page of Namaste React Course.</h1>
//       </div>
//     );
// }

import React from "react";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('parent - constructor');
  }

  componentDidMount() {
    console.log('parent - componentDidmount'); 
  }

  render() {
    console.log('parent - render');
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about page of Namaste React Course.</p>
        <ProfileClass profession={'Web Developer'} relation={'Child 1'}/>
        <ProfileClass profession={'Software Engineer'} relation={'Child 2'}/>
      </div>
    );
  }
}

export default About;

/**
 * 
 * parent - constructor
 * About.js:23 parent - render
 * ProfileClass.js:11 constructor - Child 1
 * ProfileClass.js:19 render - Child 1
 * ProfileClass.js:11 constructor - Child 2
 * ProfileClass.js:19 render - Child 2
 * ProfileClass.js:15 componentDidmount - Child 1
 * ProfileClass.js:15 componentDidmount - Child 2
 * About.js:19 parent - componentDidmount
 * 
 */