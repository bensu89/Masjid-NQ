"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage or session
    const storedUser = localStorage.getItem("masjid_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (pathname?.startsWith("/admin") && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const login = (email: string, role = "admin") => {
    const newUser = { id: "1", name: "Administrator Masjid", email, role };
    setUser(newUser);
    localStorage.setItem("masjid_user", JSON.stringify(newUser));
    router.push("/admin/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("masjid_user");
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
