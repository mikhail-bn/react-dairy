import './CardButton.css';

export default function CardButton({ children, className }) {
    const classItem = 'card-button' + (className ? ' ' + className : '');
    return <button className={classItem}>{children}</button>;
}
