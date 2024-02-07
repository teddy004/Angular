import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { TreeModel } from '../models/tree-model';
import { EmployeePositionService } from '../services/employee-position.service';

export class GetAllPositions {
  static readonly type = '[TreeModel] Get All Positions';
}

export class UpdatePosition {
  static readonly type = '[TreeModel] Update Position';
  constructor(public payload: TreeModel) {}
}

export class DeletePosition {
  static readonly type = '[TreeModel] Delete Position';
  constructor(public id: number) {}
}

@State<TreeModel[]>({
  name: 'TreeModels',
  defaults: []
})
export class TreeModelState {
  constructor(private positionService: EmployeePositionService) {}

  @Selector()
  static getAllTreeModels(state: TreeModel[]): TreeModel[] {
    return state;
  }

  @Action(GetAllPositions)
  getAll(ctx: StateContext<TreeModel[]>) {
    return this.positionService.getAllPositions().pipe(
      tap((positions) => {
        ctx.setState(positions);
      })
    );
  }

  @Action(UpdatePosition)
  update(ctx: StateContext<TreeModel[]>, action: UpdatePosition) {
    return this.positionService.updatePosition(action.payload).pipe(
      tap(() => {
        const state = ctx.getState();
        const updatedPositions = state.map((pos) =>
          pos.id === action.payload.id ? action.payload : pos
        );
        ctx.setState(updatedPositions);
      })
    );
  }

  @Action(DeletePosition)
  delete(ctx: StateContext<TreeModel[]>, action: DeletePosition) {
    return this.positionService.deletePosition(action.id).pipe(
      tap(() => {
        const state = ctx.getState();
        const updatedPositions = state.filter((pos) => pos.id !== action.id);
        ctx.setState(updatedPositions);
      })
    );
  }
}
