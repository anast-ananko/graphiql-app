import { FC, useState, SyntheticEvent } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { welcomeAccordionText, welcomeAccordionArticleHeader } from './welcomeArrodion.style.ts';

const WelcomeAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded && panel);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography {...welcomeAccordionArticleHeader}>Project</Typography>
          <Typography sx={{ color: 'text.secondary' }}>GraphQl StarWars Explorer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...welcomeAccordionText}>
            Introducing the GraphQl StarWars Explorer project, a delightful journey where developers
            can traverse the vast reaches of the Star Wars universe with just a few keystrokes!
          </Typography>
          <Typography {...welcomeAccordionText}>
            Picture yourself wielding the power of GraphQL, the Jedi Knight of API query languages,
            as you delve into a galaxy filled with spaceships, droids, and lightsabers. With this
            project, you`ll feel like a Jedi librarian, effortlessly navigating through a treasure
            trove of Star Wars data.
          </Typography>
          <Typography {...welcomeAccordionText}>
            Explore characters like Luke Skywalker, Darth Vader, and Yoda with the grace of a
            Corellian smuggler, seamlessly traversing their connections, from their affiliations to
            their iconic quotes. Want to know which films R2-D2 made an appearance in? Simply summon
            the Force of GraphQL to retrieve the answer in an instant. But that`s not all!
          </Typography>
          <Typography {...welcomeAccordionText}>
            This project offers more twists than a Hutt`s tail. It allows you to unearth details
            about starships, planets, species, and even the ever-popular opening crawl of each Star
            Wars movie. You`ll feel like a protocol droid fluent in over six million forms of
            entertainment knowledge.
          </Typography>
          <Typography {...welcomeAccordionText}>
            So, embrace the GraphQl StarWars Explorer project, where coding meets the Force. It`s a
            whimsical adventure that will have you saying, `May the queries be with you` and
            laughing like a jovial Wookiee in no time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography {...welcomeAccordionArticleHeader}>Course</Typography>
          <Typography sx={{ color: 'text.secondary' }}>RS School React Course</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...welcomeAccordionText}>React Course is free and online!</Typography>
          <Typography {...welcomeAccordionText}>
            The RS School React course is working by the principle of pay it forward. Members of our
            community share their knowledge and check students tasks for free. And we hope our
            students will continue this work as our mentors in the future.
          </Typography>
          <Typography {...welcomeAccordionText}>
            Everyone can study at RS School, regardless of age, professional employment, or place of
            residence. However, you should have sufficient base knowledge before the program begins.
          </Typography>
          <Typography {...welcomeAccordionText}>
            After accomplishing an education, students will receive an electronic certificate of
            completion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WelcomeAccordion;
