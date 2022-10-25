export class Imeeting {
    title: string;
    date: string;
    body: string;
    isActive: boolean
}

export const Meeting: Imeeting = {
    title: "Board meeting",
    date: "Feb 22 at 6.00 PM",
    body: "You have been invited to attend a meeting of the Board Directors.",
    isActive: true,
}

export default function meetingAPI (): string {
    return JSON.stringify(Meeting);
} 