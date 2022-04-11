import * as ActionUtility from 'utilities/ActionUtility';
import IAction from 'models/IAction';
import ModalSizeEnum from 'constants/ModalSizeEnum';
import IModalFirstLevelState from './models/IModalFirstLevelState';
import { v4 as uuidv4 } from 'uuid';

export const OPEN_MODAL: string = 'ModalFirstLevelActions.OPEN_MODAL';

export const OPEN = (content: any, size: ModalSizeEnum): IAction<IModalFirstLevelState> => {
  return ActionUtility.createAction(OPEN_MODAL, {
    bOpen: true,
    content,
    size,
    id: uuidv4(),
  });
};

export const CLOSE_MODAL: string = 'ModalFirstLevelActions.CLOSE_MODAL';

export const CLOSE = (): IAction<boolean> => {
  return ActionUtility.createAction(CLOSE_MODAL, false);
};
