import React from 'react';
import { Link } from 'react-router-dom';
import RadioButton from '../RadioButton';
import Input from '../Input';

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
            isMood: false,
            isSameDate: false,
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.showDate = this.showDate.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
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
        const { historyMood } = this.props;
        const dateSelected = historyMood.find(date => date.date === value);

        if (dateSelected) {
            this.setState(prevState => {
                return {
                    moodData: {
                        ...prevState.moodData,
                        date: value
                    },
                    isSameDate: true
                };
            });
        } else {
            this.setState(prevState => {
                return {
                    moodData: {
                        ...prevState.moodData,
                        date: value
                    },
                    isSameDate: false
                };
            });
        }
    }

    handleClickSave() {
        this.saveMoodInArray();
        this.saveLocalStorage();
    }

    saveMoodInArray() {
        const { moodData } = this.state;
        const { historyMood } = this.props;
        const dateSelected = historyMood.find(date => date.date === moodData.date);

        const newDay = {
            date: moodData.date,
            mood: moodData.mood,
            message: moodData.message
        };

        if (!dateSelected) {
            if (moodData.mood !== '') {
                historyMood.push(newDay);
                this.props.history.push('/');
                this.setState({
                    isMood: false,
                    isSameDate: false
                });
            } else {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        isMood: true
                    }
                });
            }
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    isSameDate: true
                }
            });
        }
    }

    saveLocalStorage() {
        const { historyMood } = this.props;
        localStorage.setItem('historyMood', JSON.stringify(historyMood));
    }

    render() {
        const { messageHidden, moodData, isSameDate, isMood } = this.state;
        return (
            <section className="main-mood">
                <form>
                    <div>
                        <Input
                            classNameLabel="label__date"
                            labelText="Fecha"
                            type="date"
                            id="date"
                            value={moodData.date}
                            onChangeInput={this.showDate}
                        />
                    </div>

                    <div>
                        <p className="label__mood">Estado</p>
                        <div className="wrapper__radios">
                            <RadioButton
                                classNameDiv="radios"
                                classNameLabel=""
                                name="mood"
                                id="happyMood"
                                value=":)"
                                handleRadioChange={this.handleRadioChange}
                            />
                            <RadioButton
                                classNameDiv="radios"
                                classNameLabel=""
                                name="mood"
                                id="sadMood"
                                value=":("
                                handleRadioChange={this.handleRadioChange}
                            />
                        </div>
                    </div>

                    <div className={`message ${messageHidden}`}>
                        <label htmlFor="message" className="label__textarea">
                            Mensaje
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="¿Cómo te sientes?"
                            onChange={this.handleTextareaChange}
                        />
                    </div>

                    {isSameDate && <p className='error-message'>Esa fecha ya tiene un estado.</p>}
                    {isMood && <p className='error-message'>Selecciona un estado de ánimo.</p>}
                    
                    <button className="btn btn__save" onClick={this.handleClickSave}>Guardar</button>
                    <Link to="/" className="btn btn__cancel">
                        Cancelar
                    </Link>
                </form>
            </section>
        );
    }
}

export default AddMood;
