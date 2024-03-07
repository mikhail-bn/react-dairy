import './JournalForm.css';
import React, { useState } from 'react';
import Button from '../Button/Button';

export default function JournalForm() {
    const [inputData, setInputData] = useState('');
    const inputChange = (e) => {
        setInputData(e.target.value);
        console.log('e.target.value: ', e.target.value);
    };
    const addJournalItem = (e) => {
        e.preventDefault();
        console.log(e);
    };
    const formData = new Data(e.target);
    return (
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type='text' name='title' />
            <input type='date' name='date' />
            <input
                value={inputData}
                type='text'
                name='tag'
                onChange={inputChange}
            />
            <textarea name='post' id='' cols='30' rows='10'></textarea>
            <Button text='Save' />
        </form>
    );
}
