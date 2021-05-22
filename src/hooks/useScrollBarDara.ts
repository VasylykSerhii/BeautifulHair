import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import {
  setScrollDirCreation,
  setOffsetTopCreation,
} from "redux/hooks/actions-creators";

interface IProps {
  isScrollDown: boolean;
  setScrollDir: Dispatch<SetStateAction<boolean>>;
  offsetTop: number;
  setOffsetTop: Dispatch<SetStateAction<number>>;
}

function useScrollBarDara(): IProps {
  const dispatch = useDispatch();
  const [isScrollDown, setScrollDir] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    dispatch(setScrollDirCreation(isScrollDown));
  }, [isScrollDown, dispatch]);

  useEffect(() => {
    dispatch(setOffsetTopCreation(offsetTop));
  }, [offsetTop, dispatch]);

  return { isScrollDown, setScrollDir, offsetTop, setOffsetTop };
}
export default useScrollBarDara;
