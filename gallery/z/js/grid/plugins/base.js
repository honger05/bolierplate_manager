/**
* @fileOverview 表格插件的入口
* @author dxq613@gmail.com, yiminghe@gmail.com
* @ignore
*/
var BASE = './';
var BUI = require('../../common/common'),
	Selection = require(BASE + 'selection'),

	Plugins = {};

	BUI.mix(Plugins,{
		CheckSelection : Selection.CheckSelection,
		RadioSelection : Selection.RadioSelection,
		Cascade : require(BASE + 'cascade'),
		CellEditing : require(BASE + 'cellediting'),
		RowEditing : require(BASE + 'rowediting'),
		DialogEditing : require(BASE + 'editing'),
		AutoFit : require(BASE + 'autofit'),
		GridMenu : require(BASE + 'gridmenu'),
		Summary : require(BASE + 'summary'),
		RowNumber : require(BASE + 'rownumber'),
		ColumnGroup : require(BASE + 'columngroup'),
		RowGroup : require(BASE + 'rowgroup'),
		ColumnResize : require(BASE + 'columnresize')
	});

module.exports = Plugins;
