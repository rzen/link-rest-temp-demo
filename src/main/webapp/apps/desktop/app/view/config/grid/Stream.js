Ext.define('Builder.view.Stream', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_stream_grid',

	columns: [
		{
			width: 40,
			header: 'Id',
			dataIndex: 'id',
			editor: 'numberfield'
		}, {
			header: 'Code',
			dataIndex: 'code',
			editor: 'textfield'
		}, {
			header: 'Name',
			dataIndex: 'name',
			editor: 'textfield'
		}
	]
})