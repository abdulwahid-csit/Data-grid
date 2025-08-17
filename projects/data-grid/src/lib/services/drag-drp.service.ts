import { Injectable } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root',
})
export class DragDrpService {
  constructor() {}

  // sortChildColumnInGroup(
  //   columns: any[],
  //   draggedChild: any,
  //   section: 'leftPinnedColumns' | 'centerColumns' | 'rightPinnedColumns',
  //   previousIndex: number,
  //   currentIndex: number
  // ): any {
  //   const pinned =
  //     section === 'leftPinnedColumns'
  //       ? 'left'
  //       : section === 'rightPinnedColumns'
  //       ? 'right'
  //       : null;

  //   const group = columns.find(
  //     (col: any) =>
  //       Array.isArray(col.children) &&
  //       col.children.some((child: any) => child?.field === draggedChild?.field)
  //   );

  //   if (!group) return;

  //   const groupIndex = columns.findIndex((col) => col.header === group.header);
  //   const filteredGroup = group.children.filter(
  //     (col: any) => col.pinned === pinned
  //   );

  //   const prevField = filteredGroup[previousIndex]?.field;
  //   const currField = filteredGroup[currentIndex]?.field;

  //   const visiblePrevIndex = group.children.findIndex(
  //     (col: any) => col.field === prevField
  //   );
  //   const visibleCurrIndex = group.children.findIndex(
  //     (col: any) => col.field === currField
  //   );

  //   moveItemInArray(
  //     columns[groupIndex]?.children,
  //     visiblePrevIndex,
  //     visibleCurrIndex
  //   );

  //   return {
  //     group,
  //     movedField: currField,
  //   };
  // }
}
