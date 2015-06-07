Ext.define('Builder.view.config.column.Name', {
	extend: 'Ext.grid.column.Column',

	xtype: 'config_column_name',

	flex: 1,
	header: 'Name',
	dataIndex: 'name',
	editor: 'textfield'
});