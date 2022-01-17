import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { MainStoreStateType } from '..';
export const useSelectorTyped: TypedUseSelectorHook<MainStoreStateType> = useSelector;