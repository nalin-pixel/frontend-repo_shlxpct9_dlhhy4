import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/blog`)
      .then(r => r.json())
      .then(data => setPosts(data.items || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">From the blog</h2>
          <p className="mt-3 text-slate-300">Insights on building modern fintech.</p>
        </div>
        {loading ? (
          <div className="mt-10 text-center text-slate-300">Loading…</div>
        ) : (
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {posts.map(p => (
              <article key={p._id} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-blue-500/40 transition">
                <div className="text-xs text-slate-400">{p.published_at ? new Date(p.published_at).toLocaleDateString() : ''}</div>
                <h3 className="mt-2 text-white text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm line-clamp-3">{p.excerpt || p.content?.slice(0,140)}</p>
                <a href={`#/blog/${p.slug}`} className="mt-4 inline-block text-blue-300 hover:text-white">Read more →</a>
              </article>
            ))}
            {posts.length === 0 && (
              <div className="col-span-full text-center text-slate-400">No posts yet.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
