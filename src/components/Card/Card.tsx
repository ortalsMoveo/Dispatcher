import {
  CardContainer,
  ImgCard,
  CardContent,
  HeadContentCard,
  HeadLines,
  CardTitle,
  CardText,
  TagList,
  ButtonContainer,
} from "./CardStyle";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button";
import React, { useState } from "react";
import imageNotLoad from "../../assets/image-not-found.svg";

export type CardText = {
  date: string;
  title: string;
  sourcePath: string;
  text: string;
  url: string;
};
const primaryButton: ButtonProps = {
  buttonText: "NAVIGATE TO DISPATCH",
  icon: true,
  fullWidth: true,
};

export interface CardProp {
  imagePath: string;
  cardData: CardText;
}

const Card = ({ imagePath, cardData }: CardProp) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleImgError = (e: any) => {
    e.target.src = imageNotLoad;
  };

  return (
    <CardContainer>
      <ImgCard src={imagePath} onError={handleImgError} />
      <CardContent>
        <HeadContentCard>
          <HeadLines>{cardData.date}</HeadLines>
        </HeadContentCard>
        <CardTitle>{cardData.title}</CardTitle>
        <HeadLines>{cardData.sourcePath}</HeadLines>
        <CardText>{cardData.text}</CardText>
        <ButtonContainer>
          <Button
            buttonText={primaryButton.buttonText}
            icon={primaryButton.icon}
            onClick={() => openInNewTab(cardData.url)}
          />
        </ButtonContainer>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
