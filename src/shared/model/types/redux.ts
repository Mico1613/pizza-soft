// Здесь нарушаем направленность импортов, импортируя из верхнего слоя в нижний, таков компромисс FSD с redux'ом
import { store } from "~app/model";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
