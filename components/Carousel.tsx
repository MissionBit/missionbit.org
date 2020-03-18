import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "ts-debounce";
import Paper, { PaperProps } from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "100%"
  },
  scroller: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    flex: "1 1 auto",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    color: "#333",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      padding: theme.spacing(2, 0)
    },
    userSelect: "none"
  },
  li: {
    cursor: "pointer",
    margin: theme.spacing(0, 1),
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: theme.palette.action.disabled,
    "&$selected": {
      cursor: "initial",
      pointerEvents: "none",
      backgroundColor: theme.palette.primary.main
    }
  },
  selected: {}
}));

export interface CarouselProps extends PaperProps {
  children: React.ReactNodeArray;
  classes?: Partial<ReturnType<typeof useStyles> & PaperProps["classes"]>;
}

const Carousel: React.FC<CarouselProps> = props => {
  const { children } = props;
  const [selected, setSelected] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
  );
  const classes = useStyles(props);
  useEffect(() => {
    const handleResize = debounce(
      () => {
        const { current } = scrollerRef;
        if (current !== null) {
          setScrollWidth(current.scrollWidth);
        }
      },
      100,
      { isImmediate: false }
    );
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  useEffect(() => {
    const { current } = scrollerRef;
    if (current !== null) {
      current.scrollTo({
        behavior: "smooth",
        left: selected * (current.scrollWidth / children.length)
      });
    }
  }, [selected, scrollWidth, scrollerRef.current]);
  const selectClosest = () => {
    const { current } = scrollerRef;
    if (current === null) {
      return;
    }
    const els: HTMLElement[] = Array.from(current.children).filter(
      (x): x is HTMLElement => x instanceof HTMLElement
    );
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const { x, width } = el.getBoundingClientRect();
      if (Math.abs(x) < 0.5 * width) {
        setSelected(i);
        break;
      }
    }
  };
  useEffect(() => {
    const { current } = scrollerRef;
    if (current === null) {
      return;
    }
    const handleScroll = debounce(selectClosest, 100, { isImmediate: false });
    current.addEventListener("scroll", handleScroll);
    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [scrollerRef.current]);
  const defaults = {
    elevation: 0,
    square: true
  };
  return (
    <Paper
      component="section"
      className={classes.root}
      {...defaults}
      {...props}
    >
      <div className={classes.scroller} ref={scrollerRef}>
        {children}
      </div>
      <ul className={classes.ul}>
        {children.map((_, idx) => (
          <li
            key={idx}
            data-key={idx}
            className={clsx(classes.li, {
              [classes.selected]: idx === selected
            })}
            onClick={event => {
              event.preventDefault();
              setSelected(idx);
            }}
          />
        ))}
      </ul>
    </Paper>
  );
};

export default Carousel;
