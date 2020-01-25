// Configure the SystemJS module loader
System.config({
	// Tell it that our javascript files are in the /js folder
	baseURL: '/js',
	// Tell it to apply Babel to our JS files
	transpiler: 'plugin-babel',
	// Configure the Babel plugin - it's basically just telling it where to read the files from - in our case, they're in node_modules
	map: {
		'plugin-babel': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-babel/systemjs-babel-browser.js',
		'prop-types': 'https://unpkg.com/prop-types@15.6/prop-types.js'
	},
  meta: {
    '*.jsx': {
      babelOptions: {
        react: true
      }
		}
	}
});

// Now that the configuration is complete, we can include our main file! (/js/main.js)
System.import('main.js');
