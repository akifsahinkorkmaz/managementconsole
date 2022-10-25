interface IclientInvoice {
    value: string,
    percent: string,
    derivative: boolean,
}

interface IrevenueDataset {
    label: string,
    data: number[],
}

interface IrevenueData {
    labels: string[],
    datasets: IrevenueDataset[],
}

interface Irevenue {
    title: string,
    data: IrevenueData,
}

export class IhighCard {
    bankBalance: string;
    jobRemainig: string;
    employees: string;
    spendings: string;

    newClients: IclientInvoice;
    invoicesOverdue: IclientInvoice;

    revenue: Irevenue;
}

export const HighCard: IhighCard =  {
    bankBalance: "$143,624",
    jobRemainig: "76",
    employees: "7",
    spendings: "$3,287.49",

    newClients: {
        value: "54",
        percent: "+ 18.7%",
        derivative: true,
    },
    invoicesOverdue: {
        value: "6",
        percent: "+ 2.7%",
        derivative: false,
    },

    revenue: {
        title: "Last 7 days VS prior week",
        data: {
            labels: ["Feb 14", "Feb 15", "Feb 16", "Feb 17", "Feb 18", "Feb 19", "Feb 20"],
            datasets: [
                {
                    label: "last 7 days",
                    data: [13495, 16186, 17354, 17106, 20049, 18678, 19345]
                },
                {
                    label: "prior week",
                    data: [15345, 13186, 13354, 18268, 18068, 16351, 15180]
                }
            ]
        }
    }
}

export default function highCardAPI (): string {
    return JSON.stringify(HighCard);
} 