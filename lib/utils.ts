import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatETB(amount: number): string {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function generateApplicationRef(serviceCode = "SRV"): string {
  const year = new Date().getFullYear();
  const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `AASCS-${year}-${serviceCode.toUpperCase()}-${randomHex}`;
}

export function generateComplaintRef(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `GRIEV-${year}-${randomNum}`;
}

export function getStatusColor(status: string): { bg: string; text: string; border: string } {
  switch (status.toUpperCase()) {
    case "APPROVED":
    case "RESOLVED":
    case "OPERATIONAL":
    case "COMPLETED":
      return { bg: "bg-emerald-950/40", text: "text-emerald-400", border: "border-emerald-500/30" };
    case "UNDER_REVIEW":
    case "IN_INSPECTION":
    case "IN PROGRESS":
    case "ACTIVE UPGRADE":
      return { bg: "bg-amber-950/40", text: "text-amber-400", border: "border-amber-500/30" };
    case "SUBMITTED":
    case "OPEN":
    case "TENDER OPEN":
      return { bg: "bg-teal-950/40", text: "text-teal-400", border: "border-teal-500/30" };
    case "REJECTED":
    case "URGENT":
      return { bg: "bg-rose-950/40", text: "text-rose-400", border: "border-rose-500/30" };
    default:
      return { bg: "bg-slate-900/40", text: "text-slate-400", border: "border-slate-700/30" };
  }
}
