import { describe, it, expect } from 'vitest';
import * as ComponentModule from './MetricCard';

describe('MetricCard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['MetricCard'];
    expect(Component).toBeDefined();
  });
});
