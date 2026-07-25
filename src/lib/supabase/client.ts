import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vlpbbnaitemstwrjxyat.supabase.co";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
  
  if (!key) {
    // Return null client if no key - will fallback to localStorage
    return null as any;
  }
  
  return createBrowserClient(url, key);
}
