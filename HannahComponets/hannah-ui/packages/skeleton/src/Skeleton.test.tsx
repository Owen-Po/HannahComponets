import { describe, it, expect } from 'vitest';
import * as ComponentModule from './Skeleton';

describe('Skeleton', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['Skeleton'];
    expect(Component).toBeDefined();
  });
});
