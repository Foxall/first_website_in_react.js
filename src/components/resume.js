import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from './png/pokemon.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={avatar}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Quentin De Nascimento</h2>
            <h4 style={{color: 'grey'}}>Programmeur</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Devellopeur a tans perdu qui code des site web et tue des elfes noirs a temps partiel</h5>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h4>Address</h4>
            <h5>250 Rue Madeleine Ribérioux, Lille 5900</h5>
            <h4>Téléphone</h4>
            <h5>0695534954</h5>
            <h4>Email</h4>
            <h5>quentin.denascimento2@orange.fr</h5>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2024}
              schoolName="Epitech Lille"
              schoolDescription="Cursus de 5ans avec aprentissage du C, C++, python. 18 mois de stage avec possibilités d'alternance."
               />

               <Education
                 startYear={2016}
                 endYear={2019}
                 schoolName="Lycée Condorcet"
                 schoolDescription="Bac S spécialité Science de l'Ingénieur, option Informatique et Science du Numérique ainsi que Golf"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Job d'été"
              jobDescription="Agent de mise en rayon de produit liquide"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={40}
                />
                <Skills
                  skill="C"
                  progress={90}
                  />
                  <Skills
                    skill="C++"
                    progress={40}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
