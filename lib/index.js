const path = require("path");
const { defaultsDeep } = require("lodash");

module.exports = function(_options) {
    const options = defaultsDeep({}, _options, this.options.hotjar, {
        id: null,
        sv: null,
    });

    // Don't include when run in dev mode
    if (this.options.dev) {
        return;
    }

    // Don't include when no hotjar id is given
    if (!options.id) {
        return;
    }

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "raychat.js",
        ssr: false,
        options
    });
};