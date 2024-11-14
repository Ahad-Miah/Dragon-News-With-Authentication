
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import LeftSide from '../../Components/LeftSide/LeftSide';
import Middle from '../../Components/Middle/Middle';
import Navbar from '../../Components/Navbar/Navbar';
import RightSide from '../../Components/RightSide/RightSide';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <header className='w-5/6 mx-auto'>
              <Header></Header>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-6 pt-4'>
            <aside className='col-span-3'>
               <LeftSide></LeftSide>
            </aside>
            <section className='col-span-6 '>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightSide></RightSide>
            </aside>

            </main>
            <footer></footer>
        </div>
    );
};

export default Home;