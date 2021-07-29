import Observer from './observer.js';
import Compiler from './compiler.js';
export default class Vue {
  constructor(options = {}) {
    // 存储options, data, methods
    this.$options = options;
    this.$data = options.data;
    this.$methods = options.methods;
    this.initRootElement(options);
    // 利⽤Object.defineProperty将data⾥的属性注⼊到vue实例中
    this._proxyData(this.$data)
    // 实例化observe对象，监听数据变化
    new Observer(this.$data);
    // 实例化compiler对象，解析指令和差值表达式
    new Compiler(this)
  }
  /** 
   * 获取根元素, 并存储到Vue实例. 这⾥简单兼容⼀下, 检查⼀下传⼊的el是否合规. 
   */
  initRootElement(options) {
    if (typeof options.el === 'string') {
      // 传⼊的是元素id或者class
      this.$el = document.querySelector(options.el);
    } else if (options.el instanceof HTMLElement) {
      this.$el = options.el;
    }
    if (!this.$el) {
      throw new Error('传⼊的el不合法, 请传⼊css selector或者HTMLElement')
    }
  }
  _proxyData(data) {
    // 遍历所有data
    Object.keys(data).forEach(key => {
      // 将data属性注⼊到vue中
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (data[key] === newValue) {
            return
          }
          data[key] = newValue
        }
      })
    })
  }
}