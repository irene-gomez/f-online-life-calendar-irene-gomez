import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class AddMood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moodData: {
                date: '',
                mood: '',
                message: ''
            },
            messageHidden: 'hidden',
            currentDate: new Date(),
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleRadioChange(event) {
        const { value } = event.currentTarget;
        this.saveMood(value);
        this.showMessage(value);
    }

    handleTextareaChange(event) {
        const { value } = event.currentTarget;
        this.setState(prevState => {
            return {
                moodData: {
                    ...prevState.moodData,
                    message: value
                }
            };
        });        
    }

    saveMood(data) {
        this.setState(prevState => {
            return {
                moodData: {
                    ...prevState.moodData,
                    mood: data
                }
            };
        });
    }

    showMessage(data) {
        if(data === ':)') {
            this.setState(prevState => {
                return {
                    ...prevState,
                    messageHiden: ''
                };
            });
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    messageHidden: 'hidden'
                };
            });
        }
    }

    render() {
        const { messageHiden } = this.state;
        return (
            <section className="main-mood">
                <form>
                    <div>
                        <label htmlFor="date">Fecha</label>
                        <input type="date" name="date" id="date" />
                    </div>

                    <div>
                        <p>Estado</p>
                        <input
                            type="radio"
                            name="mood"
                            id="happyMood"
                            value=":)"
                            onChange={this.handleRadioChange}
                        />
                        <label htmlFor="happyMood">:)</label>

                        <input
                            type="radio"
                            name="mood"
                            id="sadMood"
                            value=":("
                            onChange={this.handleRadioChange}
                        />
                        <label htmlFor="sadMood">:(</label>
                    </div>

                    <div className={`${messageHiden}`}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" onChange={this.handleTextareaChange} />
                    </div>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/">Cancelar</Link>
                    </p>
                </form>
            </section>
        );
    }
}

export default AddMood;
