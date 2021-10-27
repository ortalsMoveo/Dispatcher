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
import ArrowIcon from '../../assets/Arrow - Right.svg';

export type CardText = {
    date: string;
    title: string;
    sourcePath: string;
    text: string;
}
const primaryButton: ButtonProps = {
    buttonType: 'primary',
    buttonText: 'NAVIGATE TO DISPATCH',
    icon: ArrowIcon,
    fullWidth: true
  }

interface CardProp {
    imagePath: string;
    tags: string[];
    cardData: CardText;
}

const Card = ({imagePath, tags, cardData}: CardProp) => {
    return(
        <CardContainer>
            <ImgCard src={imagePath}/>
            <CardContent>
                <HeadContentCard >
                   <HeadLines>{cardData.date}</HeadLines> 
                   <TagList>
                        {tags.map((item) => (
                            <Tag key={item} textTag={item}/>
                        ))}
                   </TagList>
                </HeadContentCard>
                <CardTitle>{cardData.title}</CardTitle>
                <HeadLines>{cardData.sourcePath}</HeadLines> 
                <CardText>{cardData.text}</CardText>
                <ButtonContainer>
                    <Button 
                        buttonType={primaryButton.buttonType} 
                        buttonText={primaryButton.buttonText}
                        icon={primaryButton.icon} 
                        />
                </ButtonContainer>
            </CardContent>
        </CardContainer>
    );
}

export default Card;