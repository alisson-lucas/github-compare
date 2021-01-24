import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import api from '../../services/api';
import { RepoContext } from '../../contexts/RepoContext';
import { PageContext } from '../../contexts/pageContext';
import { CounterContext } from '../../contexts/counterContext';

import './styles.css';

function Modal({onClose = () => {}}){
    const {repos, setRepos} = useContext(RepoContext);
    const {setIsEmpty} = useContext(PageContext);
    const { count, setCount } = useContext(CounterContext);
    const [owner, setOwner] = useState('');

    const { register, handleSubmit, errors } = useForm();
 
    async function onSubmit(data) {
            
        try {
            const response = await api.get('/repos/'+ owner);
            console.log(data);
                
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
            setCount(count + 1);
            setIsEmpty(false);
            onClose();
            console.log(count);
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="modal-container">
            <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
                <div className="content"> 
                    <h3>New Repository</h3>
                    <div className="label">
                        <h4>Repository</h4><span className="errors">*</span>   
                    </div>
                    <input type="text" name="username" ref={register({
                        required: "Enter your username/repository",
                    })} value={owner} onChange={e => setOwner(e.target.value)} placeholder=""></input>
                    {errors.username && <span className="errors">{errors.username.message}</span>}
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