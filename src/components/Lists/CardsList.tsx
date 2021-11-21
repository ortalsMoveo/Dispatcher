import { CardsContainer } from "./style";
import Card from "../Card/Card";
import { CardProps } from "./Props";

const dataTags = ["#Covid-19", "Israel", "+2"];

interface CardsListProps {
  cardsList: CardProps[];
}

const CardsList = ({ cardsList }: CardsListProps) => {
  return (
    <CardsContainer>
      {cardsList?.map((card, i) => (
        <Card
          key={i}
          imagePath={card.urlToImage}
          tags={dataTags}
          cardData={{
            date: card.publishedAt,
            title: card.title,
            sourcePath: card.source.name,
            text: card.description,
          }}
        />
      ))}
    </CardsContainer>
  );
};

export default CardsList;
