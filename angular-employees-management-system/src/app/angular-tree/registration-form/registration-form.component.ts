
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from '../actions/app.action';
import { Appstate as Apostate } from '../states/app.state';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  userForm: FormGroup | null = null;
  employees: any[] = [];
  showRegistrationForm: boolean = false;

  private initializeForm(): void {
    this.userForm = this.fb.group({
      id: [Number],
      name: ['', Validators.required],
      position: ['', Validators.required],
      parent: [null]
    });
  }

  editIndex: number | null = null;
  @Select(Apostate.selectStateData) employees$!: Observable<any>;
  isSubmitting = false;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchUsersData();
  }



  private fetchUsersData(): void {
    this.store.dispatch(new GetUsers());
    this.employees$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((returnData) => {
        this.employees = returnData;
      });
  }



  addUser() {
    if (this.userForm && this.userForm.valid) {

      if (!this.isSubmitting) {
        this.isSubmitting = true;
        const newUser = this.userForm.value;
        this.store.dispatch(new AddUser(newUser)).subscribe(
          () => {

            this.userForm!.reset();
            this.isSubmitting = false;
          },
          (error) => {
            console.error('Error occurred during form submission:', error);
            this.isSubmitting = false;
          }
        );
      }

    }
  }

  editUser(i: number) {
    this.editIndex = i;
    const userToEdit = this.employees[i];
    this.userForm!.patchValue({
      id: userToEdit.id,
      name: userToEdit.name,
      position: userToEdit.position,
      parent: userToEdit.parentId
    });

  }

  updateUser() {
    if (this.editIndex !== null) {
      const updatedIndex = this.editIndex;
      const newData = {
        id: this.userForm!.get('id')?.value,
        name: this.userForm!.get('name')?.value,
        position: this.userForm!.get('position')?.value,
        parent: this.userForm!.get('parentId')?.value
      };
      this.store.dispatch(new UpdateUser(newData, updatedIndex, newData.id)).subscribe();
      this.editIndex = null;
      this.userForm!.reset();
    }

  }

  deleteUser(i: number) {
    this.store.dispatch(new DeleteUser(i));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
