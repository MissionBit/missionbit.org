import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SippinOnSunshine from "components/fonts/SippinOnSunshine";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {},
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: theme.spacing(4),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  category: {},
  categoryImage: {
    gridRow: 1,
    maxHeight: "15rem",
    justifySelf: "center",
  },
  categoryTitle: {
    fontFamily: `"Sippin On Sunshine"`,
    textTransform: "uppercase",
    fontSize: theme.typography.pxToRem(30),
    textAlign: "center",
    color: brand.indigo,
    gridRow: 2,
  },
  categoryCopy: {
    gridRow: 3,
    textAlign: "justify",
  },
}));

const Category: React.FC<{
  title: React.ReactNode;
  src: string;
  alt: string;
}> = ({ title, children, src, alt }) => {
  const classes = useStyles();
  return (
    <>
      <img src={src} alt={alt} className={classes.categoryImage} />
      <Typography variant="h4" className={classes.categoryTitle}>
        Most
        <br />
        {title}
      </Typography>
      <Typography className={classes.categoryCopy}>{children}</Typography>
    </>
  );
};

const JudgingCategories: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="judging" className={classes.root}>
      <SippinOnSunshine />
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Judging Categories
        </Typography>
        <Box className={classes.categories}>
          <Category
            title="Innovative"
            src={require("public/images/demoday/categories/innovation.svg")}
            alt="Light bulb with gear"
          >
            Recognizes projects that demonstrate creativity and embrace
            experimentation to break conventions of form or concept.
          </Category>
          <Category
            title="Significant Impact"
            src={require("public/images/demoday/categories/impact.svg")}
            alt="Hands holding up globe with heart above"
          >
            Recognizes projects that target specific social issues with proven
            outcomes/actions that align with Mission Bit core values.
          </Category>
          <Category
            title="Technical"
            src={require("public/images/demoday/categories/technical.svg")}
            alt="Terminal windows"
          >
            Recognizes projects that have all or most of the following
            attributes in their code: maintainability, reusability, readability,
            and efficiency.
          </Category>
        </Box>
      </Container>
    </Box>
  );
};

export default JudgingCategories;
