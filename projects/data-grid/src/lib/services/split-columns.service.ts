import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitColumnsService {
  prepareColumns(columns: any[], containerWidth: number): any {
    const left: any[] = [];
    const center: any[] = [];
    const right: any[] = [];

    for (const col of columns) {
      if (col.children?.length) {
        const leftChildren: any[] = [];
        const centerChildren: any[] = [];
        const rightChildren: any[] = [];

        for (const child of col.children) {
          if (child.is_visible === false) continue;

          const pinned = child.pinned ?? col.pinned ?? null;
          const childWithPinned = { ...child, pinned };

          if (pinned === 'left') leftChildren.push(childWithPinned);
          else if (pinned === 'right') rightChildren.push(childWithPinned);
          else centerChildren.push(childWithPinned);
        }

        if (leftChildren.length) {
          left.push({ header: col.header, children: leftChildren, id: col?.id || col?._id });
        }
        if (centerChildren.length) {
          center.push({
            header: col.header,
            children: centerChildren,
            id: col.id || col._id,
          });
        }
        if (rightChildren.length) {
          right.push({
            header: col.header,
            children: rightChildren,
            id: col.id || col._id,
          });
        }
      } else if (col.is_visible !== false) {
        const pinned = col.pinned ?? null;
        if (pinned === 'left') left.push(col);
        else if (pinned === 'right') right.push(col);
        else center.push(col);
      }
    }

    return { left, center, right };
  }

  setColumnsQuery(columns: any[]) {
    for (const col of columns) {
      if (col.children?.length) {
        for (const child of col.children) {
          if (!child?.query?.firt_value && !child?.query?._ids?.length) {
            child['query'] = {
              first_condition: 'contains',
              first_value: null,
              condition: 'or',
              second_condition: 'contains',
              second_value: null,
              _ids: [],
            };
          }
        }
      }
      if (!col?.query?.firt_value && !col?.query?._ids?.length) {
        col.query = {
          first_condition: 'contains',
          first_value: null,
          condition: 'or',
          second_condition: 'contains',
          second_value: null,
          _ids: [],
        };
      }
    }

    console.log('Updated Columns: ', columns);

    return columns;
  }

   assignDefaultWidths(columns: any[], containerWidth: number): any[] {
    const visibleLeafCols = this.getVisibleLeafColumns(columns);

    if (!visibleLeafCols.length) return columns;

    let defaultWidth = Math.floor(containerWidth / visibleLeafCols.length);
    if (defaultWidth < 80) defaultWidth = 80;

    const cloneColumns = (cols: any[]): any[] =>
      cols.map((col) => {
        if (col.children?.length) {
          const newChildren = col.children.map((child: any) => {
            if (child.is_visible !== false && !child.width) {
              return { ...child, width: defaultWidth };
            }
            return { ...child };
          });

          return { ...col, children: newChildren };
        }

        if (col.is_visible !== false && !col.width) {
          return { ...col, width: defaultWidth };
        }

        return { ...col };
      });

    return cloneColumns(columns);
  }

  private getVisibleLeafColumns(columns: any[]): any[] {
    const result: any[] = [];

    for (const col of columns) {
      if (col.children?.length) {
        const visibleChildren = col.children.filter(
          (c: any) => c.is_visible !== false
        );
        result.push(...visibleChildren);
      } else if (col.is_visible !== false) {
        result.push(col);
      }
    }

    return result;
  }
}
