import React, {useContext, useState} from 'react';
import api from '../../services/api';
import { RepoContext } from '../../contexts/RepoContext';
import { PageContext } from '../../contexts/pageContext';

import './styles.css';

function Modal({onClose = () => {}}){
    const {repos, setRepos} = useContext(RepoContext);
    const {setIsEmpty} = useContext(PageContext);
    const [owner, setOwner] = useState('');
 
    async function handleSubmit(e) {
        e.preventDefault();
            
        try {
            const response = await api.get('/repos/'+ owner);
            console.log(response);
                
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
            setIsEmpty(false);
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
}

export default Modal;