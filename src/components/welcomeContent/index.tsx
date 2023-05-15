import { FC, useState } from 'react';

import DeveloperCard from './developerCard';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './welcomeContent.scss';

const WelcomeContent: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="welcome-content">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Project</Typography>
          <Typography sx={{ color: 'text.secondary' }}>GraphQl StarWars Explorer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Introducing the GraphQl StarWars Explorer project, a delightful journey where developers
            can traverse the vast reaches of the Star Wars universe with just a few keystrokes!
            Picture yourself wielding the power of GraphQL, the Jedi Knight of API query languages,
            as you delve into a galaxy filled with spaceships, droids, and lightsabers. With this
            project, you`ll feel like a Jedi librarian, effortlessly navigating through a treasure
            trove of Star Wars data. Explore characters like Luke Skywalker, Darth Vader, and Yoda
            with the grace of a Corellian smuggler, seamlessly traversing their connections, from
            their affiliations to their iconic quotes. Want to know which films R2-D2 made an
            appearance in? Simply summon the Force of GraphQL to retrieve the answer in an instant.
            But that`s not all! This project offers more twists than a Hutt`s tail. It allows you to
            unearth details about starships, planets, species, and even the ever-popular opening
            crawl of each Star Wars movie. You`ll feel like a protocol droid fluent in over six
            million forms of entertainment knowledge. So, embrace the GraphQl StarWars Explorer
            project, where coding meets the Force. It`s a whimsical adventure that will have you
            saying, `May the queries be with you` and laughing like a jovial Wookiee in no time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Course</Typography>
          <Typography sx={{ color: 'text.secondary' }}>RSSchool React Course</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Free | Online | in English</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Developers</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Coding Jedis Unleashed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Introducing the project developers, a motley crew of code-wielding rebels and tech-savvy
            scoundrels! With their fingers flying across keyboards at hyperspeed, they bring forth a
            project that`s more powerful than an army of astromech droids and funnier than Jar Jar
            Binks clumsiness.
          </Typography>
          <div className="welcome-content__developer-cards">
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default WelcomeContent;
