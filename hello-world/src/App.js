import './App.css';
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CommonCounter from "./components/CommonCounter";


function App() {
    return (
        <div className="App">
            {/*<ClickCounterTwo />*/}
            {/*<HoverCounterTwo />*/}
            {/*<User render={(isLoggedIn) => isLoggedIn ? 'Hubert Hsieh' : 'Guest'} />*/}
            <CommonCounter>
                {(count, incrementCount) => (
                    <ClickCounterTwo count={count} incrementCount={incrementCount}/>
                )}
            </CommonCounter>

            <CommonCounter>
                {(count, incrementCount) => (
                    <HoverCounterTwo count={count} incrementCount={incrementCount}/>
                )}
            </CommonCounter>
        </div>
    );
}

export default App;
