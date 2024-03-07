import './Button.css';
import { useState } from 'react';

export default function Button({ text, onClick }) {
    //const [text, setText] = useState('Save');

    // const clicked = () => {
    //     setText((prevState) => prevState + '!');
    // };
    return <button className='button accent' onClick={onClick}>{text}</button>;
}
