import React from 'react';
import ReactDOM from 'react-dom/client';

// const div = React.createElement('div', {
//     className: 'title'
// }, [React.createElement('h1', {}, 'Lets build html from javascript'), React.createElement('h2', {}, 'Its so powerful and cool')])

// const result = (
//     <div className='title'>
//         <h1>Lets build html from javascript</h1>
//         <h2>Its so powerful and cool</h2>
//     </div>
// );

// let text = 'Learning React';

// let Hello = () => <h4>world</h4>

// const Header = ({input}) => {
//     return (
//       <div className="title">
//         <h1>Lets build html from javascript!!!</h1>
//         <h2>Its so powerful and cool</h2>
//         <h3>{input}</h3>
//         <Hello />
//         {Hello()}
//         <Hello></Hello>
//       </div>
//     );
// }

function Header() {
    return (
      <div className='header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgTqxCNkNF9nxmzhshAm_fKT7dt8-__PcYg&usqp=CAU" alt="" className='logo'/>
        <input placeholder="Search" className='search'/>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='user'/>
      </div>
    );
}

const App = () => {
    return <Header />;
}
 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
