import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import UserReducer from "./Login/Reducers";
import PostReducer from './PostReducer'
import BitReducer from './ADMIN/BitReducer'
import SkillReducer from './ADMIN/SkillReducer'
import DisplayReducer from './Login/DisplayReducer';
import verification from './ADMIN/VerificationReducer';
import question from './ADMIN/QuestionsReducers'
import score from './ADMIN/QuestionsReducers'
import storage from 'redux-persist/lib/storage' 
 import thunk from "redux-thunk";
const RootReducer = combineReducers({
  user: UserReducer,
  post:PostReducer,
  bit:BitReducer,
  skill:SkillReducer,
  display:DisplayReducer,
  verification:verification,
  questions:question,
  score:score
});

const persistConfig = {
  key: 'root',
  storage,
}
const pReducer = persistReducer(persistConfig, RootReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };