import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Greet name="Bruce" title="Batman">
                <p>This is first props</p>
            </Greet>

            <Greet name="Clark" title="Superman">
                <button>Action</button>
            </Greet>

            <Greet name="Diana" title="Wonder Woman"/>

            <Welcome name="Hubert Hsieh" title="Front-End Engineer" />
        </div>
    );
}

export default App;
