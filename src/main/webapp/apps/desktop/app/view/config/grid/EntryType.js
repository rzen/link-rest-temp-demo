Ext.define('Builder.view.config.grid.EntryType', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_entrytype_grid',

	columns: [
		{
			width: 40,
			header: 'Id',
			dataIndex: 'id',
			editor: 'numberfield'
		}, {
			header: 'Code',
			dataIndex: 'name',
			editor: 'textfield'
		}, {
			header: 'Name',
			dataIndex: 'name',
			editor: 'textfield'
		}
	]
});