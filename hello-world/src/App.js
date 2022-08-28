import './App.css';
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import EngineerList from "./components/EngineerList";
import Stylesheet from "./components/Stylesheet";
import InlineStyle from "./components/InlineStyle";
import './appStyles.css';
import styles from './appStyle.module.css'

function App() {
    return (
        <div className="App">
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            <InlineStyle />
            {/*<Stylesheet primary={true} />*/}
            {/*<EngineerList />*/}
            {/*<UserGreeting />*/}
            {/*<ParentComponent />*/}
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
