import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        name: 'Mayuresh Bhagat',
        location: 'Nagpur'
    }
    console.log('constructor - ' + this.props.relation);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("");
    }, 1000);
    console.log('componentDidmount - ' + this.props.relation); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('componentWillUnmount - ' + this.props.relation); 
  }

  render() {
    console.log('render - ' + this.props.relation);
    return (
      <div className="flex flex-col">
        <h1 className="text-2xl">Profile</h1>
        <h2 className="text-xl">{this.state.name}</h2>
        <h2 className="text-xl">{this.props.profession}</h2>
        <h2 className="text-xl">{this.state.location}</h2>
        <input onChange={(e) => this.setState({
          ...this.state, name: e.target.value
        })}/>
        <input onChange={(e) => this.setState({
          ...this.state, location: e.target.value
        })}/>
      </div>
    );
  }
}

export default ProfileClass;