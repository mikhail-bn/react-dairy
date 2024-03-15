import React, { useReducer, useEffect } from 'react';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import classnames from 'classnames';
import { initialState, formReducer } from './JournalForm.state';
import { flushSync } from 'react-dom';

export default function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, initialState);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
    };

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
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, values, onSubmit]);

    const onChange = (e) => {
        dispatchForm({
            type: 'SET_VALUE',
            payload: { [e.target.name]: e.target.value },
        });
    };

    // Функция передачи введенных в форму данных в props (в этом случае formProps) по нажатию кнопки
    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <input
                    type='text'
                    ref={titleRef}
                    onChange={onChange}
                    value={values.title}
                    name='title'
                    className={classnames(styles['input-title'], {
                        [styles['invalid']]: !isValid.title,
                    })}
                />
            </div>
            <div className={styles['form-row']}>
                <label
                    htmlFor='date'
                    onChange={onChange}
                    value={values.data}
                    className={styles['form-label']}
                >
                    <img src='/public/date.svg' alt='calendar-icon' />
                    <span>Date</span>
                </label>
                <input
                    id='date'
                    ref={dateRef}
                    onChange={onChange}
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
                    onChange={onChange}
                    value={values.tag}
                    name='tag'
                    id='tag'
                    className={styles['input']}
                />
            </div>
            <textarea
                name='post'
                ref={postRef}
                onChange={onChange}
                value={values.post}
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
