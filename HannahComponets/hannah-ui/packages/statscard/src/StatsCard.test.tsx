import { describe, it, expect } from 'vitest';
import * as ComponentModule from './StatsCard';

describe('StatsCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['StatsCard'];
    expect(Component).toBeDefined();
  });
});
