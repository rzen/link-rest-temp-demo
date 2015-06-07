Ext.define('Builder.view.config.grid.Flavor', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_flavor_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_name'
		}, {
			xtype: 'config_column_code'
		}, {
			xtype: 'templatecolumn',
			header: 'Feature',
			dataIndex: 'feature_id',
			tpl: '{feature.name}',
			editor: {
				xtype: 'combo',
				bind: {
					store: '{features}'
				},
				valueField: 'id',
				displayField: 'name'
			}
		}
	]
});