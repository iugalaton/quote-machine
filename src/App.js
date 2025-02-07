import React from 'react';
//import Fetch, { getapi } from './getapi';
//API to get random quotes (50)
// let api_url = "https://zenquotes.io/api/quotes/";
//let myQuotes = Fetch();

function Container() {
    return (
        <main>
            <div id="quote-box">
                <h2 id="text" class="lato-regular">Text of the quote here</h2>
                <p id="author"> - Author</p>
                <button class="fa-twitter">Twitter</button>
                <button class="fa-thumbler">Thumbler</button>
                <button id="new-quote">New quote</button>
            </div>
        </main>
    )
}
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}

export default App


