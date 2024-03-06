import CardButton from '../CardButton/CardButton';
import './AddButton.css';

export default function AddButton() {
    return (
        <CardButton className='add-button'>
            <img src="/public/plus-circle-svgrepo-com.webp" alt="plus"/>
            <span>Add story</span>
        </CardButton>
    );
}
