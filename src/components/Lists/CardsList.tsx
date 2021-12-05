import { CardsContainer } from "./style";
import Card from "../Card/Card";
import { CardObj } from "../../fetchers/MainPage/MainPage";
import moment from "moment";
import imageNotLoad from "../../assets/image-not-found.svg";
import InfiniteScroll from "react-infinite-scroll-component";

interface CardsListProps {
  cardsList: CardObj[];
  fetchMoreData: () => void;
  hasMoreData: boolean;
}

const titleStyle = {
  fontSize: "14px",
  lineHeight: "22px",
  letterSpacing: "0.25px",
  color: "rgba(90, 90, 137, 0.5)",
  width: "100%",
  height: "100%",
  overflow: "none",
};

const CardsList = ({
  cardsList,
  fetchMoreData,
  hasMoreData,
}: CardsListProps) => {
  return (
    <div style={{ width: "100%" }}>
      <InfiniteScroll
        style={titleStyle}
        dataLength={cardsList.length}
        next={fetchMoreData}
        hasMore={hasMoreData}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No further results </b>
          </p>
        }
        scrollableTarget="CardsContainer"
      >
        <CardsContainer id={"CardsContainer"}>
          {cardsList?.map((card, i) => (
            <Card
              key={i}
              imagePath={card.urlToImage ? card.urlToImage : imageNotLoad}
              cardData={{
                date: moment(card.publishedAt).format("dddd MMM DD, YYYY"),
                title: card.title,
                sourcePath: card.source.name,
                text: card.description,
                url: card.url,
              }}
            />
          ))}
        </CardsContainer>
      </InfiniteScroll>
    </div>
  );
};

export default CardsList;
