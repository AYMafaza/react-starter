export interface IWorkspace {
    Id: number;
    Name: string;
    Views: Array<string>;
}

export class Workspace implements IWorkspace {
    Id: number;
    Name: string;
    Views: Array<string>;

    constructor(model: IWorkspace) {
      this.Id = model.Id;
      this.Name = model.Name;
      this.Views = model.Views;
    }

    AddView(name: string) {
      this.Views.push(name);
    }
}

export class WorkspaceRepository {
    MockWorkspace: Workspace;

    constructor() {
      this.MockWorkspace = new Workspace({ Id: 100, Name: 'Default Workspace', Views: [] });
      this.MockWorkspace.AddView('TR');
      this.MockWorkspace.AddView('TR');
      this.MockWorkspace.AddView('TR');
      this.MockWorkspace.AddView('TR');
    }

    getDefault() {
      return this.MockWorkspace;
    }
}
