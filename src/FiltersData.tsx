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
  filterText?: string;
  filter?: {
    name: string;
    value: string;
  };
  listItems: FilterValue[];
  date?: boolean;
}

export const HeadLinesFilters: FilterData[] = [
  {
    filterText: "Country",
    listItems: [
      {
        id: null,
        name: "All Countries",
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
      {
        id: "mx",
        name: "Mexioco",
      },
      {
        id: "pt",
        name: "Portugal",
      },
      {
        id: "cz",
        name: "Czechia",
      },
    ],
  },
  {
    filterText: "Category",
    listItems: [
      {
        id: null,
        name: "All Categories",
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
        name: "All Sources",
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
        name: "Marca",
      },
      {
        name: "Engadget",
      },
      {
        name: "Buzzfeed",
      },
      {
        name: "CNN",
      },
      {
        name: "ESPN",
      },
      {
        name: "Focus",
      },
      {
        name: "Globo",
      },
    ],
  },
];

export const EverythingFilters: FilterData[] = [
  {
    filterText: "Sort by",
    listItems: [
      {
        id: "",
        name: "All Sorts",
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
        id: null,
        name: "All Sources",
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
        name: "Marca",
      },
      {
        name: "Engadget",
      },
      {
        name: "Buzzfeed",
      },
      {
        name: "CNN",
      },
    ],
  },
  {
    filterText: "Language",
    listItems: [
      {
        id: "",
        name: "All Languages",
      },
      {
        id: "fr",
        name: "French",
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
      {
        id: "he",
        name: "Hebrew",
      },
      // "it",
      // "nl",
      // "no",
      // "pt",
    ],
  },
];

export const HeadLinesFiltersSmallDeviches: FilterData[] = [
  {
    filter: {
      name: "Country",
      value: "Israel",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
      {
        id: "mx",
        name: "Mexioco",
      },
      {
        id: "pt",
        name: "Portugal",
      },
      {
        id: "cz",
        name: "Czechia",
      },

      // "Mexioco",
      // "Portugal",
      // "Czechia",
      // "Belgium",
    ],
  },
  {
    filter: {
      name: "Category",
      value: "All",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
    filter: {
      name: "Sources",
      value: "All",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
        name: "Marca",
      },
      {
        name: "Engadget",
      },
      {
        name: "Buzzfeed",
      },
      {
        name: "CNN",
      },
    ],
  },
];

export const EverythingFiltersSmallDeviches: FilterData[] = [
  {
    filter: {
      name: "Sort by",
      value: "All",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
    filter: {
      name: "Dates",
      value: "All",
    },
    listItems: [],
    date: true,
  },
  {
    filter: {
      name: "Sources",
      value: "All",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
        name: "Marca",
      },
      {
        name: "Engadget",
      },
      {
        name: "Buzzfeed",
      },
      {
        name: "CNN",
      },
    ],
  },
  {
    filter: {
      name: "Language",
      value: "All",
    },
    listItems: [
      {
        id: "All",
        name: "All",
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
      {
        id: "he",
        name: "Hebrew",
      },
      {
        id: "fr",
        name: "french",
      },
    ],
  },
];

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
