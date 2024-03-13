import React, { useReducer, useEffect } from 'react';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import classnames from 'classnames';
import { initialState, formReducer } from './JournalForm.state';

export default function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, initialState);
    const { isValid, isFormReadyToSubmit, values } = formState;

    // Если поля не валидны (false) в данном случае одно из, то через 2сек в useState formValidState поместить initialState

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.title || !isValid.post) {
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        // Очистить по выполнению
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
        }
    }, [isFormReadyToSubmit]);
    // Функция передачи введенных в форму данных в props (в этом случае formProps) по нажатию кнопки
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        dispatchForm({ type: 'SUBMIT', payload: formProps });
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <input
                    type='text'
                    name='title'
                    className={classnames(styles['input-title'], {
                        [styles['invalid']]: !isValid.title,
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
                    className={classnames(styles['input'], {
                        [styles['invalid']]: !isValid.date,
                    })}
                />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src='/public/tag.svg' alt='tag-icon' />
                    <span>Tag</span>
                </label>
                <input
                    type='text'
                    name='tag'
                    id='tag'
                    className={styles['input']}
                />
            </div>
            <textarea
                name='post'
                id='post'
                cols='30'
                rows='10'
                className={classnames(styles['input'], {
                    [styles['invalid']]: !isValid.post,
                })}
            ></textarea>
            <Button text='Save' />
        </form>
    );
}
