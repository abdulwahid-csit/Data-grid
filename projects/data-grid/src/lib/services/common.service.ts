import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor() { }
gethasVisibleColumns(columns: any[]): boolean {
  const checkVisible = (columns: any[]): boolean => {
    return columns.some((col) => {
      if (col?.is_visible) return true;
      if (col?.children?.length) {
        return checkVisible(col.children);
      }
      return false;
    });
  };
  return checkVisible(columns);
}

gethasInVisibleColumns(columns: any[]): boolean {
  const checkVisible = (columns: any[]): boolean => {
    return columns.some((col) => {
      if (!col?.is_visible) return true;
      if (col?.children?.length) {
        return checkVisible(col.children);
      }
      return false;
    });
  };
  return checkVisible(columns);
}


getTotalColumnsLength(columns: any[]): number {
  let count = 0;

  columns.forEach(col => {
    if (col.children && Array.isArray(col.children) && col.children.length) {
      count += col.children.length; // count children instead of parent
    } else {
      count += 1; // count parent directly
    }
  });

  return count;
}

  gethasRightPinnedColumns(columns: any[]): boolean {
    const checkPinnedRight = (columns: any[]): boolean => {
      return columns.some((col) => {
        if (col?.pinned === 'right' && col?.is_visible) return true;
        if (col?.children?.length) {
          return checkPinnedRight(col.children);
        }
        return false;
      });
    };
    return checkPinnedRight(columns);
  }

}
