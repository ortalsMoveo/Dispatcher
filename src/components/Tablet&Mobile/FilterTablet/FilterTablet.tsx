import {Container,
    FilterTitle,
    SeparateLine,
    FilterSearch,
    ButtonPosition, 
    FilterContent,
    IconStyle,
    AllSearches
} from './FilterTabletStyle';
import FilterCategory,{Category} from '../../FilterCategory/FilterCategory';
import Button, {ButtonProps} from '../../Button/Button';

export interface FilterProps {
    title: string;
    icon?: string;
    list: Category[];
    button: ButtonProps;
    subFilter: boolean;
}

const FilterTablet = ({title, icon,subFilter, list, button}: FilterProps) => {
    return(
        <Container>
            <FilterContent>
                <FilterTitle>
                    <IconStyle src={icon}/>
                    {title}
                </FilterTitle>
                {!subFilter && 
                    <span>
                        <SeparateLine></SeparateLine>
                        <FilterSearch>
                            <AllSearches>Search in</AllSearches>
                            <AllSearches>Evrything</AllSearches>   
                        </FilterSearch>
                    </span>
                }
                <SeparateLine></SeparateLine>
                {list?.map((item) => (
                    <div>
                        <FilterCategory 
                            key={item.categoryName}
                            categoryName={item.categoryName}
                            categoryOption={item.categoryOption}
                        />
                        <SeparateLine></SeparateLine>
                    </div>
                ))}
            </FilterContent>
            <ButtonPosition>
                <Button 
                    buttonText={button.buttonText}
                />
            </ButtonPosition>

        </Container>
    );
}

export default FilterTablet;