import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";

import {Container,Sidebar,Main} from './styles';
import Repositories from "./Repositories";


export default function RepositoriesPage() {
  const user={
    login:"IceRed0991",
    name:"Werner Eduard Gutschow",
    avatar_url: "https://avatars.githubusercontent.com/u/16406369?v=4",
    followers:1,
    following: 1,
    company: 'Unimed',
    blog: "https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/",
    location: 'Assis -SP',
  };

  return (

    <Container>
      <Sidebar>
       <Profile user ={user}/>
       <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>


  );
}
