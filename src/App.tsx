import CustomHeader from './assets/Components/CustomHeader';
import MainContent from './assets/Components/Main'; 
import Footer from './assets/Components/Footer'; 
import About from './assets/Components/About';
import VisualText from './assets/Components/VisualText'

function App() {
    return(
        <div>
            <div className="bg-gradient-to-r from-gray-800 to-slate-900">
            <CustomHeader/>
            <MainContent/>
            <VisualText/>
            </div>
            <div>
            <About/>
            <Footer/>
            </div>
        </div>
        
    );

}

export default App; 