let fs = module.require("/modules/fs");

function requireHelper(callerModule, path) {
    if (!path.startsWith('.')) {
        return callerModule.require(`/modules/${path}`);
    }

    if (path.endsWith(".json")) {
        let path;
        if (!path.startsWith('/')) {
            path = `${java.lang.String.join('/', callerModule.path)}/${path}`;
        }

        let content = fs.readFileSync(path, "utf8");

        return JSON.parse(content);
    }

    return callerModule.require(path);
}

module.exports = requireHelper;