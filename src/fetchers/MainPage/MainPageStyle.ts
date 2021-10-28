import styled from  'styled-components';
import {darkBlue, gray, Gray90, BlueBuzz, white, DarkGray} from '../../globalStyle';

const style = {
    background: `${DarkGray}`,
    opacity: '0.7',
    width: '402px'
}
export const Container = styled.div`
    background: ${Gray90};
`;

export const PageContent = styled.div`
    width: 80%;
    margin: 0% 10%;   
`;
export const Tablet = styled.div`
    display: flex;
    width: 770px;
`;
export const Content = styled.div`
    padding:  0px 21px;
`;

export const TabletPageContent = styled.div<{showFilter: boolean}>`
    ${props => props.showFilter ? style : null}
`;

export const FilterSidebar = styled.div`
    background: ${white};
    z-index: 1;
    width: 368px;
`;
export const FilterContainer = styled.div`
    padding: 10px;
    margin: 10px;
    height: 50px;
    display: flex;
    gap: 20px;
    width: 175px;
`;

export const Title = styled.h3`
    color: ${darkBlue};
    font-family: Roboto;
    font-weight: 500;
    font-size: 24px;
`;

export const ContentLists = styled.div`
    display: flex;
    gap: 20px;
`;

export const CardsListTablet = styled.div`
   display: flex;
    flex-direction: column;
    gap: 20px;
    width: 728px;
`;

export const CardsList = styled.div`
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
        background: ${BlueBuzz};
        height: 50px;
    }   
    height: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const GraphsList = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;

`;
export const SeparateLine = styled.div`
    opacity: 0.5;
    border: 1px solid ${gray};
`;