Ext.define('Builder.view.config.grid.Account', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_account_grid',

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