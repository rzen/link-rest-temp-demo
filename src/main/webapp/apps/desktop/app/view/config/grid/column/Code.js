Ext.define('Builder.view.config.column.Code', {
	extend: 'Ext.grid.column.Column',

	xtype: 'config_column_code',

	width: 80,
	header: 'Code',
	dataIndex: 'code',
	editor: 'textfield'
});