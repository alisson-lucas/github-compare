import React, { useState, createContext, useContext } from 'react';

export const RepoContext = createContext();

const RepoProvider = ({ children }) => {
    const [repos, setRepos] = useState([
        // { id: 1, full_name: 'liferay/liferay-portal', stars: 1618, forks: 2256, open_issues: 10,
        // license: 'N/A',
        // language: 'javascript' },
        // { id: 2, full_name: 'liferay/liferay', stars: 16, forks: 56, open_issues: 8,
        // license: 'N/A',
        // language: 'javascript' }
    ])

    // const saveRepo = repo => {
    //     const newRepo = {
    //         id: repo.id, full_name: repo.full_name, stars: repo.stars, forks: repo.forks, open_issues: repo.open_issues,
    //         license: repo.license, language: repo.language
    //     }
    //     setRepos([...repos, newRepo]);
    //     console.log('save repo');
    // }

    return(
        <RepoContext.Provider value={{ repos, setRepos}}>
            {children}
        </RepoContext.Provider>
    )
}

export function useRepo() {
    const context = useContext(RepoContext);
    const { repos, setRepos, } = context;
    return { repos, setRepos };
}

export default RepoProvider;