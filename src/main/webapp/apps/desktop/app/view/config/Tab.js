Ext.define('Builder.view.config.Tab', {
	extend: 'Ext.container.Container',
	
	xtype: 'config_tab',
	
	controller: 'config',
	viewModel: {
		type: 'config'
	},

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	defaults: {
		padding: 5,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		flex: 1,
		defaults: {
			border: true,
			padding: 5,
			flex: 3
		}
	},

	items: [
		{
			items: [
				{
					title: 'Features',
					xtype: "config_feature_grid",
					bind: "{features}"
				}, {
					title: 'Entries',
					xtype: "config_entry_grid",
					bind: "{entries}"
				}
			]
		}, {
			items: [
				{
					flex: 2,
					title: 'Parts',
					xtype: "config_part_grid",
					bind: "{parts}"
				}, {
					title: 'Entry Types',
					xtype: "config_entrytype_grid",
					bind: "{entryTypes}"
				}, {
					title: 'Streams',
					xtype: "config_stream_grid",
					bind: "{streams}"
				}, {
					flex: 4,
					title: 'Flavor',
					xtype: "config_flavor_grid",
					bind: "{flavors}"
				}
			]
		}
		
	]
});