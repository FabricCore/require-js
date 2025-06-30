let fs = module.require("/modules/fs");

function requireHelper(callerModule, path, mode) {
    if (!path.startsWith('.')) {
        return callerModule.require(`/modules/${path}`);
    }

    if (path.endsWith(".json")) {
        if (!path.startsWith('/')) {
            path = `${java.lang.String.join('/', Array.from(callerModule.path).slice(0, callerModule.path.length - 1))}/${path}`;
        }

        let content = fs.readFileSync(path, "utf8");

        return JSON.parse(content);
    }

    if (mode) {
        return callerModule.require(path, mode);
    } else {
        return callerModule.require(path);
    }
}

module.exports = requireHelper;