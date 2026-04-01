import { describe, it, expect } from 'vitest';
import * as ComponentModule from './FileDropzone';

describe('FileDropzone', () => {
  it('exports component and it is defined', () => {
    expect(ComponentModule).toBeTruthy();
    const Component = ComponentModule['FileDropzone'];
    expect(Component).toBeDefined();
  });
});
