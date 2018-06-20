import { Component, OnInit } from '@angular/core';
import { data } from '../assets/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // data = data;
  data;
  appGroup;
  constructor(private _http: HttpClient) {}
  ngOnInit() {
    this.getPermissionInfo();
  }

  getPermissionInfo() {
    this._http.get('../assets/flatlist.json').subscribe((res: any) => {
      this.appGroup = res.appgroup;
    });
  }

  changed(selectedScope, allScopes) {
    if (selectedScope.isAssigned) {
      selectedScope.dependents.forEach(depId => {
        const dep = allScopes.find(s => s.id === depId);
        dep.isAssigned = true;
      });
    }
  }
}
