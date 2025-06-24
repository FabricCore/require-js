prelude.eval("function require(path) { require.helper(module, path); }", "one");
prelude.eval("require.helper = module.require('/modules/require')", "two");