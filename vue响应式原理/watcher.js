// 获取更改前的值存储起来，并创建⼀个 update 实例⽅法，在值被更改时去执⾏实例的 callback 以达到视图的更新。
import Dep from './dep.js';
export default class Watcher {
  /** 
   * vm: vue实例
   * key: data中的属性名
   * cb: 负责更新视图的回调函数
   */
  constructor(vm, key, cb) {
    this.vm = vm
    //console.log(vm);  vm是vue实例
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb
    // 把watcher对象记录到Dep类的静态属性target
    //这个this是watcher的实例  //类似这样的Watcher {vm: Vue, key: "count", cb: ƒ}
    /**一个属性可能在created,mounted函数等各种函数都获取一遍,假如每次获取都添加一个watcher,有可能会造成watcher的混乱,就是同样的watcher都会被添加进去,所以 Dep.target = this这个操作可以实现同一个时间一个属性只有一个watcher,作用是获取旧值this.oldValue = vm[key]*/
    Dep.target = this
    //console.log(Dep.target);
    // 触发get⽅法，在get⽅法中会调⽤addSub
    this.oldValue = vm[key]
    Dep.target = null
  }
  /** 当数据发⽣变化的时候更新视图 */
  update() {
    let newValue = this.vm[this.key]
    console.log([this.key,'update']);
    if (this.oldValue === newValue) {
      return
    }
  
    this.cb(newValue)
  }
}