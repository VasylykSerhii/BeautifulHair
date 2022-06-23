import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { hooksActionst } from 'store';

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

  const { setScrollDown, setOffsetTop: setOffsetTopHook } = hooksActionst;

  useEffect(() => {
    dispatch(setScrollDown(isScrollDown));
  }, [isScrollDown, dispatch]);

  useEffect(() => {
    dispatch(setOffsetTopHook(offsetTop));
  }, [offsetTop, dispatch]);

  return { isScrollDown, setScrollDir, offsetTop, setOffsetTop };
}

export default useScrollBarDara;
