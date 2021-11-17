import axios from "axios";
import { CurrentFilters } from "./fetchers/MainPage/MainPage";
import { FILTER_OPTIONS } from "./FiltersData";
const apiKey = process.env.REACT_APP_API_KEY;

export const getData = async (
  obj: CurrentFilters,
  filterType: FILTER_OPTIONS
) => {
  const type =
    filterType === FILTER_OPTIONS.TOP ? "top-headlines" : "everything";
  const filterTypeParms =
    filterType === FILTER_OPTIONS.TOP
      ? obj.topHeadlinesFilters
      : obj.everythingFilters;
  const searchParam = { q: obj.q };
  const parms = { ...searchParam, ...filterTypeParms, apiKey };
  const { data } = await axios({
    method: "GET",
    url: `https://newsapi.org/v2/${type}`,
    params: parms,
  });
  return data.articles;
};

export const setSources = async () => {
  const { data } = await axios({
    method: "GET",
    url: `https://newsapi.org/v2/top-headlines/sources`,
    params: {
      q: null,
      apiKey: apiKey,
    },
  });
  return data.sources;
};

export const getSourcesList = async () => {
  const array: any = [];
  const data = await setSources();
  data.map((item: any) => array.push(item.name));
  console.log(array);
  return array;
};
