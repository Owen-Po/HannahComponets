import { describe, it, expect } from 'vitest';
import * as ComponentModule from './KanbanBoard';

describe('KanbanBoard', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['KanbanBoard'];
    expect(Component).toBeDefined();
  });
});
