export enum FILTER_OPTIONS {
    TOP="Top Headlines",
    EVERYTHING="Everything"
}
export const filterOptions = ["Top Headlines", "EveryThing"];



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

export const subFilterList = [
    {categoryName: "Sources", categoryOption: "All"},
    {categoryName: "Language", categoryOption: "All"}, 
    {categoryName: "Dates", categoryOption: "All"}, 
  ];