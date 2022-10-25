interface Idate {
    date: string,
    datePrefix?: string,
    time: string,
}

export class Iemail {
    avatar: string = "/media/avatars/default.png";
    from: string;
    topic: string;
    date: Idate;
    key: number;
}

export const Emails: Iemail[] = [
    {
        avatar: "/media/avatars/avatar1.png",
        from: 'Hannah Morgan',
        topic: 'Meeting scheduled',
        date: {
            date: "25.10.2022",
            time: "1:24 PM"
        },
        key: 0
    },
    {
        avatar: "/media/avatars/avatar2.png",
        from: 'Megan Clark',
        topic: 'Update on marketing campaign',
        date: {
            date: "25.10.2022",
            time: "12:32 PM"
        },
        key: 1
    },
    {
        avatar: "/media/avatars/avatar3.png",
        from: 'Brandon Williams',
        topic: 'Designly 2.0 is about to launch',
        date: {
            date: "24.10.2022",
            datePrefix: "Yesterday",
            time: "8:57 PM",
        },
        key: 2
    },
    {
        avatar: "/media/avatars/avatar4.png",
        from: 'Reid Smith',
        topic: 'My friend Julie loves Dappr!',
        date: {
            date: "24.10.2022",
            datePrefix: "Yesterday",
            time: "8:49 PM",
        },
        key: 3
    },
]


export default function emailAPI (): string {
    return JSON.stringify(Emails);
} 
