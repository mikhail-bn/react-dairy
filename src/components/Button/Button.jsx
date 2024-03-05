import './Button.css';
import { useState } from 'react';

export default function Button() {
    const [text, setText] = useState('Save');

    const clicked = () => {
        setText((prevState) => prevState + '!');
    };
    return (
        <button onClick={clicked} className='button accent'>
            {text}
        </button>
    );
}
