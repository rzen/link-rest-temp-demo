Ext.define('Builder.view.config.grid.Feature', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_feature_grid',

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
			header: 'Feature',
			dataIndex: 'feature',
			editor: 'textfield'
		}, {
			header: 'Stream',
			dataIndex: 'stream',
			editor: 'textfield'
		}
	]
})