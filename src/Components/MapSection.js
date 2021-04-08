import React, {Component} from 'react';

// import ReactDOM from 'react-dom';

export default class MapSection extends Component {
    constructor () {
        super()
        this.state = {
            name: "Mark"
        }
    }
    render () {
        return (
            <section id="MapSection">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.4504644789245!2d153.0270397150572!3d-27.48636278288401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a6cd52a65ed%3A0xf005806abc80fec2!2sJohnnys%20Barber!5e0!3m2!1sen!2sau!4v1604635653772!5m2!1sen!2sau" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    <div className="schedule">
                        <div className="SeeMe">See me soon!</div>
                        <p> Tuesday through Friday: 8:00AM - 5:00PM </p>
                        <p> Saturday: 8:00AM - 1:00PM </p>
                        <p> Sunday & Monday: Closed </p>
                    </div>
                    <div className="social-icons">
                    <a href="https://www.facebook.com/JohnnysBarber/" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </section>
          );
    }
}