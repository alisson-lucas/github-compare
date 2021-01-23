import React, {useContext, useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import api from '../../services/api';
import { RepoContext } from '../../contexts/RepoContext';


import './styles.css';

// class Modal extends Component {
function Modal({onClose = () => {}}){
    const {repos, setRepos} = useContext(RepoContext);

    
    const [owner, setOwner] = useState('');
    // const [repos, setRepos] = useState([]
    //     // {
    //     //     id: 0,
    //     //     full_name: '',
    //     //     stars: 0,
    //     //     forks: 0,
    //     //     open_issues: 0,
    //     //     license: '',
    //     //     language: ''
    //     // }
    // );
    
        
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         owner: '',
    //         data: {
    //             full_name: '',
    //             stars: '',
    //             forks: '',
    //             open_issues: '',
    //             license: '',
    //             language: ''
    //         }
    //     };
    //     this._data = []
    //     this.handleChange = this.handleChange.bind(this);

    // }

    // handleChange(event) {
    //     this.setState({ owner: event.target.value });
    // }

    // getData(event) {
    //     event.preventDefault();

    //     this._data.push(this.state.data);
    //     this.setState({data: ''});
    //     console.log(this._data);
    // }
    
    // render() {
        
        
 
        async function handleSubmit(e) {
            e.preventDefault();
            const repo = {};
            
            try {
                const response = await api.get('/repos/'+ owner);
                console.log(response);
                // repo.id = response.data.id;
                // repo.full_name = response.data.full_name;
                // repo.stars = response.data.stargazers_count;
                // repo.forks = response.data.forks;
                // repo.open_issues = response.data.open_issues;
                // repo.license = response.data.license;
                // repo.language = response.data.language;
                
                // console.log(data);
                
                // this._data.push(this.state.data);
                // setRepos('alisson');
                
                // console.log(data);
                // console.log(this._data);
                
                setRepos([
                    ...repos,{
                        id: response.data.id,
                        full_name: response.data.full_name,
                        stars: response.data.stargazers_count,
                        forks: response.data.forks,
                        open_issues: response.data.open_issues,
                        license: response.data.license,
                        language: response.data.language
                    }
                ]);
                // saveRepo(repos);
                // console.log(repos);

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
                        <input type="text" value={owner} onChange={e => setOwner(e.target.value)} placeholder="username/repository"></input>
                        <div className="footer">
                            <button className="cancel"  onClick={onClose}>Cancel</button>
                            <button id="add" type="submit">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    // }
}

export default Modal;