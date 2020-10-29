import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IBanco {
  id: number;
  codigo: string;
  nome: string;
  url: string;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface IBancoResponse {
  content: IBanco[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  sort: Sort2;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

@Injectable({ providedIn: 'root' })
export class BancoService {
  constructor(private http: HttpClient) { }

  getBancos(pageSize: number = 10, currentPage: number = 0, orderBy: string = 'id') {
    const url = environment.apiUrl + '/banco/page';
    let params = new HttpParams();
    params = params.append('linesPerPage', pageSize + '');
    params = params.append('page', currentPage + '');
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { params })
      .pipe(
        map((res: IBancoResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  insert(obj: IBanco) {
    const url = environment.apiUrl + '/banco';
    return this.http.post(url, obj, {
      observe: 'response',
      responseType: 'text'
    });
  }



}
