Ext.define('Builder.view.config.grid.EntryType', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_entrytype_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_name'
		}, {
			xtype: 'config_column_code'
		}
	]
});