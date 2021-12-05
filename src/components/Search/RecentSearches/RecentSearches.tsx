import {
  SearchResults,
  RecentSearchesContainer,
  RecentItem,
  SeparateLine,
} from "./RecentSearchesStyle";
import Clear from "../../Clear/Clear";
import exitIcon from "../../../assets/exit.svg";
import React, { Dispatch, useState } from "react";

export interface RecentSearchesProps {
  recentSearches: string[];
  clearBackground?: boolean;
  recentSearchesQuerys: string[];
  setRecentSearchesQuerys: Dispatch<React.SetStateAction<string[]>>;
}

const RecentSearches = ({
  recentSearches,
  clearBackground,
  recentSearchesQuerys,
  setRecentSearchesQuerys,
}: RecentSearchesProps) => {
  const localStorageData = JSON.parse(localStorage.getItem("RecentSearches")!);
  const [storage, setStorage] = useState<string[]>(
    recentSearches.length < localStorageData.length
      ? localStorageData
      : recentSearches
  );

  const claerRecentSearches = () => {
    setRecentSearchesQuerys([]);
    localStorage.setItem("RecentSearches", JSON.stringify([]));
    setStorage([]);
  };

  const clearItem = (item: string) => {
    const recentSearch = JSON.parse(localStorage.getItem("RecentSearches")!);
    for (let i = 0; i < recentSearches.length; i++) {
      if (recentSearch[i] === item) {
        recentSearches.splice(i, 1);
        setRecentSearchesQuerys(recentSearch);
        localStorage.setItem("RecentSearches", JSON.stringify(recentSearch));
        break;
      }
    }
  };

  return (
    <div>
      {storage.length! > 0 && (
        <SearchResults>
          <RecentSearchesContainer>
            RECENT SEARCHES
            <Clear
              gotBackground={clearBackground && clearBackground}
              onClick={claerRecentSearches}
            />
          </RecentSearchesContainer>
          {storage?.map((item, i) => {
            return (
              <div key={i}>
                <RecentItem>
                  {item}
                  {/* <img
                    src={exitIcon}
                    onClick={() => clearItem(item)}
                    alt="exitIcon"
                    style={{
                      width: "15px",
                      padding: "10px 0px",
                      margin: "0px 10px",
                    }}
                  /> */}
                </RecentItem>
                <SeparateLine></SeparateLine>
              </div>
            );
          })}
        </SearchResults>
      )}
    </div>
  );
};

export default RecentSearches;
