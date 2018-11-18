import { SyntaxError, RangeError, TypeError, Error } from './global.js';

const NONE = [];
let sourceLines = NONE;
let lastLineIndex = -1;
let lineIndex = -1;

const none = () => sourceLines===NONE;
const done = () => { sourceLines = NONE; };
const next = () => sourceLines[++lineIndex];
const rest = () => lineIndex!==lastLineIndex;
const mark = () => lineIndex;
const must = (message, startIndex) => {
	if ( lineIndex===lastLineIndex ) {
		const error = new SyntaxError(message+' is not close until the end of the file, which started from lines['+startIndex+']: '+sourceLines[startIndex]);
		error.lineIndex = lineIndex;
		done();
		throw error;
	}
	return sourceLines[++lineIndex];
};
const from = array => {
	sourceLines = array;
	lastLineIndex = sourceLines.length-1;
	lineIndex = -1;
};

export { from, next, rest, mark, must, done, none };
export const throwSyntaxError = message => throws(new SyntaxError(message));
export const throwRangeError = message => throws(new RangeError(message));
export const throwTypeError = message => throws(new TypeError(message));
export const throwError = message => throws(new Error(message));
export const where = () => 'lines['+lineIndex+']: '+sourceLines[lineIndex];

function throws (error) {
	if ( sourceLines===NONE ) { throw error; }
	error.lineIndex = lineIndex;
	done();
	throw error;
}