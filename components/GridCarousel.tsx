import * as React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "ts-debounce";
import Box, { BoxProps } from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CarouselLeftIcon from "./icons/CarouselLeft";
import CarouselRightIcon from "./icons/CarouselRight";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    minWidth: "100%",
    alignItems: "center",
  },
  scroller: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    flex: "1 1 auto",
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-ms-overflow-style": "none",
  },
  nav: {},
  prev: {},
  next: {},
  navButton: {
    display: "flex",
    cursor: "pointer",
    margin: theme.spacing(0),
    color: brand.indigo,
    textAlign: "center",
    "& svg": {
      fontSize: theme.typography.pxToRem(48),
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.pxToRem(32),
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  selected: {},
}));

export interface GridCarouselProps extends BoxProps {
  children: React.ReactNodeArray;
  classes?: Partial<ReturnType<typeof useStyles>>;
}

const GridCarousel: React.FC<GridCarouselProps> = (props) => {
  const { children } = props;
  const numChildren = children.length;
  const [selected, setSelected] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollerRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  const classes = useStyles(props);
  const selectPrev = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.preventDefault();
      setSelected((numChildren + selected - 1) % numChildren);
    },
    [numChildren, selected]
  );
  const selectNext = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.preventDefault();
      const { current } = scrollerRef;
      let nextSelected = (numChildren + selected + 1) % numChildren;
      if (
        nextSelected > selected &&
        current &&
        current.scrollWidth - current.scrollLeft === current.clientWidth
      ) {
        // Wrap back to the beginning if scrolled to the end
        nextSelected = 0;
      }
      setSelected(nextSelected);
    },
    [numChildren, selected]
  );
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        selectPrev(event);
      } else if (event.key === "ArrowRight") {
        selectNext(event);
      }
    },
    [selectPrev, selectNext]
  );
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
        left: selected * (current.scrollWidth / children.length),
      });
    }
  }, [selected, scrollWidth, children.length]);
  const selectClosest = useCallback(() => {
    const { current } = scrollerRef;
    if (current === null) {
      return;
    }
    const els: HTMLElement[] = Array.from(current.children).filter(
      (x): x is HTMLElement => x instanceof HTMLElement
    );
    const parentRect = current.getBoundingClientRect();
    let firstVisible = null;
    let lastVisible = null;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      const elRect = el.getBoundingClientRect();
      const width = elRect.width;
      const x = elRect.x - parentRect.x;
      const percentVisible =
        x <= 0
          ? Math.max(0, x + width) / width
          : Math.min(width, parentRect.width - x) / width;
      if (percentVisible > 0) {
        firstVisible = firstVisible || { i, percentVisible };
        lastVisible = { i, percentVisible };
      }
    }
    if (firstVisible === null || lastVisible === null) {
      if (numChildren > 0) {
        setSelected(0);
      }
      return;
    }
    setSelected(
      firstVisible.i +
        (lastVisible.percentVisible > firstVisible.percentVisible ? 1 : 0)
    );
  }, [numChildren]);
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
  }, [selectClosest]);
  return (
    <Box className={classes.root} onKeyDown={handleKeyDown} {...props}>
      <nav className={clsx(classes.nav, classes.prev)}>
        <IconButton
          onClick={selectPrev}
          className={classes.navButton}
          title="Previous"
        >
          <CarouselLeftIcon />
        </IconButton>
      </nav>

      <div className={classes.scroller} ref={scrollerRef}>
        {children}
      </div>
      <nav className={clsx(classes.nav, classes.next)}>
        <IconButton
          onClick={selectNext}
          className={classes.navButton}
          title="Next"
        >
          <CarouselRightIcon />
        </IconButton>
      </nav>
    </Box>
  );
};

export default GridCarousel;
