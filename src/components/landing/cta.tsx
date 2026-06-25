"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles, Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlistAction } from "@/app/waitlist/actions";

export function Cta() {
  const [state, setState] = useState<{ success: boolean; message: string | null }>({
    success: false,
    message: null,
  });
  const [pending, setPending] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        setShowDialog(true);
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await addToWaitlistAction({ success: false, message: null }, formData);
    setState(result);
    setPending(false);
  }

  return (
    <>
      <section id="notify" className="py-20 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-slate-900">
          <div className="relative z-10 p-10 py-16 text-center text-white md:p-20">
            <Badge
              variant="outline"
              className="mb-6 border-primary/50 bg-primary/20 text-primary-foreground hover:bg-primary/30"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Get Your Digital Presence Today
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline">
              Ready to Build Your <span className="text-primary">Visible</span> Clinic?
            </h2>

            <div className="mt-8">
              <Mail className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                We're in Beta!
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Visible Clinic is here to help clinics build their online presence. We're currently refining our systems, but we're already creating websites for clinics ready to stand out online. We're offering free setup for the first 20 clinics and special discounted rates during this phase. Secure your spot and join our growing community of digital-first clinics today.
              </p>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-1 border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus-visible:ring-primary"
                  required
                />
                <Button type="submit" disabled={pending} className="w-full sm:w-auto">
                  {pending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Notify Me"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank You!</AlertDialogTitle>
            <AlertDialogDescription>
              {state.message || "You have been added to our waitlist. We will notify you once our services are available."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
