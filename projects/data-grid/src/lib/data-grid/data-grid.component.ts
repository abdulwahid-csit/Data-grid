import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
  ChangeDetectorRef,
} from '@angular/core';
import { SplitColumnsService } from '../services/split-columns.service';
import { CommonService } from '../services/common.service';
import { SwapColumnsService } from '../services/swap-columns.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragEnter,
  CdkDragExit,
  CdkDragMove,
  CdkDragSortEvent,
  CdkDragStart,
  DragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CdkDropList } from '@angular/cdk/drag-drop';


@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  animations: [
    trigger('accordionToggle', [
      state(
        'collapsed',
        style({ height: '0px', overflow: 'hidden', opacity: 0 })
      ),
      state('expanded', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition('collapsed <=> expanded', animate('200ms ease-in-out')),
    ]),
  ],
})
export class DataGridComponent implements OnChanges, AfterViewInit {
  //  **************************************//
  //  **************************************//
  // **********  Input Goes Here *********** //
  //  **************************************//
  //  **************************************//

  // Pagination Config Store Here
  @Input() paginationConfig: any = {};

  // The dataset store here;
  @Input() dataSet: any[] = [];

  // The columns Store Here
  @Input() columns: any[] = [];

  // Row Height;
  @Input() rowHeight: number = 40;

  // Header Row Height;
  @Input() headerRowHeight: number = 48;

  // Show Vertical Borders;
  @Input() showVerticalBorder: boolean = true;

  // Even Rows Background Color;
  @Input() evenRowsBackgroundColor: string | undefined = undefined;

  // Even Rows Background Color;
  @Input() oddRowsBackgroundColor: string | undefined = undefined;

  // Header Rows Background Color;
  @Input() headerBackgroundColor: string = '#eaeaea';

  // Header Rows Background Color;
  @Input() checkboxesBackgroundColor: string = '#eaeaea';

  // Show Columns Grouping;
  @Input() showColumnsGrouping: boolean = false;

  // Row Hovered Background color;
  @Input() rowHoverColor: string | undefined = 'rgba(0, 123, 255, 0.1)';

  // Left PinnedBackground color;
  @Input() leftPinnedBackgroundColor: string | undefined = '#000';

  // Body Background color;
  @Input() bodyBackgroundColor: string | undefined = '#000';

  // Right Pinned Background color;
  @Input() rightPinnedBackgroundColor: string | undefined = '#000';

  // Side Menu Background color;
  @Input() sidemenuBackgroundColor: string | undefined = '#000';

  // Body text color;
  @Input() bodyTextColor: string | undefined = '#000';

  // Header text color;
  @Input() headerTextColor: string | undefined = '#000';

  // Header text size;
  @Input() headerTextFontsSize: number | undefined = 16;

  // Body text color;
  @Input() bodyTextFontsSize: number | undefined = 16;

  // Header font weight;
  @Input() headerFontWeight: number | undefined = 500;

  // Body Font Weight;
  @Input() bodyFontWeight: number | undefined = 400;

  // Checked Row Background Color;
  @Input() checkedRowBackgroundColor: string | undefined = '';

  // dropdowns Background Color;
  @Input() dropdownsBackgroundColor: string | undefined = '';

  // Footer row Height;
  @Input() footerRowHeight: number = 46;

  // Footer row Height;
  @Input() topGroupedBadgesBackgroundColor: string | undefined = '#eaeaeb';

  // Show Row wise grouping;
  @Input() showRowsGrouping: boolean | undefined = true;

  groupedColumns: any[] = [];
  activeCol: any = null;
  activeFilterCell: any = null;
  isShowSideMenu = false;
  pivotMode: boolean = false;
  columnSearch: string = '';
  expandAllAccordians = true;
  currentOpenedSideMenue: 'cols' | 'filtrs' | null = null;
  originalColumns: any[] = [];
  originalDataSet: any[] = [];
  constructor(
    private columnService: SplitColumnsService,
    private cdr: ChangeDetectorRef,
    public commonSevice: CommonService,
    private swapColumnService: SwapColumnsService
  ) {}

