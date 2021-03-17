import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import {
  setScrollDirCreation,
  setOffsetTopCreation,
} from "redux/hooks/actions-creators";

interface IProps {
  scrollDir: string;
  setScrollDir: Dispatch<SetStateAction<string>>;
  offsetTop: number;
  setOffsetTop: Dispatch<SetStateAction<number>>;
}

function useScrollBarDara(): IProps {
  const dispatch = useDispatch();
  const [scrollDir, setScrollDir] = useState("up");
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    dispatch(setScrollDirCreation(scrollDir));
  }, [scrollDir, dispatch]);

  useEffect(() => {
    dispatch(setOffsetTopCreation(offsetTop));
  }, [offsetTop, dispatch]);

  return { scrollDir, setScrollDir, offsetTop, setOffsetTop };
}
export default useScrollBarDara;
