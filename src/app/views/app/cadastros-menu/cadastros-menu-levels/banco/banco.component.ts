import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { IBanco } from 'src/services/banco.service';
import { BancoService } from 'src/services/banco.service';
import { BancoModalComponent } from '../banco-modal/banco-modal.component';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html'
})
export class BancoComponent implements OnInit {
  displayMode = 'list';
  selectAllState = '';
  selected: IBanco[] = [];
  data: IBanco[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  search = '';
  orderBy = 'id';
  isLoading: boolean;
  endOfTheList = false;
  totalItem = 0;
  totalPage = 0;
  itemOrder = { label: 'Nome do Banco', value: 'nome' };
  itemOptionsOrders = [{ label: 'Código do Banco', value: 'codigo' }, { label: 'Nome do Banco', value: 'nome' }, { label: 'Url do Banco', value: 'url' }];
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: BancoModalComponent;

  constructor(private hotkeysService: HotkeysService, private bancoService: BancoService) {
    this.hotkeysService.add(new Hotkey('ctrl+a', (event: KeyboardEvent): boolean => {
      this.selected = [...this.data];
      return false;
    }));
    this.hotkeysService.add(new Hotkey('ctrl+d', (event: KeyboardEvent): boolean => {
      this.selected = [];
      return false;
    }));
  }

  ngOnInit() {
    this.loadData(this.itemsPerPage, this.currentPage, this.search, this.orderBy);
  }

  loadData(pageSize: number = 5, currentPage: number = 0, search: string = '', orderBy: string = 'id') {
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    this.orderBy = orderBy;

    this.bancoService.getBancos(pageSize, currentPage, orderBy).subscribe(
      data => {
        if (!data.empty) {
          this.isLoading = false;
          this.data = data.content;
          this.totalItem = data.totalElements;
          this.totalPage = data.totalPages;
          this.setSelectAllState();
        } else {
          this.endOfTheList = true;
        }
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }


  showAddNewModal() {
    this.addNewModalRef.show();
  }

  isSelected(p: IBanco) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: IBanco) {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState() {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAllChange($event) {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }

  pageChanged(event: any): void {
    this.loadData(this.itemsPerPage, event.page, this.search, this.orderBy);
  }

  itemsPerPageChange(perPage: number) {
    this.loadData(perPage, 1, this.search, this.orderBy);
  }

  changeOrderBy(item: any) {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  searchKeyUp(event) {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val, this.orderBy);
  }

  onContextMenuClick(action: string, item: IBanco) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.nome);
  }
}
