import { describe, it, expect } from 'vitest';
import * as ComponentModule from './UserStack';

describe('UserStack', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['UserStack'];
    expect(Component).toBeDefined();
  });
});
