import React,{useState} from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import {Container,Sidebar,Main} from './styles';
import {getLangsForm} from "../../services/api";



export default function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

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
    {id:"1",name:'Repo 1', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'JavaScript'},
  {id:'2',name:'Repo 2', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'JavaScript'},
  {id:'3',name:'Repo 3', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'PHP'},
  {id:'4',name:'Repo 4', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Ruby'},
  {id:'5',name:'Repo 5', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Java'},
  {id:'6',name:'Repo 5', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Typescript'},
  {id:'7',name:'Repo 6', description: 'Descrição', html_url:'https://www.linkedin.com/in/werner-eduard-gutschow-72a513213/',
  language: 'Typescript'},
  ];

  const languages = getLangsForm(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

   return (

    <Container>
      <Sidebar>
       <Profile user ={user}/>
       <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick}/>
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>


  );
}
