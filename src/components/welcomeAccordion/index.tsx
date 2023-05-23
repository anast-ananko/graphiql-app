import { FC, useState, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
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
          <Typography {...welcomeAccordionArticleHeader}>
            {localize('welcomeAccordion.project')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {localize('welcomeAccordion.text-1')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-2')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-3')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-4')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-5')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-6')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography {...welcomeAccordionArticleHeader}>
            {localize('welcomeAccordion.course-1')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {localize('welcomeAccordion.course-2')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.course-3')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-7')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-8')}</Typography>
          <Typography {...welcomeAccordionText}>{localize('welcomeAccordion.text-9')}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WelcomeAccordion;
