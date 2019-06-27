import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class AddMood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moodData: {
                date: new Date().toISOString().slice(0, 10),
                mood: '',
                message: ''
            },
            messageHidden: 'hidden',
            historyMood: []
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.showDate = this.showDate.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
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
        if (data === ':)') {
            this.setState(prevState => {
                return {
                    ...prevState,
                    messageHidden: ''
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

    showDate(e) {
        const { value } = e.currentTarget;
        this.setState(prevState => {
            return {
                moodData: {
                    ...prevState.moodData,
                    date: value
                }
            };
        });
    }

    handleClickHome() {
        this.saveMoodInArray();
        this.saveLocalStorage();
    }

    saveMoodInArray() {
        const { moodData } = this.state;
        const { historyMood } = this.props;

        const newDay = {
            date: moodData.date,
            mood: moodData.mood,
            message: moodData.message
        };

        if (moodData.date !== '' && moodData.mood !== '') {
            historyMood.push(newDay);
        } else {
            alert(`Elige un estado`);
        }
    }

    saveLocalStorage() {
        const { historyMood } = this.props;
        localStorage.setItem('historyMood', JSON.stringify(historyMood));
    }

    render() {
        const { messageHidden, moodData } = this.state;
        return (
            <section className="main-mood">
                <form>
                    <div>
                        <label htmlFor="date">Fecha</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={moodData.date}
                            onChange={this.showDate}
                        />
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

                    <div className={`${messageHidden}`}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            name="message"
                            id="message"
                            onChange={this.handleTextareaChange}
                        />
                    </div>
                    <p>
                        <Link
                            // to="/"
                            onClick={this.handleClickHome}
                        >
                            Home
                        </Link>
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
