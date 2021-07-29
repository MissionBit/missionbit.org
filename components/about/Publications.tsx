import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(4),
  },
  documents: {
    margin: `${theme.spacing(3)}px auto`,
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

interface Document {
  href: string;
  title: string;
}

const Documents: Document[] = [
  {
    href:
      "/annual-reports/2020/mission-bit-reviewed-financial-statements-2020-2019.pdf",
    title: "Mission Bit Reviewed Financial Statements 2020 and 2019",
  },
  {
    href: "/annual-reports/2019/mission-bit-annual-report-2019.pdf",
    title: "Mission Bit Annual Report 2019",
  },
  {
    href: "/annual-reports/2018/mission-bit-annual-report-2018.pdf",
    title: "Mission Bit Annual Report 2018",
  },
  {
    href:
      "/annual-reports/2018/mission-bit-reviewed-financial-statements-2018.pdf",
    title: "Mission Bit Reviewed Financial Statements 2018",
  },
];

const Publications: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="publications" className={classes.root}>
      <Typography variant="h4" component="h2" align="center">
        Publications
      </Typography>
      <Typography className={classes.documents} component="ul">
        {Documents.map(({ href, title }, i) => (
          <li key={i}>
            <a href={href} target="_blank" rel="noreferrer noopener">
              {title}
            </a>
          </li>
        ))}
      </Typography>
    </Container>
  );
};

export default Publications;
