import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import { useState } from 'react';
import JournalForm from './components/JournalForm/JournalForm';

const initialData = [
    // {
    //     title: 'Preparing',
    //     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, illum, necessitatibus porro nesciunt laboriosam magni nam eius possimus reiciendis, minima cupiditate sunt nobis obcaecati ut sequi neque cum suscipit odio.',
    //     date: new Date(),
    // },
    // {
    //     title: 'Implementation',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis eveniet magni incidunt iure mollitia voluptas nulla illum soluta natus!',
    //     date: new Date(),
    // },
];

export default function App() {
    const [dataItems, setDataItems] = useState(initialData);
    //Функция добавления объекта в массив переданный в item
    const handleDataItems = (item) => {
        setDataItems((prevState) => [
            ...prevState,
            {
                text: item.text,
                title: item.title,
                date: new Date(item.date),
                id: prevState.length > 0 ? Math.max(...prevState.map((i) => i.id)) + 1 : 1,
            },
        ]);
        console.log(dataItems);
    };
    //Функция сортировки
    const sortItems = (a, b) => {
        return a.date < b.date ? 1 : -1;
    };
    let listItems = <p>There is no any story we have now, it's time to write something</p>
    
    if (dataItems.length > 0) {
        listItems = dataItems.sort(sortItems).map((dataItem) => (
            <CardButton key={dataItem.id}>
                <JournalItem
                    title={dataItem.title}
                    text={dataItem.text}
                    date={dataItem.date}
                />
            </CardButton>
        ));
    }
        return (
            <div className='app'>
                <LeftPanel>
                    <Header />
                    <AddButton />
                    <JournalList>
                        {listItems}
                    </JournalList>
                </LeftPanel>
                <Body>
                    <JournalForm onSubmit={handleDataItems} />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet, dolor dicta ipsa eligendi aliquid numquam et
                        illo, modi illum atque veniam molestias minus suscipit
                        deserunt recusandae aut aspernatur natus quidem
                        veritatis sunt laboriosam. Suscipit ad animi provident
                        enim dolor voluptate repellat, at sed fugit, reiciendis,
                        aliquid dolorem impedit cumque iste incidunt officia? Ex
                        quas commodi ratione, dicta reprehenderit cum fuga
                        minima eligendi odit inventore suscipit, iure optio
                        saepe consectetur maxime ab incidunt rem earum quis.
                        Ipsam maxime nostrum voluptate distinctio quaerat natus
                        magni vel, doloribus optio consequuntur deserunt dolorum
                        sed cumque quas aperiam tempore culpa quasi in maiores.
                        Nisi, exercitationem.
                    </p>
                </Body>
            </div>
        );
}
