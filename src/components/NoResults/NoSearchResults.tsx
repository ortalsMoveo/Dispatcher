import { SearchResults, LogoSearch} from "./Style";

export interface SearchResults{
    logoPath: string;
    text?: string;
}

const NoSearchResults = ({logoPath, text}: SearchResults) => {
    return(
        <SearchResults>
            <LogoSearch src={logoPath}/>
            <p>{text}</p>
        </SearchResults>
    );
}

export default NoSearchResults;