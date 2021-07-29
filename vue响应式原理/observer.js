import Dep from './dep.js'
export default class Observer {
  constructor(data) {
    this.traverse(data)
  }
  /** 递归遍历data⾥的所有属性 */
  traverse(data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  /** 给传⼊的数据设置getter/setter */
  defineReactive(obj, key, val) {
    const that = this
    this.traverse(val); // 递归设置
    const dep = new Dep() // 负责收集依赖，并发送通知

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        //console.log(Dep.targe);
        //一个数据获取的时候,我们需要收集依赖
        Dep.target && dep.addSub(Dep.target) // 收集依赖(如果Dep.target存在,我们就执行dep.addSub收集依赖)
        return val;
      },
      set(newValue) {
        if (newValue === val) {
          return
        }
        val = newValue
        that.traverse(newValue) // newValue可能是个对象
        dep.notify() // 通知watcher数据更新了
      }
    })
  }
}