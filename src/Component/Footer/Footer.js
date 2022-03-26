import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
            <h2>Questions/Answear</h2>
            <h3><span style={{color : 'tomato'}}>Q:</span> How React Works?</h3>
            <h4><span className='text-success'>Answer:</span> React is library of JavaScript. It's mainly works with Document Object Model using JSX. It has hot relod that's the main funtionality of React JS. It's actually creats a virtual DOM then compare it with Original DOM. If a change occurs in DOM it replace with virtual DOM then finally compare. If change detected then it replace with main DOM. With react we can works easily in UI. Beacuse different component can be create here. And the code shows clean with React. With JSX we can write html in JS easily. So it's not so hard to unmderstand.</h4>
            <h3><span style={{color : 'tomato'}}>Q:</span> Props V State?</h3>
            <h4><span className='text-success'>Answer</span> <br /> <span className='text-info'>Props:</span> Props is a component. Which is a read-only property. Props store the value as properties like a attribute in HTML and pass the value to the child component. It's almost like a fuction argument and can pass component as argument in fucntion <br /> <span className='text-info'>State:</span> State is a updatble structure which can return a fuction and a variable. The fuction is used for updating the variable. State is used for updating the component over time. State actually a core component of react. It's detarmine how a component will render.</h4>
        </div>
    );
};

export default Footer;