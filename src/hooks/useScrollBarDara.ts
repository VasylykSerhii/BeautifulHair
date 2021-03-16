import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setScrollDirCreation,
  setOffsetTopCreation,
} from "redux/hooks/actions-creators";

function useScrollBarDara() {
  const dispatch = useDispatch();
  const [scrollDir, setScrollDir] = useState("down");
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    dispatch(setScrollDirCreation(scrollDir));
  }, [scrollDir]);

  useEffect(() => {
    dispatch(setOffsetTopCreation(offsetTop));
  }, [offsetTop]);

  return { scrollDir, setScrollDir, offsetTop, setOffsetTop };
}
export default useScrollBarDara;
