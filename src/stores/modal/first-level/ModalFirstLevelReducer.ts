import IModalFirstLevelState from './models/IModalFirstLevelState';
import * as ModalFirstLevelActions from './ModalFirstLevelActions';
import IAction from 'models/IAction';
import baseReducer from 'utilities/BaseReducer';
import { Reducer } from 'redux';
import ModalSizeEnum from 'constants/ModalSizeEnum';

export const initialState: IModalFirstLevelState = {
  bOpen: false,
  content: '' as any,
  size: ModalSizeEnum.Mini,
  id: '',
};

const modalFirstLevelReducer: Reducer = baseReducer(initialState, {
  [ModalFirstLevelActions.OPEN_MODAL](state: IModalFirstLevelState, action: IAction<IModalFirstLevelState>): IModalFirstLevelState {
    return {
      ...state,
      size: action.payload!.size,
      bOpen: true,
      content: action.payload!.content,
      id: action.payload!.id,
    };
  },
  [ModalFirstLevelActions.CLOSE_MODAL](state: IModalFirstLevelState, action: IAction<boolean>): IModalFirstLevelState {
    const bOpen: boolean = action.payload!;

    return {
      ...state,
      bOpen: bOpen,
    };
  },
});

export default modalFirstLevelReducer;
