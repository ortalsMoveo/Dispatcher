import {Container,
    FilterTitle,
    SeparateLine,
    FilterSearch,
    ButtonPosition, 
    FilterContent,
    IconStyle,
} from './FilterTabletStyle';
import FilterCategory,{Category} from '../../FilterCategory/FilterCategory';
import Button, {ButtonProps} from '../../Button/Button';

interface Filter {
    title: string;
    icon?: string;
    list: Category[];
    button: ButtonProps;
    subFilter: boolean;
}

const FilterTablet = ({title, icon,subFilter, list, button}: Filter) => {
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
                            <span>Search in</span>
                            <span>Evrything</span>  
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
                    buttonType={button.buttonType} 
                    buttonText={button.buttonText}
                    icon={false}
                />
            </ButtonPosition>

        </Container>
    );
}

export default FilterTablet;