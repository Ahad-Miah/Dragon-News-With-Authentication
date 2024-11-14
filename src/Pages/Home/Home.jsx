
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <header className='w-5/6 mx-auto'>
              <Header></Header>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main></main>
            <footer></footer>
        </div>
    );
};

export default Home;