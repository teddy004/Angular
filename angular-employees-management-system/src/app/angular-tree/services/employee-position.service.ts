import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree-model';

const API_URL = 'http://localhost:3000/TreeModels';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {
  constructor(private http: HttpClient) {}

  getAllPositions(): Observable<TreeModel[]> {
    return this.http.get<TreeModel[]>(API_URL);
  }

  getPositionById(id: number): Observable<TreeModel> {
    return this.http.get<TreeModel>(`${API_URL}/${id}`);
  }

  updatePosition(position: TreeModel): Observable<TreeModel> {
    return this.http.put<TreeModel>(`${API_URL}/${position.id}`, position);
  }

  deletePosition(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
