import { Container } from './style';
import Filter from '../Filter/Filter';
import {FILTER_OPTIONS ,HeadLinesFilters, EverythingFilters} from '../../FiltersData';

interface Props{
    filterType : FILTER_OPTIONS;
}

const FilterContainer = ({filterType}:Props) => {   
    let list = null;
    if(filterType === FILTER_OPTIONS.EVERYTHING){
        list = EverythingFilters;
    }
    else{
        list = HeadLinesFilters;
    }
    return(
        <Container>
            {list?.map(item => (
                <Filter 
                    key={item.filterText}
                    filterText={item.filterText}
                    listItems={item.listItems}
                    date={item.date}
                />
            ))}
        </Container>
    );
}

export default FilterContainer;