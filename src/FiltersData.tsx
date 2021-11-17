import { setSources } from "./NetworkManager";

const array: string[] = [];
const getSourcesList = async () => {
  const data = await setSources();
  data.map((item: any) => array.push(item.name));
};

// getSourcesList();

export enum FILTER_OPTIONS {
  TOP = "Top Headlines",
  EVERYTHING = "Everything",
}
export const filterOptions = ["Top Headlines", "EveryThing"];

export interface FilterData {
  filterText: string;
  listItems: string[];
  date?: boolean;
}

export const HeadLinesFilters: FilterData[] = [
  {
    filterText: "Country",
    listItems: [
      "Country",
      "United Kingdom",
      "United States",
      "Israel",
      "Italy",
      "Mexioco",
      "Portugal",
      "Czechia",
      "Belgium",
    ],
  },
  {
    filterText: "Category",
    listItems: [
      "Category",
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  {
    filterText: "Sources",
    listItems: array,
  },
];

export const EverythingFilters: FilterData[] = [
  {
    filterText: "Sort by",
    listItems: ["Sort by", "relevancy", "popularity", "publishedAt"],
  },
  {
    filterText: "Dates",
    listItems: [],
    date: true,
  },
  {
    filterText: "Sources",
    listItems: array,
  },
  {
    filterText: "Language",
    listItems: [
      "Language",
      "ar",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "it",
      "nl",
      "no",
      "pt",
    ],
  },
];
// "Language",
//       "English",
//       "Spanish",
//       "Arabic",
//       "Russian",
//       "Portuguese",
//       "Hebrew",
export const subFilterList = [
  { categoryName: "Sources", categoryOption: "All" },
  { categoryName: "Language", categoryOption: "All" },
  { categoryName: "Dates", categoryOption: "All" },
];

export const subFilterList2 = [
  { categoryName: "Sources", categoryOption: "" },
  { categoryName: "Language", categoryOption: "" },
  { categoryName: "Dates", categoryOption: "" },
];
