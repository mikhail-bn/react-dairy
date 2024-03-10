import React, { useState } from 'react';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import classnames from 'classnames';

export default function JournalForm({ onSubmit }) {
    const [formValidState, setFormValidState] = useState({
        title: true,
        post: true,
        date: true,
    });
    // Функция передачи введенных в форму данных в props (в этом случае formProps) по нажатию кнопки
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        // Проверка валидности данных
        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setFormValidState((state) => ({ ...state, title: false }));
            isFormValid = false;
        } else setFormValidState((state) => ({ ...state, title: true }));

        if (!formProps.post?.trim().length) {
            setFormValidState((state) => ({ ...state, post: false }));
            isFormValid = false;
        } else setFormValidState((state) => ({ ...state, post: true }));

        if (!formProps.date) {
            setFormValidState((state) => ({ ...state, date: false }));
            isFormValid = false;
        } else setFormValidState((state) => ({ ...state, date: true }));
        // Если данные не валидны не отправлять
        if (!isFormValid) {
            return;
        }
        onSubmit(formProps);
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <input
                    type='text'
                    name='title'
                    className={classnames(styles['input-title'], {
                        [styles['ivalid']]: !formValidState.title,
                    })}
                />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src='/public/date.svg' alt='calendar-icon' />
                    <span>Date</span>
                </label>
                <input
                    id='date'
                    type='date'
                    name='date'
                    className={`${styles['input']}  ${
                        formValidState.date ? '' : 'invalid'
                    }`}
                />
            </div>
            <div>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='/public/tag.svg' alt='tag-icon' />
                    <span>Tag</span>
                </label>
                <input type='text' name='tag' id='tag' className={styles['input']}/>
            </div>
            <textarea
                name='post'
                id=''
                cols='30'
                rows='10'
                className={`${styles['input']}  ${
                    formValidState.post ? '' : 'invalid'
                }`}
            ></textarea>
            <Button text='Save' />
        </form>
    );
}
