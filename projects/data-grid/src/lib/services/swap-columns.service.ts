import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwapColumnsService {
  constructor() {}

  deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  flattenColumnsWithPaths(columns: any[]): { col: any; path: number[] }[] {
    const result: { col: any; path: number[] }[] = [];

    const recurse = (cols: any[], currentPath: number[] = []) => {
      cols.forEach((col, index) => {
        const path = [...currentPath, index];
        result.push({ col, path });

        if (Array.isArray(col.children)) {
          recurse(col.children, path);
        }
      });
    };

    recurse(columns);
    return result;
  }

  findColumnByIndex(
    columns: any[],
    index: number,
    flat: any[],
    _path: number[][] = [],
    currentPath: number[] = []
  ): { column: any; parent: any[]; path: number[] } | null {
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];
      const nextPath = [...currentPath, i];

      if (flat[index] === col) {
        return { column: col, parent: columns, path: nextPath };
      }

      if (Array.isArray(col?.children)) {
        const result = this.findColumnByIndex(
          col?.children,
          index,
          flat,
          _path,
          nextPath
        );
        if (result) return result;
      }
    }

    return null;
  }

  insertAtPath(columns: any[], path: number[], newColumn: any): any[] {
    const cloned = this.deepClone(columns);
    let current = cloned;

    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]?.children) {
        current[path[i]]!.children = [];
      }

      current = current[path[i]]?.children;
    }

    const insertIndex = path[path.length - 1];
    current.splice(insertIndex, 0, newColumn);
    return cloned;
  }

  removeAtPath(columns: any[], path: number[]): any[] {
    const cloned = this.deepClone(columns);
    let current = cloned;

    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]?.children) {
        return cloned; // Safety: path is invalid
      }
      current = current[path[i]]?.children;
    }

    const removeIndex = path[path.length - 1];
    if (Array.isArray(current) && current.length > removeIndex) {
      current.splice(removeIndex, 1);
    }

    return cloned;
  }

  swapColumnsInTree(
    currentColumn: any,
    columns: any[],
    fromIndex: number,
    toIndex: number
  ): any[] {
    const flat = this.flattenColumnsWithPaths(columns);

    if (
      fromIndex < 0 ||
      toIndex < 0 ||
      fromIndex >= flat.length ||
      toIndex >= flat.length
    ) {
      return columns; // invalid indices
    }

    const fromInfo = this.findColumnByIndex(columns, fromIndex, flat);
    const toInfo = this.findColumnByIndex(columns, toIndex, flat);

    if (!fromInfo || !toInfo) return columns;

    const fromCol = fromInfo.column;
    const toCol = toInfo.column;

    let updatedCols = this.removeAtPath(columns, fromInfo.path);

    // Case 1: Same parent
    if (
      JSON.stringify(fromInfo.path.slice(0, -1)) ===
      JSON.stringify(toInfo.path.slice(0, -1))
    ) {
      return this.insertAtPath(updatedCols, toInfo.path, fromCol);
    }

    // Case 2: Drop target is a group header
    if (Array.isArray(toCol?.children)) {
      const cloned = this.deepClone(updatedCols);
      let parent = cloned;

      for (let i = 0; i < toInfo.path.length - 1; i++) {
        parent = parent[toInfo.path[i]].children;
      }

      const target = parent[toInfo.path[toInfo.path.length - 1]];
      if (!target.children) {
        target.children = [];
      }

      target.children.push(fromCol);
      return cloned;
    }

    // Case 3: Drop target is a regular column → wrap both into a group
    const groupHeader = {
      headerName: toCol.headerName || 'Group',
      children: [toCol, fromCol],
    };

    // Remove target from its original location
    updatedCols = this.removeAtPath(updatedCols, toInfo.path);

    // Insert group at target index
    return this.insertAtPath(updatedCols, toInfo.path, groupHeader);
  }
}
