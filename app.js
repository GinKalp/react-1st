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

const body = (
    <p className={'para-body'}>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
)

ReactDOM.render(body, document.getElementById('body'));

const images = (
    <div className={'d-flex'}>
        <div>
            <h4>Name</h4>
            <img src="https://www.fotoaparatas.lt/images/eshop/19183729578.jpeg" alt=""/>
        </div>
        <div>
            <h4>Name</h4>
            <img src="https://www.fotoaparatas.lt/images/eshop/19183729578.jpeg" alt=""/>
        </div>
        <div>
            <h4>Name</h4>
            <img src="https://www.fotoaparatas.lt/images/eshop/19183729578.jpeg" alt=""/>
        </div>
    </div>
)

ReactDOM.render(images, document.getElementById('images'));

const tourTitle = (
    <div className={'container'}>
        <h1>TOUR DATES</h1>
        <h5><i> Remember to book your tickets!</i></h5>
    </div>
)
ReactDOM.render(tourTitle, document.getElementById('tourTitle'));

const tours = (
    <div className={'container d-flex2'}>
        <div className="card">
            <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg" alt="Avatar" />
                <div className="container3">
                    <h4><b>New York</b></h4>
                    <p>Fri 27 Nov 2016</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button>Buy Tickets</button>
                </div>
        </div>
        <div className="card">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg" alt="Avatar" />
                <div className="container3">
                    <h4><b>Paris</b></h4>
                    <p>Sat 28 Nov 2016</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button>Buy Tickets</button>
                </div>
        </div>
        <div className="card">
            <img src="https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx" alt="Avatar" />
                <div className="container3">
                    <h4><b>San Francisco</b></h4>
                    <p>Sun 29 Nov 2016</p>
                    <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                    <button>Buy Tickets</button>
                </div>
        </div>
    </div>
)

ReactDOM.render(tours, document.getElementById('tours'));
