// JSX
const result = 5*43

const App =
    <div className={'container'}>
        <h1 className={"kazkas"}>Hello, world!</h1>
        <h2>Other title 5 * 43 = {result} </h2>
    </div>

ReactDOM.render(App, document.getElementById('root'));

const title = (
    <div className={'container'}>
        <h1>THE BAND</h1>
            <h5><i> We love music</i></h5>
    </div>
)
ReactDOM.render(title, document.getElementById('title'));
