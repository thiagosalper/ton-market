import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { MainStoreStateType } from '../../store';
export const useSelectorTyped: TypedUseSelectorHook<MainStoreStateType> = useSelector;