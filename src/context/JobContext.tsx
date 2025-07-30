import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseclient';

export interface Job {
  id: string;
  jobTitle: string;
  description: string;
  location: string;
  budget?: string;
  contact: string;
}

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id'>) => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const addJob = (jobData: Omit<Job, 'id'>) => {
    const newJob: Job = { ...jobData, id: Date.now().toString() };
    setJobs((prev) => [newJob, ...prev]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, user, setUser }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error('useJobContext must be used within a JobProvider');
  return context;
};

