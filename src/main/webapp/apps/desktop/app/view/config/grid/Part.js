Ext.define('Builder.view.config.grid.Part', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_part_grid',

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
		}
	]
});