import { useSelector as userSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { IStore } from 'store/store';

const useRedux = (): { select: typeof useSelector; dispatch: typeof dispatch } => {
  const useSelector: TypedUseSelectorHook<IStore> = userSelector;
  const dispatch = useDispatch();

  return { select: useSelector, dispatch };
};

export default useRedux;
