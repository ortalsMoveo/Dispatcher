import { FilterProps } from "./components/Filter/Filter";

export enum FILTER_OPTIONS {
    TOP="Top Headlines",
    EVERYTHING="Everything"
}
export const filterOptions = ["Top Headlines", "EveryThing"];




export const HeadLinesFilters:FilterProps[] = [
    {
        filterText: "Country",
        listItems: [],
    },
    {
        filterText: "Category",
        listItems: [],
    },
    {
        filterText: "Sources",
        listItems: ['Mako', 'Ynet', 'Walla', 'BBC'],
    }
];

export const EverythingFilters: FilterProps[] = [
    {
        filterText: "Sort by",
        listItems: [],
    },
    {
        filterText: "Dates",
        listItems: [],
        date: true
    },
    {
        filterText: "Sources",
        listItems: [],
    },
    {
        filterText: "Language",
        listItems: [],
    }
]

export const subFilterList = [
    {categoryName: "Sources", categoryOption: "All"},
    {categoryName: "Language", categoryOption: "All"}, 
    {categoryName: "Dates", categoryOption: "All"}, 
];

