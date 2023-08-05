import { FC, useState, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { welcomeAccordionText, welcomeAccordionArticleHeader } from './welcomeAccordion.style.ts';

const WelcomeAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const { t: localize } = useTranslation();

  const handleChange =
    (panel: string) =>
    (_: SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded && panel);
    };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography {...welcomeAccordionArticleHeader}>{localize('project.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{localize('project.subTitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {(localize('project.description', { returnObjects: true }) as string[]).map(
            (textLine) => {
              return (
                <Typography {...welcomeAccordionText} key={uuid()}>
                  {textLine}
                </Typography>
              );
            }
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography {...welcomeAccordionArticleHeader}>{localize('course.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{localize('course.subTitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {(localize('course.description', { returnObjects: true }) as string[]).map((textLine) => {
            return (
              <Typography {...welcomeAccordionText} key={uuid()}>
                {textLine}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WelcomeAccordion;
