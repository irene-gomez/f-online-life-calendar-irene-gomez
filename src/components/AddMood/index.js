import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const AddMood = () => {
    return (
        <section className="main-mood">
            <form>
                <div>
                    <label htmlFor="date">Fecha</label>
                    <input type="date" name="date" id="date"/>
                </div>

                <div>
                    <p>Estado</p>
                    <input type="checkbox" name="mood" id="mood" value=":)" />
                    <label htmlFor="mood">:)</label>
                    <input type="checkbox" name="mood" id="mood" value=":(" />
                    <label htmlFor="mood">:(</label>
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message"></textarea>
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
 
export default AddMood;