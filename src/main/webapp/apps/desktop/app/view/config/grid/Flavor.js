Ext.define('Builder.view.config.grid.Flavor', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_flavor_grid',

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
		}, {
			header: 'Feature',
			dataIndex: 'feature_id',
			editor: {
				xtype: 'combo',
				bind: '{futures}',
				valueField: 'id',
				displayField: 'name'
			}
		}
	]
});