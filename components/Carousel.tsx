import * as React from "react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "ts-debounce";

const useStyles = makeStyles(theme => ({
  scroller: {
    display: "flex",
    overflowX: "scroll",
    flex: "1 1 auto",
    scrollSnapType: "x mandatory",
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
    userSelect: "none"
  },
  li: {
    cursor: "pointer",
    color: theme.palette.common.white,
    margin: `0 ${theme.spacing(1)}px`
  },
  liSelected: {
    cursor: "initial",
    pointerEvents: "none",
    color: theme.palette.secondary.main
  },
  section: {
    backgroundColor: "#F5A362",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: "100%"
  }
}));

export interface CarouselProps {
  children: React.ReactNodeArray;
  classes?: Partial<ReturnType<typeof useStyles>>;
}

function mergeClasses<T extends Record<string, string>>(
  defaults: T,
  overrides?: Partial<T>
) {
  if (overrides === undefined) {
    return defaults;
  }
  const classes = { ...defaults };
  for (const k in defaults) {
    const v = overrides[k];
    if (typeof v === "string") {
      classes[k as keyof T] = clsx(classes[k], v) as any;
    }
  }
  return classes;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  classes: overrideClasses
}) => {
  const [selected, setSelected] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(
    null
  );
  const classes = mergeClasses(useStyles(), overrideClasses);
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
  return (
    <section className={classes.section}>
      <div className={classes.scroller} ref={scrollerRef}>
        {children}
      </div>
      <ul className={classes.ul}>
        {children.map((_, idx) => (
          <li
            key={idx}
            data-key={idx}
            className={clsx(classes.li, {
              [classes.liSelected]: idx === selected
            })}
            onClick={event => {
              event.preventDefault();
              setSelected(idx);
            }}
          >
            ⬤
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
