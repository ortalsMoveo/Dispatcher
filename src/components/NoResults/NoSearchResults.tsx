import { SearchResults, LogoSearch} from "./Style";

export type SearchResults = {
    logoPath: string;
    title: string;
}

const NoSearchResults = ({logoPath, title}: SearchResults) => {
    return(
        <SearchResults>
            <LogoSearch src={logoPath}/>
            <p>{title}</p>
        </SearchResults>
    );
}

export default NoSearchResults;