import { describe, expect, it } from 'vitest';

import { foo } from './index';

describe('foo', () => {
  it('should work', () => {
    expect(foo()).toBe('foo');
  });
});
