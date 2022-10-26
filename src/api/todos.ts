export class Itodo {
    title: string = "";
    date: string = "";
    icon: string = "";
    key: number = 0;
}

export const Todos: Itodo[] = [
    {
        title: "Run payroll",
        date: "Mar 4 at 6.00 PM",
        icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/payroll.png",
        key: 0,
    },
    {
        title: "Review time off request",
        date: "Mar 7 at 6.00 PM",
        icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/timeoff.png",
        key: 1,
    },
    {
        title: "Sign board resolution",
        date: "Mar 12 at 6.00 PM",
        icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/resolution.png",
        key: 2,
    },
    {
        title: "Finish onboarding Tony",
        date: "Mar 12 at 6.00 PM",
        icon: "https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/finishresolution.png",
        key: 3,
    },
]

export default function todoAPI (): string {
    return JSON.stringify(Todos);
} 