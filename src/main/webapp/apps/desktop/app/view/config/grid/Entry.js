Ext.define('Builder.view.config.grid.Entry', {
	extend: 'Builder.view.config.grid.Base',

	xtype: 'config_entry_grid',

	columns: [
		{
			xtype: 'config_column_id'
		}, {
			xtype: 'config_column_name'
		}, {
			header: 'Value',
			dataIndex: 'value',
			editor: 'textfield'
		}, {
			xtype: 'templatecolumn',
			header: 'Part',
			dataIndex: 'part_id',
			tpl: '{part.name}',
			editor: {
				xtype: 'combo',
				bind: {
					store: '{parts}'
				},
				valueField: 'id',
				displayField: 'name'
			}
		}, {
			xtype: 'templatecolumn',
			header: 'Type',
			dataIndex: 'entryType_id',
			tpl: '{entryType.name}',
			editor: {
				xtype: 'combo',
				bind: {
					store: '{entryTypes}'
				},
				valueField: 'id',
				displayField: 'name'
			}
		}
	]
});