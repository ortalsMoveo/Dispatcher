import NoSearchResults,{SearchResults} from '../NoResults/NoSearchResults';
import {
    GraphContainer,
    Title,
    LineRow, 
    DataContainer
} from './GraphStyle';



export interface GraphProps {
    title: string;
    data?: string;
    noDataToDisplay?: SearchResults;
}

const Graph = ({title, data, noDataToDisplay}: GraphProps) => {
    return(
        <GraphContainer>
            <Title>{title}</Title>
            <LineRow></LineRow>
            <DataContainer>
                {noDataToDisplay && 
                    <NoSearchResults 
                        logoPath={noDataToDisplay.logoPath} 
                        text={noDataToDisplay.text}
                /> }
            </DataContainer>
        </GraphContainer>
    );
}
export default Graph;