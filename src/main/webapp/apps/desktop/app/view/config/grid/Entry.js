Ext.define('Builder.view.config.grid.Entry', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_entry_grid',

	columns: [
		{
			width: 40,
			header: 'Id',
			dataIndex: 'id',
			editor: 'numberfield'
		}, {
			header: 'Name',
			dataIndex: 'name',
			editor: 'textfield'
		}, {
			header: 'Value',
			dataIndex: 'value',
			editor: 'textfield'
		}
	]
});