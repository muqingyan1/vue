import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用_init() 方法
  this._init(options)
}

// 注册 vm的_init() 方法，初始化vm
initMixin(Vue)
// 注册vm 的 $data / $props / $set / $delete / $watch
stateMixin(Vue)
// 初始化 事件相关的方法
// $on/$once/$off/$emit
eventsMixin(Vue)
// 初始化事件周期相关的 混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue)
// 混入render
// $nextTick/_render
renderMixin(Vue)

export default Vue
