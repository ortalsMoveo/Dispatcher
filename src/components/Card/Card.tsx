import { CardContainer,
    ImgCard,
    CardContent, 
    HeadContentCard, 
    HeadLines, 
    CardTitle,
    CardText, 
    TagList,
    ButtonContainer
} from './CardStyle';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';
import {ButtonProps} from '../Button/Button';

export type CardText = {
    date: string;
    title: string;
    sourcePath: string;
    text: string;
}

interface CardProp {
    imagePath: string;
    tags: string[];
    buttonProps: ButtonProps;
    cardData: CardText;
}
const Card = ({imagePath, tags, buttonProps, cardData}: CardProp) => {
    return(
        <CardContainer>
            <ImgCard src={imagePath}/>
            <CardContent>
                <HeadContentCard >
                   <HeadLines>{cardData.date}</HeadLines> 
                   <TagList>
                        {tags.map((item) => (
                            <Tag textTag={item}/>

                        ))}
                   </TagList>

                </HeadContentCard>
                <CardTitle>{cardData.title}</CardTitle>
                <HeadLines>{cardData.sourcePath}</HeadLines> 

                <CardText>{cardData.text}</CardText>
                <ButtonContainer>
                    <Button 
                        buttonType={buttonProps.buttonType} 
                        buttonText={buttonProps.buttonText}
                        icon={buttonProps.icon} 
                        />
                </ButtonContainer>

            </CardContent>
        </CardContainer>
    );
}

export default Card;