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

  // eslint-disable-next-line no-unused-vars
  const repositories=[
    {name:'Repo 1', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'JavaScript'},
  {name:'Repo 2', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'JavaScript'},
  {name:'Repo 3', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'PHP'},
  {name:'Repo 4', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Ruby'},
  {name:'Repo 5', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Java'},
  {name:'Repo 5', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Typescript'},
  ];


  const languages = [
    { name: 'JavaScript', count: 2, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Ruby', count: 1, color: '#e74c3c' },
  ];

  return (

    <Container>
      <Sidebar>
       <Profile user ={user}/>
       <Filter languages={languages}/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>


  );
}
