prelude.eval("function require(path, mode) { return require.helper(module, path, mode); }", "one");
prelude.eval("require.helper = module.require('/modules/require')", "two");