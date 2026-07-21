"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { STATUS_OPTIONS } from "@/lib/dashboard";

export default function StatusSelect({ id, status }: { id: number; status: string }) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [isPending, startTransition] = useTransition();

  async function handleChange(newStatus: string) {
    const previous = value;
    setValue(newStatus);
    try {
      const res = await fetch("/api/dashboard/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!res.ok) throw new Error();
      startTransition(() => router.refresh());
    } catch {
      setValue(previous);
    }
  }

  return (
    <select
      value={value}
      disabled={isPending}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-md border border-line bg-white px-2 py-1.5 text-xs font-bold text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600 disabled:opacity-50"
    >
      {STATUS_OPTIONS.map((s) => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
