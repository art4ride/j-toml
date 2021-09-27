import SyntaxError from '.SyntaxError';

import { newRegExp, theRegExp } from '@ltd/j-regexp';

import * as iterator$0 from './iterator$0';

/* nested (readable) */

const Whitespace = /[ \t]/;

export const PRE_WHITESPACE = /*#__PURE__*/( () => newRegExp`
	^${Whitespace}+` )();

export const VALUE_REST_exec = /*#__PURE__*/( () => newRegExp.s<1 | 2>`
	^
	(
		(?:\d\d\d\d-\d\d-\d\d \d)?
		[\w\-+.:]+
	)
	${Whitespace}*
	(.*)
	$`.exec )();

export const LITERAL_STRING_exec = /*#__PURE__*/( () => newRegExp.s<1 | 2>`
	^
	'([^']*)'
	${Whitespace}*
	(.*)`.exec )();

const MULTI_LINE_LITERAL_STRING_0_1_2 = /*#__PURE__*/( () => newRegExp.s<1 | 2 | 3>`
	^
	(.*?)
	'''('{0,2})
	${Whitespace}*
	(.*)`.exec )();
const MULTI_LINE_LITERAL_STRING_0 = /*#__PURE__*/( () => newRegExp.s<1 | 2 | 3>`
	^
	(.*?)
	'''()
	${Whitespace}*
	(.*)`.exec )();
export
let __MULTI_LINE_LITERAL_STRING_exec :typeof MULTI_LINE_LITERAL_STRING_0;

export const SYM_WHITESPACE = /*#__PURE__*/( () => newRegExp.s`
	^
	.
	${Whitespace}*` )();


