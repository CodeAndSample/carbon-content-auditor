import Papa from "papaparse";
import React from "react";

export interface IAppProps {}

export interface IAppState {
  csvfile: any;
}

export default class App extends React.Component<IAppProps, IAppState> {
  filesInput: HTMLInputElement | null | undefined;
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      csvfile: undefined,
    };
    this.updateData = this.updateData.bind(this);
  }
  handleChange = (event: any) => {
    this.setState({
      csvfile: event.target.files[0],
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
    });
  };

  updateData(result: { data: any }) {
    var data = result.data;
    console.log(data);
  }

  public render() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={(input) => {
            this.filesInput = input;
          }}
          name="file"
          placeholder="Test"
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }
}
