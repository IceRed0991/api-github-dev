import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import{Container, Header, Avatar, Login, Name, Inner, Data} from './styles';

export default function Profile () {
  return (
     <Container>
        <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/16406369?v=4"/>
        <Login>IceRed0991</Login>
        <Name>Werner Eduard Gutschow</Name>
        </Header>
        <Inner>
          <Data><MdGroup size={20}/>
            30 <i>&nbsp; seguidores &nbsp; </i> &middot; 10 <i>&nbsp;seguindo</i>
          </Data>
          <Data><MdWork size={20}/> Unimed</Data>
          <Data><MdLocationCity size={20}/> Assis - SP</Data>
          <Data>
            <MdLink size={20}/>
            <a href="https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/">Linkedin</a>
          </Data>
        </Inner>

      </Container>
  );
}
