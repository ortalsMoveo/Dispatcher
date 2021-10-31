export enum FILTER_OPTIONS {
    TOP="Top Headlines",
    EVERYTHING="Everything"
}

export const filtersTypes = ["Top Headlines", "Everything"];
export const HeadLinesFilters = [
    {
        name: "Country",
        list: [],
        
    },
    {
        name: "Category",
        list: [],
        
        
    },
    {
        name: "Sources",
        list: ['Mako', 'Ynet', 'Walla', 'BBC'],
        
    }
];

export const EverythingFilters = [
    {
        name: "Sort by",
        list: [],
        
    },
    {
        name: "Dates",
        list: [],
        date: true
    },
    {
        name: "Sources",
        list: [],

    },
    {
        name: "Language",
        list: [],
        
    }
]