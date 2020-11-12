import React, { createRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const users = [
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
];

class App3 extends React.Component {
    state = {
        text: '',
        search: '',
    }
    handleText(event) {
        this.setState({ text: event.target.value });
    }
    handleSearch() {
        this.setState({ search: this.state.text });
    }
    filteredUsers = () => users.filter((user) => {
        console.log('filteredUsers function is running ...');
        return user.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    render() {
        const filteredUsers5 = users.filter((user) => {
            console.log('filteredUsers function is running ...');
            return user.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleText.bind(this)} />
                <button type="button" onClick={this.handleSearch.bind(this)}>
                    Search
                </button>

                <List list={filteredUsers5} />
            </div>
        )
    }
}

const App = () => {
    const [text, setText] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    console.log('*** App ***');         // each time this is shown

    const filteredUsers = users.filter((user) => {
        console.log('Filter function is running ...');      // each time this is shown
        return user.name.toLowerCase().includes(search.toLowerCase());
    });

    const filteredUsers5 = React.useMemo(() => users.filter((user) => {
        console.log('Filter function is running ...');      // each time this is shown
        return user.name.toLowerCase().includes(search.toLowerCase());
    }
    ), [search]);

    const filteredUsers2 = React.useMemo(
        () =>
            users.filter((user) => {
                console.log("Filter function 'useMemo' is running ...");    // only show once because then
                // typing the 'text' is updated and NOT the 'search' - all very cumbersome....
                return user.name.toLowerCase().includes(search.toLowerCase());
            }),
        [search]
    );

    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
            <button type="button" onClick={handleSearch}>
                Search
            </button>

            <List list={filteredUsers5} />
        </div>
    );
};

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );
};

const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
};

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App3 />, rootElement);