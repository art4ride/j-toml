'use strict';

const BOM = '\uFEFF';
const EOL = '\r\n';
const i18n = [ 'English', '简体中文' ];

require('../test/test.js')(async ({ build, 龙腾道, get, map, ful, put }) => {
	
	const zhs = '龙腾道为汤小明语写的实现。从属于“简计划”。';
	const en = 'An implementation of TOML written by LongTengDao. Belong to "Plan J".';
	
	await build({
		name: 'j-toml',
		Desc: [ zhs, en ],
		user: 'LongTengDao@ltd',
		Auth: 龙腾道,
		Copy: 'LGPL-3.0',
		semver: await get('src/version'),
		ES: 6,
		NPM: {
			description: `${en}／${zhs}`,
			keywords: [ 'parse', 'stringify', 'TOML', '1.0.0', '0.5.0', '0.4.0', '0.3.0', '0.2.0', '0.1.0' ],
		},
		ESM: {
			deps: [ 'fs' ],
		},
		locate: {
			'@ltd/j-orderify': ful('../../LongTengDao/j-orderify/dist/ESM/.j-orderify.js'),
			'@ltd/j-regexp': ful('../../LongTengDao/j-regexp/dist/ESM/.j-regexp.js'),
			'@ltd/j-utf': ful('../../LongTengDao/j-utf/dist/ESM/.j-utf.js'),
		},
		LICENSE_: true,
	});
	
	await put('docs/README.md', BOM + i18n.map(lang => `[${lang}](./${lang}/)`).join(' | '));
	await map('docs/English/README.md', Markdown(lang => `docs/${lang}/`), 'dist/NPM/README.md');
	await map('CHANGELOG/English.md', Markdown(lang => `CHANGELOG/${lang}.md`), 'dist/NPM/CHANGELOG.md');
	
});

function Markdown (Path) {
	return (_English_) => {
		if ( _English_.includes('\t') ) { throw Error(`.md 中存在 Tab`); }
		return BOM +
			i18n.map(lang => `[${lang}](https://GitHub.com/LongTengDao/j-toml/tree/master/${Path(lang)})`).join(' | ') + EOL +
			'___' +  EOL +
			_English_.replace(/^\uFEFF/, '').replace(/(?<=\n```+)[^`\r\n]+/g, '').replace(/(?<=\n\d\. {2})#+ +([^\r\n]*)/g, '**$1**');
	};
}
