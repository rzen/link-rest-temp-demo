Ext.define('Builder.view.config.grid.Part', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_part_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_name'
		}
	]
});