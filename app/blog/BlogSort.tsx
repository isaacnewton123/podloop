"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BlogSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "newest";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', justifyContent: 'flex-end' }}>
      <label htmlFor="sort" style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>Sort by:</label>
      <select 
        id="sort"
        value={currentSort} 
        onChange={handleSortChange}
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          background: '#ffffff',
          color: '#111111',
          fontSize: '14px',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
}
