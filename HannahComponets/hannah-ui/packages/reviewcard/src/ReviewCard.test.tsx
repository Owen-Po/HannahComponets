import { describe, it, expect } from 'vitest';
import * as ComponentModule from './ReviewCard';

describe('ReviewCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['ReviewCard'];
    expect(Component).toBeDefined();
  });
});
