import './App.css';
import Navbar from './components/navbar';
import AllMovies from './pages/allMovies';
import StatsPage from './pages/statsPage';

function App() {
    return (
        <div>
            <Navbar/>
            <StatsPage/>
        </div>
    );
}

export default App;