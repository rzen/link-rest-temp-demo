Ext.define('Builder.view.config.column.Active', {
	extend: 'Ext.grid.column.Template',

	xtype: 'config_column_active',

	dataIndex: 'active',
	width: 40,
	editor: { xtype: 'checkbox' },
	tpl: [
		'<tpl for=".">',
			'<tpl if="active">',
				'<span class="badge active" data-qtip="Active"></span>',
			'<tpl else>',
				'<span class="badge inactive" data-qtip="Inactive"></span>',
			'</tpl>',
		'</tpl>'
	]
});