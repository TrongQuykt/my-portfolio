/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2, RefreshCw } from 'lucide-react';

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

const GITHUB_USER =
  import.meta.env.VITE_GITHUB_USERNAME ?? 'TrongQuykt';

/** Comma-separated repo names to show, in order (e.g. BanVeXemPhim,Ecommerce-Electronic). If empty, top starred non-fork repos are used. */
const FEATURED_REPOS_RAW = import.meta.env.VITE_GITHUB_FEATURED_REPOS ?? '';

const MAX_PROJECTS = Math.min(
  Math.max(Number(import.meta.env.VITE_GITHUB_MAX_PROJECTS) || 4, 1),
  12
);

function parseFeaturedList(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function tagsForRepo(repo: GitHubRepo): string[] {
  const fromTopics = repo.topics?.slice(0, 4) ?? [];
  if (fromTopics.length) return fromTopics;
  if (repo.language) return [repo.language];
  return ['GitHub'];
}

async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?per_page=100&sort=updated&type=owner`;
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(msg || `GitHub ${res.status}`);
  }
  return res.json();
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const all = await fetchRepos(GITHUB_USER);
      const featured = parseFeaturedList(FEATURED_REPOS_RAW);

      let list: GitHubRepo[];
      if (featured.length) {
        const byName = new Map(all.map((r) => [r.name.toLowerCase(), r]));
        list = featured
          .map((name) => byName.get(name.toLowerCase()))
          .filter((r): r is GitHubRepo => Boolean(r));
      } else {
        list = [...all]
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
      }

      setRepos(list.slice(0, MAX_PROJECTS));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load repositories');
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
        <div className="min-w-0">
          <h2 className="font-headline font-black text-3xl sm:text-4xl lg:text-5xl text-white">Projects</h2>
          <p className="text-on-surface-variant text-xs sm:text-sm mt-2 break-words">
            Loaded from{' '}
            <a
              href={`https://github.com/${GITHUB_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              github.com/{GITHUB_USER}
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={loading}
          className="inline-flex items-center gap-2 self-start text-xs font-label uppercase tracking-wider text-on-surface-variant border border-outline-variant/30 rounded-full px-4 py-2 hover:border-secondary/50 hover:text-white transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
          Refresh
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-surface-container-highest/50 rounded-2xl sm:rounded-3xl border border-outline-variant/10 p-6 sm:p-8 animate-pulse h-48 sm:h-56"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-highest/40 p-6 sm:p-8 text-center text-sm">
          <p className="text-on-surface-variant mb-2">Could not load projects from GitHub.</p>
          <p className="text-xs text-on-surface-variant/70 mb-4">{error}</p>
          <p className="text-xs text-on-surface-variant/60">
            Public API is limited to 60 requests/hour per IP without a token. Try again later or set{' '}
            <code className="text-secondary">VITE_GITHUB_USERNAME</code> in <code className="text-secondary">.env</code>.
          </p>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <p className="text-on-surface-variant text-center py-12">
          No repositories matched your filters. Check{' '}
          <code className="text-secondary">VITE_GITHUB_FEATURED_REPOS</code>.
        </p>
      )}

      {!loading && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {repos.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-surface-container-highest rounded-2xl sm:rounded-3xl overflow-hidden border border-outline-variant/10 p-6 sm:p-8 hover:border-secondary/40 transition-all block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 min-h-0"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-headline font-black text-lg sm:text-xl md:text-2xl text-white group-hover:text-secondary transition-colors break-words min-w-0 pr-2">
                  {project.name.replace(/-/g, ' ')}
                </h3>
                <ExternalLink
                  className="w-5 h-5 text-on-surface-variant shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
              </div>
              <p className="text-on-surface-variant text-sm sm:text-base mb-4 sm:mb-6 line-clamp-4">
                {project.description?.trim() || 'No description on GitHub yet.'}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {tagsForRepo(project).map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-low border border-secondary/30 px-3 py-1 rounded-full text-xs text-secondary font-bold"
                  >
                    {tag}
                  </span>
                ))}
                {project.stargazers_count > 0 && (
                  <span className="text-[10px] font-label text-on-surface-variant/80 ml-1">
                    ★ {project.stargazers_count}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
