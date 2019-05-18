import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'
import { reducer as newReducer } from '../pages/new/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as answerReducer } from '../pages/answer/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as whisperReducer } from '../pages/whisper/store'

const reducer = combineReducers({
  archive: archiveReducer,
  new: newReducer,
  detail: detailReducer,
  answer: answerReducer,
  login: loginReducer,
  whisper: whisperReducer
})

export default reducer