  ngAfterViewInit(): void {
    this.columns = this.columnService.setColumnsQuery(this.columns);
    this.originalColumns = structuredClone(this.columns);
    this.SetColumnsDefaultWidth();
    this.updateColumnWidthsAndGroups();
    this.refreshPreviewColumns();
    setTimeout(() => {
      this.setSectionsWidth();
    }, 10);

    setTimeout(() => {
      this.updateFlattenedData();
      this.computeViewportRows();
      this.updateVisibleRows(0);
      const ro = new ResizeObserver(() => {
        this.updateFlattenedData();
        this.computeViewportRows();
        this.updateVisibleRows(this.mainScroll.nativeElement.scrollTop);
      });
      ro.observe(this.mainScroll.nativeElement);
    }, 300);

    setTimeout(() => {
      this.generateDropListIds();
    }, 10);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] && !changes['columns'].firstChange) {
      // Ensure the view is ready
      this.columns = this.columnService.setColumnsQuery(this.columns);
      setTimeout(() => {
        if (this.dataGridContainer?.nativeElement?.offsetWidth) {
          // this.originalColumns = structuredClone(this.columns);
          this.SetColumnsDefaultWidth;
          this.updateColumnWidthsAndGroups();
          this.refreshPreviewColumns();
        }
      }, 0);
    }

    if (changes['dataSet']) {
      this.originalDataSet = structuredClone(this.dataSet);
    }

    if (changes['dataSet'] && !changes['columns'].firstChange) {
      this.updateFlattenedData();
    }
  }

  leftPinnedColumns: any[] = [];
  centerColumns: any[] = [];
  rightPinnedColumns: any[] = [];

  previewLeftPinnedColumns: any[] = [];
  previewCenterColumns: any[] = [];
  previewRightPinnedColumns: any[] = [];

  // Main Container Template References
  @ViewChild('dataGridContainer')
  dataGridContainer!: ElementRef<HTMLDivElement>;

  // Body Template References
  @ViewChild('leftPinnedBody')
  leftPinnedBody!: ElementRef<HTMLDivElement>;
  @ViewChild('centerPinnedBody')
  centerPinnedBody!: ElementRef<HTMLDivElement>;
  @ViewChild('rightPinnedBody')
  rightPinnedBody!: ElementRef<HTMLDivElement>;

  // Headers Template References
  @ViewChild('leftPinnedHeader')
  leftPinnedHeader!: ElementRef<HTMLDivElement>;
  @ViewChild('centerPinnedHeader')
  centerPinnedHeader!: ElementRef<HTMLDivElement>;
  @ViewChild('rightPinnedHeader')
  rightPinnedHeader!: ElementRef<HTMLDivElement>;

  // Center Fake scrollbard
  @ViewChild('centerFakeScrollbar')
  centerFakeScrollbar!: ElementRef<HTMLDivElement>;
  updateColumnWidthsAndGroups(columns: any = null) {
    if (!this.dataGridContainer) return;
    const containerWidth = this.dataGridContainer.nativeElement.offsetWidth;

    const { left, center, right }: any = this.columnService.prepareColumns(
      columns ? columns : this.columns,
      containerWidth
    );

    this.leftPinnedColumns = left;
    this.centerColumns = center;
    this.rightPinnedColumns = right;

    console.log('Left groups: ', this.leftPinnedColumns);
    console.log('Left center: ', this.centerColumns);
    console.log('Left right: ', this.rightPinnedColumns);
  }

  refreshPreviewColumns(columns: any = null) {
    if (!this.dataGridContainer) return;
    const containerWidth = this.dataGridContainer.nativeElement.offsetWidth;

    const { left, center, right }: any = this.columnService.prepareColumns(
      columns ? columns : this.columns,
      containerWidth
    );

    this.previewLeftPinnedColumns = left;
    this.previewCenterColumns = center;
    this.previewRightPinnedColumns = right;

    console.log('Left groups: ', this.leftPinnedColumns);
    console.log('Left center: ', this.centerColumns);
    console.log('Left right: ', this.rightPinnedColumns);
  }

  SetColumnsDefaultWidth() {
    const containerWidth = this.dataGridContainer.nativeElement.offsetWidth;
    this.columns = this.columnService.assignDefaultWidths(
      this.columns,
      containerWidth
    );
  }

  setSectionsWidth() {
    const left = document.querySelector('.left-pinned-body') as HTMLElement;
    const center = document.querySelector(
      '.center-scrollable-body'
    ) as HTMLElement;
    const right = document.querySelector('.right-pinned-body') as HTMLElement;
    if (left) {
      left.style.minWidth = `${this.leftPinnedHeader.nativeElement.offsetWidth}`;
    }
    if (center) {
      left.style.minWidth = `${this.centerPinnedHeader.nativeElement.offsetWidth}`;
    }
    if (right) {
      left.style.minWidth = `${this.rightPinnedHeader.nativeElement.offsetWidth}`;
    }
  }

  // onCenterBodyScroll(): void {
  //   const scrollTop = this.centerPinnedBody.nativeElement.scrollTop;
  //   const scrollLeft = this.centerPinnedBody.nativeElement.scrollLeft;

  //   // Sync vertical scroll with left & right pinned bodies
  //   this.leftPinnedBody.nativeElement.scrollTop = scrollTop;
  //   this.rightPinnedBody.nativeElement.scrollTop = scrollTop;

  //   // Sync horizontal scroll with center header
  //   this.centerPinnedHeader.nativeElement.scrollLeft = scrollLeft;
  //   this.centerFakeScrollbar.nativeElement.scrollLeft = scrollLeft;
  // }

  onLeftBodyScroll(): void {
    const scrollTop = this.leftPinnedBody.nativeElement.scrollTop;
    this.centerPinnedBody.nativeElement.scrollTop = scrollTop;
    this.rightPinnedBody.nativeElement.scrollTop = scrollTop;
  }
  onRightBodyScroll(): void {
    const scrollTop = this.rightPinnedBody.nativeElement.scrollTop;
    this.centerPinnedBody.nativeElement.scrollTop = scrollTop;
    this.leftPinnedBody.nativeElement.scrollTop = scrollTop;
  }

  fakeScrollbarScrollLeft = 0;
  onFakeScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.fakeScrollbarScrollLeft = target.scrollLeft;
    this.centerPinnedBody.nativeElement.scrollLeft = target.scrollLeft;
    this.centerPinnedHeader.nativeElement.scrollLeft = target.scrollLeft;
  }

  onCenterHeaderScroll(event: Event) {
    const target = event.target as HTMLElement;
    this.horizintalFakeScroll.nativeElement.scrollLeft = target.scrollLeft;
    this.centerScrollableBody.nativeElement.scrollLeft = target.scrollLeft;
  }

  getNestedValue(obj: any, field: string): any {
    return field.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  onResizeGroup(event: MouseEvent, col: any, isRightPinned?: boolean): void {
    event.preventDefault();
    event.stopPropagation();

    const startX = event.clientX;
    const children = col.children || [];
    if (!children.length) return;

    const childWidths: { field: string; width: number }[] = children.map(
      (child: any) => {
        const el = document.querySelector(
          `[field="${child.field}"]`
        ) as HTMLElement;
        return {
          field: child.field,
          width: el?.offsetWidth || 0,
        };
      }
    );

    const totalInitialWidth = childWidths.reduce(
      (sum, col) => sum + col.width,
      0
    );

    const onMouseMove = (moveEvent: MouseEvent) => {
      let deltaX = moveEvent.clientX - startX;

      if (isRightPinned) {
        deltaX = -deltaX;
      }

      // Prevent shrinking too small
      if (totalInitialWidth + deltaX < children.length * 80) return;

      let totalNewWidth = 0;

      childWidths.forEach((child) => {
        const ratio = child.width / totalInitialWidth;
        const newWidth = Math.max(child.width + deltaX * ratio, 80);
        totalNewWidth += newWidth;

        const childEls = document.querySelectorAll(`[field="${child.field}"]`);
        childEls.forEach((el: Element) => {
          const elHtml = el as HTMLElement;
          elHtml.style.minWidth = `${newWidth}px`;
          elHtml.style.width = `${newWidth}px`;
        });

        this.updateColumnWidthInSourceByField(child.field, newWidth);
      });

      // ✅ Update group header width in DOM
      const groupHeaderEl = document.querySelector(
        `[group="${col.header}"]`
      ) as HTMLElement;
      if (groupHeaderEl) {
        groupHeaderEl.style.width = `${totalNewWidth}px`;
      }
    };

    const onMouseUp = () => {
      this.refreshPreviewColumns();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  private updateColumnWidthInSourceByField(field: string, width: number): void {
    const update = (columns: any[]) => {
      for (const col of columns) {
        if (col.children?.length) {
          update(col.children);
        } else if (col.field === field) {
          col.width = width;
        }
      }
    };

    update(this.columns);
  }

  onResizeColumn(event: MouseEvent, col: any): void {
    event.preventDefault();
    event.stopPropagation();

    const startX = event.clientX;

    const targetEl = document.querySelector(
      `[field="${col.field}"]`
    ) as HTMLElement;
    const initialWidth = targetEl?.offsetWidth || 150;

    const onMouseMove = (moveEvent: MouseEvent) => {
      let deltaX = moveEvent.clientX - startX;

      // 👉 Reverse if the column is pinned to the right
      if (col.pinned == 'right') {
        deltaX = -deltaX;
      }

      let newWidth = initialWidth + deltaX;
      if (newWidth < 80) return;

      const matchingEls = document.querySelectorAll(`[field="${col.field}"]`);
      matchingEls.forEach((el: Element) => {
        const element = el as HTMLElement;
        element.style.minWidth = `${newWidth}px`;
        element.style.width = `${newWidth}px`;
      });

      this.updateColumnWidthInSourceByField(col.field, newWidth);
    };

    const onMouseUp = () => {
      this.refreshPreviewColumns();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  onFilterChange(col: any): void {
    const filterValue = col.filterValue?.toLowerCase() || '';
    // Apply filter to your dataset here (this depends on how your data is structured)
    console.log(`Filtering ${col.field} with: ${filterValue}`);
  }

  // Get Body Height
  get bodyWrapperHeight(): string {
    const rows = this.showColumnsGrouping ? 3 : 2;
    const offset = this.headerRowHeight * rows + 17;
    return `calc(100% - ${offset}px)`;
  }

  // Row Hover Logic Here
  hoveredRowId: string | number | null = null;
  onRowHover(row: any): void {
    this.hoveredRowId = row._id || row.id;
  }

  onRowLeave(): void {
    this.hoveredRowId = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (
      !this.hasParentWithClass(target, [
        'three-dots',
        'filter-icon-wrapper',
        'column-menu',
        'filter-menu',
      ])
    ) {
      this.activeCol = null;
      this.activeFilterCell = null;
    }
  }

  private hasParentWithClass(
    element: HTMLElement,
    classList: string[]
  ): boolean {
    let el: HTMLElement | null = element;

    while (el !== null) {
      if (
        el.classList &&
        classList.some((className) => el!.classList.contains(className))
      ) {
        return true;
      }
      el = el.parentElement;
    }

    return false;
  }

  isMenueHidden = false;
  openThreeDotsMenu(event: MouseEvent, child: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isMenueHidden = true;
    const containerWidth = this.dataGridContainer?.nativeElement?.offsetWidth;
    this.activeCol = child;
    this.activeFilterCell = null;
    const x = event.clientX;
    setTimeout(() => {
      const element = document.querySelector('.column-menu') as HTMLElement;
      if (x > containerWidth / 2) {
        element.style.left = `${x - 240}px`;
      } else {
        element.style.left = `${x}px`;
      }
      this.isMenueHidden = false;
      this.cdr.detectChanges();
    }, 0);
  }
  // ////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////
  // Column Three Dots Actions
  // //////////////////////////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////////////////////////
  sortAsc(col: any) {
    console.log('Sort Ascending', col);
    this.activeCol = null;
  }

  sortDesc(col: any) {
    console.log('Sort Descending', col);
    this.activeCol = null;
  }

  updateColumnPinInSourceByField(
    column: any,
    pinned: 'left' | 'right' | null
  ): void {
    const update = (columns: any[]) => {
      for (const col of columns) {
        if (col.children?.length) {
          update(col.children);
        } else if (col.field === column.field) {
          col.pinned = pinned;
        }
      }
    };
    this.activeCol = null;
    update(this.columns);
    setTimeout(() => {
      this.updateColumnWidthsAndGroups();
      this.refreshPreviewColumns();
      this.cdr.detectChanges();
    }, 0);
  }

  autosizeColumn(cols: any | any[]): void {
    this.activeCol = null;

    // Normalize input to an array
    const columnsToResize = Array.isArray(cols) ? cols : [cols];

    // Helper: Flatten all visible leaf columns
    const getVisibleLeafColumns = (columns: any[]): any[] => {
      const result: any[] = [];
      for (const column of columns) {
        if (column.children && Array.isArray(column.children)) {
          result.push(...getVisibleLeafColumns(column.children));
        } else if (column.is_visible) {
          result.push(column);
        }
      }
      return result;
    };

    const visibleColumns = getVisibleLeafColumns(this.columns);
    const visibleCount = visibleColumns.length;

    if (visibleCount === 0) return;

    const containerWidth =
      this.dataGridContainer?.nativeElement?.offsetWidth ?? 0;
    const equalWidth = Math.floor(containerWidth / visibleCount);

    // Resize each passed column
    for (const col of columnsToResize) {
      if (col && col.field) {
        col.width = equalWidth;
        this.updateColumnWidthInSourceByField(col.field, equalWidth);
      }
    }

    this.updateColumnWidthsAndGroups();
    this.refreshPreviewColumns();
  }

  getGroupWidth(group: any): number {
    return (
      group?.children
        ?.filter((col: any) => col?.is_visible)
        ?.reduce((acc: number, col: any) => acc + (col?.width || 0), 0) || 0
    );
  }

  autosizeAllColumns(): void {
    console.log('Autosize all columns');
    this.activeCol = null;

    const getVisibleLeafColumns = (columns: any[]): any[] => {
      const result: any[] = [];

      for (const column of columns) {
        if (column.children && Array.isArray(column.children)) {
          result.push(...getVisibleLeafColumns(column.children));
        } else if (column.is_visible !== false) {
          result.push(column);
        }
      }

      return result;
    };

    const visibleColumns = getVisibleLeafColumns(this.columns);
    const visibleCount = visibleColumns.length;

    if (visibleCount === 0) return;

    const containerWidth =
      this.dataGridContainer?.nativeElement?.offsetWidth ?? 0;
    const equalWidth = Math.floor(containerWidth / visibleCount);

    // Update widths for all visible columns
    visibleColumns.forEach((col) => {
      col.width = equalWidth;
      this.updateColumnWidthInSourceByField(col.field, equalWidth);
    });

    this.refreshHeaders();
    this.cdr.detectChanges();
  }

  groupBy(col: any) {
    console.log('Group by', col.header);
    this.activeCol = null;
  }

  chooseColumns() {
    console.log('Choose columns clicked');
    this.activeCol = null;
    this.showColumnPanel = true;
  }

  resetColumns() {
    console.log('Reset columns clicked');
    this.activeCol = null;

    this.columns = structuredClone(this.originalColumns);
    this.SetColumnsDefaultWidth();
    setTimeout(() => {
      this.updateColumnWidthsAndGroups();
      this.cdr.detectChanges();
    }, 100);
  }

  clearFilter(col: any) {
    col.firstValue = '';
    col.secondValue = '';
    col.firstCondition = 'contains';
    col.secondCondition = 'contains';
    col.logic = 'AND';
    col.selectAll = false;
    col.selectedOptions = {};
    col.searchValue = '';
  }

  applyFilter(col: any) {
    // Implement filter logic
    console.log('Applying filter for:', col);
  }

  // Rows Selection Logic Goes Here

  selectedRows: Set<string> = new Set();

  /**
   * Get normalized ID from row.
   */
  private getRowId(row: any): string {
    return row.id ?? row._id;
  }

  /**
   * Toggle a single row selection.
   */
  toggleRowSelection(row: any): void {
    const id = this.getRowId(row);
    if (this.selectedRows.has(id)) {
      this.selectedRows.delete(id);
    } else {
      this.selectedRows.add(id);
    }
  }

  toggleSelectAll(data: any[]): void {
    const allIds = this.originalDataSet.map((row) => this.getRowId(row));
    const allSelected = allIds.every((id) => this.selectedRows.has(id));

    if (allSelected) {
      allIds.forEach((id) => this.selectedRows.delete(id));
    } else {
      allIds.forEach((id) => this.selectedRows.add(id));
    }

    this.cdr.detectChanges();
  }

  isRowSelected(row: any): boolean {
    return this.selectedRows.has(this.getRowId(row));
  }

  isAllSelected(data: any[]): boolean {
    return data.every((row) => this.selectedRows.has(this.getRowId(row)));
  }

  // Side Menu Working Goes Here
  toggleSideMenu(clickedOn: 'cols' | 'filtrs') {
    if (this.currentOpenedSideMenue == clickedOn) {
      this.currentOpenedSideMenue = clickedOn;
      this.isShowSideMenu = !this.isShowSideMenu;
    } else if (
      this.isShowSideMenu &&
      clickedOn != this.currentOpenedSideMenue
    ) {
      this.currentOpenedSideMenue = clickedOn;
      return;
    } else {
      this.currentOpenedSideMenue = clickedOn;
      this.isShowSideMenu = !this.isShowSideMenu;
    }
  }

  toggleGroupVisibility(col: any) {
    const allVisible = col.children.every((child: any) => child.is_visible);
    col.children.forEach((child: any) => (child.is_visible = !allVisible));
    setTimeout(() => {
      this.updateColumnWidthsAndGroups();
      this.refreshPreviewColumns();
      this.SetColumnsDefaultWidth();
      this.cdr.detectChanges();
    }, 10);
  }

  isColumnVisible(columns: any) {
    if (columns?.children) {
      return columns.children.every((element: any) => element.is_visible);
    }

    return columns?.is_visible;
  }

  allColumnsSelected(): boolean {
    const flatten = this.flattenColumns(this.columns);
    return flatten.every((col) => col.is_visible);
  }

  toggleAllColumnsVisibility(): void {
    const flatten = this.flattenColumns(this.columns);
    const allSelected = flatten.every((col: any) => col.is_visible);
    flatten.forEach((col: any) => (col.is_visible = !allSelected));
    setTimeout(() => {
      this.updateColumnWidthsAndGroups();
      this.refreshPreviewColumns();
      this.cdr.detectChanges();
    }, 10);
  }

  flattenColumns(cols: any[]): any[] {
    return cols.flatMap((col) =>
      col?.children && col.children.length
        ? this.flattenColumns(col?.children)
        : [col]
    );
  }

  filteredColumns(cols: any[]): any[] {
    const search = this.columnSearch.toLowerCase();
    return cols
      .map((col) => {
        if (col.children) {
          const filteredChildren = this.filteredColumns(col.children);
          if (
            col.header.toLowerCase().includes(search) ||
            filteredChildren.length
          ) {
            return { ...col, children: filteredChildren };
          }
          return null;
        } else {
          return col.header.toLowerCase().includes(search) ? col : null;
        }
      })
      .filter(Boolean);
  }

  get accordionState(): 'all' | 'none' | 'some' {
    const groups = this.getAllGroupColumns(this.columns);
    const expandedCount = groups.filter((col) => col.expanded).length;

    if (expandedCount === 0) return 'none';
    if (expandedCount === groups.length) return 'all';
    return 'some';
  }

  get filterAccordionState(): 'all' | 'none' | 'some' {
    const groups = this.getAllGroupColumns(this.columns);
    const expandedCount = groups.filter((col) => col.expandedFilter).length;

    if (expandedCount === 0) return 'none';
    if (expandedCount === groups.length) return 'all';
    return 'some';
  }

  // Recursively collect all group columns
  private getAllGroupColumns(cols: any[]): any[] {
    let groups: any[] = [];
    for (const col of cols) {
      if (col.children?.length) {
        groups.push(col);
        groups = groups.concat(this.getAllGroupColumns(col.children));
      }
    }
    return groups;
  }

  // Toggle based on current state
  toggleAllAccordions(): void {
    const nextState = this.accordionState === 'all' ? false : true;
    this.setAccordionState(this.columns, nextState);
  }

  toggleAllFilterAccordions(): void {
    const nextState = this.filterAccordionState === 'all' ? false : true;
    this.setFilterAccordionState(this.columns, nextState);
  }

  private setAccordionState(cols: any[], state: boolean): void {
    for (let col of cols) {
      if (col.children?.length) {
        col.expanded = state;
        this.setAccordionState(col.children, state); // Recursively handle nested
      }
    }
  }
  private setFilterAccordionState(cols: any[], state: boolean): void {
    for (let col of cols) {
      if (col.children?.length) {
        col.expandedFilter = state;
        this.setFilterAccordionState(col.children, state); // Recursively handle nested
      }
    }
  }

  showColumnPanel = false;

  closeModalColumnPanel() {
    this.showColumnPanel = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeModalColumnPanel();
  }

  // Check If  Any column have right pinned
  get hasRightPinnedColumns() {
    return this.commonSevice.gethasRightPinnedColumns(this.columns);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.autosizeAllColumns();
    setTimeout(() => {}, 100);
  }

  refreshHeaders() {
    setTimeout(() => {
      this.updateColumnWidthsAndGroups();
      this.refreshPreviewColumns();
    }, 10);
  }

  get hasAnyVisibleColumn() {
    return this.commonSevice.gethasVisibleColumns(this.columns);
  }

  tableHeaderAndBodyHeight() {
    return `calc(100% - ${this.footerRowHeight})`;
  }

  draggingInGroupArea = false;

  @ViewChild('centerScroll') centerScroll!: ElementRef<HTMLDivElement>;
  visibleRowCount = 25;
  startIndex = 0;
  visibleRows: any[] = [];

  private flattenGroupedRows(
    rows: any[],
    level = 0,
    result: any[] = []
  ): any[] {
    for (const row of rows) {
      result.push({ ...row, __depth: level });
      if (row.isGroup && row.isExpand && row.children?.length) {
        this.flattenGroupedRows(row.children, level + 1, result);
      }
    }
    return result;
  }

  updateVisibleRows(scrollTop: number) {
    const flatData = this.flattenGroupedRows(this.dataSet);
    const total = flatData.length;
    const maxFirst = Math.max(0, total - this.viewportRows);
    const first = Math.min(Math.floor(scrollTop / this.rowHeight), maxFirst);
    const start = Math.max(0, first - this.overscan);
    const end = Math.min(total, first + this.viewportRows + this.overscan);

    this.firstIndex = first;
    this.renderStart = start;
    this.visibleRows = this.dataSet.slice(start, end);
    this.cdr.detectChanges();
  }

  trackByRenderedIndex = (i: number, _row: any) => this.renderStart + i;

  private isSyncingFromMain = false;
  private isSyncingFromFake = false;
  private mainScrollRaf: number | null = null;

  trackById(index: number, item: any) {
    return item.id || item._id;
  }

  private flattenedData: any[] = [];

  updateFlattenedData(): void {
    this.flattenedData = this.flattenGroupedRows(this.dataSet);
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 10);
  }

  onMainScroll(event: Event) {
    if (this.isSyncingFromFake) {
      this.isSyncingFromFake = false;
      return;
    }

    const scrollTop = (event.target as HTMLElement).scrollTop;

    if (this.mainScrollRaf) cancelAnimationFrame(this.mainScrollRaf);
    this.mainScrollRaf = requestAnimationFrame(() => {
      this.isSyncingFromMain = true;
      this.fakeScroll.nativeElement.scrollTop = scrollTop;

      this.startIndex = Math.floor(scrollTop / this.rowHeight);
      this.visibleRows = this.flattenedData.slice(
        this.startIndex,
        this.startIndex + this.visibleRowCount
      );
      this.cdr.detectChanges();
    });
  }

  // toggleExpand(row: any) {
  //   row.isExpand = !row.isExpand;
  //   requestAnimationFrame(() => this.updateFlattenedData());
  //   setTimeout(() => {
  //     this.cdr.detectChanges();
  //   }, 10);
  // }

  onMainFakeScroll(event: Event) {
    if (this.isSyncingFromMain) {
      this.isSyncingFromMain = false;
      return;
    }

    const scrollTop = (event.target as HTMLElement).scrollTop;
    if (this.mainScrollRaf) cancelAnimationFrame(this.mainScrollRaf);
    this.mainScrollRaf = requestAnimationFrame(() => {
      this.isSyncingFromMain = true;
      this.mainScroll.nativeElement.scrollTop = scrollTop;

      this.startIndex = Math.floor(scrollTop / this.rowHeight);
      this.visibleRows = this.flattenedData.slice(
        this.startIndex,
        this.startIndex + this.visibleRowCount
      );
      this.cdr.detectChanges();
    });
  }

  overscan = 4; // extra rows above/below for smoothness
  viewportRows = 0; // how many rows fit in viewport (computed)
  firstIndex = 0; // index of the first visible row (clamped)
  renderStart = 0; // where the slice actually starts (firstIndex - overscan, clamped)

  private scrollRaf: number | null = null;
  private pendingScrollTop = 0;

  @ViewChild('mainScroll') mainScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('fakeScroll') fakeScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('horizintalFakeScroll')
  horizintalFakeScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('centerScrollableBody')
  centerScrollableBody!: ElementRef<HTMLDivElement>;
  computeViewportRows() {
    const h = this.mainScroll?.nativeElement?.clientHeight ?? 0;
    this.viewportRows = Math.max(1, Math.ceil(h / this.rowHeight));
  }

  onHorizintalFakeScroll(event: Event) {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;
    this.centerPinnedHeader.nativeElement.scrollLeft = scrollLeft;
    this.centerScrollableBody.nativeElement.scrollLeft = scrollLeft;
  }

  onCenterBodyScroll(event: Event) {
    this.centerPinnedHeader.nativeElement.scrollLeft = (
      event.target as HTMLElement
    ).scrollLeft;
  }

  // Dragging Logic is implemented here
  // private initialIndex: number | null = null;

  draggingColumn: any;
  dragStartIndex: any = 0;
  // onDragStart(data: any, index: number) {
  //   this.draggingColumn = data.column;
  //   this.dragStartIndex = index;
  // }
  // onDragMove(data: any) {
  //   const { clientX, clientY } = data.event;
  //   const headers = Array.from(
  //     document.querySelectorAll('.one-row-header-cells')
  //   ) as HTMLElement[];

  //   headers.forEach((headerEl, idx) => {
  //     const rect = headerEl.getBoundingClientRect();
  //     if (
  //       idx !== this.dragStartIndex &&
  //       clientX > rect.left &&
  //       clientX < rect.right &&
  //       clientY > rect.top &&
  //       clientY < rect.bottom
  //     ) {
  //       const otherIndex = idx;
  //       console.log(`${this.dragStartIndex} --> ${otherIndex}`);
  //       this.swapColumn(this.dragStartIndex, otherIndex);
  //       console.log('Updated Columns: ', this.columns);
  //       this.dragStartIndex = otherIndex; // update index
  //     }
  //   });
  // }

  // swapColumn(previusIndex: number, currentIndex: number) {
  //   const columns = structuredClone(this.columns);
  //   const flattenColumns = this.flattenColumns(columns);

  //   const visibleFlattenColumns = flattenColumns.filter(
  //     (col) => col.is_visible
  //   );
  //   const previusColumn = visibleFlattenColumns[previusIndex];
  //   const currentColumn = visibleFlattenColumns[currentIndex];

  //   console.log('Previus Column: ', previusColumn);
  //   console.log('current clumn: ', currentColumn);
  // }

  // onDragEnd(data: any) {
  //   this.draggingColumn = null;
  //   this.dragStartIndex = null;
  // }

  // CDK DRAG DROP LOGIC GOES HERE

  canEnterToRowsGrouping = (drag: CdkDrag<any>, drop: CdkDropList<any>) => {
    // Example: Block if already pinned left
    const data = drag.data;
    if (data?.children && data?.children.length) {
      return data.children.some(
        (col: any) => col.is_visible && col.isGroupable
      );
    }
    return data.is_visible && data.isGroupable;
  };

  onDragMoved(event: CdkDragMove<any>) {
    const pointerX = event.pointerPosition.x;
    const pointerY = event.pointerPosition.y;

    const targetElement = document.getElementById(
      'rows-grouping-top-container'
    );

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();

      const isOverTarget =
        pointerX >= rect.left &&
        pointerX <= rect.right &&
        pointerY >= rect.top &&
        pointerY <= rect.bottom;

      if (isOverTarget) {
        this.draggingInGroupArea = true;
      } else {
        this.draggingInGroupArea = false;
      }
    }
  }

  enterToTopRowGrouping(dropList: CdkDragEnter<any>) {
    const draggingData = dropList.item.data;
    this.draggingInGroupArea = true;

    // 🟢 Case 1: If draggingData is a parent group
    if (Array.isArray(draggingData?.children)) {
      const targetGroup = this.columns.find(
        (col) => col.header === draggingData.header
      );
      if (targetGroup) {
        draggingData.children.forEach((draggedChild: any) => {
          const matchingChild = targetGroup.children.find(
            (child: any) => child.field === draggedChild.field
          );
          if (matchingChild) {
            matchingChild.isRowGrouped = !!matchingChild.isGroupable;
          }
        });
      }
    }
    // 🟡 Case 2: If draggingData is a direct column
    else {
      // Try finding it in top-level columns first
      let targetColumn = this.columns.find(
        (col: any) => col.field === draggingData.field
      );

      if (targetColumn) {
        targetColumn.isRowGrouped = !!targetColumn.isGroupable;
      } else {
        // 🔴 Case 3: If draggingData is a child column inside a group
        for (let group of this.columns) {
          if (Array.isArray(group.children)) {
            const matchingChild = group.children.find(
              (child: any) => child.field === draggingData.field
            );
            if (matchingChild) {
              matchingChild.isRowGrouped = !!matchingChild.isGroupable;
              break;
            }
          }
        }
      }
    }

    // ✅ Refresh UI
    this.refreshPreviewColumns();
    this.cdr.detectChanges();
  }

  onDropListEnter(
    dropList: CdkDragEnter<any>,
    section: 'left' | 'center' | 'right'
  ) {
    const draggingData = dropList.item.data;

    const targetColumn: any = this.columns.find(
      (col) => col.header == draggingData.header
    );

    if (!targetColumn) return;

    if (
      Array.isArray(draggingData?.children) &&
      Array.isArray(targetColumn?.children)
    ) {
      draggingData.children.forEach((draggedChild: any) => {
        const matchingChild = targetColumn.children.find(
          (child: any) => child.field === draggedChild.field
        );
        if (matchingChild) {
          matchingChild.pinned = section === 'center' ? null : section;
          matchingChild['isRowGrouped'] = false;
        }
      });
    } else {
      targetColumn.pinned = section === 'center' ? null : section;
      targetColumn['isRowGrouped'] = false;
    }

    this.refreshPreviewColumns();
    this.cdr.detectChanges();
  }

  enterToTopGroupingRow(dropList: CdkDragEnter<any>) {
    console.log('Entered Drop List:', dropList);
    this.shouldDisableDroplistSorting = this.isDisableColumnGrouping;
    this.draggingInGroupArea = true;
    // const index = this.groupedColumns.findIndex(
    //   (col) => col.field === column.field
    // );
    // if (index !== -1) {
    //   this.groupedColumns.splice(index, 1);
    // }

    // // 2. Traverse this.columns to find and update the matching column
    // this.columns.forEach((group) => {
    //   if (group?.children && Array.isArray(group.children)) {
    //     group.children.forEach((child) => {
    //       if (child.field === column.field) {
    //         child.isRowGrouped = false;
    //       }
    //     });
    //   } else if (group.field === column.field) {
    //     group.isRowGrouped = false;
    //   }
    // });
    this.cdr.detectChanges();
  }

  exitedFromTheTopRow(dropList: CdkDragExit<any>) {
    console.log('EXITED Drop List:', dropList);
    this.draggingInGroupArea = false;
    this.isDisableColumnGrouping = false;
    this.shouldDisableDroplistSorting = false;
    const draggingData = dropList.item.data;
    if (Array.isArray(draggingData?.children)) {
      const targetGroup = this.columns.find(
        (col) => col.header === draggingData.header
      );
      if (targetGroup) {
        draggingData.children.forEach((draggedChild: any) => {
          const matchingChild = targetGroup.children.find(
            (child: any) => child.field === draggedChild.field
          );
          if (matchingChild) {
            matchingChild.isRowGrouped = false;
          }
        });
      }
    } else {
      let targetColumn = this.columns.find(
        (col: any) => col.field === draggingData.field
      );

      if (targetColumn) {
        targetColumn.isRowGrouped = false;
      } else {
        for (let group of this.columns) {
          if (Array.isArray(group.children)) {
            const matchingChild = group.children.find(
              (child: any) => child.field === draggingData.field
            );
            if (matchingChild) {
              matchingChild.isRowGrouped = false;
              break;
            }
          }
        }
      }
    }
    this.refreshPreviewColumns();
    this.cdr.detectChanges();
  }

  shouldDisableDroplistSorting = false;
  isDisableColumnGrouping = false;
  checkColumnGroupingStatus(col: any) {
    if (col?.children && Array.isArray(col.children)) {
      const allChildrenDisabled = col.children.every(
        (child: any) => child.isGroupable === false
      );
      this.isDisableColumnGrouping = allChildrenDisabled;
    } else {
      this.isDisableColumnGrouping = col.isGroupable === false;
    }
    this.cdr.detectChanges();
    console.log('isDisableColumnGrouping:', this.isDisableColumnGrouping);
  }

  currentDraggingColumn: any = null;
  dragStartOnGroup(col: any) {
    this.currentDraggingColumn = col;
  }

  onSortGroup(
    event: CdkDragSortEvent<any>,
    section: 'left' | 'center' | 'right'
  ) {
    const visibleColumns = this.columns.filter((col) => {
      if (col?.children && Array.isArray(col.children)) {
        return col.children.some((child: any) => child.is_visible);
      }
      return col.is_visible;
    });

    const previusHeader = visibleColumns[event.previousIndex].header;
    const currentHeader = visibleColumns[event.currentIndex].header;

    const visiblePrevIndex = this.columns.findIndex(
      (col) => col.header === previusHeader
    );
    const visibleCurrIndex = this.columns.findIndex(
      (col) => col.header === currentHeader
    );

    moveItemInArray(this.columns, visiblePrevIndex, visibleCurrIndex);
    this.refreshPreviewColumns();
    this.cdr.detectChanges();
  }

  onDropGroup() {
    this.leftPinnedColumns = structuredClone(this.previewLeftPinnedColumns);
    this.centerColumns = structuredClone(this.previewCenterColumns);
    this.rightPinnedColumns = structuredClone(this.previewRightPinnedColumns);
    this.cdr.detectChanges();
  }

  onDropTopGroup(event: CdkDragDrop<any>) {
    const draggedData = event.item.data;
    if (draggedData?.children && Array.isArray(draggedData.children)) {
      draggedData.children.forEach((col: any) => {
        if (col.is_visible && col.isGroupable) {
          this.groupedColumns.push(col);
        }
      });
    } else {
      if (draggedData.is_visible && draggedData.isGroupable) {
        this.groupedColumns.push(draggedData);
      }
    }
    this.draggingInGroupArea = false;
    const fields = this.groupedColumns.map((item) => item.field);
    this.dataSet = this.groupData(this.originalDataSet, fields);
    setTimeout(() => {
      console.log('grouped data: ', this.dataSet);
      this.updateColumnWidthsAndGroups();
      this.refreshPreviewColumns();
      this.updateVisibleRows(0);
    }, 100);
  }

  ungroupColumn(column: any) {
    const index = this.groupedColumns.findIndex(
      (col) => col.field === column.field
    );
    if (index !== -1) {
      this.groupedColumns.splice(index, 1);
    }
    this.columns.forEach((group) => {
      if (group?.children && Array.isArray(group.children)) {
        group.children.forEach((child: any) => {
          if (child.field === column.field) {
            child.isRowGrouped = false;
            const fields = this.groupedColumns.map((item) => item.field);
            this.dataSet = this.groupData(this.originalDataSet, fields);
            setTimeout(() => {
              console.log('grouped data: ', this.originalDataSet);
              this.updateColumnWidthsAndGroups();
              this.refreshPreviewColumns();
              this.updateVisibleRows(0);
            }, 100);
          }
        });
      } else if (group.field === column.field) {
        group.isRowGrouped = false;
        const fields = this.groupedColumns.map((item) => item.field);
        this.dataSet = this.groupData(this.originalDataSet, fields);
        this.updateFlattenedData();
        setTimeout(() => {
          console.log('grouped data: ', this.originalDataSet);
          this.updateColumnWidthsAndGroups();
          this.refreshPreviewColumns();
          this.updateVisibleRows(0);
        }, 100);
      }
    });
  }

  shouldTheGroupHeaderShow(group: any) {
    if (group?.children && group.children.length) {
      return group.children.some(
        (col: any) => col.is_visible && !col?.isRowGrouped
      );
    }
    return group?.is_visible && !group?.isRowGrouped;
  }

  onChildDragStart() {
    debugger;
  }

  dropListIds: string[] = [];

  generateDropListIds() {
    this.dropListIds = [];

    const sectionKeys = [
      'leftPinnedColumns',
      'centerColumns',
      'rightPinnedColumns',
    ];

    sectionKeys.forEach((sectionKey) => {
      const sectionCols = (this as any)[sectionKey];

      this.columns.forEach((col: any, i: number) => {
        if (col?.children?.length > 0) {
          col.children.forEach((child: any, childIndex: number) => {
            if (child?.is_visible && !child.isRowGrouped) {
              const id = `${sectionKey}${i}`;
              this.dropListIds.push(id);
            }
          });
        } else if (col?.is_visible && !col.isRowGrouped) {
          const id = `${sectionKey}${i}`;
          this.dropListIds.push(id);
        }
      });
    });
  }

  onChildDroplistSorted(event: CdkDragSortEvent<any>, section: string) {
    const pinned =
      section == 'leftPinnedColumns'
        ? 'left'
        : section == 'rightPinnedColumns'
        ? 'right'
        : null;
    const column = event.item.data;
    let group = this.columns.find(
      (col: any) =>
        Array.isArray(col.children) &&
        col.children.some((child: any) => child?.field === column?.field)
    );

    const groupIndex = this.columns.findIndex(
      (col) => col.header === group.header
    );

    const filteredGroup = group?.children.filter(
      (col: any) => col?.pinned == pinned && col?.is_visible
    );
    const previusField = filteredGroup[event.previousIndex].field;
    const currentField = filteredGroup[event.currentIndex].field;
    const visiblePreviusIndex = group.children.findIndex(
      (col: any) => col.field == previusField
    );
    const visibleCurrentIndex = group.children.findIndex(
      (col: any) => col.field == currentField
    );
    moveItemInArray(
      this.columns[groupIndex]?.children,
      visiblePreviusIndex,
      visibleCurrentIndex
    );

    setTimeout(() => {
      this.refreshPreviewColumns();
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1);
    }, 10);
    console.group('Group: ', group);
  }

  onChildDroplistDroped(event: CdkDragDrop<any>) {
    this.updateColumnWidthsAndGroups();
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 2);
  }

  // Rows Grouping Logic Goes Here

  groupData(data: any[], groupFields: string[]): any[] {
    let dataSet = structuredClone(data);
    if (!groupFields.length) return data;

    const [currentField, ...restFields] = groupFields;
    const groupedMap = new Map<string, any[]>();

    for (const item of dataSet) {
      const key =
        currentField.split('.').reduce((obj, k) => obj?.[k], item) ?? 'Unknown';

      if (!groupedMap.has(key)) {
        groupedMap.set(key, []);
      }
      groupedMap.get(key)!.push(item);
    }

    // Recursively group the children if more fields remain
    return Array.from(groupedMap.entries()).map(([groupValue, groupItems]) => ({
      isGroup: true,
      groupField: currentField,
      groupValue,
      children: this.groupData(groupItems, restFields), // <-- recursive call
      isExpand: false,
    }));
  }

  countLeafRows(group: any): number {
    if (!group.children || !group.children.length) return 0;

    return group.children.reduce((count: number, child: any) => {
      return count + (child.isGroup ? this.countLeafRows(child) : 1);
    }, 0);
  }
}
