import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Star, GitFork, Activity } from 'lucide-react';
import { GithubIcon as Github } from '../components/ui/Icons';

const GitHubActivity = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const username = import.meta.env.VITE_GITHUB_USERNAME;

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setRepos(data.filter(repo => !repo.fork));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (!username && repos.length === 0) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading title="GitHub Activity" subtitle="Recent open-source contributions and projects." />
          <div className="glass-card p-12 text-center flex flex-col items-center justify-center border-dashed">
            <Github className="w-12 h-12 text-secondary-text mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">GitHub Integration Pending</h3>
            <p className="text-secondary-text max-w-md">Configure VITE_GITHUB_USERNAME in your environment variables to display your latest repositories dynamically.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            title="GitHub Activity" 
            subtitle="Recent open-source contributions and projects."
          />
          <div className="flex items-center gap-6 pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              <span className="text-white font-bold font-mono">Building in Public</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card h-48 animate-pulse bg-card/40" />
            ))}
          </div>
        ) : error ? (
          <div className="glass-card p-8 text-center text-red-400">
            Failed to load GitHub repositories. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-accent/50 transition-colors group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <Github className="w-6 h-6 text-secondary-text group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-1">{repo.name}</h3>
                <p className="text-sm text-secondary-text mb-6 line-clamp-2 flex-grow">
                  {repo.description || "No description available."}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-secondary-text mt-auto">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {repo.language || "Unknown"}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 hover:text-white transition-colors"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1 hover:text-white transition-colors"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;
