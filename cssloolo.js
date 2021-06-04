const postcss = require("postcss");
module.exports = function (content, a, b) {
    // console.log(content, this.data, b);
    const callback = this.async();
    const postcssPlugin = postcss.plugin("postcssPlugin", () => {
        return root => {
             const x = root.nodes.map(element => `'${element.selector}'`);
            callback(null, `
            export default [${x}]
            `,null);
        };
    });

    postcss([postcssPlugin])
        .process(content).then(()=>{})
};

