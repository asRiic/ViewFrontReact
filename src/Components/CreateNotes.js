import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Form } from 'react-bootstrap';

export default class CreateNotes extends Component {

    state = {
        users: [],
        selUsr: '',
        date: new Date(),
        _titulo: '',
        _contenido: '',
        _editMode: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({ users: res.data });
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/notes/' + this.props.match.params.id);
            this.setState({
                _titulo: res.data.tittle,
                _contenido: res.data.content,
                selUsr: res.data.author,
                date: new Date(res.data.date),

                _editMode: true,
                _id: this.props.match.params.id
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            tittle: this.state._titulo,
            content: this.state._contenido,
            author: this.state.selUsr,
            date: this.state.date
        };

        if (this.state._editMode) {
            await axios.put('http://localhost:4000/notes/' + this.state._id, newNote);
        } else {
            await axios.post('http://localhost:4000/notes', newNote);
        }
        window.location.href = '/';
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    renderOptions() {
        return this.state.users.map((user, index) => {
            const { _id, username } = user
            return (
                <option key={_id} value={username}>
                    {username}
                </option>
            )
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                <form onSubmit={this.onSubmit}>
                    <h4>Agregar una nota</h4>

                    {/** Select para el usuario*/}
                    <Form.Group controlId={this.state.selUsr}>
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" name="selUsr" onChange={this.onInputChange} value={this.state.selUsr}>
                            {
                                this.renderOptions()
                            }
                        </Form.Control>
                    </Form.Group>
                    {/* <div className="form-group">
                        <select className="form-control" name="selUsr" onChange={this.onInputChange} value={this.state.selUsr}>
                            {
                                this.renderOptions()
                            }
                        </select>
                    </div>*/}

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Titulo"
                            name="_titulo"
                            onChange={this.onInputChange}
                            value={this.state._titulo}
                            required />
                    </div>

                    <div className="form-group">
                        <textarea name="_contenido"
                            className="form-control"
                            placeholder="Contenido..."
                            onChange={this.onInputChange}
                            value={this.state._contenido}
                            required>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            value={this.state.date}
                        />
                    </div>

                   

                        <button type="submit" className="btn btn-primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
