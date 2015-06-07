Ext.define('Builder.view.config.grid.Feature', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_feature_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_active'
		}, {
			xtype: 'config_column_name'
		}, {
			xtype: 'config_column_code'
		}
	]
})