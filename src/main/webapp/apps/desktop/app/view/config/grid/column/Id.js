Ext.define('Builder.view.config.column.Id', {
	extend: 'Ext.grid.column.Column',

	xtype: 'config_column_id',

	width: 40,
	header: 'ID',
	dataIndex: 'id',
	editor: 'numberfield'
});