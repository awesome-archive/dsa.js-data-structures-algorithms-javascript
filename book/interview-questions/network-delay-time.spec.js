/* eslint-disable max-len */
const { networkDelayTime, networkDelayTimeQueue } = require('./network-delay-time');

[networkDelayTime, networkDelayTimeQueue].forEach((fn) => {
  describe(`Graph/PriorityQueue: ${fn.name}`, () => {
    it('should work with simple case', () => {
      const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
      const n = 4;
      const k = 2;
      expect(fn(times, n, k)).toEqual(2);
    });

    it('should work with loops', () => {
      const times = [[1, 2, 0], [1, 5, 10], [1, 4, 1], [2, 3, 100], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 3, 1], [7, 5, 1]];
      const n = 7;
      const k = 1;
      expect(fn(times, n, k)).toEqual(5);
    });

    it('should work with loops and dead starts', () => {
      const times = [[1, 2, 0], [1, 5, 10], [1, 4, 1], [2, 3, 100], [4, 5, 1], [5, 6, 1], [6, 7, 1], [7, 3, 1], [7, 5, 1]];
      const n = 7;
      const k = 3;
      expect(fn(times, n, k)).toEqual(-1);
    });

    it('should work', () => {
      const times = [[2, 1, 15], [2, 3, 85], [1, 3, 0], [1, 2, 91], [3, 2, 78], [3, 1, 36]];
      const n = 3;
      const k = 2;
      expect(fn(times, n, k)).toEqual(15);
    });

    it('should work with highly connected networks', () => {
      const times = [[14, 1, 8], [11, 2, 25], [14, 15, 37], [3, 7, 70], [11, 7, 60], [13, 11, 87], [15, 10, 67], [13, 10, 58], [5, 4, 56], [9, 3, 26], [5, 11, 51], [11, 4, 92], [7, 6, 8], [7, 10, 95], [14, 9, 0], [4, 13, 1], [7, 9, 89], [3, 14, 24], [11, 15, 30], [13, 2, 91], [15, 8, 60], [1, 4, 96], [8, 2, 71], [6, 8, 38], [14, 13, 46], [2, 12, 48], [10, 11, 92], [8, 12, 28], [8, 7, 12], [9, 13, 82], [8, 6, 27], [3, 2, 65], [4, 10, 62], [11, 13, 55], [1, 2, 52], [8, 3, 98], [7, 12, 85], [6, 12, 97], [9, 4, 90], [2, 4, 23], [9, 11, 20], [1, 14, 61], [8, 9, 77], [6, 5, 80], [14, 11, 33], [9, 8, 54], [13, 1, 42], [13, 8, 13], [10, 14, 40], [9, 7, 18], [14, 3, 50], [14, 6, 83], [14, 8, 14], [2, 1, 86], [9, 5, 54], [11, 5, 29], [9, 12, 43], [9, 2, 74], [14, 4, 87], [12, 7, 98], [7, 14, 13], [4, 12, 33], [5, 2, 60], [15, 11, 33], [8, 4, 99], [9, 6, 98], [4, 6, 57], [6, 11, 5], [9, 15, 37], [1, 3, 30], [9, 10, 60], [13, 12, 73], [13, 14, 56], [1, 11, 13], [14, 2, 8], [4, 15, 60], [11, 3, 90], [2, 5, 86], [11, 1, 1], [13, 4, 2], [15, 7, 91], [15, 4, 51], [11, 6, 70], [2, 7, 51], [11, 9, 37], [4, 2, 92], [10, 4, 4], [7, 2, 30], [13, 9, 79], [8, 15, 41], [11, 8, 18], [15, 2, 4], [12, 14, 88], [12, 6, 9], [12, 9, 44], [1, 6, 87], [15, 14, 42], [4, 9, 41], [7, 15, 90], [4, 1, 84], [7, 11, 9], [3, 11, 75], [5, 9, 2], [2, 11, 96], [12, 5, 89], [6, 15, 25], [5, 13, 7], [15, 5, 32], [13, 5, 84], [7, 5, 9], [15, 3, 14], [12, 13, 4], [5, 3, 73], [6, 9, 85], [6, 10, 29], [1, 8, 24], [12, 3, 85], [4, 3, 60], [1, 13, 6], [1, 5, 58], [2, 3, 29], [14, 5, 67], [13, 15, 70], [5, 14, 94], [15, 1, 95], [3, 1, 17], [10, 2, 6], [11, 10, 44], [9, 14, 62], [4, 11, 32], [15, 13, 48], [2, 10, 77], [3, 13, 90], [5, 7, 68], [10, 6, 78], [3, 6, 95], [10, 12, 68], [13, 6, 73], [10, 1, 8], [10, 7, 18], [10, 5, 64], [5, 1, 55], [13, 7, 90], [1, 9, 67], [3, 12, 76], [14, 10, 22], [12, 8, 83], [4, 7, 76], [8, 13, 25], [5, 6, 57], [13, 3, 90], [6, 2, 96], [11, 14, 61], [12, 1, 94], [12, 15, 12], [4, 8, 88], [4, 14, 27], [7, 4, 25], [3, 9, 57], [2, 15, 90], [1, 12, 85], [12, 11, 44], [5, 10, 13], [5, 12, 96], [14, 7, 24], [14, 12, 98], [10, 9, 36], [15, 6, 17], [8, 10, 11], [2, 13, 5], [10, 3, 78], [6, 13, 11], [5, 15, 34], [12, 10, 12], [9, 1, 68], [10, 13, 1], [7, 13, 86], [1, 7, 62], [2, 14, 53], [8, 14, 75], [2, 6, 49], [10, 15, 83], [7, 8, 88], [6, 1, 87], [8, 1, 38], [8, 11, 73], [3, 15, 1], [3, 8, 93], [2, 8, 26], [4, 5, 26], [3, 4, 58], [7, 1, 55], [7, 3, 84], [5, 8, 97], [12, 4, 42], [6, 3, 71], [6, 7, 48], [15, 12, 3], [1, 15, 30], [10, 8, 11], [2, 9, 49], [6, 14, 95], [3, 10, 68], [6, 4, 14], [11, 12, 29], [1, 10, 93], [8, 5, 55], [12, 2, 86], [3, 5, 26], [15, 9, 12]];
      const n = 15;
      const k = 11;
      expect(fn(times, n, k)).toEqual(38);
    });

    it('should work with large highly connected networks', () => {
      const times = [[15, 8, 1], [7, 10, 41], [7, 9, 34], [9, 4, 31], [12, 13, 50], [14, 3, 52], [4, 11, 99], [4, 7, 86], [10, 13, 57], [9, 6, 10], [1, 7, 51], [7, 15, 38], [1, 9, 11], [12, 7, 94], [9, 13, 34], [11, 7, 79], [7, 6, 28], [5, 3, 34], [2, 6, 97], [14, 1, 97], [6, 10, 90], [12, 10, 37], [13, 3, 73], [11, 14, 7], [15, 1, 39], [6, 5, 90], [13, 6, 43], [6, 9, 32], [4, 6, 45], [11, 10, 2], [2, 13, 4], [14, 15, 29], [1, 14, 88], [14, 6, 19], [6, 2, 29], [3, 14, 72], [1, 15, 4], [11, 5, 2], [6, 7, 56], [8, 7, 88], [13, 14, 70], [14, 12, 58], [14, 2, 86], [11, 3, 57], [5, 2, 56], [3, 10, 26], [2, 11, 21], [14, 5, 54], [5, 12, 40], [14, 4, 81], [15, 2, 99], [5, 7, 57], [13, 12, 5], [4, 9, 60], [12, 15, 48], [6, 14, 1], [9, 7, 44], [13, 7, 69], [5, 13, 42], [4, 1, 7], [11, 9, 76], [8, 1, 76], [5, 14, 29], [2, 3, 69], [7, 3, 23], [12, 14, 28], [11, 4, 85], [10, 1, 10], [15, 12, 36], [1, 11, 69], [15, 10, 96], [11, 13, 69], [7, 12, 49], [1, 2, 95], [6, 4, 46], [8, 12, 94], [12, 4, 93], [13, 5, 31], [12, 2, 60], [6, 1, 87], [4, 14, 20], [5, 11, 89], [4, 15, 88], [4, 10, 21], [1, 6, 5], [10, 8, 26], [8, 2, 51], [3, 15, 23], [7, 2, 12], [11, 1, 47], [2, 1, 75], [3, 8, 63], [8, 10, 19], [6, 8, 18], [4, 2, 55], [14, 11, 80], [10, 3, 73], [3, 5, 22], [12, 3, 61], [1, 13, 33], [9, 3, 98], [9, 12, 69], [15, 9, 6], [7, 13, 76], [11, 12, 22], [11, 15, 51], [13, 15, 46], [5, 10, 58], [1, 10, 26], [13, 4, 85], [7, 14, 58], [5, 8, 46], [11, 6, 32], [10, 9, 41], [9, 14, 35], [14, 13, 60], [3, 9, 97], [2, 5, 39], [7, 11, 19], [1, 12, 27], [7, 5, 13], [8, 4, 34], [9, 15, 25], [5, 1, 93], [15, 13, 97], [14, 9, 35], [8, 6, 67], [9, 5, 39], [13, 11, 35], [7, 4, 21], [12, 9, 64], [14, 8, 8], [10, 12, 94], [8, 9, 76], [8, 5, 71], [2, 9, 64], [10, 14, 59], [1, 4, 74], [7, 1, 69], [15, 5, 55], [6, 15, 80], [13, 8, 84], [8, 13, 63], [8, 3, 91], [10, 4, 87], [1, 5, 39], [8, 11, 0], [1, 3, 79], [4, 5, 82], [4, 12, 87], [3, 11, 29], [7, 8, 92], [10, 7, 77], [6, 12, 42], [13, 2, 40], [9, 10, 13], [4, 13, 65], [2, 4, 34], [3, 13, 44], [2, 14, 69], [3, 4, 42], [5, 15, 98], [14, 7, 6], [15, 3, 94], [10, 2, 37], [15, 11, 7], [9, 2, 15], [13, 9, 66], [4, 8, 83], [8, 15, 23], [13, 1, 50], [6, 13, 57], [2, 10, 37], [10, 6, 38], [2, 7, 45], [9, 8, 8], [3, 12, 28], [3, 2, 83], [2, 12, 75], [1, 8, 91], [4, 3, 70], [12, 6, 48], [3, 1, 13], [5, 6, 42], [6, 11, 96], [3, 6, 22], [15, 6, 34], [11, 8, 43], [15, 7, 40], [9, 11, 57], [11, 2, 11], [2, 8, 22], [9, 1, 73], [2, 15, 40], [12, 11, 10], [15, 4, 78], [12, 8, 75], [10, 15, 37], [13, 10, 44], [8, 14, 33], [3, 7, 82], [5, 4, 46], [12, 5, 79], [15, 14, 43], [10, 5, 65], [5, 9, 34], [12, 1, 54], [6, 3, 16], [14, 10, 83], [10, 11, 67]];
      const n = 15;
      const k = 8;
      expect(fn(times, n, k)).toEqual(34);
    });
  });
});
