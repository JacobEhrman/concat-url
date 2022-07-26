const concat = require('../concat')

test('An array of two strings should have a slash in between and at the end', () => {
    expect(concat.slash(['one', 'two'])).toBe('one/two/');
});

test('An array of two strings followed by a single string parameter should have slashes between but not at the end', () => {
    expect(concat.slash(['one', 'two'], 'three')).toBe('one/two/three');
});

test('An array of one string followed by a single string parameter should have slashes between but not at the end', () => {
    expect(concat.slash(['one'], 'two')).toBe('one/two');
});

test('A single string followed by a single string should have slashes between but not at the end', () => {
    expect(concat.slash('one', 'two')).toBe('one/two');
});

test('An empty array should return an empty string', () => {
    expect(concat.slash([])).toBe('');
});

test('A single string should return itself', () => {
    expect(concat.slash('test')).toBe('test');
});

test('An array of one string should return the string with a slash at the end', () => {
    expect(concat.slash(['test'])).toBe('test/');
});

test('No parameters should return an empty string', () => {
    expect(concat.slash()).toBe('');
});