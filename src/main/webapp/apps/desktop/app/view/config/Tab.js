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
		flex: 1,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		defaults: {
			padding: 5,
			flex: 1
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
					title: 'Entry Types',
					xtype: "config_entrytype_grid",
					bind: "{entryTypes}"
				}, {
					title: 'Accounts',
					xtype: "config_account_grid",
					bind: "{accounts}"
				}
			]
		}, {
			items: [
				{
					title: 'Parts',
					xtype: "config_part_grid",
					bind: "{parts}"
				}, {
					title: 'Streams',
					xtype: "config_stream_grid",
					bind: "{streams}"
				}, {
					flex: 2,
					title: 'Flavor',
					xtype: "config_flavor_grid",
					bind: "{flavors}"
				}
			]
		}
		
	]
});