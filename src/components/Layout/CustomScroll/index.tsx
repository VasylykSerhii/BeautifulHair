import React, { useState, useMemo, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { scrollDirection } from "constants/index";
import { useScrollBarDara } from "hooks";
import { TrackVertical, ThumbVertical } from "./styled-components";

const { SCROLL_DIRECTION_UP, SCROLL_DIRECTION_DOWN } = scrollDirection;

const trackV = ({ style, ...props }) => (
  <TrackVertical style={style} {...props} />
);

const thumbV = ({ style, ...props }) => (
  <ThumbVertical style={{ ...style }} {...props} />
);

interface IProps {
  children: React.ReactNode;
}

const CustomScroll = ({ children }: IProps): JSX.Element => {
  const [top, setTop] = useState(0);
  const { setScrollDir, setOffsetTop } = useScrollBarDara();
  const handleUpdate = useCallback(
    (e) => {
      setOffsetTop(e.scrollTop);

      if (e.scrollTop === top) {
        return;
      }

      setScrollDir(
        e.scrollTop > top ? SCROLL_DIRECTION_DOWN : SCROLL_DIRECTION_UP
      );
      setTop(e.scrollTop);
    },
    [top, setOffsetTop, setScrollDir]
  );

  const sProps = useMemo(
    () => ({
      style: {
        width: "100vw",
        height: "100vh",
      },
      renderThumbVertical: thumbV,
      renderTrackVertical: trackV,
      autoHide: true,
      autoHideTimeout: 1000,
      universal: true,
      autoHeight: true,
      autoHeightMin: "100vh",
      autoHeightMax: "100vh",
      hideTracksWhenNotNeeded: true,
      onUpdate: handleUpdate,
    }),
    [handleUpdate]
  );

  return <Scrollbars {...sProps}>{children}</Scrollbars>;
};

export default CustomScroll;
