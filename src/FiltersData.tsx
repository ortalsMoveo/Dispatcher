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

export interface FilterValue {
  id?: string | null;
  name: string;
}
export interface FilterData {
  filterText: string;
  listItems: FilterValue[];
  date?: boolean;
}

export const HeadLinesFilters: FilterData[] = [
  {
    filterText: "Country",
    listItems: [
      {
        id: null,
        name: "Country",
      },
      {
        id: "it",
        name: "Italy",
      },
      {
        id: "us",
        name: "United States",
      },
      {
        id: "il",
        name: "Israel",
      },

      // "Italy",
      // "Mexioco",
      // "Portugal",
      // "Czechia",
      // "Belgium",
    ],
  },
  {
    filterText: "Category",
    listItems: [
      {
        id: null,
        name: "Category",
      },
      {
        id: "business",
        name: "Business",
      },
      {
        id: "entertainment",
        name: "Entertainment",
      },
      {
        id: "general",
        name: "General",
      },
      {
        id: "health",
        name: "Health",
      },
      {
        id: "science",
        name: "Science",
      },
      {
        id: "sports",
        name: "Sports",
      },
      {
        id: "technology",
        name: "Technology",
      },
    ],
  },
  {
    filterText: "Sources",
    listItems: [
      {
        id: null,
        name: "Sources",
      },
      {
        name: "Aftenposten",
      },
      {
        name: "ANSA",
      },
      {
        name: "Axios",
      },
      {
        name: "Bild",
      },
      {
        name: "Bloomberg",
      },
      {
        name: "Axios",
      },
      {
        name: "Axios",
      },
      // "Bild",
      // "Bloomberg",
      // "Buzzfeed",
      // "CNN",
      // "Engadget",
      // "ESPN",
      // "Focus",
      // "Fortune",
      // "Globo",
      // "Gruenderszene",
      // "Handelsblatt",
      // "IGN",
      // "Independent",
      // "Lenta",
      // "Marca",
    ],
  },
];

export const EverythingFilters: FilterData[] = [
  {
    filterText: "Sort by",
    listItems: [
      {
        id: "",
        name: "Sort by",
      },
      {
        id: "relevancy",
        name: "Relevancy",
      },
      {
        id: "popularity",
        name: "Popularity",
      },
      {
        id: "publishedAt",
        name: "PublishedAt",
      },
    ],
  },
  {
    filterText: "Dates",
    listItems: [],
    date: true,
  },
  {
    filterText: "Sources",
    listItems: [
      {
        name: "Aftenposten",
      },
      {
        name: "ANSA",
      },
      {
        name: "Axios",
      },
      {
        name: "Bild",
      },
      {
        name: "Bloomberg",
      },
      {
        name: "Axios",
      },
      {
        name: "Axios",
      },
    ],
  },
  {
    filterText: "Language",
    listItems: [
      {
        id: "",
        name: "Language",
      },
      {
        id: "ar",
        name: "Arabic",
      },
      {
        id: "de",
        name: "German",
      },
      {
        id: "en",
        name: "English",
      },

      // "es",
      // "fr",
      // "he",
      // "it",
      // "nl",
      // "no",
      // "pt",
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
