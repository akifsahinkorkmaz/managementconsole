export class Iprogress {
    title: string = "";
    state: string = "";
    statex: number = 0;
    estimated: string = "";
}

export const Progress: Iprogress = {
    title: "Formation status",
    state: "In progress",
    statex: 0.75,
    estimated: "4-5 business days"
}

export default function progressAPI (): string {
    return JSON.stringify(Progress);
} 