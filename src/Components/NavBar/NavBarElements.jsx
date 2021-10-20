import styled from 'styled-components/macro';
import {Link as LinkR} from 'react-router-dom';
import {Link as Links} from 'react-scroll';

export const Nav = styled.nav`
background: #000;
height:80px;
margin-top: -80px;
display:flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position:sticky;
top:0;
z-index:2;

@media screen and (max-width:960px){
    transition: 0ms.8s all ease;
}
`;

export const NavBarContainer = styled.div`
display:flex;
justify-content:space-around;
height: 80px;
z-index:1;
width: 100%;
padding:0 24px;
/* max-width:100px; */
`;


export const NavLogo = styled(LinkR)`
align-items: center;
display: flex;
color:#ffff;
/* justify-self: flex-start; */
cursor: pointer;
font-size: 1.5rem;
margin-left: 24px;
font-weight:bold;
text-decoration:none;
`;

export const MobileIcon=styled.div`
display:none;


@media screen and (max-width:768px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#ffff;
}
`;
export const NavMenu=styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`;
export const NavItem=styled.li`
height: 80px;
`;
export const NavLinks=styled(Links)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

&.active{
    border-bottom: 3px solid #01bf71;
}
`;


export const NavBtn = styled.nav`
display: flex;
align-items:center;


@media screen and (max-width:768px){
    display: none;
}
`;

export const NavBtnLink= styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor: pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}
`;