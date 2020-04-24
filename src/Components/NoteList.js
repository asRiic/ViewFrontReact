import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


export default class NoteList extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.getNotes();
    }

    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/notes/' + id);
        this.getNotes();
    }

    async getNotes() {
        const res = await axios.get('http://localhost:4000/notes')
        this.setState({
            notes: res.data
        });
    }

    editNote = async (id) => {
        console.log(id)
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card border-dark" >
                                <div className="card-header bg-transparent border-dark">{note.tittle}</div>
                                <div className="card-body text-dark">
                                    <p className="card-text">{note.content}</p>
                                </div>
                                <div className="card-footer bg-transparent border-dark text-muted">
                                    <div>
                                        <p>{note.author}</p>
                                    </div>

                                    <div>
                                        <p>{format(note.date)}</p>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent border-dark">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                                        Borrar
                                    </button>

                                    <Link className="btn btn-info" to={"/nEdit/" + note._id}>
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
