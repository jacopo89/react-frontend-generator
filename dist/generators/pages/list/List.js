import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { getComparator, stableSort } from "../utils/ListPageGeneratorUtils";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonsHorizontalList from "../../../rendering/components/buttons/ButtonsHorizontalList";
import TablePagination from "@material-ui/core/TablePagination";
import { SimpleTableToolbar } from "./listHelpers/SimpleToolbar";
import Tooltip from "@material-ui/core/Tooltip";
import { OperationButtonFactory } from "./listHelpers/OperationButtonFactory";
import { EnhancedTableHead } from "../ListPageGenerator";
/*
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));
*/
export function GenericList({ data: rows, totalItems, page, setPage, selected = [], setSelected, title, itemOperations = [], collectionOperations = [], headCells, columns, allColumns, setTable }) {
    headCells = (itemOperations.length !== 0) ? headCells.concat({ numeric: true, disablePadding: false, label: "Actions" }) : headCells;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };
    const handleChangePage = (event, newPage) => setPage(newPage);
    const isSelected = (name) => selected.indexOf(name) !== -1;
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs(Paper, { children: [_jsx(SimpleTableToolbar, { numSelected: selected.length, title: title, collectionOperations: collectionOperations, setTable: setTable, allColumns: allColumns }, void 0), _jsx(TableContainer, { children: _jsxs(Table, Object.assign({ "aria-labelledby": "tableTitle", size: dense ? 'small' : 'medium', "aria-label": "enhanced table" }, { children: [_jsx(EnhancedTableHead, { numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: handleSelectAllClick, onRequestSort: handleRequestSort, rowCount: rows.length, headCells: headCells }, void 0), _jsx(TableBody, { children: stableSort(rows, getComparator(order, orderBy))
                                        .slice(0, rowsPerPage)
                                        .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (_jsxs(TableRow, Object.assign({ hover: true, 
                                            //onClick={(event) => handleClick(event, row.id)}
                                            role: "checkbox", "aria-checked": isItemSelected, tabIndex: -1, selected: isItemSelected }, { children: [_jsx(TableCell, Object.assign({ padding: "checkbox", id: labelId }, { children: _jsx(Checkbox, { checked: isItemSelected, onClick: (event) => handleClick(event, row.id), inputProps: { 'aria-labelledby': labelId } }, void 0) }), void 0), columns(row).map((column, localIndex) => _jsx(TableCell, { children: column }, localIndex)), _jsx(TableCell, Object.assign({ align: "right" }, { children: _jsx(ButtonsHorizontalList, { children: itemOperations.map((operation) => {
                                                            operation.onClick = () => operation.onClick(row);
                                                            return _jsx(Tooltip, Object.assign({ title: operation.text }, { children: OperationButtonFactory.getOperationButton(operation) }), void 0);
                                                        }) }, void 0) }), void 0)] }), index));
                                    }) }, void 0)] }), void 0) }, void 0), _jsx(TablePagination, { component: "div", count: totalItems, rowsPerPage: rowsPerPage, rowsPerPageOptions: [30], page: page, onChangePage: handleChangePage }, void 0)] }, void 0) }, void 0) }, void 0));
}
