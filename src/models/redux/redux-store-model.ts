export interface ReduxStoreModel {
  test: {};
}
export type REDUX_ACTION_TYPE = "SET_TOKEN" | "EMPTY_TOKEN";

export type ReduxSetStateModel = (action: {
  payload: any;
  type: REDUX_ACTION_TYPE;
}) => void;

