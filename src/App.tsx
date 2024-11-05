
import Sidebar from './assets/Components/Sidebar'; 
import About from './assets/Components/About';
import Projects from './assets/Components/Projects';
import Footer from './assets/Components/Footer';


function App() {
    return(
        <div>
            <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <About />
            </div>
            <div>
            <Projects />   
            <Footer/> 
            </div>
        </div>
        
    );

}

export default App; 