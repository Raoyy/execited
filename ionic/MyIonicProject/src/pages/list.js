// 页面
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgePage } from '../pages/badge/badge';
import { TapEventPage } from '../pages/tap-event/tap-event';
import { LoadingPage } from '../pages/loading/loading';
import { ModalsPage } from '../pages/modals/modals';
import { ToastPage } from '../pages/toast/toast';

const pagesList = {
    ItemDetailsPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    TapEventPage,
    LoadingPage,
    ModalsPage,
    ToastPage,
}

const newArray = [];

Object.keys(pagesList).map(key=> {
    newArray.push(pagesList[key]);
})

export const pagesArray = newArray;    // 数组形式返回

export const pagesObj = pagesList;     // 对象形式返回