import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';


import './styles.css';

class Modal extends Component {
// const Modal = ({onClose = () => {}, Children}) => {

    // const [owner, setOwner] = useState('');
    // const [dados, setDados] = useState();
   
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            data: {
                full_name: '',
                stars: '',
                forks: '',
                open_issues: '',
                license: '',
                language: ''
            }
        };
        this._data = []
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ owner: event.target.value });
    }

    getData(event) {
        event.preventDefault();

        this._data.push(this.state.data);
        this.setState({data: ''});
        console.log(this._data);
    }
    
    render() {
        const { owner } = this.state;
        const { data } = this.state
        
 
        async function handleSubmit(e) {
            e.preventDefault();
    
            try {
                const require = await api.get('/repos/'+ owner);
                console.log(require);
                 
                data.full_name = require.data.full_name;
                data.stars = require.data.stargazers_count;
                data.forks = require.data.forks;
                data.open_issues = require.data.open_issues;
                data.license = require.data.license;
                data.language = require.data.language;
                
                // this._data.push(this.state.data);

                
                console.log(data);
                // console.log(this._data);
            }catch (err) {
                alert(console.log(err));
            }
        }

        
        return (
            <div className="modal-container">
                <form onSubmit={handleSubmit}>
                    <div className="content"> 
                        <h3>New Repository</h3>
                        <h4>Repository</h4>
                        <input type="text" value={owner} onChange={this.handleChange} placeholder="username/repository"></input>
                        {/* {this.props.render(this.state.data)} */}
                        <hr/>
                        <div className="footer">
                            <button className="cancel"  onClick={() => {}}>Cancel</button>
                            <button id="add" type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Modal;