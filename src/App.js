import './App.css';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Calculator } from "./components/Calculator/Calculator";

function App() {

    return (
        <div className="App">
            <Header />
            <main>
                <Calculator />
            </main>
            <Footer />
        </div>
    );
}

export default App;
