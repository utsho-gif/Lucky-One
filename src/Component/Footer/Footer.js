import React from 'react';

const Footer = () => {
    return (
        <div className='mt-5'>
            <h2>Questions/Answear</h2>
            <h3><span style={{color : 'tomato'}}>Q:</span> How React Works?</h3>
            <h4><span className='text-success'>Answer:</span> React is library of JavaScript. It's mainly works with Document Object Model using JSX. It has hot relod that's the main funtionality of React JS. It's actually creats a virtual DOM then compare it with Original DOM. If a change occurs in DOM it replace with virtual DOM then finally compare. If change detected then it replace with main DOM. With react we can works easily in UI. Beacuse different component can be create here. And the code shows clean with React. With JSX we can write html in JS easily. So it's not so hard to unmderstand.</h4>
            <h3><span style={{color : 'tomato'}}>Q:</span> How React Works?</h3>
            <h4><span className='text-success'>Answer:</span> React is library of JavaScript. It's mainly works with Document Object Model using JSX. It has hot relod that's the main funtionality of React JS. It's actually creats a virtual DOM then compare it with Original DOM. If a change occurs in DOM it replace with virtual DOM then finally compare. If change detected then it replace with main DOM. With react we can works easily in UI. Beacuse different component can be create here. And the code shows clean with React. With JSX we can write html in JS easily. So it's not so hard to unmderstand.</h4>
        </div>
    );
};

export default Footer;