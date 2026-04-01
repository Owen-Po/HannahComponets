import { describe, it, expect } from 'vitest';
import * as ComponentModule from './DraggableTable';

describe('DraggableTable', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['DraggableTable'];
    expect(Component).toBeDefined();
  });
});
