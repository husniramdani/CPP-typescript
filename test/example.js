"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example_1 = require("../example");
var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.deepEqual([0, 1], (0, example_1.twoSum)([2, 7, 11, 15], 9));
            assert.deepEqual([1, 2], (0, example_1.twoSum)([2, 7, 11, 15], 18));
            assert.deepEqual([0, 1], (0, example_1.twoSum)([3, 9], 12));
            assert.deepEqual([1, 5], (0, example_1.twoSum)([2, 7, 11, 15, 11, 19], 26));
        });
    });
});
