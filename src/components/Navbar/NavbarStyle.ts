import styled from 'styled-components';
import {darkBlue, blue, white} from '../../globalStyle';

export const NavbarContainer = styled.div`
    background: ${darkBlue};
    display: flex;
    justify-content: space-between;
    height: 74px;
    width: 100%;
    min-width: 768px;
`;

export const Nav = styled.div`
    display: flex;
    padding: 3px 10px;
    width: 40%;
    max-width:900px;
    gap: 10px;
`;

export const IconsContainer = styled.div`
    display: flex;
    
`;

export const Icons = styled.div`
    display: flex;
    padding: 15px 0px;
    margin: 10px;
    gap: 15px;
    box-sizing: border-box;
`;

export const Logo = styled.img`
    width: 71px;
    height: 70px;
    box-sizing: border-box; 

`;

export const Avatar = styled.div`
    background: ${blue};
    border-radius: 30px;
    color: ${white};
    text-align: center;
    width:50px;
    height: 50px;
    padding: 13px;
    margin: 13px 6px;
    box-sizing: border-box; 
`;