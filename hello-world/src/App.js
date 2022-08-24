import './App.css';
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
    return (
        <div className="App">
            <ParentComponent />
            {/*<EventBind />*/}
            {/*<FunctionClick />*/}
            {/*<ClassClick />*/}
            {/*<Counter />*/}
            {/*<Greet name="Hubert" title="Front-End Engineer" />*/}
            {/*<Welcome name="Hubert" title="Front-End Engineer" />*/}
        </div>
    );
}

export default App;
