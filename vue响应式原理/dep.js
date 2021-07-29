

/*
*记住, dep是⽤来存储所有观察者的, 也就是watcher.
*⽽我们watcher的定义, 每个watcher都会有⼀个update⽅法对吧, ⽤来更新视图的?
*addSub, 我们如果发现watcher没有update⽅法, 也就没必要添加到subs⾥了.
notify, 是提供给外界调⽤的, 当数据有变更的时候, 外界会调⽤notify去通知各个watcher, 也就是执⾏
watcher.update()
*发布订阅的模式
*存储所有的观察者watcher
*每个watcher都有一个update方法
*/

export default class Dep {
  constructor() {
    // 存储所有的观察者
    this.subs = []
  }
  /** 添加观察者 */
  addSub(watcher) {
    if (watcher && watcher.update) {
      //console.log(watcher);
      this.subs.push(watcher)
    }
  }
  /** 发送通知 */
  notify() {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}