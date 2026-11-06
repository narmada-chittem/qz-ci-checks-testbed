import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet, farewell } from '../src/greet.js';

test('greets by name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada');
});

test('says goodbye by name', () => {
  assert.equal(farewell('Ada'), 'Goodbye, Ada');
});

test('says goodbye to an empty name', () => {
  assert.equal(farewell(''), 'Goodbye, ');
});
