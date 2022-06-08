import { useSelector as userSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, IStore } from 'store/store';

const useRedux = (): { select: typeof useSelector; dispatch: typeof dispatch } => {
  const useSelector: TypedUseSelectorHook<IStore> = userSelector;
  const dispatch = useDispatch<AppDispatch>();

  return { select: useSelector, dispatch };
};

export default useRedux;
