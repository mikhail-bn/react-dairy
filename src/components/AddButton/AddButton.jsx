import CardButton from '../CardButton/CardButton';
import './AddButton.css';

export default function AddButton() {
    return (
        <CardButton className='add-button'>
            <svg
                width='20'
                height='21'
                viewBox='0 0 20 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M10 4.96265V16.6293'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
                <path
                    d='M4.16669 10.796H15.8334'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </svg>
            <span>Add story</span>
        </CardButton>
    );
}
