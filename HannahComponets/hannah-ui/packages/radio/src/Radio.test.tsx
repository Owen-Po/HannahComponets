import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Radio';

describe('Radio', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Radio'];
    expect(Component).toBeDefined();
  });
});
