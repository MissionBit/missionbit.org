import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TeamData, { TeamMemberProps } from "./TeamData";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import {
  bindTrigger,
  usePopupState,
  bindPopover,
} from "material-ui-popup-state/hooks";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridAutoFlow: "dense",
    gridTemplateColumns: "repeat(auto-fit, 180px)",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      padding: 0,
      gridTemplateColumns: "repeat(auto-fit, 160px)",
    },
  },
  heading: {
    margin: theme.spacing(2, 0),
    fontWeight: theme.typography.fontWeightBold,
  },
  imageBio: {
    position: "relative",
    "& img": {
      minWidth: "100px",
      maxWidth: "150px",
      borderRadius: "50%",
    },
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.h5.fontSize,
  },
  bio: {
    position: "absolute",
    right: -theme.spacing(1),
    bottom: -theme.spacing(1),
  },
  bioTypography: {
    padding: theme.spacing(1),
    maxWidth: 600,
  },
}));

const BioPopover: React.FC<{
  name: string;
  className: string;
}> = ({ name, children, className }) => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: `bio-${name.replace(/\s/g, "-")}`,
  });
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={className}
        {...bindTrigger(popupState)}
      >
        <InfoIcon />
      </IconButton>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {children}
      </Popover>
    </>
  );
};

const Team: React.FC<{}> = () => {
  const classes = useStyles();

  const TeamMember: React.FC<TeamMemberProps<React.ReactNode>> = ({
    name,
    title,
    image,
    bio,
  }) => (
    <div>
      <div className={classes.imageBio}>
        <picture>
          <source type="image/webp" srcSet={image.webp} />
          <img alt={name} src={image.jpg} />
        </picture>
        {bio ? (
          <BioPopover name={name} className={classes.bio}>
            <Typography className={classes.bioTypography}>{bio}</Typography>
          </BioPopover>
        ) : null}
      </div>
      <Typography className={classes.name}>{name}</Typography>
      <Typography variant="body1">{title}</Typography>
    </div>
  );

  return (
    <Container component="section" id="team">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        className={classes.heading}
      >
        Our Team
      </Typography>
      {TeamData.map(({ section, members }, idx) => (
        <React.Fragment key={section}>
          {idx === 0 ? null : (
            <Typography
              variant="h4"
              component="h3"
              align="center"
              className={classes.heading}
            >
              {section}
            </Typography>
          )}
          <Box className={classes.container}>
            {members.map((props) => (
              <TeamMember key={props.name} {...props} />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Team;
