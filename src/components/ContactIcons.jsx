
import { Mail } from "lucide-react";

const iconStyle = {
    width: 24,
    height: 24,
    color: "#F43F5E",
    flexShrink: 0,
};

export function EmailIcon() {
    return <Mail size={24} color="#F43F5E" strokeWidth={1.8} />;
}

export function FacebookIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#F43F5E"
            aria-hidden="true"
        >
            <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21h3.4Z" />
        </svg>
    );
}

export function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#F43F5E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="#F43F5E"
                stroke="none"
            />
        </svg>
    );
}
