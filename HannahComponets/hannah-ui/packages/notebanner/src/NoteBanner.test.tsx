import { describe, it, expect } from 'vitest';
import * as ComponentModule from './NoteBanner';

describe('NoteBanner', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['NoteBanner'];
    expect(Component).toBeDefined();
  });
});
