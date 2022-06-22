import x from "./x.js";
console.log("x");
console.log("hi");

webpack.config.js

module.exports = {
  module: {
    rules: [
       {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader',]
       },
    ],
  },
};
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        let fn = module.default
        fn()
        // 也可以直接 module.default()
    }, ()=>{
        console.log('加载失败')
    })
}