export const Tag = /[^\x00-\x1F"#'()<>[\\\]`{}\x7F]+/;

const KEY_VALUE_PAIR_exec = /*#__PURE__*/( () => newRegExp.s<2>`
	^
	${Whitespace}*
	=
	${Whitespace}*
	(?:
		<(${Tag})>
		${Whitespace}*
	)?
	(.*)
	$`.exec )();

export const _VALUE_PAIR_exec = /*#__PURE__*/( () => newRegExp.s<1 | 2>`
	^
	<(${Tag})>
	${Whitespace}*
	(.*)
	$`.exec )();

const TAG_REST_exec = /*#__PURE__*/( () => newRegExp.s<1 | 2>`
	^
	<(${Tag})>
	${Whitespace}*
	(.*)
	$`.exec )();

/* optimized (avoid overflow or lost) */

const MULTI_LINE_BASIC_STRING = /(?<=^(?:[^\\"]+|\\.|""?(?!")))/s;/// .?
export const MULTI_LINE_BASIC_STRING_exec_0 = (_ :string) :string => {
	let count :number = 0;
	for ( let offset :number = _.search(MULTI_LINE_BASIC_STRING); offset>0; ) {
		offset = _.slice(count += offset).search(MULTI_LINE_BASIC_STRING);
	}
	return _.slice(0, count);
};

const ESCAPED_EXCLUDE_CONTROL_CHARACTER_TAB______ = /[^\\\x00-\x08\x0B-\x1F\x7F]+|\\(?:[btnfr"\\]|[\t ]*\n[\t\n ]*|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})/g;
const ESCAPED_EXCLUDE_CONTROL_CHARACTER__________ = /[^\\\x00-\x09\x0B-\x1F\x7F]+|\\(?:[btnfr"\\]| *\n[\n ]*|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})/g;
const ESCAPED_EXCLUDE_CONTROL_CHARACTER_DEL______ = /[^\\\x00-\x09\x0B-\x1F]+|\\(?:[btnfr"\\]|\n[\n ]*|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})/g;
const ESCAPED_EXCLUDE_CONTROL_CHARACTER_DEL_SLASH = /[^\\\x00-\x09\x0B-\x1F]+|\\(?:[btnfr"\\/]|\n[\n ]*|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})/g;
let __ESCAPED_EXCLUDE_CONTROL_CHARACTER :RegExp;
export const ESCAPED_EXCLUDE_CONTROL_CHARACTER_test = (_ :string) :boolean => !_.replace(__ESCAPED_EXCLUDE_CONTROL_CHARACTER, '');///

const BASIC_STRING_TAB______ = /(?<=^(?:[^\\"\x00-\x08\x0B-\x1F\x7F]+|\\(?:[btnfr"\\]|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})))/;
const BASIC_STRING__________ = /(?<=^(?:[^\\"\x00-\x09\x0B-\x1F\x7F]+|\\(?:[btnfr"\\]|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})))/;
const BASIC_STRING_DEL______ = /(?<=^(?:[^\\"\x00-\x09\x0B-\x1F]+|\\(?:[btnfr"\\]|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})))/;
const BASIC_STRING_DEL_SLASH = /(?<=^(?:[^\\"\x00-\x09\x0B-\x1F]+|\\(?:[btnfr"\\/]|u[\dA-Fa-f]{4}|U[\dA-Fa-f]{8})))/;
let __BASIC_STRING :typeof BASIC_STRING_DEL_SLASH;
export const BASIC_STRING_exec_1 = (line :string) :string => {
	let count :number = 1;
	for ( let offset :number = line.slice(1).search(__BASIC_STRING); offset>0; ) {
		offset = line.slice(count += offset).search(__BASIC_STRING);
	}
	count!==line.length && line[count]==='"' || iterator$0.throws(SyntaxError(`Bad basic string` + iterator$0.where(' at ')));
	return line.slice(1, count);
};

export
const IS_DOT_KEY = /*#__PURE__*/( () => theRegExp(/^[ \t]*\./).test )();
export
const DOT_KEY = /^[ \t]*\.[ \t]*/;
const BARE_KEY_STRICT = /*#__PURE__*/( () => theRegExp(/^[\w-]+/).exec )();
const BARE_KEY_FREE = /*#__PURE__*/( () => theRegExp(/^[^ \t#=[\]'".]+(?:[ \t]+[^ \t#=[\]'".]+)*/).exec )();
export
let __BARE_KEY_exec :typeof BARE_KEY_FREE;
const LITERAL_KEY____ = /*#__PURE__*/( () => theRegExp(/^'[^'\x00-\x08\x0B-\x1F\x7F]*'/).exec )();
const LITERAL_KEY_DEL = /*#__PURE__*/( () => theRegExp(/^'[^'\x00-\x08\x0B-\x1F]*'/).exec )();
export
let __LITERAL_KEY_exec :typeof LITERAL_KEY_DEL;
let supportArrayOfTables :boolean;

export const TABLE_DEFINITION_exec_groups = (lineRest :string, parseKeys :(lineRest :string) => { leadingKeys :string[], finalKey :string, lineRest :string }) :{ leadingKeys :string[], finalKey :string, asArrayItem :boolean, tag :string, lineRest :string } => {
	const asArrayItem :boolean = lineRest[1]==='[';
	if ( asArrayItem ) {
		supportArrayOfTables || iterator$0.throws(SyntaxError(`Array of Tables is not allowed before TOML v0.2` + iterator$0.where(', which at ')));
		lineRest = lineRest.slice(2);
	}
	else { lineRest = lineRest.slice(1); }
	lineRest = lineRest.replace(PRE_WHITESPACE, '');
	const { leadingKeys, finalKey } = { lineRest } = parseKeys(lineRest);
	lineRest = lineRest.replace(PRE_WHITESPACE, '');
	lineRest && lineRest[0]===']' || iterator$0.throws(SyntaxError(`Table header is not closed` + iterator$0.where(', which is found at ')));
	( lineRest.length>1 ? lineRest[1]===']'===asArrayItem : !asArrayItem ) || iterator$0.throws(SyntaxError(`Square brackets of Table definition statement not match` + iterator$0.where(' at ')));
	lineRest = lineRest.slice(asArrayItem ? 2 : 1).replace(PRE_WHITESPACE, '');
	let tag :string;
	if ( lineRest && lineRest[0]==='<' ) { ( { 1: tag, 2: lineRest } = TAG_REST_exec(lineRest) ?? iterator$0.throws(SyntaxError(`Bad tag` + iterator$0.where(' at '))) ); }
	else { tag = ''; }
	return { leadingKeys, finalKey, asArrayItem, tag, lineRest };
};

export const KEY_VALUE_PAIR_exec_groups = ({ leadingKeys, finalKey, lineRest } :{ leadingKeys :string[], finalKey :string, lineRest :string }) :{ leadingKeys :string[], finalKey :string, tag :string, lineRest :string } => {
	const { 1: tag = '' } = { 2: lineRest } = KEY_VALUE_PAIR_exec(lineRest) ?? iterator$0.throws(SyntaxError(`Keys must equal something` + iterator$0.where(', but missing at ')));
	tag || lineRest && lineRest[0]!=='#' || iterator$0.throws(SyntaxError(`Value can not be missing after euqal sign` + iterator$0.where(', which is found at ')));
	return { leadingKeys, finalKey, tag, lineRest };
};

const CONTROL_CHARACTER_EXCLUDE_TAB____ = /*#__PURE__*/( () => theRegExp(/[\x00-\x08\x0B-\x1F\x7F]/).test )();
const CONTROL_CHARACTER_EXCLUDE_TAB_DEL = /*#__PURE__*/( () => theRegExp(/[\x00-\x08\x0B-\x1F]/).test )();
export
let __CONTROL_CHARACTER_EXCLUDE_test :(this :void, string :string) => boolean;

export const switchRegExp = (specificationVersion :number) :void => {
	switch ( specificationVersion ) {
		case 1.0:
			__MULTI_LINE_LITERAL_STRING_exec = MULTI_LINE_LITERAL_STRING_0_1_2;
			__LITERAL_KEY_exec = LITERAL_KEY____;
			__CONTROL_CHARACTER_EXCLUDE_test = CONTROL_CHARACTER_EXCLUDE_TAB____;
			__ESCAPED_EXCLUDE_CONTROL_CHARACTER = ESCAPED_EXCLUDE_CONTROL_CHARACTER_TAB______;
			__BASIC_STRING = BASIC_STRING_TAB______;
			__BARE_KEY_exec = BARE_KEY_STRICT;
			supportArrayOfTables = true;
			break;
		case 0.5:
			__MULTI_LINE_LITERAL_STRING_exec = MULTI_LINE_LITERAL_STRING_0;
			__LITERAL_KEY_exec = LITERAL_KEY____;
			__CONTROL_CHARACTER_EXCLUDE_test = CONTROL_CHARACTER_EXCLUDE_TAB____;
			__ESCAPED_EXCLUDE_CONTROL_CHARACTER = ESCAPED_EXCLUDE_CONTROL_CHARACTER__________;
			__BASIC_STRING = BASIC_STRING__________;
			__BARE_KEY_exec = BARE_KEY_STRICT;
			supportArrayOfTables = true;
			break;
		case 0.4:
			__MULTI_LINE_LITERAL_STRING_exec = MULTI_LINE_LITERAL_STRING_0;
			__LITERAL_KEY_exec = LITERAL_KEY_DEL;
			__CONTROL_CHARACTER_EXCLUDE_test = CONTROL_CHARACTER_EXCLUDE_TAB_DEL;
			__ESCAPED_EXCLUDE_CONTROL_CHARACTER = ESCAPED_EXCLUDE_CONTROL_CHARACTER_DEL______;
			__BASIC_STRING = BASIC_STRING_DEL______;
			__BARE_KEY_exec = BARE_KEY_STRICT;
			supportArrayOfTables = true;
			break;
		default:
			__MULTI_LINE_LITERAL_STRING_exec = MULTI_LINE_LITERAL_STRING_0;
			__LITERAL_KEY_exec = LITERAL_KEY_DEL;
			__CONTROL_CHARACTER_EXCLUDE_test = CONTROL_CHARACTER_EXCLUDE_TAB_DEL;
			__ESCAPED_EXCLUDE_CONTROL_CHARACTER = ESCAPED_EXCLUDE_CONTROL_CHARACTER_DEL_SLASH;
			__BASIC_STRING = BASIC_STRING_DEL_SLASH;
			__BARE_KEY_exec = BARE_KEY_FREE;
			supportArrayOfTables = false;
	}
};
