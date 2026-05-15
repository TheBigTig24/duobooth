'use client';

import { LoginForm } from "@/components/login";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-primary p-12 text-primary-foreground">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-foreground" />
            <span className="text-xl font-semibold">Acme</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <blockquote className="space-y-4">
            <p className="text-2xl font-medium leading-relaxed text-balance">
              &ldquo;This platform has transformed how we manage our workflow. The intuitive interface and powerful features have boosted our productivity significantly.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/20" />
              <div>
                <p className="font-medium">Sarah Chen</p>
                <p className="text-sm text-primary-foreground/70">Head of Product, TechCorp</p>
              </div>
            </footer>
          </blockquote>
        </div>

        <p className="text-sm text-primary-foreground/60">
          &copy; 2026 Acme Inc. All rights reserved.
        </p>
      </div>

      {/* Right side - Login form */}
      <div className="flex w-full items-center bg-blue-200 justify-center px-6 py-12 lg:w-1/2">
        <LoginForm />
      </div>
    </main>
  )
}