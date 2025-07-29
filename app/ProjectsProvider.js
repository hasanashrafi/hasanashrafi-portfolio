'use client';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRepositories } from '@/lib/github';

const ProjectsContext = createContext();

export function useProjects() {
    return useContext(ProjectsContext);
}

export default function ProjectsProvider({ children }) {
    const { data: projects, isLoading, isError, error } = useQuery({
        queryKey: ['projects'],
        queryFn: getRepositories,
        staleTime: 1000 * 60 * 60,
    });


    if (isError) {
        console.error('Error fetching projects:', error);
    }

    return (
        <ProjectsContext.Provider value={{ projects, isLoading, isError, error }}>
            {children}
        </ProjectsContext.Provider>
    );
} 