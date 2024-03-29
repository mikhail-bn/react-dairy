import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import { useEffect, useState } from 'react';
import JournalForm from './components/JournalForm/JournalForm';



export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem('data'));
        if (parseData) {
            setItems(
                parseData.map((item) => ({
                    ...item,
                    date: new Date(item.date),
                }))
            );
        }
    }, []);

    useEffect(() => {
        if (!items.length) {
            localStorage.setItem('data', JSON.stringify(items));
        }
    }, [items]);

    //Функция добавления объекта в массив переданный в item
    const handleDataItems = (item) => {
        setItems((prevState) => [
            ...prevState,
            {
                post: item.post,
                title: item.title,
                date: new Date(item.date),
                id:
                    prevState.length > 0
                        ? Math.max(...prevState.map((i) => i.id)) + 1
                        : 1,
            },
        ]);
        console.log(items);
    };
    //Функция сортировки
    const sortItems = (a, b) => {
        return a.date < b.date ? 1 : -1;
    };
    let listItems = (
        <p>There is no any story we have now, it's time to write something</p>
    );

    if (items.length > 0) {
        listItems = items.sort(sortItems).map((item) => (
            <CardButton key={item.id}>
                <JournalItem
                    title={item.title}
                    text={item.text}
                    date={item.date}
                />
            </CardButton>
        ));
    }
    return (
        <div className='app'>
            <LeftPanel>
                <Header />
                <AddButton />
                <JournalList>{listItems}</JournalList>
            </LeftPanel>
            <Body>
                <JournalForm onSubmit={handleDataItems} />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet, dolor dicta ipsa eligendi aliquid numquam et illo,
                    modi illum atque veniam molestias minus suscipit deserunt
                    recusandae aut aspernatur natus quidem veritatis sunt
                    laboriosam. Suscipit ad animi provident enim dolor voluptate
                    repellat, at sed fugit, reiciendis, aliquid dolorem impedit
                    cumque iste incidunt officia? Ex quas commodi ratione, dicta
                    reprehenderit cum fuga minima eligendi odit inventore
                    suscipit, iure optio saepe consectetur maxime ab incidunt
                    rem earum quis. Ipsam maxime nostrum voluptate distinctio
                    quaerat natus magni vel, doloribus optio consequuntur
                    deserunt dolorum sed cumque quas aperiam tempore culpa quasi
                    in maiores. Nisi, exercitationem.
                </p>
            </Body>
        </div>
    );
}
