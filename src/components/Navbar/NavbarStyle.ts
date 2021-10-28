import styled from 'styled-components';
import {darkBlue} from '../../globalStyle';

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
    padding: 14px;
    margin: 10px;
    height: 26px;
    gap: 15px;
`;

export const Logo = styled.img`
    /* width: 51px;
    height: 50px; */
`;
