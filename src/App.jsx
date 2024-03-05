import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

export default function App() {
    const data = [
        {
            title: 'Preparing',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum, necessitatibus porro nesciunt laboriosam magni nam eius possimus reiciendis, minima cupiditate sunt nobis obcaecati ut sequi neque cum suscipit odio.',
            date: new Date(),
        },
        {
            title: 'Implementation',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis eveniet magni incidunt iure mollitia voluptas nulla illum soluta natus!',
            date: new Date(),
        },
    ];
    return (
        <>
            <h1>Project</h1>
            <p>Text here</p>
            <Button />
            <CardButton>
                
                <JournalItem
                    title={data[0].title}
                    text={data[0].text}
                    date={data[0].date}
                />
            </CardButton>

            <JournalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
            />
        </>
    );
}
