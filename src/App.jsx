import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';

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
        <div className='app'>
            <LeftPanel>
                <Header />
                <AddButton />
                <JournalList>
                    <CardButton>
                        <JournalItem
                            title={data[0].title}
                            text={data[0].text}
                            date={data[0].date}
                        />
                    </CardButton>
                    <CardButton>
                        <JournalItem
                            title={data[1].title}
                            text={data[1].text}
                            date={data[1].date}
                        />
                    </CardButton>
                </JournalList>
            </LeftPanel>
            <Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
                dolor dicta ipsa eligendi aliquid numquam et illo, modi illum
                atque veniam molestias minus suscipit deserunt recusandae aut
                aspernatur natus quidem veritatis sunt laboriosam. Suscipit ad
                animi provident enim dolor voluptate repellat, at sed fugit,
                reiciendis, aliquid dolorem impedit cumque iste incidunt
                officia? Ex quas commodi ratione, dicta reprehenderit cum fuga
                minima eligendi odit inventore suscipit, iure optio saepe
                consectetur maxime ab incidunt rem earum quis. Ipsam maxime
                nostrum voluptate distinctio quaerat natus magni vel, doloribus
                optio consequuntur deserunt dolorum sed cumque quas aperiam
                tempore culpa quasi in maiores. Nisi, exercitationem.
            </Body>
        </div>
    );
}
