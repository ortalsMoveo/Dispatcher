export enum FILTER_OPTIONS {
    TOP="Top Headlines",
    EVERYTHING="Everything"
}
export const filterOptions = ["Top Headlines", "EveryThing"];

export const HeadLinesFilters = [
    {
        name: "Country",
        list: [],
        date: false
    },
    {
        name: "Category",
        list: [],
        date: false
    },
    {
        name: "Sources",
        list: ['Mako', 'Ynet', 'Walla', 'BBC'],
        date: false
    }
];

export const EverythingFilters = [
    {
        name: "Sort by",
        list: [],
        date: false
    },
    {
        name: "Dates",
        list: [],
        date: true
    },
    {
        name: "Sources",
        list: [],
        date: false
    },
    {
        name: "Language",
        list: [],
        date: false
    }
]