import {
    GraphContainer,
    Header,
    Title,
    LineRow, 
    DataContainer
} from './GraphStyle';

interface GraphProps {
    title: string;
    data?: string;
}

const Graph = ({title, data}: GraphProps) => {
    return(
        <GraphContainer>
            <Header>
                <Title>{title}</Title>
                <LineRow></LineRow>
            </Header>
            <DataContainer>{data}</DataContainer>
        </GraphContainer>
    );
}
export default Graph;