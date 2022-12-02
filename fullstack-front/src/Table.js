import React, { useRef, useState, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
// import TableFilter from "react-table-filter";

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const selectRow = {
  mode: "checkBox",
  // hideSelectColumn: false,
  clickToSelect: true,
  // clickToEdit: true,
  style: { background: "#def3ff" }
};

let superFilter;
let InstitutionFilter;
let mtiFilter;
let txnAmountFilter;

const ClearButton = (props) => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "14px",
        padding: "5px",
        margin: "10px",
        height: "40px",
        marginLeft: "0px"
      }}
    >
      Clear
    </Button>
  );
};

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownData: ""
    };
  }

  changeSelectOptionHandler = (e) => {
    console.log(e.target.value);
    this.setState(e.value);
  };

  columns = [
    {
      dataField: "superInstId",
      text: "Super InstId ",
      sort: true
    },
    {
      dataField: "institutionId",
      text: "Inst Id",
      sort: true
    },
    {
      dataField: "mti",
      text: "MTI",
      sort: true
    },
    {
      dataField: "txnAmount",
      text: "TxnAmount",
      sort: true
    },
    {
      dataField: "txnProcessedBy",
      text: "TxnProcessedBy",
      sort: true
    },
    {
      dataField: "txnCurrencyCode",
      text: "TxnCurrencyCode",
      sort: true
    },
    {
      dataField: "txnType",
      text: "TxnType",
      sort: true
    },
    {
      dataField: "responseCode",
      text: "ResponseCode",
      sort: true
    },
    {
      dataField: "responseDescription",
      text: "ResponseDescription",
      sort: true
    },
    {
      dataField: "responseReceivedTime",
      text: "ResponseReceivedTime",
      sort: true
    }
  ];

  clearAllFilter() {
    superFilter("");
    InstitutionFilter("");
    mtiFilter("");
    txnAmountFilter("");
  }

  products = [
    {
      bin: null,
      institutionId: "0001",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "System under maintenance - Decommission",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0001",
      txnAmount: "$10000.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0002",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Incorrect PIN",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0002",
      txnAmount: "$1000.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0003",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Incorrect PIN",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0003",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0004",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0004",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0005",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0005",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0006",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0006",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0007",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0007",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0008",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0008",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0009",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0009",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0010",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0010",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0011",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0011",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0012",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0012",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0013",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0013",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0014",
      mti: "0200",
      requestRRN: null,
      responseCode: "05",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0014",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    },
    {
      bin: null,
      institutionId: "0015",
      mti: "0200",
      requestRRN: null,
      responseCode: "06",
      responseDescription: "Completed Successfully",
      responseReceivedTime: "2022-10-13 15:59:06.987",
      srcChannelType: "0",
      stan: null,
      superInstId: "0015",
      txnAmount: "$100.  ",
      txnCurrencyCode: "756",
      txnDate: null,
      txnProcessedBy: "S",
      txnTime: null,
      txnType: "0 "
    }
  ];

  render() {
    return (
      <div>
        <ToolkitProvider
          bootstrap4
          keyField="superInstId"
          data={this.products}
          columns={this.columns}
          search
          exportCSV
        >
          {(props) => (
            <div>
              <SearchBar
                {...props.searchProps}
                style={{ width: "300px", height: "40px" }}
              />
              <ClearButton
                {...props.searchProps}
                clearAllFilter={this.clearAllFilter}
              />
              <ExportCSVButton
                {...props.csvProps}
                className="btn btn-success"
                style={{ marginLeft: "52rem" }}
              >
                Export CSV
              </ExportCSVButton>
              <BootstrapTable
                {...props.baseProps}
                filter={filterFactory()}
                noDataIndication="There is no data"
                condensed
                selectRow={selectRow}
                pagination={paginationFactory({ sizePerPage: 5 })}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;
