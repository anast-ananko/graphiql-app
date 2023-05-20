import { FC, useState } from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DeveloperCard: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="welcome-content__developer-card" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Developer FullName"
      />
      <CardMedia
        component="img"
        height="194"
        image="src/assets/images/developers/darth-vader-yoga.jpg"
        alt="Developer StarWars role img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Funny short words about developer
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Meaningful facts:</Typography>
          <Typography paragraph>
            Can write code faster than Han Solo can make the Kessel Run in less than twelve
            parsecs—impressive, even for a Millennium Falcon pilot!
          </Typography>
          <Typography paragraph>
            Just like R2-D2, this developer`s troubleshooting skills are legendary.
          </Typography>
          <Typography paragraph>
            Much like Obi-Wan Kenobi, this developer has a knack for mentoring and guiding junior
            team members, shaping them into Jedi knights of the coding realm.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DeveloperCard;
