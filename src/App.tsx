
import Sidebar from './assets/Components/Sidebar'; 
import About from './assets/Components/About';
import Projects from './assets/Components/Projects';

function App() {
    return(
        <div>
            <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <About />
            </div>
            <div>
            <Projects />    
            </div>
        </div>
        
    );

}

export default App; 