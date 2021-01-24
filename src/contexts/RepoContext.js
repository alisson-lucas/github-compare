import React, { useState, createContext, useContext } from 'react';

export const RepoContext = createContext();

const RepoProvider = ({ children }) => {
    const [repos, setRepos] = useState([])

    const saveRepo = repo => {
        const newRepo = {
            id: repo.id, full_name: repo.full_name, stars: repo.stars, forks: repo.forks, open_issues: repo.open_issues,
            license: repo.license, language: repo.language
        }
        setRepos([...repos, newRepo]);
        console.log('save repo');
    }

    return(
        <RepoContext.Provider value={{ repos, setRepos, saveRepo}}>
            {children}
        </RepoContext.Provider>
    )
}

export function useRepo() {
    const context = useContext(RepoContext);
    const { repos, setRepos, saveRepo } = context;
    return { repos, setRepos, saveRepo };
}

export default RepoProvider;