Ext.define('Builder.view.Stream', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_stream_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_name'
		}, {
			xtype: 'config_column_code'
		}
	]
})