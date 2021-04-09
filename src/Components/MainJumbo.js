import React, {Component} from 'react';

// import ReactDOM from 'react-dom';

export default class MainJumbo extends Component {
    constructor () {
        super()
        this.state = {
            name: "Mark"
        }
    }
    render () {
        return (
            <section id="MainJumbo">
                <div className="jumboContainer">
                    <div className="imageBackground"> </div>
                    <div className="jumboTitle"> Johnny's Barber Shop</div>
                    <div className="jumboDescription">Specialising in modern and traditional haircuts</div>
                </div>
            </section>
          );
    }
}