
import Sidebar from './assets/Components/Sidebar'; 
import About from './assets/Components/About';
import Projects from './assets/Components/Projects';
import Footer from './assets/Components/Footer';
import Layout from './assets/Components/Layoutz/Layout'; 
import Calendly from './assets/Components/Calendly';; 

function App() {
    return(
        <Layout>
            <div className="flex flex-col">
            <Sidebar />
            <Calendly />
            <About />
            <Projects />   
            <Footer/> 
            </div>
        </Layout>
        
    );

}

export default App; 